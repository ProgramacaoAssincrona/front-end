import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselBanner({
  BannerImages,
}: {
  BannerImages: { id: number; imageUrl: string }[];
}) {
  return (
    <Carousel>
      <CarouselContent>
        {BannerImages.map((product) => (
          <CarouselItem key={product.id}>
            <div>
              <Card className="border-none shadow-none">
                <CardContent className="flex items-center justify-center w-full">
                  <img src={product.imageUrl} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-[var(--button)] hover:text-[var(--buttonHover)]" />
      <CarouselNext className="text-[var(--button)] hover:text-[var(--buttonHover)]" />
    </Carousel>
  );
}
