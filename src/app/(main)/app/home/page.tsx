"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CategoryComponent } from "@/features/components/CategoryComponent";
import ProductCard from "@/features/components/ProductCard";
import { RecommendedProductsComponent } from "@/features/components/RecommendedProductsComponent";
import { useGetCategories } from "@/features/hooks/useGetCategories";
import { useGetProductsByCategory } from "@/features/hooks/useGetProductsByCategory";
import { IGetCategories } from "@/features/types/backendTypes";
import { Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const MockProducts = [
  [
    {
      id: 1,
      image: "/control.png",
      title: "Control",
      price: 120.98,
      evaluation: {
        stars: 1,
        numberEvaluation: 108.0,
      },
    },
    {
      id: 2,
      image: "/control.png",
      title: "Control",
      price: 120.98,
      evaluation: {
        stars: 2,
        numberEvaluation: 108.0,
      },
    },
    {
      id: 3,
      image: "/control.png",
      title: "Control",
      price: 120.98,
      evaluation: {
        stars: 3,
        numberEvaluation: 108.0,
      },
    },
    {
      id: 10,
      image: "/control.png",
      title: "Control",
      price: 120.98,
      evaluation: {
        stars: 5,
        numberEvaluation: 108.0,
      },
    },
  ],
  [
    {
      id: 4,
      image: "/control.png",
      title: "Control",
      price: 120.98,
      evaluation: {
        stars: 5,
        numberEvaluation: 108.0,
      },
    },
    {
      id: 5,
      image: "/control.png",
      title: "Control",
      price: 120.98,
      evaluation: {
        stars: 5,
        numberEvaluation: 108.0,
      },
    },
    {
      id: 6,
      image: "/control.png",
      title: "Control",
      price: 120.98,
      evaluation: {
        stars: 5,
        numberEvaluation: 108.0,
      },
    },
    {
      id: 7,
      image: "/control.png",
      title: "Control",
      price: 120.98,
      evaluation: {
        stars: 5,
        numberEvaluation: 108.0,
      },
    },
  ],
];

const mockRecommendedProducts = [
  {
    id: 1,
    image: "/control.png",
    title: "Control",
    price: 120.98,
  },
  {
    id: 2,
    image: "/control.png",
    title: "Control",
    price: 120.98,
  },
  {
    id: 3,
    image: "/control.png",
    title: "Control",
    price: 120.98,
  },
];

export default function Page() {
  const [searchCategory, setSearchCategory] = useState<number>(0);
  const [searchCategoryEnabled, setSearchCategoryEnabled] = useState(false);
  const { getCategoriesData } = useGetCategories();
  const { getProductsByCategoryData } = useGetProductsByCategory({
    categoryId: searchCategory,
    enabled: searchCategoryEnabled,
  });

  useEffect(() => {
    if (!!getCategoriesData?.response) {
      getCategoriesData.response.map((item: IGetCategories) => {
        setSearchCategory(item.id);
        setSearchCategoryEnabled(true);
        getProductsByCategoryData?.response.map((product) => {
          console.log(product);
        });
      });
    }
  }, [getCategoriesData]);

  return (
    <Container maxWidth="xl" className="flex flex-col gap-24 py-24">
      <div className="flex gap-4 w-full items-center justify-evenly">
        {!getCategoriesData?.response &&
          getCategoriesData?.response.map((item: IGetCategories) => (
            <CategoryComponent key={item.id} {...item} />
          ))}
      </div>

      <div className="flex flex-col gap-10">
        <Typography variant="h4" className="font-bold">
          Celulares
        </Typography>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full relative"
        >
          <CarouselContent className="flex snap-x snap-mandatory gap-4">
            {MockProducts.map((products, index) => (
              <CarouselItem
                key={index}
                className="w-full snap-start flex-shrink-0"
              >
                <div className="flex w-full justify-evenly">
                  {products.map((product) => (
                    <ProductCard
                      key={product.id}
                      {...product}
                    />
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
        </Carousel>
      </div>

      <div className="flex flex-col gap-10">
        <Typography variant="h4" className="font-bold">
          Celulares
        </Typography>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full relative"
        >
          <CarouselContent className="flex snap-x snap-mandatory gap-4">
            {MockProducts.map((products, index) => (
              <CarouselItem
                key={index}
                className="w-full snap-start flex-shrink-0"
              >
                <div className="flex w-full justify-evenly">
                  {products.map((product) => (
                    <ProductCard
                      key={product.id}
                      {...product}
                    />
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
        </Carousel>
      </div>

      <div className="flex flex-col gap-10">
        <Typography
          variant="h4"
          className="font-bold w-full flex justify-center"
        >
          Produtos recomendados
        </Typography>
        <div className="flex gap-4 w-full items-center justify-evenly">
          {mockRecommendedProducts.map((products) => (
            <RecommendedProductsComponent
              key={products.id}
              {...products}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
