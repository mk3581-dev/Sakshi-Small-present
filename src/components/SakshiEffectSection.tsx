import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Sun, Music, Heart, MessageCircle, Ear, Sparkles, Star } from 'lucide-react';

const effects = [
  {
    icon: Sun,
    title: "Her smile",
    description: "Feels like sunlight breaking through clouds",
    color: "from-amber-200/30 to-orange-200/30",
  },
  {
    icon: Music,
    title: "Her laugh",
    description: "Has the power to fix the worst days",
    color: "from-pink-200/30 to-rose-200/30",
  },
  {
    icon: Heart,
    title: "Her presence",
    description: "Brings comfort without saying a word",
    color: "from-red-200/30 to-pink-200/30",
  },
  {
    icon: MessageCircle,
    title: "The way she talks",
    description: "Makes every conversation feel important",
    color: "from-blue-200/30 to-indigo-200/30",
  },
  {
    icon: Ear,
    title: "The way she listens",
    description: "Like you're the only person in the room",
    color: "from-purple-200/30 to-violet-200/30",
  },
  {
    icon: Sparkles,
    title: "Her energy",
    description: "Turns ordinary moments into memories",
    color: "from-yellow-200/30 to-amber-200/30",
  },
];

const SakshiEffectSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-background via-peach/10 to-background">
      {/* Decorative elements */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-blush/15 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-lavender/15 rounded-full blur-3xl" />

      {/* Floating animated decorations */}
      <motion.div
        className="absolute top-24 left-[12%] text-primary/20"
        animate={{ y: [-15, 15, -15], rotate: [0, 360] }}
        transition={{ y: { duration: 4, repeat: Infinity }, rotate: { duration: 15, repeat: Infinity, ease: "linear" } }}
      >
        <Star className="w-8 h-8 fill-current" />
      </motion.div>
      <motion.div
        className="absolute top-40 right-[10%] text-rose-gold/25"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Heart className="w-10 h-10 fill-current" />
      </motion.div>
      <motion.div
        className="absolute bottom-32 left-[8%] text-peach/30"
        animate={{ y: [10, -10, 10], x: [-5, 5, -5] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <Sparkles className="w-9 h-9" />
      </motion.div>
      <motion.div
        className="absolute bottom-48 right-[15%] text-lavender/40"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Sun className="w-7 h-7" />
      </motion.div>

      <div className="container relative z-10 px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring", bounce: 0.6 }}
            className="inline-flex items-center gap-2 mb-2"
          >
            <motion.div animate={{ rotate: [0, 20, -20, 0] }} transition={{ duration: 2, repeat: Infinity }}>
              <Sparkles className="w-5 h-5 text-rose-gold" />
            </motion.div>
            <span className="font-handwritten text-2xl md:text-3xl text-rose-gold">The Sakshi Effect</span>
            <motion.div animate={{ rotate: [0, -20, 20, 0] }} transition={{ duration: 2, repeat: Infinity }}>
              <Sparkles className="w-5 h-5 text-rose-gold" />
            </motion.div>
          </motion.div>
          <h2 className="font-display text-3xl md:text-5xl font-semibold mt-2 text-foreground">
            Little Things About Her
          </h2>
        </motion.div>

        {/* Effects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {effects.map((effect, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div className="glass-card rounded-2xl p-6 h-full transition-all duration-500 hover:shadow-glow relative overflow-hidden">
                {/* Animated background gradient on hover */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${effect.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                
                <div className="flex items-start gap-4 relative z-10">
                  {/* Icon with animations */}
                  <div className="flex-shrink-0">
                    <motion.div 
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-lavender/20 flex items-center justify-center"
                      animate={hoveredIndex === index ? { 
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, -10, 0]
                      } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      <effect.icon className="w-6 h-6 text-primary" />
                    </motion.div>
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                      {effect.title}
                    </h3>
                    <p className="font-body text-muted-foreground">
                      {effect.description}
                    </p>
                  </div>
                </div>

                {/* Sparkle on hover */}
                {hoveredIndex === index && (
                  <motion.div
                    className="absolute top-2 right-2"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <Sparkles className="w-4 h-4 text-primary" />
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Quote with animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center mt-16 relative"
        >
          {/* Floating hearts around quote */}
          <motion.div
            className="absolute -left-4 top-0 text-primary/20"
            animate={{ y: [-5, 5, -5], x: [-3, 3, -3] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Heart className="w-5 h-5 fill-current" />
          </motion.div>
          <motion.div
            className="absolute -right-4 bottom-0 text-rose-gold/20"
            animate={{ y: [5, -5, 5], x: [3, -3, 3] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Heart className="w-6 h-6 fill-current" />
          </motion.div>
          
          <motion.p 
            className="font-handwritten text-2xl md:text-3xl text-primary/80 max-w-2xl mx-auto"
            animate={{ scale: [1, 1.01, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            "Some people have this magic — they don't just exist in your life, 
            they make it better just by being themselves."
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default SakshiEffectSection;
