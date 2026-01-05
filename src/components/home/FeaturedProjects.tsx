import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce solution with real-time inventory, Stripe payments, and an intuitive admin dashboard.",
    tags: ["Next.js", "TypeScript", "Prisma", "Stripe"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 2,
    title: "AI Content Generator",
    description:
      "An AI-powered content creation tool using OpenAI GPT-4 for generating blog posts, social media content, and more.",
    tags: ["React", "Node.js", "OpenAI", "MongoDB"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 3,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop, and team workspaces.",
    tags: ["Vue.js", "Firebase", "Tailwind", "Socket.io"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com",
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

                {/* Hover links */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-background/90 backdrop-blur hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-background/90 backdrop-blur hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
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
