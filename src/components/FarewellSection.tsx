import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const FarewellSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMusic = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;
    }

    if (isMusicPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsMusicPlaying(!isMusicPlaying);
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-heavenly" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      
      {/* Floating light orbs */}
      <motion.div
        animate={{ 
          y: [-20, 20, -20],
          x: [-10, 10, -10],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-2xl"
      />
      <motion.div
        animate={{ 
          y: [20, -20, 20],
          x: [10, -10, 10],
          scale: [1.1, 1, 1.1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-lavender/20 rounded-full blur-2xl"
      />
      <motion.div
        animate={{ 
          y: [10, -30, 10],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-1/3 w-24 h-24 bg-peach/20 rounded-full blur-xl"
      />

      <div className="container relative z-10 px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <span className="font-handwritten text-2xl md:text-3xl text-rose-gold">
              If This Is Goodbye or Just a Pause
            </span>
          </motion.div>

          {/* Main Message */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-8"
          >
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
              No matter where next semester takes us…
            </h2>
            
            <p className="font-display text-2xl md:text-3xl lg:text-4xl text-primary italic">
              I'm grateful ours crossed at all.
            </p>
          </motion.div>

          {/* Decorative divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex items-center justify-center gap-4 my-12"
          >
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary/50" />
            <div className="w-2 h-2 rounded-full bg-primary/50" />
            <div className="w-2 h-2 rounded-full bg-lavender" />
            <div className="w-2 h-2 rounded-full bg-peach" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary/50" />
          </motion.div>

          {/* Final note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.9 }}
            className="font-handwritten text-xl md:text-2xl text-muted-foreground max-w-xl mx-auto"
          >
            This page will stay here, a little corner of the internet 
            that remembers how special this semester was because of you.
          </motion.p>

          {/* Music toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-12"
          >
            <button
              onClick={toggleMusic}
              className="group inline-flex items-center gap-3 px-6 py-3 rounded-full glass-card hover:shadow-glow transition-all duration-300"
            >
              {isMusicPlaying ? (
                <VolumeX className="w-5 h-5 text-primary" />
              ) : (
                <Volume2 className="w-5 h-5 text-primary" />
              )}
              <span className="font-handwritten text-lg text-foreground">
                {isMusicPlaying ? 'Pause the moment' : 'Play some ambient music'}
              </span>
            </button>
          </motion.div>

          {/* Signature */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-16 pt-8 border-t border-primary/10"
          >
            <p className="font-handwritten text-2xl text-primary">Made with love ♡</p>
            <p className="font-body text-sm text-muted-foreground mt-2">
              For Sakshi, with all the gratitude words can hold
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FarewellSection;
