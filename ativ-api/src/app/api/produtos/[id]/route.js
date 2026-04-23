import { db } from "@/lib/db.js";

// GET por ID
export async function GET(request, context) {
  const { id } = await context.params;
  const numericId = Number(id);

  const produto = db.produtos.find((p) => p.id === numericId);

  if (!produto) {
    return new Response("Produto não encontrado", { status: 404 });
  }

  return Response.json(produto);
}

// PUT
export async function PUT(request, context) {
  const { id } = await context.params;
  const numericId = Number(id);

  if (isNaN(numericId)) {
    return new Response("ID inválido", { status: 400 });
  }

  const body = await request.json();

  const produto = db.produtos.find((p) => p.id === numericId);

  if (!produto) {
    return new Response("Produto não encontrado", { status: 404 });
  }

  produto.nome = body.nome ?? produto.nome;
  produto.preco = body.preco !== undefined ? Number(body.preco) : produto.preco;

  return Response.json(produto);
}

// DELETE
export async function DELETE(request, context) {
  const { id } = await context.params;
  const numericId = Number(id);

  const index = db.produtos.findIndex((p) => p.id === numericId);

  if (index === -1) {
    return new Response("Produto não encontrado", { status: 404 });
  }

  db.produtos.splice(index, 1);

  return Response.json({ message: "Deletado com sucesso" });
}