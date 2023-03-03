export interface NewGoods {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: string;
  updatedAt: string;
  rating: string;
  liked: boolean;
  category: {
    id: string;
    name: string;
    image: string;
    creationAt: string;
    updatedAt: string;
  };
}
export interface Cart {
  deleteId: string;
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: string;
  updatedAt: string;
  rating: string;
  liked: boolean;
  category: {
    id: string;
    name: string;
    image: string;
    creationAt: string;
    updatedAt: string;
  };
}
