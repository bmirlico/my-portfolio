import { Layout } from "@/components/layout/Layout";
import { Github, Linkedin, Twitter, Mail, MapPin, Briefcase, GraduationCap, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const skills = [
  { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"] },
  { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL"] },
  { category: "DevOps", items: ["Docker", "AWS", "CI/CD", "Git", "Linux"] },
  { category: "Tools", items: ["VS Code", "Figma", "Postman", "Jest", "Storybook"] },
];

const experience = [
  {
    title: "Junior Fullstack Developer",
    company: "TechStartup Inc.",
    period: "2023 - Present",
    description: "Building modern web applications with React and Node.js. Contributing to the development of customer-facing features and internal tools.",
  },
  {
    title: "Frontend Developer Intern",
    company: "Digital Agency",
    period: "2022 - 2023",
    description: "Developed responsive websites and web applications using React and TypeScript. Collaborated with designers to implement pixel-perfect UIs.",
  },
];

const About = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Sidebar with photo and info */}
            <div className="lg:col-span-1">
              <div className="sticky top-28">
                {/* Photo */}
                <div className="relative mb-6">
                  <div className="aspect-square rounded-2xl overflow-hidden glass-card">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                      alt="Alex Chen"
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
                    <span>San Francisco, CA</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Briefcase className="h-4 w-4" />
                    <span>Junior Fullstack Developer</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <GraduationCap className="h-4 w-4" />
                    <span>BS Computer Science</span>
                  </div>
                </div>

                {/* Social links */}
                <div className="flex gap-2 mb-6">
                  <Button variant="outline" size="icon" className="rounded-full" asChild>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full" asChild>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full" asChild>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                      <Twitter className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full" asChild>
                    <a href="mailto:hello@alexchen.dev">
                      <Mail className="h-4 w-4" />
                    </a>
                  </Button>
                </div>

                <Button className="w-full rounded-full" asChild>
                  <a href="mailto:hello@alexchen.dev">Get in Touch</a>
                </Button>
              </div>
            </div>

            {/* Main content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Bio */}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    Hi! I'm Alex, a passionate fullstack developer based in San Francisco.
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
                <h2 className="text-2xl font-bold mb-6">Skills & Technologies</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {skills.map((skillGroup) => (
                    <div key={skillGroup.category} className="glass-card rounded-2xl p-6">
                      <h3 className="font-semibold text-primary mb-4">{skillGroup.category}</h3>
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
                <h2 className="text-2xl font-bold mb-6">Experience</h2>
                <div className="space-y-6">
                  {experience.map((exp, index) => (
                    <div
                      key={index}
                      className="glass-card rounded-2xl p-6 relative before:absolute before:left-6 before:top-[4.5rem] before:h-[calc(100%-3rem)] before:w-px before:bg-border last:before:hidden"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                        <h3 className="font-semibold text-lg">{exp.title}</h3>
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
    </Layout>
  );
};

export default About;
