import { motion } from 'motion/react';
import { Send, MessageSquare, BarChart3, Download } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: Send,
      number: '01',
      title: 'Mulai Chat di Telegram',
      description: 'Cari @FortSolveBot di Telegram dan mulai chat. Daftar akun dengan perintah /start',
      color: 'from-cyan-500 to-blue-600',
    },
    {
      icon: MessageSquare,
      number: '02',
      title: 'Catat Transaksi',
      description: 'Tinggal kirim pesan format sederhana. Contoh: "Beli bahan 50rb" atau "Terima pembayaran 100rb"',
      color: 'from-blue-500 to-purple-600',
    },
    {
      icon: BarChart3,
      number: '03',
      title: 'Cek Dashboard',
      description: 'Buka dashboard web untuk lihat laporan lengkap, grafik, dan analisis keuangan kamu',
      color: 'from-purple-500 to-pink-600',
    },
    {
      icon: Download,
      number: '04',
      title: 'Export Laporan',
      description: 'Download laporan keuangan dalam format Excel/PDF kapan aja kamu butuh',
      color: 'from-pink-500 to-rose-600',
    },
  ];

  return (
    <section id="how-it-works" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl mb-4">
            Cara Kerja{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              FortSolve
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Simple banget! Cuma 4 langkah dan keuangan kamu udah ter-manage dengan rapi
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector Line - Hidden on last item and mobile */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-gray-700 to-transparent -translate-x-8" />
              )}

              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all group">
                {/* Number Badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-gray-400">{step.number}</span>
                </div>

                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${step.color} mb-6`}>
                  <step.icon size={28} className="text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl mb-3">{step.title}</h3>

                {/* Description */}
                <p className="text-gray-400">{step.description}</p>

                {/* Hover Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity blur-xl`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-6">
            Butuh bantuan atau mau tanya-tanya dulu?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@fortsolve.com"
              className="px-6 py-3 border border-gray-700 rounded-lg hover:border-cyan-500 hover:bg-cyan-500/5 transition-all"
            >
              Email: support@fortsolve.com
            </a>
            <a
              href="https://t.me/fortsolve_admin"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
            >
              Chat Admin di Telegram
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
