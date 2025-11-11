import { motion } from 'motion/react';
import {
  Zap,
  Shield,
  BarChart3,
  Bell,
  Calendar,
  Wallet,
  FileText,
  TrendingUp,
  Clock,
  Users,
  Database,
  Smartphone,
} from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Zap,
      title: 'Input Cepat',
      description: 'Catat transaksi via chat Telegram, gak perlu buka app khusus',
      color: 'from-cyan-500 to-blue-600',
    },
    {
      icon: Shield,
      title: 'Data Aman',
      description: 'Enkripsi end-to-end, privacy kamu terjamin 100%',
      color: 'from-blue-500 to-purple-600',
    },
    {
      icon: BarChart3,
      title: 'Dashboard Lengkap',
      description: 'Visualisasi data keuangan dengan grafik yang mudah dipahami',
      color: 'from-purple-500 to-pink-600',
    },
    {
      icon: Calendar,
      title: 'Laporan Periodik',
      description: 'Laporan harian, mingguan, dan bulanan otomatis dikirim',
      color: 'from-rose-500 to-orange-600',
    },
    {
      icon: TrendingUp,
      title: 'Analisis Profit',
      description: 'Track profit margin & growth bisnis UMKM kamu',
      color: 'from-yellow-500 to-lime-600',
    },
    {
      icon: Clock,
      title: 'Real-time Update',
      description: 'Data langsung tersinkronisasi ke semua device',
      color: 'from-lime-500 to-green-600',
    },
    {
      icon: Users,
      title: 'Multi User',
      description: 'Kolaborasi dengan tim untuk bisnis UMKM (Enterprise)',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: Database,
      title: 'Export Data',
      description: 'Download laporan dalam format Excel/PDF kapan saja',
      color: 'from-emerald-500 to-teal-600',
    },
    {
      icon: Smartphone,
      title: 'Mobile Friendly',
      description: 'Akses dashboard dari HP, tablet, atau komputer',
      color: 'from-teal-500 to-cyan-600',
    },
  ];

  return (
    <section id="features" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gray-950" />

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
            Fitur yang{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Bikin Hidup Lebih Mudah
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Semua yang kamu butuhkan untuk mengatur keuangan, dalam satu platform
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all h-full">
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} mb-4`}>
                  <feature.icon size={24} className="text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl mb-2">{feature.title}</h3>

                {/* Description */}
                <p className="text-gray-400">{feature.description}</p>

                {/* Hover Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity blur-xl`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
