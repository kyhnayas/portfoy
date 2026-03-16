import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'src/content');

export function getMarkdownContent(filePath: string) {
  const fullPath = path.join(contentDirectory, filePath);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return { frontmatter: data, content };
}

// Projeler icin ozel fonksiyon — projects/index.md icindeki YAML array'i okur
export function getProjects(): Array<{
  title: string;
  tags: string;
  url: string;
  desktop: string;
  mobile: string;
  order: number;
}> {
  const { frontmatter } = getMarkdownContent('projects/index.md');
  const projects = frontmatter.projects || [];
  return [...projects].sort((a: { order: number }, b: { order: number }) => a.order - b.order);
}
