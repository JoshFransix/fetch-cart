/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import CancelTwoToneIcon from "@mui/icons-material/CancelTwoTone";

const Search = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const products = JSON.parse(localStorage.getItem("allProducts")!);

  const handleSearch = (e: any) => {
    setSearchQuery(e.target.value);
    const found = products.filter((p: IProduct) =>
      p.name.toLowerCase().includes(e.target.value)
    );
    console.log(found);
    setFilteredProducts(found);
  };

  const goToProduct = (id: string | number) => {
    navigate(`/product/${id}`);
  };

  //   useEffect(() => {
  //     window.addEventListener("storage", () => {
  //       console.log("Change to local storage!");
  //       setFilteredProducts([]);
  //       setProducts(JSON.parse(localStorage.getItem("allProducts")!));
  //       // ...
  //     });
  //   }, []);

  return (
    <div className="relative">
      <Button
        onClick={() => setIsOpen(true)}
        variant="contained"
        disableElevation
        sx={{
          backgroundColor: "#5D3FD3",
          width: "120px",
          height: "33px",
          borderRadius: "10px",
        }}
      >
        <span className="capitalize">Search</span>
      </Button>

      <div className="absolute">
        {isOpen && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0 }}
            className="fixed w-full h-full top-0 left-0 backdrop-blur-[8px] transition-element"
          >
            <div className="transition-element relative flex justify-center top-1/2 -translate-y-[800%] cursor-pointer">
              <CancelTwoToneIcon
                onClick={() => setIsOpen(false)}
                color="primary"
              />
            </div>
            <div className="transition-element fixed top-1/2 left-1/2 -translate-x-[50%] -translate-y-[300%] lg:w-[600px] sml:w-[450px] w-[370px]  h-[50px] text-base text-primeColor bg-white flex items-center gap-2 justify-start lg:justify-center px-6 rounded-xl">
              <input
                className="transition-element flex-1 h-full text-primary-100 outline-none placeholder:text-[#C4C4C4] placeholder:text-[14px]"
                type="text"
                onChange={handleSearch}
                value={searchQuery}
                placeholder="Search your products here"
              />

              {searchQuery && searchQuery !== "" && (
                <div
                  className={`text-black w-full mx-auto rounded-md p-5 h-96 bg-white top-16 absolute left-0 z-50 overflow-y-scroll shadow-2xl scroll-bar`}
                >
                  {searchQuery && filteredProducts.length > 0 ? (
                    filteredProducts.map((item, i) => (
                      <div
                        onClick={() => goToProduct(item?.id)}
                        key={i}
                        className="max-w-[600px] cursor-pointer p-3 rounded-md h-28 bg-gray-100 mb-3 flex items-center gap-3"
                      >
                        <img
                          className="w-24 rounded-lg text-xs"
                          src={
                            item?.itemVariants[0].imageUrl ||
                            "/landing-image.jpg"
                          }
                          alt="productImg"
                        />
                        <div className="flex flex-col gap-1">
                          <p className="font-semibold sml:text-lg text-sm">
                            {item?.name}
                          </p>
                          <p className="text-xs">
                            {item?.description
                              ? item?.description.length > 60
                                ? `${item?.description.substring(0, 60)}...`
                                : item.description
                              : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequinulla ullam totam illo fuga quo, est magni incidunt optio s"}
                          </p>
                          <p className="sml:text-sm text-xs">
                            Price:{" "}
                            <span className="text-primeColor font-semibold">
                              {item?.currency} {item?.itemVariants[0]?.price}
                            </span>
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-center text-xs text-gray-600">
                      No results found
                    </p>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Search;
