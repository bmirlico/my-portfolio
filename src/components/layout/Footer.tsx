import {
	ExternalLink,
	Github,
	Heart,
	Linkedin,
	Mail,
	Twitter,
} from "lucide-react";

const BLOG_URL = "https://thelearningmachine.dev";

const socialLinks = [
	{ icon: Github, href: "https://github.com", label: "GitHub" },
	{ icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
	{ icon: Twitter, href: "https://twitter.com", label: "X" },
	{ icon: Mail, href: "mailto:hello@example.com", label: "Email" },
];

const navLinks = [
	{ name: "Home", href: "#hero" },
	{ name: "Projects", href: "#projects" },
	{ name: "About", href: "#about" },
	{ name: "Contact", href: "#contact" },
];

export const Footer = () => {
	const currentYear = new Date().getFullYear();

	const scrollToSection = (href: string) => {
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<footer className="border-t border-border bg-card/50">
			<div className="container-custom py-12 md:py-16">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
					{/* Brand */}
					<div className="space-y-4">
						<a
							href="#hero"
							onClick={(e) => {
								e.preventDefault();
								scrollToSection("#hero");
							}}
							className="text-lg font-bold tracking-tight flex items-center gap-0 hover:opacity-80 transition-opacity cursor-pointer"
						>
							<span className="text-primary">&lt;</span>
							<span>bastien</span>
							<span className="text-primary">mirlicourtois</span>
							<span className="text-primary">/&gt;</span>
						</a>
						<p className="text-muted-foreground text-sm max-w-xs">
							A passionate fullstack developer crafting modern web experiences
							and sharing knowledge through writing.
						</p>
					</div>

					{/* Quick Links */}
					<div className="space-y-4">
						<h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
							Quick Links
						</h4>
						<nav className="flex flex-col gap-2">
							{navLinks.map((item) => (
								<a
									key={item.href}
									href={item.href}
									onClick={(e) => {
										e.preventDefault();
										scrollToSection(item.href);
									}}
									className="text-sm text-muted-foreground hover:text-primary transition-colors link-underline w-fit cursor-pointer"
								>
									{item.name}
								</a>
							))}
							<a
								href={BLOG_URL}
								target="_blank"
								rel="noopener noreferrer"
								className="text-sm text-muted-foreground hover:text-primary transition-colors link-underline w-fit flex items-center gap-1"
							>
								Blog
								<ExternalLink className="h-3 w-3" />
							</a>
						</nav>
					</div>

					{/* Social Links */}
					<div className="space-y-4">
						<h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
							Connect
						</h4>
						<div className="flex gap-3">
							{socialLinks.map((social) => (
								<a
									key={social.label}
									href={social.href}
									target="_blank"
									rel="noopener noreferrer"
									className="p-2.5 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200"
									aria-label={social.label}
								>
									<social.icon className="h-4 w-4" />
								</a>
							))}
						</div>
					</div>
				</div>

				<div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
					<p className="text-sm text-muted-foreground">
						© {currentYear} All rights reserved.
					</p>
					<p className="text-sm text-muted-foreground flex items-center gap-1">
						Made with <Heart className="h-4 w-4 text-primary fill-primary" />{" "}
						using React
					</p>
				</div>
			</div>
		</footer>
	);
};
