import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Operations Manager",
    company: "TechCorp",
    content:
      "StreamLine has saved our team 20+ hours per week. The automation capabilities are incredible and the support team is always helpful.",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "CEO",
    company: "Growth Labs",
    content:
      "We've reduced our manual data entry by 95%. StreamLine is a game-changer for any team looking to scale efficiently.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Product Lead",
    company: "Innovation Hub",
    content:
      "The intuitive interface makes it easy for non-technical team members to create powerful automations. Highly recommended!",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">Loved by Teams Worldwide</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our customers have to say about StreamLine.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow">
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>

              {/* Author */}
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
