import { useQuery } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { apiService } from "../service/apiService";
import { IFindProductsByCategoryResponse } from "../types/backendTypes";
export const useGetProductsByCategory = ({
  categoryId,
  enabled,
}: {
  categoryId: number;
  enabled: boolean;
}) => {
  const { refetch, data, error, isPending, isLoading, isRefetching } = useQuery<
    AxiosResponse<{ response: IFindProductsByCategoryResponse[] }>,
    AxiosError<{ message: string }>
  >({
    queryKey: [`find-products-by-category/${categoryId}`, categoryId],
    queryFn: () => apiService.findManyProductsByCategory({ categoryId }),
    enabled,
  });

  return {
    getProductsByCategory: refetch,
    getProductsByCategoryData: data?.data,
    getProductsByCategoryError: error,
    getProductsByCategoryPending: isPending || isLoading || isRefetching,
  };
};
