import { Button } from "@/components/ui/button";
import { Check, Star, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for trying out ThumbBoost",
    features: [
      "5 thumbnails per month",
      "3 variants per generation",
      "Basic platform optimization",
      "Community support",
      "720p downloads"
    ],
    popular: false,
    cta: "Get Started Free"
  },
  {
    name: "Creator",
    price: "$19",
    period: "/month",
    description: "For serious content creators",
    features: [
      "100 thumbnails per month",
      "6 variants per generation",
      "All platform optimizations",
      "Priority support",
      "4K downloads",
      "Custom branding",
      "A/B testing insights"
    ],
    popular: true,
    cta: "Start Creating"
  },
  {
    name: "Team",
    price: "$49",
    period: "/month",
    description: "For agencies and teams",
    features: [
      "Unlimited thumbnails",
      "6 variants per generation",
      "Team collaboration",
      "API access",
      "Custom templates",
      "Priority support",
      "Analytics dashboard",
      "White-label options"
    ],
    popular: false,
    cta: "Contact Sales"
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="w-full py-20 lg:py-32 bg-muted/30">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start free, upgrade when you're ready. No hidden fees, cancel anytime.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-card rounded-2xl border p-8 transition-all duration-300 hover:shadow-elegant ${
                plan.popular 
                  ? 'border-primary shadow-elegant scale-105' 
                  : 'border-border hover:border-primary/50'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center space-y-4 mb-8">
                <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                <div className="space-y-2">
                  <div className="flex items-end justify-center space-x-1">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    {plan.period && (
                      <span className="text-muted-foreground text-lg">{plan.period}</span>
                    )}
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button 
                className={`w-full ${
                  plan.popular 
                    ? 'btn-primary' 
                    : 'btn-secondary border-border hover:border-primary/50'
                }`}
              >
                {plan.cta}
                {plan.popular && <Zap className="ml-2 w-4 h-4" />}
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12 space-y-4">
          <p className="text-muted-foreground">
            All plans include our core AI generation engine and regular updates.
          </p>
          <div className="flex justify-center items-center space-x-6 text-sm text-muted-foreground">
            <span className="flex items-center space-x-1">
              <Check className="w-4 h-4 text-success" />
              <span>30-day money back guarantee</span>
            </span>
            <span className="flex items-center space-x-1">
              <Check className="w-4 h-4 text-success" />
              <span>No setup fees</span>
            </span>
            <span className="flex items-center space-x-1">
              <Check className="w-4 h-4 text-success" />
              <span>Cancel anytime</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;