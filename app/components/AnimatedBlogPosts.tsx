'use client'

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BlogPost } from "@/lib/mdx"
import { format } from "date-fns"

interface Props {
  posts: BlogPost[];
}

export default function AnimatedBlogPosts({ posts }: Props) {
  return (
    <section className="py-20 px-4">
      <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-white">Latest Blog Posts</h2>
      <div className="max-w-2xl mx-auto space-y-6">
        {posts.map((post, i) => (
          <motion.div 
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="bg-gray-900 bg-opacity-50 backdrop-blur-lg text-white border border-gray-800">
              <CardHeader>
                <div className="text-sm text-gray-400 mb-2">
                  {format(new Date(post.frontMatter.date), 'MMMM dd, yyyy')}
                </div>
                <CardTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-white">
                  {post.frontMatter.title}
                </CardTitle>
                <CardContent className="text-gray-300">
                  {post.frontMatter.excerpt}
                </CardContent>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 