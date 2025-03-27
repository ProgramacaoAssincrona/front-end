import ProductCard from "@/features/app/components/ProductCard";
import { Container } from "@mui/material";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ICategory {
  icon: string;
  name: string;
}

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

export default function Page() {
  return (
    <Container maxWidth="xl">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-sm"
      >
        <CarouselContent>
          {MockProducts.map((product) => (
            <CarouselItem
              key={product.id}
            >
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
