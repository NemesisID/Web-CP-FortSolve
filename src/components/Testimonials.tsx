import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Budi Santoso',
      role: 'Owner Warung Kopi "Ngopi Yuk"',
      type: 'UMKM',
      avatar: 'BS',
      rating: 5,
      text: 'Dulu ribet banget catat penjualan tiap hari, sering lupa juga. Sekarang tinggal chat di Telegram, langsung kerecord. Dashboard-nya juga enak diliat, jadi tau menu mana yang paling laku.',
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      name: 'Siti Rahmawati',
      role: 'Online Shop Fashion',
      type: 'UMKM',
      avatar: 'SR',
      rating: 5,
      text: 'Jualan di 3 marketplace sekaligus, dulu pusing atur cashflow-nya. FortSolve bantuin banget! Semua transaksi dari berbagai platform bisa di-track dengan rapi. Profit jadi keliatan jelas!',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      name: 'Andi Wijaya',
      role: 'Mahasiswa & Freelancer',
      type: 'Personal',
      avatar: 'AW',
      rating: 5,
      text: 'Sebagai mahasiswa yang juga freelance, butuh banget track income & expense yang simple. FortSolve perfect! Gak ribet, tinggal chat aja. Sekarang uang jajan & hasil freelance gak campur aduk lagi.',
      gradient: 'from-orange-500 to-amber-600',
    },
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
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
            Kata{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Mereka
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Dengerin pengalaman user FortSolve yang udah merasakan manfaatnya
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all h-full flex flex-col">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote size={48} className="text-white" />
                </div>

                {/* Rating */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className={`fill-current text-yellow-500`} />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-300 mb-6 flex-1 relative z-10">
                  "{testimonial.text}"
                </p>

                {/* User Info */}
                <div className="flex items-center space-x-3">
                  {/* Avatar */}
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white">{testimonial.avatar}</span>
                  </div>

                  {/* Name & Role */}
                  <div className="flex-1">
                    <div className="font-medium">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>

                  {/* Type Badge */}
                  <div className={`px-3 py-1 bg-gradient-to-r ${testimonial.gradient} rounded-full text-xs flex-shrink-0`}>
                    {testimonial.type}
                  </div>
                </div>

                {/* Hover Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity blur-xl`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
