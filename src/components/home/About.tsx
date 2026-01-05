import { Github, Linkedin, Mail, MapPin, Briefcase, GraduationCap, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const skills = [
  { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"] },
  { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL"] },
  { category: "DevOps", items: ["Docker", "AWS", "CI/CD", "Git", "Linux"] },
  { category: "Tools", items: ["VS Code", "Figma", "Postman", "Jest", "Storybook"] },
];

const experience = [
  {
    title: "Software Engineer – Full Stack",
    company: "Faks",
    period: "Jan. 2025 - Present",
    description: "Building end-to-end full-stack features in Ruby/React. Developing REST APIs in Rails, backend services, and SQL dashboards on Metabase.",
  },
  {
    title: "Strategy & Data Analytics Consultant",
    company: "Advancy",
    period: "2020 - 2022",
    description: "Performed market modelling using Python (pandas, xlwings) on Euromonitor datasets. Prepared and framed customer meetings to specify project scope.",
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
                  <span>Fullstack Developer</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <GraduationCap className="h-4 w-4" />
                  <span>MS Computer Science</span>
                </div>
              </div>

              {/* Social links */}
              <div className="flex gap-2 mb-6">
                <Button variant="outline" size="icon" className="rounded-full" asChild>
                  <a href="https://github.com/bmirlico" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full" asChild>
                  <a href="https://www.linkedin.com/in/bastien-mirlicourtois/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full" asChild>
                  <a href="https://x.com/bmirlico" target="_blank" rel="noopener noreferrer">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full" asChild>
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
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Hi! I'm Bastien, a passionate fullstack developer based in Paris.
                  I specialize in building modern web applications using React, Node.js,
                  and TypeScript.
                </p>
                <p>
                  My journey into programming started in college where I discovered my love
                  for creating things that live on the internet. Since then, I've been
                  constantly learning and building, from personal projects to professional
                  applications.
                </p>
                <p>
                  When I'm not coding, you can find me writing technical articles, contributing
                  to open-source projects, or exploring the latest web technologies. I believe
                  in the power of sharing knowledge and helping others grow in their development
                  journey.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Skills & Technologies</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {skills.map((skillGroup) => (
                  <div key={skillGroup.category} className="glass-card rounded-2xl p-6">
                    <h4 className="font-semibold text-primary mb-4">{skillGroup.category}</h4>
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
                    className="glass-card rounded-2xl p-6 relative before:absolute before:left-6 before:top-[4.5rem] before:h-[calc(100%-3rem)] before:w-px before:bg-border last:before:hidden"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                      <h4 className="font-semibold text-lg">{exp.title}</h4>
                      <span className="text-sm text-muted-foreground">•</span>
                      <span className="text-primary font-medium">{exp.company}</span>
                    </div>
                    <span className="text-sm text-muted-foreground block mb-3">{exp.period}</span>
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
