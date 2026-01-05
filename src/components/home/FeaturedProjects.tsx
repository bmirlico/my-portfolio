import { Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Coding Challenge Generator",
    description:
      "A web app that generates personalized coding challenges using AI, with user authentication and progress tracking.",
    tags: ["React", "FastAPI", "OpenAI", "SQLAlchemy"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
    github: "https://github.com/bmirlico/coding-challenge-generator",
  },
  {
    id: 2,
    title: "Transcendance",
    description:
      "A multiplayer Pong game with real-time WebSocket gameplay, tournaments, and blockchain score recording.",
    tags: ["Django", "Docker", "WebSockets", "Solidity"],
    image: "https://images.unsplash.com/photo-1614294148960-9aa740632a87?w=800&h=500&fit=crop",
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group glass-card-hover rounded-2xl overflow-hidden"
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

                {/* Hover link */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-background/90 backdrop-blur hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
