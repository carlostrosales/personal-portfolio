'use client'

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AnimatedAbout() {
  return (
    <section className="py-20 px-4">
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8}}>
        <Card className="max-w-2xl mx-auto bg-gray-900 bg-opacity-50 backdrop-blur-lg text-white border border-gray-800">
          <div className="p-6">
            <CardTitle className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-white text-center">About Me</CardTitle>
            <p className="text-lg text-gray-300 text-center">I'm a software engineer based in Austin, Texas, with a passion for building products that are both functional and delightfully user-friendly. I love creating intuitive solutions that solve real-world problems, and I'm currently sharpening my skills as I pursue a Master's in Computer Science, specializing in Computing Systems, at Georgia Tech. Beyond code, I'm an avid runner—recently conquered my first half marathon and now training for a full one—while also enjoying pickleball, lifting weights, and tinkering with fresh ideas. I'm always excited to meet new people, so let's connect over tech, fitness, or your next big project!</p>
          </div>
        </Card>
      </motion.div>
    </section>
  );
} 