import { Layout } from "@/components/layout/Layout";
import { ExternalLink, Github, Filter } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const allProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce solution with real-time inventory management, Stripe payment integration, and an intuitive admin dashboard for managing products and orders.",
    tags: ["Next.js", "TypeScript", "Prisma", "Stripe"],
    category: "Fullstack",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
  },
  {
    id: 2,
    title: "AI Content Generator",
    description:
      "An AI-powered content creation tool using OpenAI GPT-4 for generating blog posts, social media content, marketing copy, and more.",
    tags: ["React", "Node.js", "OpenAI", "MongoDB"],
    category: "AI/ML",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
  },
  {
    id: 3,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team workspaces.",
    tags: ["Vue.js", "Firebase", "Tailwind", "Socket.io"],
    category: "Fullstack",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description:
      "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather data visualization.",
    tags: ["React", "OpenWeather API", "Chart.js", "Tailwind"],
    category: "Frontend",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=500&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false,
  },
  {
    id: 5,
    title: "Blog CMS",
    description:
      "A headless CMS built for developers with markdown support, image optimization, and a powerful API for content delivery.",
    tags: ["Node.js", "Express", "PostgreSQL", "Redis"],
    category: "Backend",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false,
  },
  {
    id: 6,
    title: "Crypto Portfolio Tracker",
    description:
      "Real-time cryptocurrency portfolio tracker with price alerts, historical charts, and multi-wallet support.",
    tags: ["React", "WebSocket", "CoinGecko API", "D3.js"],
    category: "Frontend",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=500&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false,
  },
];

const categories = ["All", "Fullstack", "Frontend", "Backend", "AI/ML"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-custom">
          {/* Page header */}
          <div className="max-w-2xl mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
            <p className="text-muted-foreground text-lg">
              A collection of projects I've built. Each one represents a unique
              challenge and learning experience in my development journey.
            </p>
          </div>

          {/* Filter */}
          <div className="flex items-center gap-2 mb-8 flex-wrap">
            <Filter className="h-4 w-4 text-muted-foreground" />
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                className="rounded-full"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {filteredProjects.map((project, index) => (
              <article
                key={project.id}
                className="group glass-card-hover rounded-2xl overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {project.featured && (
                    <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold rounded-full bg-primary text-primary-foreground">
                      Featured
                    </span>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Hover links */}
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background/90 backdrop-blur text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background/90 backdrop-blur text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-primary">
                      {project.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground"
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
    </Layout>
  );
};

export default Projects;
