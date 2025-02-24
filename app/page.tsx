import { getAllPosts } from "@/lib/mdx"
import AnimatedHero from './components/AnimatedHero'
import AnimatedAbout from './components/AnimatedAbout'
import AnimatedBlogPosts from './components/AnimatedBlogPosts'

export default async function Home() {
  const posts = await getAllPosts();
  
  return (
    <main className="min-h-screen bg-black text-white">
      <AnimatedHero />
      <AnimatedAbout />
      <AnimatedBlogPosts posts={posts} />
      <footer></footer>
    </main>
  );
}