export type ThirdSection = {
  thirdSectionTitle: string;
  posts: Posts[];
}

export type Posts = {
  id: number;
  title: string;
  category: string;
  date: string;
  text: string;
  image: string;
  author: string;
  avatar: string;
}
