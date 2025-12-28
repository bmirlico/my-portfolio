import { Layout } from "@/components/layout/Layout";
import { ArrowLeft, Calendar, Clock, Share2, Twitter, Linkedin, Link as LinkIcon } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

// Mock blog post data
const blogPostData = {
  "scalable-apis-nodejs": {
    title: "Building Scalable APIs with Node.js and TypeScript",
    date: "Dec 20, 2024",
    readTime: "8 min read",
    category: "Backend",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=600&fit=crop",
    content: `
## Introduction

Building scalable APIs is essential for modern web applications. In this guide, we'll explore best practices for creating production-ready APIs using Node.js and TypeScript.

## Project Setup

First, let's set up our project with the necessary dependencies:

\`\`\`bash
npm init -y
npm install express typescript @types/express @types/node
npm install -D ts-node nodemon
\`\`\`

## Creating the Server

Here's a basic Express server with TypeScript:

\`\`\`typescript
import express, { Application, Request, Response } from 'express';

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});
\`\`\`

## Best Practices

### 1. Use Middleware Effectively

Middleware is crucial for handling cross-cutting concerns like authentication, logging, and error handling.

### 2. Implement Proper Error Handling

Always use a centralized error handling mechanism to ensure consistent error responses.

### 3. Validate Input Data

Use libraries like Zod or Joi to validate incoming requests and ensure data integrity.

## Conclusion

Building scalable APIs requires attention to architecture, performance, and maintainability. By following these practices, you'll be well on your way to creating robust backend services.
    `,
  },
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPostData[slug as keyof typeof blogPostData];

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied!",
      description: "The article link has been copied to your clipboard.",
    });
  };

  if (!post) {
    return (
      <Layout>
        <div className="section-padding container-custom text-center">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <Button asChild>
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="section-padding">
        <div className="container-custom max-w-4xl">
          {/* Back link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          {/* Header */}
          <header className="mb-8">
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary text-primary-foreground mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
          </header>

          {/* Featured image */}
          <div className="rounded-2xl overflow-hidden mb-12">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto"
            />
          </div>

          {/* Content */}
          <div className="prose-custom prose-lg">
            {post.content.split('\n').map((line, index) => {
              if (line.startsWith('## ')) {
                return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{line.replace('## ', '')}</h2>;
              }
              if (line.startsWith('### ')) {
                return <h3 key={index} className="text-xl font-semibold mt-6 mb-3">{line.replace('### ', '')}</h3>;
              }
              if (line.startsWith('```')) {
                return null;
              }
              if (line.trim() === '') {
                return <br key={index} />;
              }
              return <p key={index} className="mb-4 text-muted-foreground leading-relaxed">{line}</p>;
            })}
          </div>

          {/* Share */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex items-center justify-between">
              <span className="font-medium flex items-center gap-2">
                <Share2 className="h-4 w-4" />
                Share this article
              </span>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="rounded-full" onClick={copyLink}>
                  <LinkIcon className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full" asChild>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full" asChild>
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
