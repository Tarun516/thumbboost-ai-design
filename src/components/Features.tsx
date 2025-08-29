import { Zap, Target, Smartphone, Clock, BarChart3, Users } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fast Prompts",
    description: "Answer a 1-minute brief. We rewrite prompts and deliver ready-to-use thumbnails."
  },
  {
    icon: Users,
    title: "Likeness Preserved", 
    description: "Keep face/product appearance consistent across all thumbnail edits."
  },
  {
    icon: Smartphone,
    title: "Export Ready",
    description: "Download for YouTube, Shorts, TikTok & Instagram presets with perfect sizing."
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
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="bg-white rounded-xl shadow-sm p-8 border border-border hover:shadow-md transition-all duration-300 text-center group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-accent" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground">
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