import { ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const BLOG_URL = "https://thelearningmachine.dev";

export const BlogLink = () => {
  return (
    <section id="blog" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
            <BookOpen className="h-8 w-8" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            I also write about learning, AI & engineering
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Check out my blog where I share insights about software development,
            learning systems, AI, and product engineering. I believe in learning
            in public and sharing knowledge with the community.
          </p>

          {/* CTA Button */}
          <Button asChild size="lg" className="rounded-full px-8 group">
            <a href={BLOG_URL} target="_blank" rel="noopener noreferrer">
              Visit The Learning Machine
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
