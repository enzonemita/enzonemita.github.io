export interface Quote {
  id: number;
  text: string;
  author: string;
  favorite: boolean;
}

export interface ProfileData {
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
  socialLinks: {
    type: string;
    url: string;
  }[];
}