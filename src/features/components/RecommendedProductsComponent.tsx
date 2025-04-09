import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

interface IProduct {
  id: number;
  image: string;
  title: string;
  price: number;
}
export function RecommendedProductsComponent({
  id,
  image,
  title,
  price,
}: IProduct) {
  const router = useRouter();
  return (
    <div
      className="w-fit hover:cursor-pointer p-8 flex flex-col gap-5 rounded-xl h-130
    hover:shadow-[var(--blue-shadow)] shadow-[var(--shadow)] border hover:border-(--border)"
    >
      <div className="flex flex-col items-center justify-center">
        <img src={image} />
        <p className="text-2xl text-[var(--font)]">{title}</p>
      </div>
      <div className="flex flex-col items-center justify-end grow">
        <p className="text-xl text-[var(--emphasis)]">
          <span className="text-base">R$</span>
          {price}
        </p>
        <Button
          onClick={() => router.push(`/product/${id}`)}
          variant="contained"
          sx={{
            backgroundColor: "var(--button)",
            ":hover": { backgroundColor: "var(--buttonHover)" },
          }}
          className="w-full hover:bg-[var(--buttonHover)] bg-[var(--button)]"
        >
          Comprar
        </Button>
      </div>
    </div>
  );
}
