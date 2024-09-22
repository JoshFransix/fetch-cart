/* eslint-disable no-useless-escape */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { useState, useEffect } from "react";
import Product from "../Product";

interface Props {
  data?: IProduct[];
  selectedFilter: string;
}

const Products: React.FC<Props> = ({ data, selectedFilter }) => {
  const [allProducts, setAllProducts] = useState(data);

  const filterProducts = () => {
    const main = [...(data as [])];

    // filter for name
    if (selectedFilter === "name") {
      main.sort((a: IProduct, b: IProduct) => a.name.localeCompare(b.name));
    }
    // filter for price
    if (selectedFilter === "price") {
      main.sort(
        (a: IProduct, b: IProduct) =>
          parseFloat(a.itemVariants[0].price) -
          parseFloat(b.itemVariants[0].price)
      );
    }

    // filter for availability
    if (selectedFilter === "availability") {
      main.sort(
        (a: IProduct, b: IProduct) =>
          (a.itemVariants[0].isEnabled ? 0 : 1) -
          (b.itemVariants[0].isEnabled ? 0 : 1)
      );
    }
    setAllProducts(main);
  };

  useEffect(() => {
    filterProducts();
  }, [selectedFilter]);

  useEffect(() => {
    if (data) {
      filterProducts();
    }
  }, [data]);

  useEffect(() => {
    filterProducts();
  }, []);

  // useEffect(() => {
  //   localStorage.setItem("currentPage", JSON.stringify(page));
  // }, [page]);
  return (
    <div>
      <div className="grid grid-cols-1 gap-5 2xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {allProducts?.map((item: IProduct) => (
          <Product
            key={item.id}
            currency={item.currency}
            price={item?.itemVariants[0]?.price}
            isAvailable={item?.itemVariants[0]?.isEnabled}
            image={item.itemVariants[0].imageUrl}
            id={item.id}
            title={item.name}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
