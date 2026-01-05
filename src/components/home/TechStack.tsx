import { useEffect, useRef } from "react";

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
    <section id="tech" className="py-16 overflow-hidden border-y border-border/40 bg-muted/30">
      <div className="container-custom mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-center">
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
            <img
              src={tech.logo}
              alt={`${tech.name} logo`}
              className="w-6 h-6 object-contain"
            />
            <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
