import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Gimana cara mulai pake FortSolve?',
      answer: 'Gampang banget! Cari @FortSolveBot di Telegram, terus ketik /start. Ikuti langkah registrasi, pilih paket Standard, dan kamu udah bisa langsung catat transaksi via chat!',
    },
    {
      question: 'Apakah ada free trial atau versi gratis?',
      answer: 'Untuk saat ini FortSolve gak ada free trial. Tapi kamu bisa request demo dulu dengan chat admin di Telegram atau kirim email ke support@fortsolve.com untuk liat cara kerja dan fitur lengkapnya.',
    },
    {
      question: 'Bagaimana cara catat transaksi di Telegram?',
      answer: 'Super simple! Tinggal chat ke bot dengan format yang udah disediakan. Contoh: "Beli bahan 50000" untuk pengeluaran, atau "Terima bayaran 100000" untuk pemasukan. Bot akan otomatis kategorikan dan simpan datanya.',
    },
    {
      question: 'Apakah data keuangan saya aman?',
      answer: 'Absolutely! Semua data di-enkripsi end-to-end. Kita juga gak share data kamu ke pihak ketiga manapun. Privacy dan keamanan data adalah prioritas utama FortSolve.',
    },
    {
      question: 'Bisa akses dari HP dan komputer?',
      answer: 'Bisa dong! Dashboard web FortSolve fully responsive. Kamu bisa akses dari HP, tablet, atau komputer. Data langsung tersinkronisasi real-time di semua device.',
    },
    {
      question: 'Metode pembayaran apa yang diterima?',
      answer: 'Pembayaran bisa via transfer bank (BCA, Mandiri, BRI, BNI) atau e-wallet (GoPay, OVO, DANA). Setelah subscribe, kamu akan dapat invoice dengan detail pembayaran.',
    },
    {
      question: 'Bisa export data ke Excel atau PDF?',
      answer: 'Tentu bisa! Semua laporan keuangan bisa di-download dalam format Excel (.xlsx) atau PDF. Kamu bisa export laporan harian, mingguan, bulanan, atau custom date range sesuai kebutuhan.',
    },
    {
      question: 'Apa bedanya paket Standard dengan Enterprise?',
      answer: 'Paket Standard cocok untuk individual atau UMKM kecil dengan 1 user. Enterprise untuk bisnis yang butuh multi user collaboration, role management, API access, dan dedicated support. Harga Enterprise disesuaikan dengan kebutuhan spesifik bisnis kamu.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl mb-4">
            Pertanyaan{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              yang Sering Ditanya
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Ada pertanyaan? Cek dulu di sini, siapa tau jawabannya udah ada
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-gray-600 transition-all overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="text-lg pr-8">{faq.question}</span>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Minus size={20} className="text-cyan-400" />
                    ) : (
                      <Plus size={20} className="text-gray-400" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5 text-gray-400 border-t border-gray-700/50 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
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
          <p className="text-gray-400 mb-4">Masih ada pertanyaan lain?</p>
          <a
            href="#cta"
            className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
          >
            Hubungi Kami
          </a>
        </motion.div>
      </div>
    </section>
  );
}
