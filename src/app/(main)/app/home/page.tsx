"use client";
import ProductCard from "@/features/components/ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CarouselBanner } from "@/features/components/CarouselBanner";
import { Container, Typography } from "@mui/material";
import { CategoryComponent } from "@/features/components/CategoryComponent";
import { RecommendedProductsComponent } from "@/features/components/RecommendedProductsComponent";

// interface ICategory {
//   icon: string;
//   name: string;
// }

// interface IProduct {
//   id: number;
//   image: string;
//   title: string;
//   price: number;
//   evaluation?: {
//     stars: number;
//     numberEvaluation: number;
//   };
// }

const MockProducts = [
  [
    {
      id: 1,
      image: "/control.png",
      title: "Control",
      price: 120.98,
      evaluation: {
        stars: 5,
        numberEvaluation: 108.0,
      },
    },
    {
      id: 2,
      image: "/control.png",
      title: "Control",
      price: 120.98,
      evaluation: {
        stars: 5,
        numberEvaluation: 108.0,
      },
    },
    {
      id: 3,
      image: "/control.png",
      title: "Control",
      price: 120.98,
      evaluation: {
        stars: 5,
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

const mockImages = [
  {
    id: 1,
    imageUrl:
      "https://img.freepik.com/free-vector/flat-design-minimal-technology-sale-banner_23-2149113342.jpg",
  },
  {
    id: 2,
    imageUrl:
      "https://img.freepik.com/free-vector/flat-design-minimal-technology-sale-banner_23-2149113342.jpg",
  },
  {
    id: 3,
    imageUrl:
      "https://img.freepik.com/free-vector/flat-design-minimal-technology-sale-banner_23-2149113342.jpg",
  },
];

const mockCategories = [
  {
    id: 1,
    icon: "/Category-CellPhone.png",
    name: "Celulares",
  },
  {
    id: 2,
    icon: "/Category-CellPhone.png",
    name: "Celulares",
  },
  {
    id: 3,
    icon: "/Category-CellPhone.png",
    name: "Celulares",
  },
  {
    id: 4,
    icon: "/Category-CellPhone.png",
    name: "Celulares",
  },
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
  // const [enabledProductsByCategory, setEnabledProductsByCategory] =
  //   useState(false);
  // const [categoryId, setCategoryId] = useState<number>();

  // const { getProductsByCategory } = useGetProductsByCategory({
  //   enabled: enabledProductsByCategory,
  //   categoryId: categoryId,
  // });

  return (
    <Container maxWidth="xl">
      <div className="flex justify-center">
        <CarouselBanner BannerImages={mockImages} />
      </div>

      <div className="flex gap-4 w-full items-center justify-evenly">
        {mockCategories.map(({ id, ...category }) => (
          <CategoryComponent key={id} {...category} href={`home/${id}`} />
        ))}
      </div>

      <div className="flex flex-col gap-24">
        <div className="flex flex-col gap-15">
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
                      <ProductCard key={product.id} {...product} />
                    ))}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
          </Carousel>
        </div>

        <div className="flex flex-col gap-15">
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
                      <ProductCard key={product.id} {...product} />
                    ))}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
          </Carousel>
        </div>
      </div>

      <div className="flex gap-4 w-full items-center justify-evenly">
        {mockRecommendedProducts.map((products) => (
          <RecommendedProductsComponent key={products.id} {...products} />
        ))}
      </div>
    </Container>
  );
}
