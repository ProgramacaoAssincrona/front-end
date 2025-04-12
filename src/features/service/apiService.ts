import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

class Service {
  findManyProductsByCategory = ({ categoryId }: { categoryId: number }) =>
    api.get(`find-products-by-category/${categoryId}`);

  getCategories = () => api.get(`get-all-categories`);
}

export const apiService = new Service();
