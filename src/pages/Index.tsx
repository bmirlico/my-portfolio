import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { TechStack } from "@/components/home/TechStack";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { About } from "@/components/home/About";
import { BlogLink } from "@/components/home/BlogLink";
import { Contact } from "@/components/home/Contact";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <TechStack />
      <FeaturedProjects />
      <About />
      <BlogLink />
      <Contact />
    </Layout>
  );
};

export default Index;
