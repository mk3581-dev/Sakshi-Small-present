import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Feather, Sparkles, Star } from 'lucide-react';

const LetterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-blush opacity-50" />
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-lavender/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-peach/20 rounded-full blur-3xl" />

      {/* Floating animated elements */}
      <motion.div
        className="absolute top-20 right-[15%] text-primary/25"
        animate={{ 
          y: [-15, 15, -15],
          rotate: [0, 10, -10, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Heart className="w-10 h-10 fill-current" />
      </motion.div>
      <motion.div
        className="absolute top-40 left-[10%] text-rose-gold/30"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Sparkles className="w-8 h-8" />
      </motion.div>
      <motion.div
        className="absolute bottom-40 left-[20%] text-peach/40"
        animate={{ y: [10, -10, 10], x: [-5, 5, -5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Star className="w-6 h-6 fill-current" />
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-[25%] text-lavender/40"
        animate={{ y: [-10, 10, -10], scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Heart className="w-7 h-7 fill-current" />
      </motion.div>

      {/* Animated feather pen */}
      <motion.div
        className="absolute top-32 right-[8%] text-primary/20"
        animate={{ 
          rotate: [-5, 5, -5],
          y: [-5, 5, -5]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <Feather className="w-12 h-12" />
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
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
              className="inline-flex items-center gap-3 mb-2"
            >
              <Feather className="w-5 h-5 text-rose-gold" />
              <span className="font-handwritten text-2xl md:text-3xl text-rose-gold">What I Want to Say</span>
              <Feather className="w-5 h-5 text-rose-gold transform -scale-x-100" />
            </motion.div>
            <h2 className="font-display text-3xl md:text-5xl font-semibold mt-2 text-foreground">
              A Letter From Me
            </h2>
          </motion.div>

          {/* Letter Card */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotateX: 10 }}
            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            whileHover={{ scale: 1.01, rotate: 0.5 }}
            className="relative"
          >
            {/* Paper texture effect */}
            <div className="absolute inset-0 bg-cream/80 rounded-3xl shadow-dreamy transform rotate-1" />
            <div className="absolute inset-0 bg-cream/90 rounded-3xl shadow-soft transform -rotate-1" />
            
            <div className="relative bg-card/95 rounded-3xl p-8 md:p-12 shadow-lg border border-primary/10 overflow-hidden">
              {/* Decorative stamp with animation */}
              <motion.div 
                className="absolute top-6 right-6 w-16 h-16 rounded-full border-2 border-dashed border-primary/30 flex items-center justify-center"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <motion.span 
                  className="font-handwritten text-xs text-primary/50"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  with love
                </motion.span>
              </motion.div>

              {/* Floating hearts inside letter */}
              <motion.div
                className="absolute top-20 left-8 text-primary/10"
                animate={{ y: [-5, 5, -5], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 fill-current" />
              </motion.div>
              <motion.div
                className="absolute bottom-32 right-12 text-rose-gold/10"
                animate={{ y: [5, -5, 5], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              >
                <Heart className="w-5 h-5 fill-current" />
              </motion.div>

              <div className="font-handwritten text-xl md:text-2xl leading-relaxed text-foreground/90 space-y-6">
                <motion.p 
                  className="text-2xl md:text-3xl text-primary"
                  animate={{ x: [0, 2, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Dear Sakshi,
                </motion.p>
                
                <p>
                  I know our time together was short — just a semester, really. But isn't it funny 
                  how some connections don't need years to feel real? Ours didn't.
                </p>
                
                <p>
                  From the moment we started talking, there was this ease — like we'd known each 
                  other longer than we actually had. You have this way of making people feel 
                  comfortable, of turning strangers into friends without even trying.
                </p>
                
                <p>
                  Thank you for the laughs that came out of nowhere. For the conversations that 
                  went deeper than expected. For being genuinely kind in a world that sometimes 
                  forgets what that looks like.
                </p>
                
                <p>
                  Thank you for being you — unapologetically, beautifully, wonderfully you. 
                  For the energy you bring, the calm you carry, and the light you share without 
                  even knowing it.
                </p>
                
                <p>
                  I don't know what the next semester holds. Maybe we'll see each other every 
                  day, maybe we won't. But I want you to know — this friendship, however brief, 
                  meant something. It still does.
                </p>
                
                <p className="pt-4">
                  I'm truly, genuinely glad our paths crossed.
                </p>
                
                <div className="pt-6 text-right">
                  <motion.p 
                    className="text-2xl md:text-3xl text-primary inline-flex items-center gap-2"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    With warmth & gratitude,
                    <Heart className="w-5 h-5 fill-primary/50 text-primary" />
                  </motion.p>
                  <p className="text-xl md:text-2xl mt-2">Your friend</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LetterSection;
