export interface Blog {
  id: number;
  title: string;
  description: string;
  headerImage: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  tags:string[];
}