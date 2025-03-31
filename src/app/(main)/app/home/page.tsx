import ProductCard from "@/features/app/components/ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CarouselBanner } from "@/features/app/components/CarouselBanner";
import { Container, Typography } from "@mui/material";

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
    id: 4,
    image: "/control.png",
    title: "Control",
    price: 120.98,
    evaluation: {
      stars: 5,
      numberEvaluation: 108.0,
    },
  },
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

export default function Page() {
  return (
    <Container maxWidth="xl">
      <div className="flex justify-center">
        <CarouselBanner BannerImages={mockImages} />
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-sm"
      >
        <CarouselContent>
          {MockProducts.map((product) => (
            <CarouselItem key={product.id}>
              <ProductCard {...product} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Container>
  );
}
