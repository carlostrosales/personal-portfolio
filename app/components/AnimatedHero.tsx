'use client'

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TypeAnimation } from 'react-type-animation';

export default function AnimatedHero() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const scrollToBlog = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
      <motion.div style={{ opacity, scale }} className="relative z-10">
        <motion.h1
          className="text-6xl font-bold mb-4 bg-clip-text [-webkit-background-clip:text] text-transparent bg-[linear-gradient(to_right,theme(colors.purple.600),theme(colors.pink.500),theme(colors.blue.500),theme(colors.purple.600))] animate-gradient bg-[length:200%_auto]"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Carlos Tovias
        </motion.h1>
        <motion.div
          className="text-3xl mb-8 h-[32px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <TypeAnimation
            sequence={[
              'Engineer',
              2000,
              'Creative',
              2000,
              'Builder',
              2000,
            ]}
            repeat={Infinity}
          />
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="inline-block">
          <Button
            onClick={scrollToBlog}
            variant="secondary"
            size="lg"
            className="bg-white text-black hover:bg-gray-200 transition-all duration-300 border-0"
            style={{
              backgroundColor: 'white',
              color: 'black',
              borderRadius: '9999px',
              padding: '24px 42px',
            }}
          >
            Explore My Work
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
} 