import { useQuery } from "@tanstack/react-query";
import { apiService } from "../service/apiService";
import { AxiosError, AxiosResponse } from "axios";
import { IGetCategories } from "../types/backendTypes";

export const useGetCategories = () => {
  const { refetch, data, error, isPending, isLoading, isRefetching } = useQuery<
    AxiosResponse<{ response: IGetCategories[] }>,
    AxiosError<{ message: string }>
  >({
    queryKey: [`get-all-categories`],
    queryFn: () => apiService.getCategories(),
  });
  return {
    getCategories: refetch,
    getCategoriesData: data?.data,
    getCategoriesError: error,
    getCategoriesPending: isPending || isLoading || isRefetching,
  };
};
