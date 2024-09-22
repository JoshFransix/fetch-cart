// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" flex justify-between items-center py-4">
      <Link to="/">
        <h1 className="text-xl sm:text-2xl font-bold">
          <span className="text-primary-100 italic">F</span>etch
          <span className="text-primary-100 italic">C</span>art
        </h1>
      </Link>
      <Link to="/">
        <p className="">Home</p>
      </Link>
      {/* <ShoppingCartIcon className="h-6 w-6 ml-4" /> */}
    </div>
  );
};

export default Header;
