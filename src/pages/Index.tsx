import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { TechStack } from "@/components/home/TechStack";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { LatestPosts } from "@/components/home/LatestPosts";
import { Contact } from "@/components/home/Contact";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <TechStack />
      <FeaturedProjects />
      <LatestPosts />
      <Contact />
    </Layout>
  );
};

export default Index;
