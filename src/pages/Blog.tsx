import { Layout } from "@/components/layout/Layout";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable APIs with Node.js and TypeScript",
    excerpt:
      "Learn how to structure and build production-ready APIs using Node.js, Express, and TypeScript with best practices for error handling, validation, and testing.",
    date: "Dec 20, 2024",
    readTime: "8 min read",
    category: "Backend",
    slug: "scalable-apis-nodejs",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
  },
  {
    id: 2,
    title: "The Complete Guide to React Server Components",
    excerpt:
      "Understanding React Server Components, when to use them, and how they change the way we build React applications for better performance.",
    date: "Dec 15, 2024",
    readTime: "12 min read",
    category: "React",
    slug: "react-server-components",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
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
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Getting Started with TypeScript in 2025",
    excerpt:
      "A comprehensive beginner's guide to TypeScript, covering types, interfaces, generics, and how to integrate it into your projects.",
    date: "Dec 5, 2024",
    readTime: "10 min read",
    category: "TypeScript",
    slug: "typescript-guide-2025",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop",
  },
  {
    id: 5,
    title: "Mastering Git: Advanced Workflows for Teams",
    excerpt:
      "Beyond the basics: learn advanced Git workflows, branching strategies, and collaboration techniques for professional development teams.",
    date: "Nov 28, 2024",
    readTime: "9 min read",
    category: "DevOps",
    slug: "advanced-git-workflows",
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&h=400&fit=crop",
  },
  {
    id: 6,
    title: "Building a Design System from Scratch",
    excerpt:
      "A step-by-step guide to creating a scalable design system with React, Tailwind CSS, and Storybook for consistent UI development.",
    date: "Nov 20, 2024",
    readTime: "15 min read",
    category: "Design",
    slug: "design-system-guide",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop",
  },
];

const categories = ["All", "React", "Backend", "TypeScript", "CSS", "DevOps", "Design"];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-custom">
          {/* Page header */}
          <div className="max-w-2xl mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
            <p className="text-muted-foreground text-lg">
              Thoughts, tutorials, and insights on web development, programming,
              and the tech industry. I write about things I learn and find
              interesting.
            </p>
          </div>

          {/* Search and filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 rounded-full"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
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
          </div>

          {/* Blog posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {filteredPosts.map((post, index) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <article className="glass-card-hover rounded-2xl overflow-hidden h-full">
                  {/* Image */}
                  <div className="relative aspect-[2/1] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary text-primary-foreground">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center text-sm font-medium text-primary">
                      Read more
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No articles found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
