import { Mail, Linkedin, Twitter, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-background rounded-lg flex items-center justify-center">
                <span className="font-bold text-foreground text-lg">S</span>
              </div>
              <span className="font-bold text-xl">StreamLine</span>
            </div>
            <p className="text-background/70 text-sm">Automate your workflow and amplify your impact.</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="#" className="hover:text-background transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="#" className="hover:text-background transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="#" className="hover:text-background transition">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Cookies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/70">© 2025 StreamLine. All rights reserved.</p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-background/70 hover:text-background transition" aria-label="Email">
              <Mail size={20} />
            </a>
            <a href="#" className="text-background/70 hover:text-background transition" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-background/70 hover:text-background transition" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-background/70 hover:text-background transition" aria-label="GitHub">
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
