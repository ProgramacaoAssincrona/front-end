export interface IGetCategories {
  id: number;
  name: string;
  img_url: string;
}

export interface IFindProductsByCategoryResponse {
  id: number;
  name: string;
  description: string;
  price: string;
  stock: number;
  category_id: number;
  image_url: string;
}
