import Layout from "@/components/Layout/Layout";
import useStore from "../globalstores";

export default function Cart() {
  const productCounter = useStore((state) => state.productCounter);

  return (
    <Layout>
      <div className="FavoritesWrapper">
        <h1>Here will be the Cart</h1>
      </div>
      <article>
        {productCounter.map((selectedProduct) => {
          console.log(selectedProduct.id.split(";;"));
        })}
      </article>
    </Layout>
  );
}
