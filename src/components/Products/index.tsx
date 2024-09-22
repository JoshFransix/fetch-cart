/* eslint-disable no-unsafe-optional-chaining */
import { useProductListQuery } from "../../generated/graphql";
import ProductList from "./ProductList";
import { useState, useEffect } from "react";
import Skeleton from "@mui/material/Skeleton";
import IconButton from "@mui/material/IconButton";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const ProductListContainer = () => {
  const [query] = useState({ itemPageInput: { limit: 4 } });
  const { data, loading, fetchMore } = useProductListQuery({
    variables: { ...query },
  });
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [selectedFilter, setSelectedFilter] = useState<string>("name");

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

  const handleFilter = (event: SelectChangeEvent<unknown>) => {
    setSelectedFilter(event.target.value as string);
  };

  const updateProducts = (action: string) => {
    const { afterCursor } = data?.paginateItems.cursor;
    const { beforeCursor } = data?.paginateItems.cursor;

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
      updateQuery: (_prevResult, { fetchMoreResult }) => {
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
    window.dispatchEvent(new Event("storage"));
  }, [data]);

  return (
    <div className="w-[94%] mx-auto py-9 lg:w-10/12">
      <div>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-primary-100 font-semibold text-lg transition-element xl:text-3xl lg:text-2xl md:text-xl">
            Explore Products{" "}
            {selectedFilter && (
              <span className="text-sm ml-2 italic text-black">
                by {selectedFilter}
              </span>
            )}
          </h1>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select-label"
              value={selectedFilter}
              placeholder="Select..."
              onChange={handleFilter}
            >
              <MenuItem value="price">Price</MenuItem>
              <MenuItem value="name">Name</MenuItem>
              <MenuItem value="availability">Availability</MenuItem>
            </Select>
          </FormControl>
        </div>
        {!loading && !isLoading ? (
          <ProductList
            data={data?.paginateItems?.data}
            selectedFilter={selectedFilter}
          />
        ) : (
          <div className="grid grid-cols-1 gap-5 2xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <Skeleton
                animation="wave"
                key={index}
                variant="rectangular"
                height={450}
                sx={{ borderRadius: "20px" }}
              />
            ))}
          </div>
        )}

        {/* Pagination Controls */}
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
    </div>
  );
};

export default ProductListContainer;
