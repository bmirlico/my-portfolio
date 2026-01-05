import { useEffect, useRef } from "react";

// Custom icons for tools not in devicons
const CursorIcon = ({ className }: { className?: string }) => (
	<svg className={className} viewBox="400 395 167 190" fill="currentColor">
		<path d="M563.463 439.971L487.344 396.057C484.899 394.646 481.883 394.646 479.439 396.057L403.323 439.971C401.269 441.156 400 443.349 400 445.723V534.276C400 536.647 401.269 538.843 403.323 540.029L479.443 583.943C481.887 585.353 484.903 585.353 487.347 583.943L563.466 540.029C565.521 538.843 566.79 536.651 566.79 534.276V445.723C566.79 443.352 565.521 441.156 563.466 439.971H563.463ZM558.681 449.273L485.199 576.451C484.703 577.308 483.391 576.958 483.391 575.966V492.691C483.391 491.027 482.501 489.488 481.058 488.652L408.887 447.016C408.03 446.52 408.38 445.209 409.373 445.209H556.337C558.424 445.209 559.728 447.47 558.685 449.276H558.681V449.273Z" />
	</svg>
);

const ClaudeIcon = ({ className }: { className?: string }) => (
	<svg className={className} viewBox="0 0 16 16" fill="#D97757">
		<path d="m3.127 10.604 3.135-1.76.053-.153-.053-.085H6.11l-.525-.032-1.791-.048-1.554-.065-1.505-.08-.38-.081L0 7.832l.036-.234.32-.214.455.04 1.009.069 1.513.105 1.097.064 1.626.17h.259l.036-.105-.089-.065-.068-.064-1.566-1.062-1.695-1.121-.887-.646-.48-.327-.243-.306-.104-.67.435-.48.585.04.15.04.593.456 1.267.981 1.654 1.218.242.202.097-.068.012-.049-.109-.181-.9-1.626-.96-1.655-.428-.686-.113-.411a2 2 0 0 1-.068-.484l.496-.674L4.446 0l.662.089.279.242.411.94.666 1.48 1.033 2.014.302.597.162.553.06.17h.105v-.097l.085-1.134.157-1.392.154-1.792.052-.504.25-.605.497-.327.387.186.319.456-.045.294-.19 1.23-.37 1.93-.243 1.29h.142l.161-.16.654-.868 1.097-1.372.484-.545.565-.601.363-.287h.686l.505.751-.226.775-.707.895-.585.759-.839 1.13-.524.904.048.072.125-.012 1.897-.403 1.024-.186 1.223-.21.553.258.06.263-.218.536-1.307.323-1.533.307-2.284.54-.028.02.032.04 1.029.098.44.024h1.077l2.005.15.525.346.315.424-.053.323-.807.411-3.631-.863-.872-.218h-.12v.073l.726.71 1.331 1.202 1.667 1.55.084.383-.214.302-.226-.032-1.464-1.101-.565-.497-1.28-1.077h-.084v.113l.295.432 1.557 2.34.08.718-.112.234-.404.141-.444-.08-.911-1.28-.94-1.44-.759-1.291-.093.053-.448 4.821-.21.246-.484.186-.403-.307-.214-.496.214-.98.258-1.28.21-1.016.19-1.263.112-.42-.008-.028-.092.012-.953 1.307-1.448 1.957-1.146 1.227-.274.109-.477-.247.045-.44.266-.39 1.586-2.018.956-1.25.617-.723-.004-.105h-.036l-4.212 2.736-.75.096-.324-.302.04-.496.154-.162 1.267-.871z" />
	</svg>
);

const techStack = [
	{
		name: "Next.js",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
	},
	{
		name: "JavaScript",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
	},
	{
		name: "TypeScript",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
	},
	{
		name: "Python",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
	},
	{
		name: "FastAPI",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
	},
	{
		name: "Ruby",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg",
	},
	{
		name: "Rails",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg",
	},
	{
		name: "Docker",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
	},
	{
		name: "Git",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
	},
	{
		name: "GitHub",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
	},
	{
		name: "Cursor",
		icon: CursorIcon,
	},
	{
		name: "Claude Code",
		icon: ClaudeIcon,
	},
];

// Duplicate for seamless loop
const duplicatedTech = [...techStack, ...techStack, ...techStack];

export const TechStack = () => {
	const scrollRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const scrollContainer = scrollRef.current;
		if (!scrollContainer) return;

		let animationId: number;
		let scrollPos = 0;
		const speed = 0.3;

		const animate = () => {
			scrollPos += speed;
			if (scrollPos >= scrollContainer.scrollWidth / 3) {
				scrollPos = 0;
			}
			scrollContainer.scrollLeft = scrollPos;
			animationId = requestAnimationFrame(animate);
		};

		animationId = requestAnimationFrame(animate);

		const handleMouseEnter = () => cancelAnimationFrame(animationId);
		const handleMouseLeave = () => {
			animationId = requestAnimationFrame(animate);
		};

		scrollContainer.addEventListener("mouseenter", handleMouseEnter);
		scrollContainer.addEventListener("mouseleave", handleMouseLeave);

		return () => {
			cancelAnimationFrame(animationId);
			scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
			scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
		};
	}, []);

	return (
		<section
			id="tech"
			className="py-16 overflow-hidden border-y border-border/40 bg-muted/30"
		>
			<div className="container-custom mb-14">
				<h3 className="text-3xl md:text-4xl font-bold text-center">
					Technical <span className="text-primary">Expertise</span>
				</h3>
			</div>
			<div
				ref={scrollRef}
				className="flex items-center gap-16 overflow-hidden"
				style={{ scrollBehavior: "auto" }}
			>
				{duplicatedTech.map((tech, index) => (
					<div
						key={`${tech.name}-${index}`}
						className="flex items-center gap-3 min-w-fit opacity-80 hover:opacity-100 transition-opacity duration-300"
					>
						{tech.logo ? (
							<img
								src={tech.logo}
								alt={`${tech.name} logo`}
								className="w-6 h-6 object-contain"
							/>
						) : tech.icon ? (
							<tech.icon className="w-6 h-6" />
						) : null}
						<span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
							{tech.name}
						</span>
					</div>
				))}
			</div>
		</section>
	);
};
