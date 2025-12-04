import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Heart, Star, Sparkles } from 'lucide-react';
import sakshi1 from '@/assets/sakshi-1.jpg';
import sakshi2 from '@/assets/sakshi-2.jpg';
import sakshi3 from '@/assets/sakshi-3.jpg';
import sakshi4 from '@/assets/sakshi-4.jpg';
import sakshi7 from '@/assets/sakshi-7.jpg';
import sakshi8 from '@/assets/sakshi-8.jpg';

const memories = [
  {
    image: sakshi3,
    caption: "This moment deserved its own constellation.",
    rotation: -3,
    size: 'large',
  },
  {
    image: sakshi7,
    caption: "A small memory… but it stayed.",
    rotation: 2,
    size: 'medium',
  },
  {
    image: sakshi1,
    caption: "Warmth that words can't quite capture.",
    rotation: -2,
    size: 'medium',
  },
  {
    image: sakshi2,
    caption: "Some smiles echo longer than others.",
    rotation: 4,
    size: 'large',
  },
  {
    image: sakshi4,
    caption: "Elegance in every frame.",
    rotation: -4,
    size: 'medium',
  },
  {
    image: sakshi8,
    caption: "Moments turned into memories.",
    rotation: 1,
    size: 'medium',
  },
];

const tapeColors = [
  'bg-peach/60',
  'bg-blush/60',
  'bg-lavender/60',
  'bg-primary/40',
];

const MemoriesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-background via-lavender/10 to-background">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-peach/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-blush/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lavender/5 rounded-full blur-3xl" />
      
      {/* Floating decorative icons */}
      <motion.div
        animate={{ y: [-10, 10, -10], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 left-[15%] text-primary/20"
      >
        <Heart className="w-8 h-8 fill-current" />
      </motion.div>
      <motion.div
        animate={{ y: [10, -10, 10], rotate: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-48 right-[20%] text-rose-gold/30"
      >
        <Star className="w-6 h-6 fill-current" />
      </motion.div>
      <motion.div
        animate={{ y: [-5, 15, -5] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 right-[10%] text-peach/40"
      >
        <Sparkles className="w-10 h-10" />
      </motion.div>

      <div className="container relative z-10 px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4"
          >
            <Heart className="w-4 h-4 text-primary fill-primary/50" />
            <span className="font-handwritten text-lg text-rose-gold">Our Moments</span>
            <Heart className="w-4 h-4 text-primary fill-primary/50" />
          </motion.div>
          <h2 className="font-display text-3xl md:text-5xl font-semibold mt-2 text-foreground">
            Even the Small Moments Matter
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-md mx-auto">
            A collection of memories that I'll always treasure
          </p>
        </motion.div>

        {/* Scrapbook Gallery */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
            {memories.map((memory, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, rotate: memory.rotation * 2 }}
                animate={isInView ? { opacity: 1, y: 0, rotate: memory.rotation } : {}}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotate: 0,
                  zIndex: 10,
                  transition: { duration: 0.3 }
                }}
                className={`relative group cursor-pointer ${memory.size === 'large' ? 'lg:col-span-1' : ''}`}
                style={{ transform: `rotate(${memory.rotation}deg)` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Polaroid Frame */}
                <div className="relative bg-cream p-3 pb-16 rounded-sm shadow-dreamy transition-shadow duration-500 group-hover:shadow-glow">
                  {/* Decorative Tape */}
                  <div className={`absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 ${tapeColors[index % tapeColors.length]} rotate-2 rounded-sm opacity-80`} />
                  
                  {/* Second tape piece for some cards */}
                  {index % 2 === 0 && (
                    <div className={`absolute -top-2 -right-2 w-12 h-5 ${tapeColors[(index + 1) % tapeColors.length]} -rotate-45 rounded-sm opacity-70`} />
                  )}

                  {/* Image Container */}
                  <div className="relative overflow-hidden bg-foreground/5">
                    <div className="aspect-[4/5] overflow-hidden">
                      <img
                        src={memory.image}
                        alt={`Memory with Sakshi ${index + 1}`}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 filter group-hover:brightness-105"
                      />
                    </div>
                    
                    {/* Soft vignette overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 via-transparent to-foreground/5 pointer-events-none" />
                    
                    {/* Corner decorations on hover */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={hoveredIndex === index ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      className="absolute top-3 right-3"
                    >
                      <Heart className="w-6 h-6 text-cream fill-primary/80 drop-shadow-lg" />
                    </motion.div>
                  </div>

                  {/* Caption Area */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 pt-3">
                    <p className="font-handwritten text-base md:text-lg text-foreground/80 text-center leading-relaxed">
                      "{memory.caption}"
                    </p>
                  </div>

                  {/* Decorative corner doodles */}
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 opacity-0 group-hover:opacity-40 transition-opacity duration-300">
                    <svg viewBox="0 0 24 24" className="w-full h-full text-primary">
                      <path fill="currentColor" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                  </div>
                </div>

                {/* Shadow/depth effect */}
                <div className="absolute inset-0 bg-foreground/10 rounded-sm -z-10 translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300" />
                
                {/* Sparkle effects on hover */}
                {hoveredIndex === index && (
                  <>
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
                      transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.5 }}
                      className="absolute -top-4 -left-4 text-primary"
                    >
                      <Sparkles className="w-5 h-5" />
                    </motion.div>
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
                      transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.7, delay: 0.3 }}
                      className="absolute -bottom-2 -right-4 text-rose-gold"
                    >
                      <Star className="w-4 h-4 fill-current" />
                    </motion.div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom decorative text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="text-center mt-16 font-handwritten text-xl text-muted-foreground/60"
        >
          ~ each one, a little piece of us ~
        </motion.p>
      </div>
    </section>
  );
};

export default MemoriesSection;
