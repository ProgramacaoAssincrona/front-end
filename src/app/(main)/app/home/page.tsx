import { Container } from "@mui/material";

interface ICategory {
  icon: string;
  name: string;
}

interface IProduct {
  image: string;
  title: string;
  price: number;
  evaluation?: {
    stars: number;
    numberEvaluation: number;
  };
}

export default function Page() {
  return <Container maxWidth="xl"></Container>;
}
