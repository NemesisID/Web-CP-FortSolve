import { motion } from 'motion/react';
import { Check, Sparkles, Building2 } from 'lucide-react';

export function Pricing() {
  const plans = [
    {
      name: 'Standard',
      price: '50.000',
      period: '/bulan',
      description: 'Perfect untuk UMKM & keuangan pribadi',
      icon: Sparkles,
      gradient: 'from-cyan-500 to-blue-600',
      popular: true,
      features: [
        'Unlimited transaksi',
        'Telegram bot access',
        'Dashboard web lengkap',
        'Multi akun & kategori',
        'Laporan otomatis',
        'Export Excel/PDF',
        'Real-time sync',
        'Reminder & notifikasi',
        'Data encryption',
        'Support via email',
        'Mobile responsive',
        'Update fitur gratis',
      ],
      cta: 'Mulai Berlangganan',
      highlight: 'Paling Populer',
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Untuk bisnis dengan kebutuhan khusus',
      icon: Building2,
      gradient: 'from-purple-500 to-pink-600',
      popular: false,
      features: [
        'Semua fitur Standard',
        'Multi user collaboration',
        'Role & permission management',
        'Custom kategori unlimited',
        'API access',
        'White-label option',
        'Dedicated support',
        'Custom integration',
        'Advanced analytics',
        'Priority updates',
        'SLA guarantee',
        'Training & onboarding',
      ],
      cta: 'Hubungi Sales',
      highlight: 'Untuk Tim',
    },
  ];

  return (
    <section id="pricing" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
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
            Pricing yang{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Transparan
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan kamu. No hidden fees!
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className={`px-4 py-1 bg-gradient-to-r ${plan.gradient} rounded-full text-sm flex items-center space-x-1`}>
                    <span>{plan.highlight}</span>
                  </div>
                </div>
              )}

              <div className={`relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border ${plan.popular ? 'border-cyan-500/50' : 'border-gray-700'} hover:border-gray-600 transition-all h-full flex flex-col`}>
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${plan.gradient} mb-4 w-fit`}>
                  <plan.icon size={24} className="text-white" />
                </div>

                {/* Plan Name */}
                <h3 className="text-2xl mb-2">{plan.name}</h3>

                {/* Description */}
                <p className="text-gray-400 mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-6">
                  {plan.price === 'Custom' ? (
                    <div className="text-4xl">Custom</div>
                  ) : (
                    <div className="flex items-baseline">
                      <span className="text-sm text-gray-400 mr-1">Rp</span>
                      <span className="text-4xl">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <a
                  href={plan.name === 'Enterprise' ? '#cta' : '#cta'}
                  className={`w-full py-3 rounded-lg text-center transition-all mb-8 ${
                    plan.popular
                      ? `bg-gradient-to-r ${plan.gradient} hover:shadow-lg hover:shadow-cyan-500/50`
                      : 'border border-gray-700 hover:border-gray-600 hover:bg-gray-800/50'
                  }`}
                >
                  {plan.cta}
                </a>

                {/* Features */}
                <div className="space-y-3 flex-1">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <div className={`p-1 rounded-full bg-gradient-to-br ${plan.gradient} flex-shrink-0 mt-0.5`}>
                        <Check size={12} className="text-white" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity blur-xl`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400">
            Semua harga sudah termasuk PPN. Pembayaran via transfer bank atau e-wallet.
          </p>
          <p className="text-gray-500 mt-2 text-sm">
            Tidak ada free trial. Untuk demo, silakan hubungi admin atau kirim email.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
