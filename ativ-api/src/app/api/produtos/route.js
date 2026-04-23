import { db } from "@/lib/db.js";

// GET
export async function GET() {
  return Response.json(db.produtos);
}

// POST
export async function POST(request) {
  const body = await request.json();

  if (!body.nome || !body.preco) {
    return new Response("Dados inválidos", { status: 400 });
  }

  const novoProduto = {
    id: Date.now(),
    nome: body.nome,
    preco: Number(body.preco),
  };

  db.produtos.push(novoProduto);

  return Response.json(novoProduto);
}