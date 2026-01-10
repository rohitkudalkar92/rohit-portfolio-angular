export interface Note {
  id: string;
  title: string;
  category: string;
  content: string;
  tags: string[];
}

export interface Category {
  key: string;
  name: string;
  icon: string;
}