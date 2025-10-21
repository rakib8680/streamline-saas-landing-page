import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-primary to-primary/95 text-primary-foreground py-20 md:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium">
              ✨ Streamline Your Workflow
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Automate Your Work, Amplify Your Impact
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed text-balance">
              StreamLine helps teams eliminate repetitive tasks and focus on what matters most. Build powerful
              automations without writing a single line of code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-accent text-accent-foreground hover:opacity-90 gap-2">
                Start Free Trial <ArrowRight size={20} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                Watch Demo
              </Button>
            </div>
            <p className="text-sm text-primary-foreground/70">No credit card required. 14-day free trial.</p>
          </div>

          {/* Right Visual */}
          <div className="hidden md:block">
            <div className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl p-8 border border-primary-foreground/10">
              <div className="space-y-4">
                <div className="h-3 bg-primary-foreground/20 rounded w-3/4"></div>
                <div className="h-3 bg-primary-foreground/20 rounded w-full"></div>
                <div className="h-3 bg-primary-foreground/20 rounded w-5/6"></div>
                <div className="pt-4 space-y-3">
                  <div className="flex gap-2">
                    <div className="w-12 h-12 bg-accent/30 rounded-lg"></div>
                    <div className="flex-1 space-y-2">
                      <div className="h-2 bg-primary-foreground/20 rounded w-3/4"></div>
                      <div className="h-2 bg-primary-foreground/20 rounded w-1/2"></div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-12 h-12 bg-accent/30 rounded-lg"></div>
                    <div className="flex-1 space-y-2">
                      <div className="h-2 bg-primary-foreground/20 rounded w-3/4"></div>
                      <div className="h-2 bg-primary-foreground/20 rounded w-1/2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
