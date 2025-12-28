import { Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    setIsLoading(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Let's Work Together
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Have a project in mind or want to chat? Feel free to reach out.
              I'm always open to discussing new opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 md:gap-12">
            {/* Contact info */}
            <div className="md:col-span-2 space-y-6">
              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:hello@alexchen.dev"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      hello@alexchen.dev
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-muted-foreground text-sm">
                      San Francisco, CA
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <form
              onSubmit={handleSubmit}
              className="md:col-span-3 glass-card rounded-2xl p-6 md:p-8"
            >
              <div className="grid gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium mb-2 block">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium mb-2 block">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="rounded-lg"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="text-sm font-medium mb-2 block">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    required
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium mb-2 block">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message..."
                    rows={5}
                    required
                    className="rounded-lg resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="rounded-full w-full sm:w-auto sm:self-end"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
