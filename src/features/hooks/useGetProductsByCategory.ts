import { useQuery } from "@tanstack/react-query";
import { apiService } from "../service/apiService";
export const useGetProductsByCategory = ({
  categoryId,
  enabled,
}: {
  categoryId: number;
  enabled: boolean;
}) => {
  const { refetch, data, error, isPending, isLoading, isRefetching } = useQuery(
    {
      queryKey: [`find-products-by-category/${categoryId}`, categoryId],
      queryFn: () => apiService.findManyProductsByCategory({ categoryId }),
      enabled,
    }
  );

  return {
    getProductsByCategory: refetch,
    getProductsByCategoryData: data?.data,
    getProductsByCategoryError: error,
    getProductsByCategoryPending: isPending || isLoading || isRefetching,
  };
};
