'use client'

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface BlogPost {
  frontMatter: {
    title: string;
    date: string;
    description: string;
    [key: string]: unknown;
  };
  slug: string;
  content: string;
}

interface Props {
  posts: BlogPost[];
}

export default function AnimatedBlogPosts({ posts }: Props) {
  return (
    <section className="py-20 px-4">
      <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-white">Latest Blog Posts</h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {posts.map((post) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-gray-900 bg-opacity-50 backdrop-blur-lg text-white border border-gray-800">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  {post.frontMatter.title}
                </CardTitle>
                <div className="text-sm text-gray-400 mt-2">
                  {new Date(post.frontMatter.date).toLocaleDateString()}
                </div>
                <CardContent className="text-gray-300 mt-4">
                  <div className="prose prose-invert max-w-none">
                    {post.content}
                  </div>
                </CardContent>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 