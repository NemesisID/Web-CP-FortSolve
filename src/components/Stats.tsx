import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Users, Building2, TrendingUp, Clock } from 'lucide-react';

function Counter({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return <div ref={countRef}>{count.toLocaleString('id-ID')}</div>;
}

export function Stats() {
  const stats = [
    {
      icon: Users,
      value: 1500,
      suffix: '+',
      label: 'Active Users',
      color: 'from-cyan-500 to-blue-600',
    },
    {
      icon: Building2,
      value: 500,
      suffix: '+',
      label: 'UMKM Terdaftar',
      color: 'from-blue-500 to-purple-600',
    },
    {
      icon: TrendingUp,
      value: 10000,
      suffix: '+',
      label: 'Transaksi/Bulan',
      color: 'from-purple-500 to-pink-600',
    },
    {
      icon: Clock,
      value: 95,
      suffix: '%',
      label: 'Waktu Hemat',
      color: 'from-pink-500 to-rose-600',
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all">
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} mb-4`}>
                  <stat.icon size={24} className="text-white" />
                </div>

                {/* Value */}
                <div className="text-3xl md:text-4xl mb-2">
                  <Counter end={stat.value} />
                  <span className="ml-1">{stat.suffix}</span>
                </div>

                {/* Label */}
                <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>

                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity blur-xl`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
