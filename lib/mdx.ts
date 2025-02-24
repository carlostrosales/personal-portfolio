'use server'

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize'

const POSTS_PATH = path.join(process.cwd(), 'content/posts');

export interface BlogPost {
    content: string;
    frontMatter: {
        title: string;
        date: string;
        excerpt: string;
        [key: string]: any;
    };
    slug: string;
}

export async function getAllPosts(): Promise<BlogPost[]> {
    const posts = fs.readdirSync(POSTS_PATH)
    .filter((path: any) => /\.mdx?$/.test(path))
    .map((fileName) => {
        const source = fs.readFileSync(path.join(POSTS_PATH, fileName), 'utf8');
        const { content, data } = matter(source);
        return {
            content,
            frontMatter: data as { title: string; date: string; excerpt: string; [key: string]: any },
            slug: fileName.replace(/\.mdx?$/, ''),
        };
    })
    .sort((a, b) => new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime());

    return posts;
}