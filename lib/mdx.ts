'use server'

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface FrontMatter {
    title: string;
    date: string;
    description?: string;
    [key: string]: unknown;
}

const POSTS_PATH = path.join(process.cwd(), 'content/posts');

export interface BlogPost {
    frontMatter: FrontMatter;
    slug: string;
    content?: string;
}

export async function getAllPosts(): Promise<BlogPost[]> {
    const posts = fs.readdirSync(POSTS_PATH)
    .filter((path) => /\.mdx?$/.test(path))
    .map((fileName) => {
        const source = fs.readFileSync(path.join(POSTS_PATH, fileName), 'utf8');
        const { data, content } = matter(source);
        return {
            frontMatter: data as FrontMatter,
            content,
            slug: fileName.replace(/\.mdx?$/, ''),
        };
    })
    .sort((a, b) => new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime());

    return posts;
}