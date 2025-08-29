import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Upload, 
  ArrowRight, 
  ArrowLeft,
  Sparkles,
  Image as ImageIcon,
  MessageCircle
} from "lucide-react";

type Step = 1 | 2 | 3 | 4;

const Generate = () => {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [formData, setFormData] = useState({
    platform: "",
    uploadedFile: null as File | null,
    vibe: "",
    headline: "",
    hookText: ""
  });

  const platforms = [
    { id: "youtube", name: "YouTube", aspect: "16:9" },
    { id: "shorts", name: "YouTube Shorts", aspect: "9:16" },
    { id: "tiktok", name: "TikTok", aspect: "9:16" },
    { id: "instagram", name: "Instagram", aspect: "1:1" }
  ];

  const vibes = [
    { id: "bold", name: "Bold", desc: "High contrast, dramatic colors" },
    { id: "trust", name: "Trust", desc: "Professional, clean, reliable" },
    { id: "playful", name: "Playful", desc: "Fun, colorful, energetic" }
  ];

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep((prev) => (prev + 1) as Step);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep((prev) => (prev - 1) as Step);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, uploadedFile: file }));
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border px-6 py-4">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">TB</span>
            </div>
            <span className="text-xl font-bold text-foreground">ThumbBoost</span>
          </div>
          
          {/* Progress Indicator */}
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">Step {currentStep} of 4</span>
            <div className="flex space-x-1">
              {[1, 2, 3, 4].map((step) => (
                <div
                  key={step}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    step <= currentStep ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-2xl">
          {/* Chat-like Interface */}
          <div className="space-y-6 mb-8">
            {/* System Messages */}
            <div className="flex justify-start">
              <div className="bg-muted rounded-2xl rounded-tl-md px-6 py-4 max-w-md">
                <div className="flex items-center space-x-2 mb-2">
                  <MessageCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">ThumbBoost AI</span>
                </div>
                <p className="text-foreground">
                  {currentStep === 1 && "Hi! Let's create some amazing thumbnails. Which platform are you creating content for?"}
                  {currentStep === 2 && "Great choice! Now upload a photo or video frame that you'd like to use as the base for your thumbnail."}
                  {currentStep === 3 && "Perfect! What vibe are you going for with this thumbnail?"}
                  {currentStep === 4 && "Almost done! Give me a short headline or hook text for your thumbnail."}
                </p>
              </div>
            </div>

            {/* User Responses */}
            {formData.platform && currentStep > 1 && (
              <div className="flex justify-end">
                <div className="bg-primary rounded-2xl rounded-tr-md px-6 py-3 text-primary-foreground max-w-md">
                  {platforms.find(p => p.id === formData.platform)?.name}
                </div>
              </div>
            )}

            {formData.uploadedFile && currentStep > 2 && (
              <div className="flex justify-end">
                <div className="bg-primary rounded-2xl rounded-tr-md px-6 py-3 text-primary-foreground max-w-md">
                  📸 {formData.uploadedFile.name}
                </div>
              </div>
            )}

            {formData.vibe && currentStep > 3 && (
              <div className="flex justify-end">
                <div className="bg-primary rounded-2xl rounded-tr-md px-6 py-3 text-primary-foreground max-w-md">
                  {vibes.find(v => v.id === formData.vibe)?.name} style
                </div>
              </div>
            )}
          </div>

          {/* Step Content */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-border">
            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground text-center">Choose Your Platform</h2>
                <div className="grid grid-cols-2 gap-4">
                  {platforms.map((platform) => (
                    <button
                      key={platform.id}
                      onClick={() => setFormData(prev => ({ ...prev, platform: platform.id }))}
                      className={`p-4 rounded-xl border-2 transition-all text-left hover:border-primary/50 ${
                        formData.platform === platform.id 
                          ? "border-primary bg-primary/5" 
                          : "border-border"
                      }`}
                    >
                      <div className="font-semibold text-foreground">{platform.name}</div>
                      <div className="text-sm text-muted-foreground">{platform.aspect} aspect ratio</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground text-center">Upload Your Content</h2>
                <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary/50 transition-colors">
                  <input
                    type="file"
                    accept="image/*,video/*"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer block">
                    <div className="space-y-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                        <Upload className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <p className="text-lg font-medium text-foreground">
                          {formData.uploadedFile ? formData.uploadedFile.name : "Drop your file here"}
                        </p>
                        <p className="text-muted-foreground">
                          {formData.uploadedFile ? "File uploaded successfully!" : "Support for JPG, PNG, MP4 files"}
                        </p>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground text-center">Choose Your Vibe</h2>
                <div className="space-y-3">
                  {vibes.map((vibe) => (
                    <button
                      key={vibe.id}
                      onClick={() => setFormData(prev => ({ ...prev, vibe: vibe.id }))}
                      className={`w-full p-4 rounded-xl border-2 transition-all text-left hover:border-primary/50 ${
                        formData.vibe === vibe.id 
                          ? "border-primary bg-primary/5" 
                          : "border-border"
                      }`}
                    >
                      <div className="font-semibold text-foreground">{vibe.name}</div>
                      <div className="text-sm text-muted-foreground">{vibe.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground text-center">Add Your Headline</h2>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="headline" className="text-base font-medium">
                      Headline Text
                    </Label>
                    <Input
                      id="headline"
                      placeholder="e.g., INSANE RESULTS, TOP SECRET TRICK..."
                      value={formData.headline}
                      onChange={(e) => setFormData(prev => ({ ...prev, headline: e.target.value }))}
                      className="mt-2 text-lg py-3"
                    />
                  </div>
                  <div>
                    <Label htmlFor="hook" className="text-base font-medium">
                      Hook Text (Optional)
                    </Label>
                    <Input
                      id="hook"
                      placeholder="Additional text or subtitle..."
                      value={formData.hookText}
                      onChange={(e) => setFormData(prev => ({ ...prev, hookText: e.target.value }))}
                      className="mt-2"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <Button 
              variant="outline" 
              onClick={handleBack}
              disabled={currentStep === 1}
              className="px-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>

            {currentStep < 4 ? (
              <Button 
                onClick={handleNext}
                disabled={
                  (currentStep === 1 && !formData.platform) ||
                  (currentStep === 2 && !formData.uploadedFile) ||
                  (currentStep === 3 && !formData.vibe)
                }
                className="btn-primary px-6"
              >
                Continue
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button 
                className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-3 rounded-lg font-semibold group"
                disabled={!formData.headline}
                onClick={() => window.location.href = "/variants"}
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Generate Thumbnails
              </Button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Generate;