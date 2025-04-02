import { Button } from "@mui/material";

interface IProduct {
  image: string;
  title: string;
  price: number;
  onClick?: () => void;
}
export function RecommendedProductsComponent({
  image,
  title,
  price,
  onClick,
}: IProduct) {
  return (
    <div className="shadow-md hover:shadow-xl hover:shawdow-lg border-2 border-(--border) w-fit hover:cursor-pointer p-8 flex flex-col gap-5 rounded-xl h-130">
      <div className="flex flex-col items-center justify-center">
        <img src={image} />
        <p className="text-2xl">{title}</p>
      </div>
      <div className="flex flex-col items-center justify-end grow">
        <p className="text-xl text-[var(--emphasis)]">{price}</p>
        <Button
          onClick={onClick}
          variant="contained"
          className="w-full hover:bg-[var(--buttonHover)] bg-[var(--button)]"
        >
          Comprar
        </Button>
      </div>
    </div>
  );
}
