import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Sparkles, Star } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-soft-pink/20 to-background" />
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-lavender/20 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-peach/20 rounded-full blur-3xl" />

      {/* Floating animated decorations */}
      <motion.div
        className="absolute top-20 left-[10%] text-primary/20"
        animate={{ y: [-20, 20, -20], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Heart className="w-8 h-8 fill-current" />
      </motion.div>
      <motion.div
        className="absolute top-40 right-[15%] text-rose-gold/30"
        animate={{ y: [20, -20, 20], scale: [1, 1.2, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Star className="w-6 h-6 fill-current" />
      </motion.div>
      <motion.div
        className="absolute bottom-32 left-[20%] text-peach/40"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Sparkles className="w-10 h-10" />
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-[10%] text-lavender/50"
        animate={{ y: [-10, 10, -10], x: [10, -10, 10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Heart className="w-6 h-6 fill-current" />
      </motion.div>

      <div className="container relative z-10 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.3, type: "spring", bounce: 0.5 }}
              className="inline-flex items-center gap-2 mb-2"
            >
              <motion.div animate={{ rotate: [0, 20, -20, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                <Heart className="w-5 h-5 text-primary fill-primary/50" />
              </motion.div>
              <span className="font-handwritten text-2xl md:text-3xl text-rose-gold">Who She Is</span>
              <motion.div animate={{ rotate: [0, -20, 20, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                <Heart className="w-5 h-5 text-primary fill-primary/50" />
              </motion.div>
            </motion.div>
            <h2 className="font-display text-3xl md:text-5xl font-semibold mt-2 text-foreground">
              The Girl Who Brightened Days
            </h2>
          </motion.div>

          {/* Glass Card */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.01 }}
            className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden group"
          >
            {/* Animated corner decorations */}
            <motion.div 
              className="absolute -top-2 -left-2 text-primary/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-8 h-8" />
            </motion.div>
            <motion.div 
              className="absolute -bottom-2 -right-2 text-rose-gold/30"
              animate={{ rotate: -360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            >
              <Star className="w-8 h-8 fill-current" />
            </motion.div>

            {/* Shimmer effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

            <div className="space-y-6 text-lg md:text-xl leading-relaxed text-foreground/90 relative">
              <p className="first-letter:text-5xl first-letter:font-display first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                There are people who enter your life like a soft breeze — gentle, unexpected, and somehow 
                exactly what you needed. Sakshi is one of those rare souls.
              </p>
              
              <p>
                Her kindness isn't loud; it's in the way she listens, really listens, when you speak. 
                It's in the warmth of her smile that somehow makes even the most ordinary moments feel 
                a little more special.
              </p>
              
              <p>
                There's a certain calmness she carries — like a quiet reassurance that everything will 
                be okay. And her energy? It's contagious. The kind that makes you want to laugh a 
                little louder and worry a little less.
              </p>
              
              <motion.p 
                className="font-display italic text-primary text-center text-xl md:text-2xl pt-4"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                "Some friendships don't need years to feel like home. 
                <br />Ours is proof of that."
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
