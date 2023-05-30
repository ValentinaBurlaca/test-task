export interface Article {
  body: string;
  description: string;
  slug: string;
  title: string;
  author: {
    email: string;
    username: string;
    bio: string;
    image: string;
  };
  favorited: boolean;
  favoritescount: number;
  tagList: [];
}
