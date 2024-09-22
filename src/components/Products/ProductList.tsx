/* eslint-disable no-useless-escape */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { useState } from "react";
import Product from "../Product";
import { ProductListQuery } from "../../generated/graphql.tsx";
import Skeleton from "@mui/material/Skeleton";
import IconButton from "@mui/material/IconButton";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

interface Props {
  data: ProductListQuery | undefined;
  loading: boolean;
  updateProducts: (action: string) => void;
}

const Products: React.FC<Props> = ({ data, loading, updateProducts }) => {
  const [page, setPage] = useState(1);

  const handleChange = (action: string) => {
    if (action === "forward") {
      if (page === 6) {
        return;
      }
      setPage(page + 1);
    } else if (action === "backward") {
      if (page === 1) {
        return;
      }
      setPage(page - 1);
    }
    updateProducts(action);
  };
  return (
    <div className="w-[94%] mx-auto py-9 lg:w-10/12">
      <h1 className="text-primary-100 mb-6 font-semibold text-lg transition-element xl:text-3xl lg:text-2xl md:text-xl">
        Explore Products
      </h1>

      <div className="grid grid-cols-1 gap-5 2xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <Skeleton
                animation="wave"
                key={index}
                variant="rectangular"
                height={450}
                sx={{ borderRadius: "20px" }}
              />
            ))
          : !loading &&
            data?.paginateItems?.data.map((item) => (
              <Product
                key={item.id}
                currency={item.currency}
                price={item?.itemVariants[0]?.price}
                isAvailable={item?.itemVariants[0]?.isEnabled}
                image={item.imageUrl}
                id={item.id}
                title={item.name}
                description={item.description}
              />
            ))}
      </div>

      <div className="flex justify-center items-center my-4">
        <IconButton
          onClick={() => handleChange("backward")}
          disabled={page === 1 || loading}
        >
          <KeyboardDoubleArrowLeftIcon />
        </IconButton>
        <span className="font-bold mx-6">{page}</span>
        <IconButton
          onClick={() => handleChange("forward")}
          disabled={page === 6 || loading}
        >
          <KeyboardDoubleArrowRightIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Products;
