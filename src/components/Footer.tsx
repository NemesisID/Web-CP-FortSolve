import { Send, Mail, Instagram, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: 'Fitur', href: '#features' },
      { name: 'Cara Kerja', href: '#how-it-works' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Use Cases', href: '#use-cases' },
    ],
    support: [
      { name: 'FAQ', href: '#faq' },
      { name: 'Dokumentasi', href: '#' },
      { name: 'Tutorial', href: '#' },
      { name: 'Contact', href: '#cta' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Send, href: 'https://t.me/fortsolve_admin', label: 'Telegram' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="relative bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white">F</span>
              </div>
              <span className="text-xl">FortSolve</span>
            </a>
            <p className="text-gray-400 mb-6 max-w-sm">
              Platform otomasi pencatatan keuangan untuk UMKM dan keuangan pribadi via Telegram bot.
              Simple, smart, dan efisien.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon size={18} className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-white mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © {currentYear} FortSolve. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm">
            <a
              href="mailto:support@fortsolve.com"
              className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center space-x-2"
            >
              <Mail size={16} />
              <span>support@fortsolve.com</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
