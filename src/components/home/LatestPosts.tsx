import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const posts = [
  {
    id: 1,
    title: "Building Scalable APIs with Node.js and TypeScript",
    excerpt:
      "Learn how to structure and build production-ready APIs using Node.js, Express, and TypeScript with best practices.",
    date: "Dec 20, 2024",
    readTime: "8 min read",
    category: "Backend",
    slug: "scalable-apis-nodejs",
  },
  {
    id: 2,
    title: "The Complete Guide to React Server Components",
    excerpt:
      "Understanding React Server Components, when to use them, and how they change the way we build React applications.",
    date: "Dec 15, 2024",
    readTime: "12 min read",
    category: "React",
    slug: "react-server-components",
  },
  {
    id: 3,
    title: "Modern CSS Techniques Every Developer Should Know",
    excerpt:
      "From container queries to cascade layers, explore the modern CSS features that are changing how we style the web.",
    date: "Dec 10, 2024",
    readTime: "6 min read",
    category: "CSS",
    slug: "modern-css-techniques",
  },
];

export const LatestPosts = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Latest Articles
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Thoughts, tutorials, and insights on web development, programming,
              and the tech industry.
            </p>
          </div>
          <Button asChild variant="ghost" className="group w-fit">
            <Link to="/blog">
              View all posts
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        {/* Posts list */}
        <div className="grid gap-6">
          {posts.map((post, index) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <article className="glass-card-hover rounded-2xl p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                  {/* Category badge */}
                  <span className="px-3 py-1.5 text-xs font-semibold rounded-full bg-primary text-primary-foreground w-fit">
                    {post.category}
                  </span>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground shrink-0">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Arrow */}
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 hidden md:block" />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
