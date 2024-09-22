import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Button from "@mui/material/Button";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const ProductDetail = () => {
  const params = useParams();
  const [products] = useState<Array<IProduct>>(
    JSON.parse(localStorage.getItem("allProducts")!)
  );
  const [amount, setAmount] = useState<number>(1);
  const [product, setProduct] = useState<IProduct>();

  const update = (value: string) => {
    let newAmount = amount;
    if (value === "increase") {
      newAmount = newAmount += 1;
    }
    if (value === "decrease") {
      if (amount === 1) {
        return;
      } else {
        newAmount = newAmount -= 1;
      }
    }

    setAmount(newAmount as number);
  };

  useEffect(() => {
    console.log(params.id);
    console.log(products);
    const activeProduct = products.find((p) => p.id === Number(params.id));
    setProduct(activeProduct as IProduct);
    // console.log(activeProduct);
  }, []);
  return (
    <div className="">
      <div className="bg-primary-200 shadow-md">
        <div className="relative w-[94%] mx-auto text-white lg:w-10/12">
          <Header />
        </div>
      </div>

      <div className="relative w-[94%] mx-auto py-8 grid grid-cols-1 md:grid-cols-2 gap-[2rem] lg:w-10/12">
        <div className={`bg-[#CAF3E5] w-full h-full rounded-xl shadow-md`}>
          <div
            className="h-[500px] w-full rounded-xl"
            style={{
              background: `url(${
                product?.itemVariants[0]?.imageUrl
                  ? `${product?.itemVariants[0]?.imageUrl}`
                  : "/landing-image.jpg"
              }) no-repeat center center/cover`,
            }}
          ></div>
        </div>

        <div className="mt-9">
          <h1 className="lg:text-3xl md:text-2xl text-xl">{product?.name}</h1>
          <h4 className="my-3 font-bold text-primary-100">
            {product?.currency} {product?.itemVariants[0]?.price}
          </h4>
          <p className="my-2">
            {product?.description || "This is a test description"}
          </p>
          <p className="text-sm sm:text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
            nulla ullam totam illo fuga quo, est magni incidunt optio sit
            voluptatem reprehenderit earum expedita quae. Velit, eum. Culpa
            perferendis fuga harum necessitatibus soluta. Odio velit aperiam
            tempore, ullam hic impedit.
          </p>

          <div className="flex justify-between items-center text-sm italic border-y-2 my-6 py-3">
            <p>
              Availability:{" "}
              {product?.itemVariants[0]?.isEnabled ? "Yes" : "Check back later"}
            </p>

            <p>Weight: {product?.itemVariants[0]?.weight || "N/A"} kg</p>
          </div>

          <div className="my-3 text-sm opacity-70 border-b-2 pb-4">
            <p className="mb-3">
              <span className="text-gray-400">Merchant SKU:</span>{" "}
              {product?.itemVariants[0]?.merchantSku}
            </p>
            <p>
              <span className="text-gray-400">SKU:</span>{" "}
              {product?.itemVariants[0]?.sku}
            </p>
          </div>

          <div className="mt-6">
            <div className="flex items-center">
              <Button
                onClick={() => update("decrease")}
                variant="outlined"
                aria-label="delete"
              >
                <RemoveIcon fontSize="inherit" />
              </Button>

              <span className="mx-7">{amount}</span>
              <Button
                onClick={() => update("increase")}
                variant="contained"
                aria-label="delete"
                color="primary"
                disableElevation
              >
                <AddIcon fontSize="inherit" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
