import { NextRequest, NextResponse } from "next/server";
import { products } from "../product/product";

export function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");

  if (!id) {
    return NextResponse.json(products);
  }

  const findProduct = products.find((item) => item.id === parseInt(id, 10));

  if (!findProduct) {
    return NextResponse.json(
      {
        message: "product not available",
      },
      {
        status: 404,
      }
    );
  }

  return NextResponse.json(findProduct);
}
