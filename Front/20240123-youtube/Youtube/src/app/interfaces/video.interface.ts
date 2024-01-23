export interface VideoInterface {
  id?: number;
  url: string;
  title: string;
  category: CategoryInterface;
  description: string;
  views: number;
  likes: number;
  dislikes: number;
  ranking: number;
}

export interface NewVideoInterface {
  url: string;
  title: string;
  category: number;
  description?: string;
}

export interface CategoryInterface {
  id: number;
  name: string;
}
