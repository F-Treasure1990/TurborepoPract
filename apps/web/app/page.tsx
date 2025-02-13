import CreateProduct from "../components/create-product";
import Products from "../components/products";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <CreateProduct />
      <Products />
    </>
  );
}
