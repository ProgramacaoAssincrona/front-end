"use client";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Button, Container, IconButton, TextField } from "@mui/material";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const [frete, setFrete] = useState<boolean>(false);
  const params = useParams();
  // const productId = params.id;

  return (
    <Container maxWidth="xl" className="flex flex-col gap-24 py-24">
      <h2>Finalizar compra</h2>
      <div className="flex gap-16 items-center">
        <img src="../../control.png" />
        <div className="flex flex-col gap-1.5">
          <h5 className="text-2xl text-[var(--font)]">HAVIT HV-G92 Gamepad</h5>
          <h6 className="line-through font-normal">R$300,00</h6>
          <h6 className="text-2xl text-[var(--emphasis)] font-medium">
            <span className="text-base">R$</span>
            120
          </h6>
          <p className="text-lg text-[var(--emphasis)]">(6% desconto no pix)</p>
        </div>
        <IconButton aria-label="delete">
          <DeleteOutlineOutlinedIcon
            sx={{ color: "var(--button)", fontSize: 30 }}
          />
        </IconButton>
      </div>
      <div className="bg-[var(--bgFrete)] w-fit rounded-2xl p-10 flex flex-col gap-8">
        <h3>Calcule o frete do seu pedido</h3>
        <div className="flex gap-20">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-5">
              <TextField
                id="standard-basic"
                label="CEP"
                type="number"
                variant="standard"
              />
              <Button variant="outlined" onClick={() => setFrete(true)}>
                Calcular
              </Button>
            </div>
            {frete && (
              <div className="flex flex-col gap-5">
                <h6 className="font-normal">Rua Irineu José Bordon</h6>
                <h6 className="font-normal">Vila Jaguara - São Paulo SP</h6>
                <h6 className="font-normal">
                  Frete:{" "}
                  <span className="text-[var(--textFrete)] font-normal">
                    Gratís
                  </span>
                </h6>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-5">
            <h6 className="font-normal">Subtotal: R$120,90</h6>
            <h6 className="font-normal">
              Frete:{" "}
              {frete && (
                <span className="text-[var(--textFrete)] font-normal">
                  Gratís
                </span>
              )}
            </h6>
            <h6 className="font-normal">Total: {frete ? "R$120,90" : "-"}</h6>
            <Button
              variant="contained"
              disabled={!frete}
              sx={{
                backgroundColor: "var(--button)",
                ":hover": { backgroundColor: "var(--buttonHover)" },
              }}
            >Comprar</Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
