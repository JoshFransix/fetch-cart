import { Link } from "react-router-dom";
// import { useState } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import PreviewIcon from "@mui/icons-material/Preview";

interface ProductProps {
  id: number | string;
  title: string;
  image?: string | null;
  currency: string | null;
  isAvailable: boolean;
  description?: string | null;
  price: string | number;
  color?: string; // Optional prop to set custom color for product background. Default is #CAF3E5.
}

const Product: React.FC<ProductProps> = ({
  id = 1,
  title = "This is a product",
  image,
  currency,
  isAvailable,
  description = "This is a test description for a product",
  price,
  color = "#CAF3E5",
}: ProductProps) => {
  const trimText = (text: string | null) => {
    if (text) {
      if (text.length > 18) {
        return text.substring(0, 18) + "...";
      } else {
        return text;
      }
    }
    return "Lorem ipsum, dolor s...";
  };

  return (
    <div
      style={{ background: `${color}` }}
      className="rounded-xl flex flex-col w-full px-7 py-9 relative"
    >
      {/* Indicators for available/non-available products */}
      <div className="absolute top-4 italic right-3 text-xs font-bold">
        {isAvailable ? (
          <span className=" bg-green-200 border border-primary-100 px-2 py-1 rounded-full">
            Available
          </span>
        ) : (
          <span className=" bg-red-200 border border-primary-100 px-2 py-1 rounded-full">
            Out of Stock
          </span>
        )}
      </div>

      <div
        className="size-[200px] rounded-lg mt-3"
        style={{
          background: `url(${
            image ? `${image}` : "landing-image.jpg"
          }) no-repeat center center/cover`,
        }}
      ></div>
      <div className="text-primary-200 mt-6">
        <h2 className=" font-semibold ">{trimText(title)}</h2>
        <p className="mt-2 text-sm">{trimText(description)}</p>
        <h3 className="mt-2 font-semibold ">
          {currency || "$"} {Number(price)}
        </h3>
      </div>

      <div className="flex justify-around mt-6 border-black py-2 border-y-[1px]">
        <Link to={`/product/${id}`}>
          <Button size="small" color="primary" startIcon={<PreviewIcon />}>
            View
          </Button>
        </Link>
        <Button
          size="small"
          variant="outlined"
          color="error"
          type="submit"
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default Product;
