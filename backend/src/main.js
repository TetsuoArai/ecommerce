import express from "express";
import { PrismaClient } from "@prisma/client";

const port = 3000;

const prisma = new PrismaClient();
const app = express();

app.get("/brand", async (_, res) => {
  const brands = await prisma.brand();
  res.json(brands);
});

app.get("/brand/:id", async (req, res) => {
  const { id } = req.params;
  const brand = await prisma.brand.findUnique({
    where: { id: parseInt(id) },
  });
  res.json(brand);
});

app.get("/product", async (_, res) => {
  const products = await prisma.product.findMany();

  console.log(products);

  res.json(products);
});

app.get("/product/:id", async (req, res) => {
  const { id } = req.params;
  const product = await prisma.product.findUnique({
    where: { id: parseInt(id) },
  });
  res.json(product);
});

app.get("/product/:id/brand", async (req, res) => {
  const { id } = req.params;
  const product = await prisma.product.findUnique({
    where: { id: parseInt(id) },
    include: { brand: true },
  });
  res.json(product.brand);
});

app.listen(port, () => console.log(`Listening on port ${port}.`));
