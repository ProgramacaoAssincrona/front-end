import { Button, Rating } from "@mui/material";

interface IProduct {
  href: string;
  image: string;
  title: string;
  price: number;
  evaluation?: {
    stars: number;
    numberEvaluation: number;
  };
}

export default function ProductCard({
  image,
  title,
  price,
  evaluation,
}: IProduct) {
  return (
    <div className="w-fit hover:cursor-pointer p-8 flex flex-col gap-5 ">
      <img
        src={image}
        className="hover:shadow-[var(--blue-shadow)] shadow-[var(--shadow)] border hover:border-(--border) p-8 rounded-xl "
      />
      <div className="flex flex-col gap-2">
        <p className="text-2xl text-[var(--font)]">{title}</p>
        <p className="text-xl text-[var(--emphasis)]">
          <span className="text-base">R$</span>
          {price}
        </p>
        <div className="flex gap-2">
          <Rating name="read-only" value={evaluation?.stars} readOnly />
          <p className="text-[var(--text-transparent)]">
            ({evaluation?.numberEvaluation})
          </p>
        </div>
        <Button
          variant="contained"
          className="w-full"
          sx={{
            backgroundColor: "var(--button)",
            ":hover": { backgroundColor: "var(--buttonHover)" },
          }}
        >
          Comprar
        </Button>
      </div>
    </div>
  );
}
