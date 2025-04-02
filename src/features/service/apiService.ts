import axios from "axios";

const api = axios.create({
  baseURL: process.env.BACKEND_URL,
});

class Service {
  getAddressByCEP = (cep?: string) =>
    axios.get(`https://viacep.com.br/ws/${cep}/json/`);

  findManyProductsByCategory = ({ categoryId }: { categoryId: number }) =>
    api.get(`find-products-by-category/${categoryId}`);
}

export const apiService = new Service();
