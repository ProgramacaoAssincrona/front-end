"use client";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { IconButton } from "@mui/material";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();
  const productId = params.id;

  return (
    <div>
      <h1>Carrinho de compras</h1>
      <div className="flex ">
        <img
          src="./control.png"
          className="hover:shadow-[var(--blue-shadow)] shadow-[var(--shadow)] border hover:border-(--border) p-8 rounded-xl "
        />
        <div className="flex flex-col">
          <p className="text-2xl text-[var(--font)]">HAVIT HV-G92 Gamepad</p>
          <p className="line-through">R$300,00</p>
          <p className="text-xl text-[var(--emphasis)]">
            <span className="text-base">R$</span>
            120
            <span className="text-base">(6% desconto no pix)</span>
          </p>
        </div>
        <IconButton aria-label="delete">
          <DeleteOutlineOutlinedIcon sx={{ color: "var(--button)" }} />
        </IconButton>
      </div>
    </div>
  );
}
