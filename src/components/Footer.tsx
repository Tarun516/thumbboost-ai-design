import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-foreground text-background">
      {/* CTA Section */}
      <div className="border-b border-background/10">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to create thumbnails that convert?
            </h2>
            <p className="text-lg text-background/80 max-w-2xl mx-auto">
              Join thousands of creators who've boosted their click-through rates with AI-powered thumbnails.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-background text-foreground hover:bg-background/90 px-8 py-3 rounded-lg font-semibold group">
                Start Generating Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="border-background/20 text-background hover:bg-background/10">
                View Examples
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-background rounded-lg flex items-center justify-center">
                <span className="text-foreground font-bold text-sm">TB</span>
              </div>
              <span className="text-xl font-bold">ThumbBoost</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              AI thumbnails that actually get clicks. Built for creators who want results.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="font-semibold text-background">Product</h3>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-background/70 hover:text-background transition-colors">Features</a>
              <a href="#" className="block text-background/70 hover:text-background transition-colors">Pricing</a>
              <a href="#" className="block text-background/70 hover:text-background transition-colors">Examples</a>
              <a href="#" className="block text-background/70 hover:text-background transition-colors">API</a>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-background">Support</h3>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-background/70 hover:text-background transition-colors">Help Center</a>
              <a href="#" className="block text-background/70 hover:text-background transition-colors">Contact</a>
              <a href="#" className="block text-background/70 hover:text-background transition-colors">Tutorials</a>
              <a href="#" className="block text-background/70 hover:text-background transition-colors">Status</a>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-background">Company</h3>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-background/70 hover:text-background transition-colors">About</a>
              <a href="#" className="block text-background/70 hover:text-background transition-colors">Blog</a>
              <a href="#" className="block text-background/70 hover:text-background transition-colors">Privacy</a>
              <a href="#" className="block text-background/70 hover:text-background transition-colors">Terms</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-background/70">
            © 2024 ThumbBoost. All rights reserved.
          </div>
          <div className="flex items-center space-x-6 text-sm text-background/70">
            <span>Made for creators</span>
            <span>•</span>
            <span>AI-powered</span>
            <span>•</span>
            <span>Platform optimized</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;