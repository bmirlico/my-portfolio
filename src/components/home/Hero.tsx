import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
	const scrollToSection = (href: string) => {
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section
			id="hero"
			className="pt-8 md:pt-12 pb-20 md:pb-28 relative overflow-hidden"
		>
			{/* Background decoration */}
			<div className="absolute inset-0 -z-10">
				<div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
				<div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
			</div>

			<div className="container-custom">
				<div className="max-w-3xl mx-auto text-center">
					{/* Avatar */}
					<div className="mb-6 animate-fade-up opacity-0 stagger-1">
						<img
							src="/profile.jpeg"
							alt="Bastien Mirlicourtois"
							className="w-24 h-24 md:w-28 md:h-28 rounded-full mx-auto object-cover ring-4 ring-primary/20 shadow-lg"
						/>
					</div>

					{/* Main heading */}
					<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-up opacity-0 stagger-2">
						Hi, I'm{" "}
						<span className="text-gradient whitespace-nowrap">
							Bastien Mirlicourtois
						</span>
					</h1>

					{/* Subtitle */}
					<p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-up opacity-0 stagger-3">
						An{" "}
						<span className="text-foreground font-medium">
							ex-strategy consultant
						</span>{" "}
						turned{" "}
						<span className="text-foreground font-medium">
							fullstack developer
						</span>{" "}
						as well as{" "}
						<span className="text-foreground font-medium">
							technical writer
						</span>{" "}
						crafting modern web experiences. I love building products that make
						a difference and sharing knowledge through code and writing.
					</p>

					{/* CTA buttons */}
					<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up opacity-0 stagger-4">
						<Button
							size="lg"
							className="rounded-full px-8 group"
							onClick={() => scrollToSection("#projects")}
						>
							View My Work
							<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
						</Button>
						<Button
							variant="outline"
							size="lg"
							className="rounded-full px-8"
							asChild
						>
							<a href="/Bastien_Mirlicourtois_CV.pdf" download>
								<Download className="mr-2 h-4 w-4" />
								Download CV
							</a>
						</Button>
					</div>

					{/* Social links */}
					<div className="flex items-center justify-center gap-4 animate-fade-up opacity-0 stagger-5">
						<a
							href="https://github.com/bmirlico"
							target="_blank"
							rel="noopener noreferrer"
							className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200"
						>
							<Github className="h-5 w-5" />
						</a>
						<a
							href="https://www.linkedin.com/in/bastien-mirlicourtois/"
							target="_blank"
							rel="noopener noreferrer"
							className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200"
						>
							<Linkedin className="h-5 w-5" />
						</a>
						<a
							href="https://x.com/bmirlico"
							target="_blank"
							rel="noopener noreferrer"
							className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200"
						>
							<svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
								<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
							</svg>
						</a>
					</div>
				</div>

				{/* Scroll indicator */}
				<div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
					<div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
						<div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
					</div>
				</div>
			</div>
		</section>
	);
};
