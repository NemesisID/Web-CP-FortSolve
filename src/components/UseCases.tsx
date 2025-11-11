import { motion } from 'motion/react';
import { Store, User, ShoppingBag, Coffee, Truck, Heart } from 'lucide-react';

export function UseCases() {
  const useCases = [
    {
      icon: Store,
      category: 'UMKM',
      title: 'Toko Retail & Online Shop',
      description: 'Track penjualan harian, stok barang, dan profit dengan mudah. Perfect untuk seller di marketplace.',
      benefits: ['Catat penjualan real-time', 'Monitor stok & modal', 'Laporan profit/loss otomatis'],
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      icon: Coffee,
      category: 'UMKM',
      title: 'F&B & Kuliner',
      description: 'Kelola transaksi warung, cafe, atau usaha katering. Pisahkan modal bahan dengan profit bersih.',
      benefits: ['Input transaksi cepat', 'Kategori per menu', 'Analisis best seller'],
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      icon: Truck,
      category: 'UMKM',
      title: 'Jasa & Freelance',
      description: 'Buat yang suka project-based atau jasa. Track income dari berbagai klien & project.',
      benefits: ['Multi project tracking', 'Invoice & payment reminder', 'Cash flow monitoring'],
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      icon: User,
      category: 'Personal',
      title: 'Keuangan Pribadi',
      description: 'Atur gaji, cicilan, dan pengeluaran harian. Bikin budget plan yang realistis.',
      benefits: ['Budget per kategori', 'Track cicilan & tagihan', 'Saving goals'],
      gradient: 'from-pink-500 to-rose-600',
    },
    {
      icon: Heart,
      category: 'Personal',
      title: 'Ibu Rumah Tangga',
      description: 'Kelola uang belanja bulanan, tabungan keluarga, dan dana darurat dengan rapi.',
      benefits: ['Belanja tracking', 'Tabungan keluarga', 'Reminder kebutuhan rutin'],
      gradient: 'from-rose-500 to-orange-600',
    },
    {
      icon: ShoppingBag,
      category: 'Personal',
      title: 'Mahasiswa & Gen Z',
      description: 'Manage uang saku, uang jajan, dan nabung buat goals kamu. Anti bokek!',
      benefits: ['Simple expense tracking', 'Saving challenge', 'Lifestyle budgeting'],
      gradient: 'from-orange-500 to-amber-600',
    },
  ];

  return (
    <section id="use-cases" className="relative py-20 md:py-32 overflow-hidden">
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
            Cocok Untuk{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Semua Orang
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Dari pebisnis UMKM sampai yang mau manage keuangan pribadi, FortSolve punya solusinya
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all h-full flex flex-col">
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 bg-gradient-to-r ${useCase.gradient} rounded-full text-xs`}>
                    {useCase.category}
                  </span>
                </div>

                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${useCase.gradient} mb-4 w-fit`}>
                  <useCase.icon size={24} className="text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl mb-3">{useCase.title}</h3>

                {/* Description */}
                <p className="text-gray-400 mb-4">{useCase.description}</p>

                {/* Benefits */}
                <div className="mt-auto space-y-2">
                  {useCase.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start space-x-2">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${useCase.gradient} mt-2`} />
                      <span className="text-sm text-gray-400">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity blur-xl`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
