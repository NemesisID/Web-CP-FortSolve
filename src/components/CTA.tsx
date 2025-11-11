import { motion } from 'motion/react';
import { Send, Mail, ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section id="cta" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gray-950" />
      
      {/* Decorative Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-gray-700 relative overflow-hidden"
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-3xl" />

          <div className="relative z-10 text-center">

            {/* Heading */}
            <h2 className="text-3xl md:text-5xl mb-4">
              Ready to{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                Transform
              </span>{' '}
              Your Finance?
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Mulai kelola keuangan dengan cara yang lebih smart, simple, dan efisien.
              Join ribuan user yang udah merasakan kemudahan FortSolve!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all flex items-center space-x-2"
              >
                <span>Hubungi Kami</span>
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="mailto:support@fortsolve.com"
                className="px-8 py-4 border border-gray-700 rounded-lg hover:border-cyan-500 hover:bg-cyan-500/5 transition-all flex items-center space-x-2"
              >
                <Mail size={20} />
                <span>Email Kami</span>
              </a>
            </div>

            {/* Contact Info */}
            <div className="pt-8 border-t border-gray-700">
              <p className="text-gray-400">
                Butuh konsultasi atau request demo?
                <br /> Hubungi contact diatas
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
