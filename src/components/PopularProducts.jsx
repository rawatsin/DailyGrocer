import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { GrFavorite } from "react-icons/gr";
import { PiArrowsLeftRightLight } from "react-icons/pi";

const products = [
    {
        id: 1,
        name: "Haldiram's Sev Bhujia",
        category: "Snack & Munchies",
        price: "$18",
        prevPrice: "$24",
        rating: "4.5(149)",
        status: "Sale",
        discount: "",
        img: "imgs/product-img-1.jpg"
    },
    {
        id: 2,
        name: "NutriChoice Digestive",
        category: "Bakery & Biscuits",
        price: "$24",
        prevPrice: "",
        rating: "4.5 (25)",
        status: "",
        discount: "14%",
        img: "imgs/product-img-2.jpg"
    },
    {
        id: 3,
        name: "Cadbury 5 Star Chocolate",
        category: "Bakery & Biscuits",
        price: "$32",
        prevPrice: "$35",
        rating: "5 (469)",
        status: "",
        discount: "",
        img: "imgs/product-img-3.jpg"
    },
    {
        id: 4,
        name: "Onion Flavour Potato",
        category: "Snack & Munchies",
        price: "$20",
        prevPrice: "",
        rating: "3.5 (456)",
        status: "Hot",
        discount: "",
        img: "imgs/product-img-4.jpg"
    },
    {
        id: 5,
        name: "Salted Instant Popcorn",
        category: "Instant Food",
        price: "$13",
        prevPrice: "$18",
        rating: "4.5 (39)",
        status: "",
        discount: "",
        img: "imgs/product-img-5.jpg"
    },
    {
        id: 6,
        name: "Blueberry Greek Yogurt",
        category: "Dairy, Bread & Eggs",
        price: "$18",
        prevPrice: "$24",
        rating: "4.5 (189)",
        status: "Sale",
        discount: "",
        img: "imgs/product-img-6.jpg"
    },
    {
        id: 7,
        name: "Britannia Cheese Slices",
        category: "Dairy, Bread & Eggs",
        price: "$24",
        prevPrice: "",
        rating: " 5 (345)",
        status: "",
        discount: "",
        img: "imgs/product-img-7.jpg"
    },
    {
        id: 8,
        name: "Kellogg's Original Cereals",
        category: "Instant Food",
        price: "$32",
        prevPrice: " $35",
        rating: "4 (90)",
        status: "Sale",
        discount: "",
        img: "imgs/product-img-8.jpg"
    },
    {
        id: 9,
        name: "Slurrp Millet Chocolate",
        category: "Snack & Munchies",
        price: "$3",
        prevPrice: "$5",
        rating: "4.5 (67)",
        status: "",
        discount: "",
        img: "imgs/product-img-9.jpg"
    },
    {
        id: 10,
        name: "Amul Butter - 500 g",
        category: "Dairy, Bread & Eggs",
        price: "$13",
        prevPrice: "$18",
        rating: "3.5 (89)",
        status: "",
        discount: "",
        img: "imgs/product-img-10.jpg"
    }
]

const PopularProducts = () => {
    return (
        <main className="px-[5%] py-10">
            <h1 className="text-2xl md:text-3xl font-medium">Popular Products</h1>

            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-5">
                {
                    products.map((product, index) => (
                        <div key={product.id} className="relative p-4 rounded-lg border hover:shadow-xl hover:border-[#0AAD0A] cursor-pointer product">
                            <img src={product.img} alt="" />

                            <div className="grid gap-2">
                                <p className="text-[#5C6C75] text-sm font-medium">{product.category}</p>
                                <p className="font-medium text-base hover:text-[#0AAD0A]">{product.name}</p>

                                <div className="flex items-center justify-start text-yellow-500">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStarHalfAlt />
                                    <p className="text-[#5C6C75] ml-2">{product.rating}</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between gap-10 mt-3">
                                <p>{product.price} {product.prevPrice && <span className="font-medium line-through text-[#5C6C75]">{product.prevPrice}</span>}</p>

                                <button className="py-1 px-3 rounded bg-[#0AAD0A] text-white">+ Add</button>
                            </div>

                            {product.status && <p className="font-medium py-[2px] px-2 text-white text-xs rounded bg-red-500 absolute left-4 top-4">{product.status}</p>}

                            {product.discount && <p className="font-medium py-[2px] px-2 text-white text-xs rounded bg-[#0AAD0A] absolute left-4 top-4">{product.discount}</p>}

                            <div className="items-center justify-center gap-4 absolute top-[40%] md:top-[50%] right-[30%] md:right-[20%] product-actions">
                                <span className="p-2 rounded-md shadow-xl bg-white hover:bg-[#0AAD0A] hover:text-white"><IoEyeOutline /></span>
                                <span className="p-2 rounded-md shadow-xl bg-white hover:bg-[#0AAD0A] hover:text-white"><GrFavorite /></span>
                                <span className="p-2 rounded-md shadow-xl bg-white hover:bg-[#0AAD0A] hover:text-white"><PiArrowsLeftRightLight /></span>
                            </div>
                        </div>
                    ))
                }
            </section>
        </main>
    );
}

export default PopularProducts;