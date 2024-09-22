import { ProductListQuery, useProductListQuery } from "../../generated/graphql";
import ProductList from "./ProductList";
import { useState, useEffect } from "react";

const ProductListContainer = () => {
  const [query] = useState({ itemPageInput: { limit: 4 } });
  const { data, loading, fetchMore } = useProductListQuery({
    variables: { ...query },
  });
  const [isLoading, setIsLoading] = useState(false);

  const updateProducts = (action: string) => {
    const { afterCursor } = data.paginateItems.cursor;
    const { beforeCursor } = data.paginateItems.cursor;

    const mainAction =
      action === "forward" ? { afterCursor } : { beforeCursor };

    setIsLoading(true);

    fetchMore({
      variables: {
        itemPageInput: {
          ...query.itemPageInput,
          ...mainAction,
        },
      },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        setIsLoading(false);
        return fetchMoreResult;
      },
    });
  };

  useEffect(() => {
    localStorage.setItem(
      "allProducts",
      JSON.stringify(data?.paginateItems?.data)
    );
  }, [data]);

  return (
    <ProductList
      data={data}
      loading={loading || isLoading}
      updateProducts={updateProducts}
    />
  );
};

export default ProductListContainer;
