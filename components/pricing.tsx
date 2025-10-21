import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "Perfect for small teams getting started",
    features: [
      "Up to 5 automations",
      "1,000 monthly executions",
      "Basic analytics",
      "Email support",
      "Community access",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$79",
    period: "/month",
    description: "For growing teams with advanced needs",
    features: [
      "Unlimited automations",
      "50,000 monthly executions",
      "Advanced analytics",
      "Priority email & chat support",
      "Custom integrations",
      "Team collaboration",
      "API access",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "For large organizations with custom needs",
    features: [
      "Everything in Professional",
      "Unlimited executions",
      "Dedicated account manager",
      "Custom SLA",
      "Advanced security",
      "On-premise deployment",
      "Custom training",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">Simple, Transparent Pricing</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your team. Always flexible to scale.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl border transition-all ${
                plan.highlighted
                  ? "border-primary bg-primary/5 shadow-xl scale-105 md:scale-100 lg:scale-105"
                  : "border-border bg-card hover:shadow-lg"
              } p-8`}
            >
              {plan.highlighted && (
                <div className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Most Popular
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground ml-2">{plan.period}</span>
              </div>

              {/* CTA Button */}
              <Button className="w-full mb-8" variant={plan.highlighted ? "default" : "outline"} size="lg">
                {plan.cta}
              </Button>

              {/* Features List */}
              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Note */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All plans include a 14-day free trial. No credit card required.{" "}
            <a href="#" className="text-primary hover:underline font-medium">
              View FAQ
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
