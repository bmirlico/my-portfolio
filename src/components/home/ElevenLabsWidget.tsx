import { useConversation } from "@elevenlabs/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Mic, Phone, PhoneOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Orb } from "@/components/ui/orb";
import type { AgentState } from "@/components/ui/orb";
import { useIsMobile } from "@/hooks/use-mobile";
import { useToast } from "@/hooks/use-toast";

const ELEVENLABS_AGENT_ID: string = import.meta.env.VITE_ELEVENLABS_AGENT_ID;
const ELEVENLABS_PHONE_NUMBER = import.meta.env.VITE_ELEVENLABS_PHONE_NUMBER;

export const ElevenLabsWidget = () => {
	const isMobile = useIsMobile();
	const { toast } = useToast();
	const [isStarting, setIsStarting] = useState(false);

	const conversation = useConversation({
		onConnect: () => {
			toast({
				title: "Connected",
				description: "AI assistant is ready. Start speaking!",
			});
		},
		onDisconnect: () => {
			toast({
				title: "Disconnected",
				description: "Conversation ended.",
			});
		},
		onError: (error) => {
			console.error("ElevenLabs error:", error);
			toast({
				title: "Connection Error",
				description:
					"Could not connect to AI assistant. Please try again.",
				variant: "destructive",
			});
		},
	});

	const conversationRef = useRef(conversation);
	conversationRef.current = conversation;

	useEffect(() => {
		return () => {
			if (conversationRef.current.status === "connected") {
				conversationRef.current.endSession();
			}
		};
	}, []);

	const startConversation = useCallback(async () => {
		if (isStarting) return;
		setIsStarting(true);
		try {
			await navigator.mediaDevices.getUserMedia({ audio: true });
			await conversation.startSession({
				agentId: ELEVENLABS_AGENT_ID,
				connectionType: "webrtc",
			});
		} catch (error) {
			console.error("Failed to start conversation:", error);
			toast({
				title: "Microphone Access Required",
				description:
					"Please allow microphone access to talk with the AI assistant.",
				variant: "destructive",
			});
		} finally {
			setIsStarting(false);
		}
	}, [conversation, isStarting, toast]);

	const stopConversation = useCallback(async () => {
		await conversation.endSession();
	}, [conversation]);

	const isConnected = conversation.status === "connected";

	const agentState: AgentState = !isConnected
		? null
		: conversation.isSpeaking
			? "talking"
			: "listening";

	// Mobile: render a tel: link
	if (isMobile) {
		return (
			<Button
				variant="outline"
				size="lg"
				className="rounded-full px-8"
				asChild
			>
				<a href={`tel:${ELEVENLABS_PHONE_NUMBER}`}>
					<Phone className="mr-2 h-4 w-4" />
					Call My AI
				</a>
			</Button>
		);
	}

	// Desktop: idle state
	if (!isConnected) {
		return (
			<Button
				variant="outline"
				size="lg"
				className="rounded-full px-8 border-primary/50 hover:bg-primary hover:text-primary-foreground"
				onClick={startConversation}
				disabled={isStarting}
			>
				<Mic className="mr-2 h-4 w-4" />
				{isStarting ? "Connecting..." : "Talk to My AI"}
			</Button>
		);
	}

	// Desktop: active conversation
	return (
		<div className="glass-card rounded-2xl p-4 flex items-center gap-4 animate-scale-in w-full max-w-md mx-auto">
			<div className="w-20 h-20 flex-shrink-0 rounded-full overflow-hidden relative">
				{/* CSS fallback while Three.js initializes */}
				<div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse" />
				<Orb
					agentState={agentState}
					colors={["#2dd4a8", "#14b8a6"]}
					className="relative w-full h-full"
				/>
			</div>

			<div className="flex-1 text-left min-w-0">
				<p className="text-sm font-medium">
					{conversation.isSpeaking
						? "AI is speaking..."
						: "Listening..."}
				</p>
				<p className="text-xs text-muted-foreground">
					{conversation.isSpeaking
						? "The assistant is responding"
						: "Speak your question"}
				</p>
			</div>

			<Button
				variant="destructive"
				size="icon"
				className="rounded-full flex-shrink-0"
				onClick={stopConversation}
			>
				<PhoneOff className="h-4 w-4" />
			</Button>
		</div>
	);
};
