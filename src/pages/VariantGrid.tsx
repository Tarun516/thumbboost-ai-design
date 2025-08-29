import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Edit, ArrowLeft, RotateCcw } from "lucide-react";
import variantGrid from "@/assets/variant-grid.jpg";

const VariantGrid = () => {
  const [selectedVariant, setSelectedVariant] = useState<number | null>(null);

  const variants = [
    { 
      id: 1, 
      title: "INSANE RESULTS", 
      score: 94, 
      platform: "YouTube",
      description: "High-energy design with bold contrasts"
    },
    { 
      id: 2, 
      title: "TOP SECRET", 
      score: 89, 
      platform: "YouTube",
      description: "Mystery-focused layout with dark tones"
    },
    { 
      id: 3, 
      title: "MIND BLOWN", 
      score: 92, 
      platform: "YouTube",
      description: "Explosive visual with bright highlights"
    },
    { 
      id: 4, 
      title: "GAME CHANGER", 
      score: 87, 
      platform: "YouTube",
      description: "Professional layout with tech elements"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Generated Variants</h1>
              <p className="text-muted-foreground">Choose your favorite thumbnail design</p>
            </div>
          </div>
          <Button 
            variant="outline"
            className="flex items-center space-x-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Generate New</span>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container max-w-7xl mx-auto px-6 py-12">
        {/* Variant Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {variants.map((variant) => (
            <div 
              key={variant.id} 
              className="group relative bg-white rounded-2xl border border-border overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105"
              onClick={() => setSelectedVariant(variant.id)}
            >
              {/* Thumbnail Preview */}
              <div className="aspect-video bg-gradient-to-br from-primary/20 via-accent/15 to-primary/30 flex items-center justify-center relative overflow-hidden">
                <span 
                  className="text-2xl lg:text-3xl font-bold text-white text-center px-4 relative z-10"
                  style={{
                    textShadow: '3px 3px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000, 1px 1px 0px #000'
                  }}
                >
                  {variant.title}
                </span>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button className="bg-primary hover:bg-primary-hover text-primary-foreground px-6 py-2">
                    Choose This
                  </Button>
                </div>
              </div>
              
              {/* Variant Info */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-foreground">
                    Variant {variant.id}/4
                  </span>
                  <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                    {variant.platform}
                  </span>
                </div>
                
                {/* Score Bar */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">CTR Prediction</span>
                    <span className="font-semibold text-foreground">{variant.score}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full transition-all duration-500 ${
                        variant.score >= 90 ? 'bg-success' :
                        variant.score >= 85 ? 'bg-accent' : 'bg-primary'
                      }`}
                      style={{ width: `${variant.score}%` }}
                    ></div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">
                  {variant.description}
                </p>

                {/* Action Buttons */}
                <div className="flex space-x-2 pt-2">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-primary hover:bg-primary-hover text-primary-foreground"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedVariant(variant.id);
                    }}
                  >
                    <Download className="w-4 h-4 mr-1" />
                    Download
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Edit className="w-4 h-4 mr-1" />
                    Edit
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tips Section */}
        <div className="mt-16 bg-muted/30 rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-foreground mb-4">Pro Tips for Better Performance</h3>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="space-y-2">
              <div className="font-medium text-foreground">High Contrast</div>
              <div className="text-muted-foreground">Bold text with strong background contrast gets more clicks</div>
            </div>
            <div className="space-y-2">
              <div className="font-medium text-foreground">Emotional Faces</div>
              <div className="text-muted-foreground">Surprised or excited expressions perform 23% better</div>
            </div>
            <div className="space-y-2">
              <div className="font-medium text-foreground">Clear Headlines</div>
              <div className="text-muted-foreground">Keep text readable even on mobile screens</div>
            </div>
          </div>
        </div>
      </main>

      {/* Preview Modal */}
      {selectedVariant && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full p-8 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground">
                  {variants.find(v => v.id === selectedVariant)?.title}
                </h3>
                <p className="text-muted-foreground">
                  Variant {selectedVariant} - {variants.find(v => v.id === selectedVariant)?.score}% predicted CTR
                </p>
              </div>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setSelectedVariant(null)}
                className="text-2xl"
              >
                ×
              </Button>
            </div>
            
            {/* Large Preview */}
            <div className="aspect-video bg-gradient-to-br from-primary/20 via-accent/15 to-primary/30 rounded-2xl flex items-center justify-center mb-8 relative overflow-hidden">
              <span 
                className="text-6xl font-bold text-white text-center px-8"
                style={{
                  textShadow: '4px 4px 0px #000, -2px -2px 0px #000, 2px -2px 0px #000, -2px 2px 0px #000, 2px 2px 0px #000'
                }}
              >
                {variants.find(v => v.id === selectedVariant)?.title}
              </span>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Download Options */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Download Options</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <Button className="bg-primary hover:bg-primary-hover text-primary-foreground justify-start">
                  <Download className="w-4 h-4 mr-2" />
                  HD (1920x1080)
                </Button>
                <Button variant="outline" className="justify-start">
                  <Download className="w-4 h-4 mr-2" />
                  Mobile (1080x1920)
                </Button>
                <Button variant="outline" className="justify-start">
                  <Download className="w-4 h-4 mr-2" />
                  Square (1080x1080)
                </Button>
              </div>
              
              <div className="flex space-x-3 pt-4">
                <Button className="bg-primary hover:bg-primary-hover text-primary-foreground flex-1">
                  <Download className="w-4 h-4 mr-2" />
                  Download All Sizes
                </Button>
                <Button variant="outline" className="flex-1">
                  <Edit className="w-4 h-4 mr-2" />
                  Customize Further
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VariantGrid;