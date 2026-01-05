import {
	Briefcase,
	Code,
	Github,
	GraduationCap,
	Linkedin,
	Mail,
	MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const skills = [
	{
		category: "Languages",
		items: ["JavaScript", "TypeScript", "Python", "Ruby", "SQL"],
	},
	{ category: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
	{
		category: "Backend",
		items: ["Rails", "FastAPI", "PostgreSQL", "REST APIs"],
	},
	{
		category: "DevOps & Tools",
		items: ["Docker", "Git", "GitHub", "Cursor", "Claude Code"],
	},
];

const experience = [
	{
		title: "Software Engineer – Full Stack",
		company: "Faks",
		companyUrl: "https://en.faks.co/",
		period: "Jan. 2025 - Present",
		description:
			"Building end-to-end full-stack features in Ruby/React. Developing REST APIs in Rails, backend services, and SQL dashboards on Metabase.",
	},
	{
		title: "Strategy & Data Analytics Consultant",
		company: "Advancy",
		companyUrl: "https://www.advancy.com/",
		period: "2020 - 2022",
		description:
			"Performed market modelling using Python (pandas, xlwings) on Euromonitor datasets. Prepared and framed customer meetings to specify project scope.",
	},
];

export const About = () => {
	return (
		<section id="about" className="section-padding">
			<div className="container-custom">
				<div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
					{/* Sidebar with photo and info */}
					<div className="lg:col-span-1">
						<div className="lg:sticky lg:top-28">
							{/* Photo */}
							<div className="relative mb-6">
								<div className="aspect-square rounded-2xl overflow-hidden glass-card">
									<img
										src="/profile.jpeg"
										alt="Bastien Mirlicourtois"
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="absolute -bottom-3 -right-3 p-3 rounded-xl bg-primary text-primary-foreground">
									<Code className="h-6 w-6" />
								</div>
							</div>

							{/* Quick info */}
							<div className="space-y-3 mb-6">
								<div className="flex items-center gap-3 text-muted-foreground">
									<MapPin className="h-4 w-4" />
									<span>Paris, France</span>
								</div>
								<div className="flex items-center gap-3 text-muted-foreground">
									<Briefcase className="h-4 w-4" />
									<span>
										Fullstack Developer •{" "}
										<a
											href="https://en.faks.co/"
											target="_blank"
											rel="noopener noreferrer"
											className="text-primary font-medium hover:underline"
										>
											Faks
										</a>
									</span>
								</div>
								<div className="flex items-center gap-3 text-muted-foreground">
									<GraduationCap className="h-4 w-4 flex-shrink-0" />
									<span>
										BSc, Computer Science •{" "}
										<a
											href="https://42.fr/en/homepage/"
											target="_blank"
											rel="noopener noreferrer"
											className="text-primary font-medium hover:underline"
										>
											42
										</a>
									</span>
								</div>
								<div className="flex items-center gap-3 text-muted-foreground">
									<GraduationCap className="h-4 w-4 flex-shrink-0" />
									<span>
										MSc in Management •{" "}
										<a
											href="https://escp.eu/"
											target="_blank"
											rel="noopener noreferrer"
											className="text-primary font-medium hover:underline"
										>
											ESCP
										</a>
									</span>
								</div>
							</div>

							{/* Social links */}
							<div className="flex gap-2 mb-6">
								<Button
									variant="outline"
									size="icon"
									className="rounded-full"
									asChild
								>
									<a
										href="https://github.com/bmirlico"
										target="_blank"
										rel="noopener noreferrer"
									>
										<Github className="h-4 w-4" />
									</a>
								</Button>
								<Button
									variant="outline"
									size="icon"
									className="rounded-full"
									asChild
								>
									<a
										href="https://www.linkedin.com/in/bastien-mirlicourtois/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<Linkedin className="h-4 w-4" />
									</a>
								</Button>
								<Button
									variant="outline"
									size="icon"
									className="rounded-full"
									asChild
								>
									<a
										href="https://x.com/bmirlico"
										target="_blank"
										rel="noopener noreferrer"
									>
										<svg
											className="h-4 w-4"
											viewBox="0 0 24 24"
											fill="currentColor"
										>
											<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
										</svg>
									</a>
								</Button>
								<Button
									variant="outline"
									size="icon"
									className="rounded-full"
									asChild
								>
									<a href="mailto:bastienmirlicourtois@gmail.com">
										<Mail className="h-4 w-4" />
									</a>
								</Button>
							</div>

							<Button className="w-full rounded-full" asChild>
								<a href="mailto:bastienmirlicourtois@gmail.com">Get in Touch</a>
							</Button>
						</div>
					</div>

					{/* Main content */}
					<div className="lg:col-span-2 space-y-12">
						{/* Bio */}
						<div>
							<h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
							<div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
								<p>
									Hi! I'm Bastien, an{" "}
									<span className="text-foreground font-medium">ex-strategy consultant</span>{" "}
									turned{" "}
									<span className="text-primary font-semibold">fullstack developer</span>{" "}
									based in Paris. After working in management consulting, I decided to pursue my passion for{" "}
									<span className="text-foreground font-medium">building things</span>{" "}
									and went back to school to learn{" "}
									<span className="text-foreground font-medium">computer science</span>.
								</p>
								<p>
									Today, I specialize in building modern web applications using{" "}
									<span className="px-2 py-0.5 rounded-md bg-primary/10 text-primary font-medium">React</span>,{" "}
									<span className="px-2 py-0.5 rounded-md bg-primary/10 text-primary font-medium">Ruby on Rails</span>, and{" "}
									<span className="px-2 py-0.5 rounded-md bg-primary/10 text-primary font-medium">FastAPI</span>.
									I love the problem-solving aspect of development and bringing ideas to life through code.
								</p>
								<p>
									When I'm not coding, you can find me{" "}
									<span className="text-foreground font-medium">writing technical articles</span>,{" "}
									contributing to <span className="text-foreground font-medium">open-source projects</span>, or exploring
									the latest web technologies. I believe in the power of{" "}
									<span className="text-primary font-medium">sharing knowledge</span>{" "}
									and helping others grow.
								</p>
							</div>
						</div>

						{/* Skills */}
						<div>
							<h3 className="text-2xl font-bold mb-6">Skills & Technologies</h3>
							<div className="grid sm:grid-cols-2 gap-6">
								{skills.map((skillGroup) => (
									<div
										key={skillGroup.category}
										className="glass-card rounded-2xl p-6"
									>
										<h4 className="font-semibold text-primary mb-4">
											{skillGroup.category}
										</h4>
										<div className="flex flex-wrap gap-2">
											{skillGroup.items.map((skill) => (
												<span
													key={skill}
													className="px-3 py-1.5 text-sm rounded-full bg-muted text-muted-foreground"
												>
													{skill}
												</span>
											))}
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Experience */}
						<div>
							<h3 className="text-2xl font-bold mb-6">Experience</h3>
							<div className="space-y-6">
								{experience.map((exp, index) => (
									<div
										key={index}
										className="glass-card rounded-2xl p-6"
									>
										<div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
											<h4 className="font-semibold text-lg">{exp.title}</h4>
											<span className="text-sm text-muted-foreground">•</span>
											<a
												href={exp.companyUrl}
												target="_blank"
												rel="noopener noreferrer"
												className="text-primary font-medium hover:underline"
											>
												{exp.company}
											</a>
										</div>
										<span className="text-sm text-muted-foreground block mb-3">
											{exp.period}
										</span>
										<p className="text-muted-foreground">{exp.description}</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
