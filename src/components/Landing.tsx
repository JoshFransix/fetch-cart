import Header from "./Header";
import Search from "./Search";

const Landing = () => {
  return (
    <div className="relative">
      <div className="w-full overflow-hidden z-[-1] top-0 left-0 landing-image h-[70vh] rounded-b-3xl text-white">
        {/* Landing Image Overlay */}
        <div className="overlay rounded-b-3xl"></div>

        {/* Header */}
        <div className="w-[94%] relative  mx-auto z-10 lg:w-10/12">
          <Header />

          {/* Header(Subtext) */}
          <div className="text-center pt-[6rem] my-auto leading-[3rem] flex flex-col justify-center items-center ">
            <h1 className="lg:text-3xl md:text-2xl text-xl">
              Exclusive Classic <br />
              products <span className="italic text-primary-100">
                tailored
              </span>{" "}
              just for you
            </h1>
            <p className="py-6 text-sm sm:text-base">
              Explore different categories. Find the best deals.
            </p>
            <Search />
            {/* <button className="transition-element text-sm px-4 py-2 text-white bg-primary-100 rounded-md">
              Add Product
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
