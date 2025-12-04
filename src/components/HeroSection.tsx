import { motion } from 'framer-motion';
import { Heart, Star, Sparkles } from 'lucide-react';

const FloatingHeart = ({ delay, x, size = 16 }: { delay: number; x: string; size?: number }) => (
  <motion.div
    className="absolute text-primary/40"
    style={{ left: x, bottom: '20%' }}
    initial={{ y: 0, opacity: 0, scale: 0 }}
    animate={{ 
      y: [-20, -100, -200],
      opacity: [0, 1, 0],
      scale: [0.5, 1, 0.5],
    }}
    transition={{ 
      duration: 4,
      delay,
      repeat: Infinity,
      ease: "easeOut"
    }}
  >
    <Heart className="fill-current" style={{ width: size, height: size }} />
  </motion.div>
);

const FloatingStar = ({ delay, x, y }: { delay: number; x: string; y: string }) => (
  <motion.div
    className="absolute text-rose-gold/50"
    style={{ left: x, top: y }}
    animate={{ 
      scale: [1, 1.5, 1],
      opacity: [0.3, 0.8, 0.3],
      rotate: [0, 180, 360]
    }}
    transition={{ 
      duration: 3,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    <Star className="w-4 h-4 fill-current" />
  </motion.div>
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-heavenly">
      {/* Soft gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-blush/30 via-transparent to-lavender/20" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-peach/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-lavender/30 rounded-full blur-3xl" />
      
      {/* Floating stars background */}
      <FloatingStar delay={0} x="10%" y="20%" />
      <FloatingStar delay={1} x="85%" y="15%" />
      <FloatingStar delay={2} x="75%" y="70%" />
      <FloatingStar delay={0.5} x="20%" y="60%" />
      <FloatingStar delay={1.5} x="90%" y="40%" />
      <FloatingStar delay={2.5} x="5%" y="80%" />

      {/* Floating hearts */}
      <FloatingHeart delay={0} x="15%" size={20} />
      <FloatingHeart delay={1.5} x="80%" size={16} />
      <FloatingHeart delay={3} x="25%" size={14} />
      <FloatingHeart delay={2} x="70%" size={18} />
      <FloatingHeart delay={4} x="50%" size={22} />
      
      <div className="container relative z-20 px-6 py-20">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Decorative element with bounce */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", type: "spring", bounce: 0.4 }}
            className="mb-8"
          >
            <motion.span 
              className="font-handwritten text-2xl text-rose-gold inline-flex items-center gap-2"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-5 h-5 text-primary animate-pulse" />
              A little gift from this semester
              <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            </motion.span>
          </motion.div>

          {/* Main Title with letter animation */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold mb-6 text-foreground"
          >
            For{' '}
            <motion.span 
              className="text-gradient italic inline-block"
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(224, 122, 141, 0.3)",
                  "0 0 40px rgba(224, 122, 141, 0.5)",
                  "0 0 20px rgba(224, 122, 141, 0.3)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Sakshi
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-xl md:text-2xl lg:text-3xl text-muted-foreground italic mb-12 max-w-2xl"
          >
            "Some people walk in quietly… and change everything."
          </motion.p>

          {/* Glowing Photo Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.6, type: "spring" }}
            whileHover={{ scale: 1.02, rotate: 2 }}
            className="relative"
          >
            <div className="photo-frame-glow rounded-3xl overflow-hidden">
              <div className="p-2 bg-card/80 backdrop-blur-sm rounded-3xl">
                <img
                  src="/sakshi-5.jpg"
                  alt="Sakshi"
                  className="w-64 h-80 md:w-80 md:h-96 object-cover rounded-2xl"
                />
              </div>
            </div>
            
            {/* Orbiting hearts around photo */}
            <motion.div
              className="absolute -top-4 -right-4"
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity }
              }}
            >
              <Heart className="w-8 h-8 text-primary fill-primary/50" />
            </motion.div>
            
            <motion.div
              className="absolute -bottom-3 -left-3"
              animate={{ 
                rotate: -360,
                scale: [1, 1.3, 1]
              }}
              transition={{ 
                rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                scale: { duration: 2.5, repeat: Infinity, delay: 0.5 }
              }}
            >
              <Star className="w-6 h-6 text-rose-gold fill-rose-gold/50" />
            </motion.div>

            {/* Sparkle burst on corners */}
            <motion.div
              className="absolute top-4 left-4"
              animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              <Sparkles className="w-5 h-5 text-peach" />
            </motion.div>
            
            {/* Floating decorative elements */}
            <motion.div
              animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-12 h-12 bg-peach/60 rounded-full blur-sm"
            />
            <motion.div
              animate={{ y: [10, -10, 10], x: [5, -5, 5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 w-8 h-8 bg-lavender/60 rounded-full blur-sm"
            />
          </motion.div>

          {/* Scroll indicator with bounce */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-muted-foreground"
            >
              <motion.span 
                className="font-handwritten text-lg"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                scroll gently
              </motion.span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-5 h-5 text-primary fill-primary/30" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
