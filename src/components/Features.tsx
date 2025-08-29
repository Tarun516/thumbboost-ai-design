import { Zap, Target, Smartphone, Clock, BarChart3, Users } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "AI-Powered Generation",
    description: "Advanced AI creates thumbnails optimized for each platform's algorithm and audience behavior."
  },
  {
    icon: Target,
    title: "Platform Optimized",
    description: "Perfect sizing and styling for YouTube, TikTok, Instagram, and more. Each variant tailored for maximum engagement."
  },
  {
    icon: Clock,
    title: "1-Minute Setup",
    description: "Upload your content, answer quick questions about your vibe and audience, get results instantly."
  },
  {
    icon: BarChart3,
    title: "High Converting",
    description: "Our AI is trained on millions of high-performing thumbnails to maximize your click-through rates."
  },
  {
    icon: Users,
    title: "Creator Focused",
    description: "Built specifically for content creators, small teams, and agencies who need quality at scale."
  },
  {
    icon: Smartphone,
    title: "Works Everywhere",
    description: "Optimized for mobile and desktop. Generate, preview, and download anywhere you create content."
  }
];

const Features = () => {
  return (
    <section id="features" className="w-full py-20 lg:py-32">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Everything you need to create 
            <span className="text-primary"> winning thumbnails</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Focus on creating great content. Let ThumbBoost handle the thumbnails that get your videos discovered.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="feature-card animate-fade-in group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-accent/5 border border-accent/20 rounded-full px-6 py-3">
            <span className="text-accent font-medium">Ready to boost your thumbnails?</span>
            <Zap className="w-4 h-4 text-accent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;