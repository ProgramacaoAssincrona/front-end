interface IProduct {
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
    <div className="shadow-md hover:shawdow-lg border-2 w-fit hover:cursor-pointer p-8 flex flex-col gap-5 rounded-xl">
      <img src={image} alt="abc" />
      <div>
        <p className="text-2xl">{title}</p>
        <p className="text-xl text-[var(--emphasis)]">{price}</p>
        <div className="flex gap-2">
          <p>{evaluation?.stars}</p>
          <p>{evaluation?.numberEvaluation}</p>
        </div>
      </div>
    </div>
  );
}
