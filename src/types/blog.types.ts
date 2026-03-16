export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  author: string;
  image?: string;
  featured?: boolean;
}
