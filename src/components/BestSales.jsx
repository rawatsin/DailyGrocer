import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

const bestSalesData = [
  {
    id: 1,
    name: "Crushed Tomatoes",
    category: "Fruits & Vegetables",
    image: "/imgs/product-img-11.jpg",
    price: "$13",
    originalPrice: "$18",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Espresso Coffee",
    category: "Tea, Coffee & Drinks",
    image: "/imgs/product-img-12.jpg",
    price: "$13",
    originalPrice: "$18",
    rating: 4.7,
  },
  {
    id: 3,
    name: "Golden Pineapple",
    category: "Fruits & Vegetables",
    image: "/imgs/product-img-13.jpg",
    price: "$13",
    originalPrice: "$18",
    rating: 4.2,
  },
];

const bestSalesMore = [
  {
    id: 1,
    img: "/imgs/clock.svg",
    title: "10 minute grocery now",
    content:
      "Get your order delivered to your doorstep at the earliest from DailyGrocer pickup stores near you.",
  },
  {
    id: 2,
    img: "/imgs/gift.svg",
    title: "Best Prices & Offers",
    content:
      "Cheaper prices than your local supermarket, great cashback offers to top it off. Get best pricess & offers.",
  },
  {
    id: 3,
    img: "/imgs/package.svg",
    title: "Wide Assortment",
    content:
      "Choose from 5000+ products across food, personal care, household, bakery, veg and non-veg & other categories.",
  },
  {
    id: 4,
    img: "/imgs/refresh-cw.svg",
    title: "Free Delivery",
    content:
      "Not satisfied with a product? Return it at the doorstep & get a refund within hours. No questions asked policy",
  },
];

const BestSales = () => {
  return (
    <main className="w-full px-[5%] py-20">
      <h1 className="text-2xl md:text-3xl font-medium">Daily Best Sells</h1>

      <section className="grid grid-cols-1 mt-2 overflow-x-scroll lg:overflow-x-hidden px-4 py-4">
        <div className="min-w-[1000px] mt-5 flex justify-start items-start gap-4">
          <div
            className="min-w-[250px] h-[500px] rounded-xl flex flex-col items-start justify-start gap-2 p-5 xl:p-10"
            style={{
              backgroundImage: `url('/imgs/banner-deal.jpg')`,
              backgroundSize: "cover",
            }}
          >
            <h1 className="text-3xl font-bold text-white">
              100% Organic Coffee Beans.
            </h1>
            <p className="text-lg font-medium text-white">
              Get the best deal before close.
            </p>
            <button className="py-2 px-4 rounded-lg bg-[#0AAD0A] text-white font-medium">
              Shop Now
            </button>
          </div>

          {bestSalesData.map((bestSalesData, index) => (
            <div
              key={bestSalesData.id}
              className="min-w-[250px] relative p-4 rounded-lg border hover:shadow-xl hover:border-[#0AAD0A] cursor-pointer product grid gap-2"
            >
              <div className="flex items-center justify-center">
                <img src={bestSalesData.image} alt="product-img-11" />
              </div>

              <p className="text-[#5C6C75] text-sm font-medium">
                {bestSalesData.name}
              </p>
              <h3 className="font-medium text-base hover:text-[#0AAD0A]">
                {bestSalesData.category}
              </h3>

              <div className="flex items-center justify-between">
                <p className="flex items-center justify-center gap-1 mt-3">
                  {bestSalesData.price}{" "}
                  <span className="text-[#5C6C75] font-medium line-through">
                    {bestSalesData.originalPrice}
                  </span>
                </p>

                <div className="flex items-center justify-center text-yellow-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                  <p className="text-[#5C6C75] ml-2">{bestSalesData.rating}</p>
                </div>
              </div>

              <button className="py-2 px-3 rounded bg-[#0AAD0A] text-white">
                + Add to cart
              </button>

              <div className="flex items-center justify-center gap-2 flex-wrap">
                <span className="px-4 py-2 border rounded-lg text-base flex flex-col items-center justify-center">
                  <p>1509</p>
                  <p className="text-[#5C6C75] font-medium">Days</p>
                </span>

                <span className="px-4 py-2 border rounded-lg text-base flex flex-col items-center justify-center">
                  <p>10</p>
                  <p className="text-[#5C6C75] font-medium">Hours</p>
                </span>

                <span className="px-4 py-2 border rounded-lg text-base flex flex-col items-center justify-center">
                  <p>48</p>
                  <p className="text-[#5C6C75] font-medium">Minus</p>
                </span>

                <span className="px-4 py-2 border rounded-lg text-base flex flex-col items-center justify-center">
                  <p>15</p>
                  <p className="text-[#5C6C75] font-medium">Sec</p>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">
        {bestSalesMore.map((more, index) => (
          <div key={more.id} className="grid gap-2">
            <img src={more.img} alt="" />
            <h3 className="font-medium text-lg">{more.title}</h3>
            <p className="text-[#5C6C75] text-base">{more.content}</p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default BestSales;
