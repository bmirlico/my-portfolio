const projects = [
  {
    id: 1,
    title: "CallClaw",
    description:
      "An AI agent that joins your Google Meet, executes real actions mid-call, and remembers everything across meetings.",
    tags: ["Recall AI", "FastAPI", "React", "Python", "Anthropic"],
    image: "https://images.unsplash.com/photo-1588873281272-14886ba1f737?w=800&h=500&fit=crop",
    github: "https://github.com/bmirlico/call-claw",
  },
  {
    id: 2,
    title: "Elderly",
    description:
      "AI phone companion that calls elderly people daily, analyzes conversations for health signals, and keeps families informed through a real-time dashboard.",
    tags: ["React", "Python", "FastAPI", "Twilio"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop",
    github: "https://github.com/bmirlico/elderly-companion",
  },
  {
    id: 3,
    title: "Transcendance",
    description:
      "A multiplayer Pong game with real-time WebSocket gameplay, tournaments, and blockchain score recording.",
    tags: ["Django", "Python", "Docker", "WebSockets", "Solidity"],
    image: "https://images.unsplash.com/photo-1534158914592-062992fbe900?w=800&h=500&fit=crop",
    github: "https://github.com/BdClement/Docker_Transcendance",
  },
];

export const FeaturedProjects = () => {
  return (
    <section id="projects" className="section-padding bg-muted/30 border-t border-border/40">
      <div className="container-custom">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-xl">
              A selection of my recent work. Each project is crafted with attention
              to detail, performance, and user experience.
            </p>
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <a
              key={project.id}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} on GitHub`}
              className="group glass-card-hover rounded-2xl overflow-hidden block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
