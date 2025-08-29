import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";

const Hero = () => {
  return (
    <section className="w-full py-20 lg:py-32 bg-gradient-subtle">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="flex flex-col space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent border border-accent/20 rounded-full px-4 py-2 w-fit">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">AI-Powered Generation</span>
            </div>

            {/* Headline */}
            <div className="space-y-6">
              <h1 className="hero-headline">
                AI thumbnails that actually get clicks
              </h1>
              <p className="hero-subheading max-w-xl">
                Generate platform-optimized thumbnails in seconds. Upload a photo or video frame, 
                answer a 1-minute questionnaire, get 3–6 high-converting thumbnail variants.
              </p>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="btn-primary group">
                Generate Thumbnail
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="btn-secondary group">
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-6 pt-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-primary rounded-full border-2 border-background"></div>
                  <div className="w-8 h-8 bg-accent rounded-full border-2 border-background"></div>
                  <div className="w-8 h-8 bg-success rounded-full border-2 border-background"></div>
                </div>
                <span>Trusted by 10K+ creators</span>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative animate-slide-in-up">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={heroDashboard} 
                alt="ThumbBoost dashboard showing AI-generated thumbnail variants"
                className="w-full h-auto"
              />
              {/* Subtle overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-accent rounded-full animate-float opacity-80"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-primary rounded-full animate-float animation-delay-1000 opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;