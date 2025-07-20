import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import { Link } from "react-router-dom";
import { TiDocumentText } from "react-icons/ti";
import { IoLogoBuffer } from "react-icons/io";
import { RiMenuFold4Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [handleDepart, setHandleDepart] = useState(false);

  return (
    <main className="relative w-full border-b-2 pb-4 z-50">
      <div className="w-full flex items-center justify-between bg-[#f0f3f2] py-1 px-[5%]">
        <p className="text-sm lg:text-base text-[#5c6c75] font-medium">
          Super Value Deals - Save more with coupons
        </p>

        <div className="hidden lg:flex relative items-center justify-center gap-2 cursor-pointer lang">
          <img
            src="/imgs/english-flag.jpg"
            alt="english-flag"
            className="w-6 h-4"
          />
          <p className="font-medium">English</p>
          <IoIosArrowDown />

          <div className="absolute top-6 left-[-10px] p-2 rounded-lg border-[1px] min-w-full lg:min-w-[150px] bg-white font-medium flex-col text-gray-500 lang-hover text-sm shadow z-50">
            <div className="flex items-center gap-2 cursor-pointer p-2 rounded-md hover:bg-gray-200">
              <img
                src="/imgs/english-flag.jpg"
                alt="english-flag"
                className="w-6 h-4"
              />
              <p className="font-medium  flex items-center justify-between w-full">
                English <IoIosArrowDown />
              </p>
            </div>
            <div className="flex items-center gap-2 cursor-pointer p-2 rounded-md hover:bg-gray-200">
              <img
                src="/imgs/deutsch-flag.png"
                alt="english-flag"
                className="w-6 h-4"
              />
              <p className="font-medium flex items-center justify-between w-full">
                Deutsch <IoIosArrowDown />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between px-[5%] py-4">
        <img src="/imgs/DailyG.jpeg" alt="logo" />

        <div className="hidden lg:flex items-center gap-3 min-w-[50%]">
          <div className="w-full relative">
            <input
              type="search"
              placeholder="Search for products"
              className="border-2 rounded-lg px-5 py-2 w-full outline-none"
            />
            <FiSearch className="text-xl absolute top-3 right-4 text-gray-400" />
          </div>
          <button className="flex items-center justify-center gap-2 px-5 py-2 border-2 rounded-lg hover:bg-gray-300 text-base font-medium">
            <CiLocationOn className="text-xl text-gray-400" /> Location
          </button>
        </div>

        <div className="flex items-center gap-3 text-2xl text-gray-400">
          <div className="relative cursor-pointer">
            <MdOutlineFavoriteBorder />
            <p className="px-[6px] py-[2px] rounded-full text-white bg-[#0AAD0A] absolute top-[-10px] right-[-5px] text-xs font-medium">5</p>
          </div>

          <FiUser className="cursor-pointer"/>

          <div className="relative cursor-pointer">
            <FiShoppingBag />
            <p className="px-[6px] py-[2px] rounded-full text-white bg-[#0AAD0A] absolute top-[-10px] right-[-5px] text-xs font-medium">1</p>
          </div>

          <RiMenuFold4Line
            className="text-[#0AAD0A] cursor-pointer flex lg:hidden"
            onClick={() => setShowMenu(true)}
          />
        </div>
      </div>
      <div
        className={`${
          showMenu ? "flex" : "hidden"
        } absolute lg:relative w-[80%] lg:w-full top-0 lg:top-auto  px-4 lg:px-[5%] py-4 lg:py-2 font-bold bg-white lg:flex flex-col lg:flex-row items-start lg:items-center gap-2 lg:gap-5 text-sm text-gray-700`}
      >
        <div className="w-full flex lg:hidden flex-col gap-2 lg:hideen">
          <div className="w-full flex items-center justify-between gap-4">
            <img src="/imgs/-logo.svg" alt="" />

            <IoClose
              className="text-[#0AAD0A] text-3xl cursor-pointer"
              onClick={() => setShowMenu(false)}
            />
          </div>

          <div className="grid items-center gap-3 w-full">
            <div className="w-full relative">
              <input
                type="search"
                placeholder="Search for products"
                className="border-2 rounded-lg px-5 py-2 w-full outline-none"
              />
              <FiSearch className="text-xl absolute top-3 right-4 text-gray-400" />
            </div>
            <button className="flex items-center justify-center gap-2 px-5 py-2 border-2 rounded-lg hover:bg-gray-300 text-base font-medium">
              <CiLocationOn className="text-xl text-gray-400" /> Location
            </button>
          </div>
        </div>
        <div className="w-full lg:w-auto relative depart">
          <button className="w-full lg:w-auto px-5 py-3 rounded-lg bg-[#0AAD0A] text-white flex items-center justify-center lg:justify-start gap-2">
            <RxDashboard className="text-xl" />
            All Departments
          </button>
          <div
            className={` relative lg:absolute top-auto lg:top-14 left-auto lg:left-0 p-2 rounded-lg border-[1px] min-w-full lg:min-w-[200px] bg-white font-medium flex-col items-start z-30 text-gray-500 depart-hover mt-2 lg:mt-auto`}
          >
            <Link href={"/"} className="p-2 rounded-md hover:bg-gray-200">
              Diaries, Bread $ Egg
            </Link>
            <Link href={"/"} className="p-2 rounded-md hover:bg-gray-200">
              Snackes & Munchies
            </Link>
            <Link href={"/"} className="p-2 rounded-md hover:bg-gray-200">
              Fruites & Vegetables
            </Link>
            <Link href={"/"} className="p-2 rounded-md hover:bg-gray-200">
              Cold Drinks and Juices
            </Link>
            <Link href={"/"} className="p-2 rounded-md hover:bg-gray-200">
              Breakfast & Instant Food
            </Link>
            <Link href={"/"} className="p-2 rounded-md hover:bg-gray-200">
              Bakery & Buscuits
            </Link>
            <Link href={"/"} className="p-2 rounded-md hover:bg-gray-200">
              Chicken, Meat and Fish
            </Link>
          </div>
        </div>

        <div className="relative flex flex-col items-start lg:items-center justify-between lg:justify-start w-full lg:w-auto border-b-[1px] lg:border-none py-2 lg:py-auto gap-2 home cursor-pointer">
          <h3 className="text-base font-medium hover:text-[#0AAD0A] flex items-center justify-between w-full">
            Home <IoIosArrowDown />
          </h3>

          <div className="relative lg:absolute top-auto lg:top-10 left-auto lg:left-0 p-2 rounded-lg border-[1px] min-w-full lg:min-w-[150px] bg-white font-medium flex-col z-30 text-gray-500 home-hover">
            <Link href={"/"} className="p-2 rounded-md hover:bg-gray-200">
              Home 1
            </Link>
            <Link href={"/"} className="p-2 rounded-md hover:bg-gray-200">
              Home 2
            </Link>
            <Link href={"/"} className="p-2 rounded-md hover:bg-gray-200">
              Home 3
            </Link>
            <Link href={"/"} className="p-2 rounded-md hover:bg-gray-200">
              Home 4
            </Link>
            <Link href={"/"} className="p-2 rounded-md hover:bg-gray-200">
              Home 5
            </Link>
          </div>
        </div>
        <div className="relative flex flex-col items-start lg:items-center justify-between lg:justify-start w-full lg:w-auto border-b-[1px] lg:border-none py-2 lg:py-auto gap-2 cursor-pointer shop">
          <h3 className="text-base font-medium hover:text-[#0AAD0A] flex items-center justify-between w-full">
            Shop <IoIosArrowDown />
          </h3>

          <div className="relative lg:absolute top-auto lg:top-10 left-auto lg:left-0 p-2 rounded-lg border-[1px] min-w-full lg:min-w-[150px] bg-white font-medium flex-col z-30 text-gray-500 shop-hover">
            <Link href={"/"} className="p-2 rounded-md hover:bg-gray-200">
              Shop Grid - Filter
            </Link>
            <Link href={"/"} className="p-2 rounded-md hover:bg-gray-200">
              Shop Grid
            </Link>
            <Link href={"/"} className="p-2 rounded-md hover:bg-gray-200">
              Shop List
            </Link>
            <Link href={"/"} className="p-2 rounded-md hover:bg-gray-200">
              Shop Grid Filter
            </Link>
            <Link href={"/"} className="p-2 rounded-md hover:bg-gray-200">
              Shop Filter
            </Link>
            <Link href={"/"} className="p-2 rounded-md hover:bg-gray-200">
              Shop Single
            </Link>
            <Link href={"/"} className="p-2 rounded-md hover:bg-gray-200">
              Shop Wide
            </Link>
            <Link href={"/"} className="p-2 rounded-md hover:bg-gray-200">
              Shop Single V2
            </Link>
            <Link href={"/"} className="p-2 rounded-md hover:bg-gray-200">
              Shop Wishlist
            </Link>
            <Link href={"/"} className="p-2 rounded-md hover:bg-gray-200">
              Shop Cart
            </Link>
            <Link href={"/"} className="p-2 rounded-md hover:bg-gray-200">
              Shop Checkout
            </Link>
          </div>
        </div>
        <div className="relative flex flex-col items-start lg:items-center justify-between lg:justify-start w-full lg:w-auto border-b-[1px] lg:border-none py-2 lg:py-auto gap-2 cursor-pointer stores">
          <h3 className="text-base font-medium hover:text-[#0AAD0A] flex items-center justify-between w-full">
            Stores <IoIosArrowDown />
          </h3>

          <div className="relative lg:absolute top-auto lg:top-10 left-auto lg:left-0 p-2 rounded-lg border-[1px] min-w-full lg:min-w-[150px] bg-white font-medium flex-col z-30 text-gray-500 stores-hover">
            <Link href={"/"} className="p-2 rounded-md hover:bg-gray-200">
              Store List
            </Link>
            <Link href={"/"} className="p-2 rounded-md hover:bg-gray-200">
              Store Grid
            </Link>
            <Link href={"/"} className="p-2 rounded-md hover:bg-gray-200">
              Store Single
            </Link>
          </div>
        </div>
        <div className="relative flex flex-col items-start lg:items-center justify-between lg:justify-start w-full lg:w-auto border-b-[1px] lg:border-none py-2 lg:py-auto gap-2 cursor-pointer megamenu">
          <h3 className="text-base font-medium hover:text-[#0AAD0A] flex items-center justify-between w-full">
            Mega Menu
            <IoIosArrowDown />
          </h3>

          <div className="relative lg:absolute top-auto lg:top-12 left-auto lg:left-[-300px] p-2 rounded-lg border-[1px] min-w-full lg:min-w-[780px] xl:min-w-[1000px] bg-white font-medium flex-col lg:flex-row justify-between gap-5 z-30 text-gray-500 megamenu-hover">
            <div className="flex flex-col">
              <h1 className="p-2 text-[#0AAD0A]">Dairy, Bread & Eggs</h1>
              <Link href={"/"} className="p-2 rounded-md hover:bg-gray-200">
                Butter
              </Link>
              <Link href={"/"} className="p-2 rounded-md hover:bg-gray-200">
                Milk Drink
              </Link>
              <Link href={"/"} className="p-2 rounded-md hover:bg-gray-200">
                Curd & Yogurt
              </Link>
              <Link href={"/"} className="p-2 rounded-md hover:bg-gray-200">
                Eggs
              </Link>
              <Link href={"/"} className="p-2 rounded-md hover:bg-gray-200">
                Buns and Bakery
              </Link>
              <Link href={"/"} className="p-2 rounded-md hover:bg-gray-200">
                Cheese
              </Link>
              <Link href={"/"} className="p-2 rounded-md hover:bg-gray-200">
                Condensed Milk
              </Link>
              <Link href={"/"} className="p-2 rounded-md hover:bg-gray-200">
                Diary Products
              </Link>
            </div>
            <div className="flex flex-col">
              <h1 className="p-2 text-[#0AAD0A]">Breakfast & Instant Food</h1>
              <Link href={"/"} className="p-2 rounded-md hover:bg-gray-200">
                Breakfast Cerels
              </Link>
              <Link href={"/"} className="p-2 rounded-md hover:bg-gray-200">
                Noddles, Pasta & Soup
              </Link>
              <Link href={"/"} className="p-2 rounded-md hover:bg-gray-200">
                Frozen Veg Snacks
              </Link>
              <Link href={"/"} className="p-2 rounded-md hover:bg-gray-200">
                Frozen Non-Veg Snacks
              </Link>
              <Link href={"/"} className="p-2 rounded-md hover:bg-gray-200">
                Vermicelli
              </Link>
              <Link href={"/"} className="p-2 rounded-md hover:bg-gray-200">
                Instant Mixes
              </Link>
              <Link href={"/"} className="p-2 rounded-md hover:bg-gray-200">
                Batter
              </Link>
              <Link href={"/"} className="p-2 rounded-md hover:bg-gray-200">
                Fruits & Juices
              </Link>
            </div>

            <div className="flex flex-col">
              <h1 className="p-2 text-[#0AAD0A]">Cold Drinks & Juices</h1>
              <Link href={"/"} className="p-2 rounded-md hover:bg-gray-200">
                Soft Drinks
              </Link>
              <Link href={"/"} className="p-2 rounded-md hover:bg-gray-200">
                Fruit Jucies
              </Link>
              <Link href={"/"} className="p-2 rounded-md hover:bg-gray-200">
                Coldpress
              </Link>
              <Link href={"/"} className="p-2 rounded-md hover:bg-gray-200">
                Water & Ice Cubes
              </Link>
              <Link href={"/"} className="p-2 rounded-md hover:bg-gray-200">
                Soda & Mixers
              </Link>
              <Link href={"/"} className="p-2 rounded-md hover:bg-gray-200">
                Health Drinks
              </Link>
              <Link href={"/"} className="p-2 rounded-md hover:bg-gray-200">
                Herbal Drinks
              </Link>
              <Link href={"/"} className="p-2 rounded-md hover:bg-gray-200">
                Milk Drinks
              </Link>
            </div>

            <div
              className="h-[500px] lg:h-auto w-full lg:w-[300px] p-4 bg-green-300 flex flex-col items-start gap-2"
              style={{
                backgroundImage: "url(/imgs/menu-banner.jpg)",
                backgroundSize: "cover",
              }}
            >
              <h1 className="text-xl w-[50%] mt-4">
                Don't miss this offer today.
              </h1>
              <button className="py-2 px-3 rounded-lg bg-[#0AAD0A] text-white font-medium">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col items-center justify-between lg:justify-start w-full lg:w-auto border-b-[1px] lg:border-none py-2 lg:py-auto gap-2 cursor-pointer blog">
          <h3 className="text-base font-medium hover:text-[#0AAD0A] flex items-center justify-between w-full">
            Pages <IoIosArrowDown />
          </h3>

          <div className="relative lg:absolute top-auto lg:top-10 left-auto lg:left-0 p-2 rounded-lg border-[1px] min-w-full lg:min-w-[150px] bg-white font-medium flex-col z-30 text-gray-500 blog-hover">
            <Link href={"/"} className="p-2 rounded-md hover:bg-gray-200">
              Blog
            </Link>
            <Link href={"/"} className="p-2 rounded-md hover:bg-gray-200">
              Blog Single
            </Link>
            <Link href={"/"} className="p-2 rounded-md hover:bg-gray-200">
              Blog Category
            </Link>
            <Link href={"/"} className="p-2 rounded-md hover:bg-gray-200">
              About Us
            </Link>
            <Link href={"/"} className="p-2 rounded-md hover:bg-gray-200">
              Error 404
            </Link>
            <Link href={"/"} className="p-2 rounded-md hover:bg-gray-200">
              Contact
            </Link>
          </div>
        </div>
        <div className="relative flex flex-col items-start lg:items-center justify-between lg:justify-start w-full lg:w-auto border-b-[1px] lg:border-none py-2 lg:py-auto gap-2 account cursor-pointer">
          <h3 className="text-base font-medium hover:text-[#0AAD0A] flex items-center justify-between w-full">
            Account
            <IoIosArrowDown />
          </h3>

          <div className="relative lg:absolute top-auto lg:top-10 left-auto lg:left-0 p-2 rounded-lg border-[1px] min-w-full lg:min-w-[150px] bg-white font-medium flex-col z-30 text-gray-500 account-hover">
            <Link href={"/"} className="p-2 rounded-md hover:bg-gray-200">
              Sign in
            </Link>
            <Link href={"/"} className="p-2 rounded-md hover:bg-gray-200">
              Sign up
            </Link>
            <Link href={"/"} className="p-2 rounded-md hover:bg-gray-200">
              Forget password
            </Link>
            <div className="relative p-2 rounded-md hover:bg-gray-200 flex flex-col items-center justify-between gap-2 myaccount">
              <Link
                href={"/"}
                className="flex items-center justify-between w-full"
              >
                My Account <IoIosArrowForward />
              </Link>

              <div className="relative lg:absolute top-0 left-0 lg:left-[140px] p-2 rounded-lg border-[1px] min-w-full lg:min-w-[150px] bg-white font-medium flex-col z-30 text-gray-500 myaccount-hover">
                <Link href={"/"} className="p-2 rounded-md hover:bg-gray-200">
                  Orders
                </Link>
                <Link href={"/"} className="p-2 rounded-md hover:bg-gray-200">
                  Settings
                </Link>
                <Link href={"/"} className="p-2 rounded-md hover:bg-gray-200">
                  Address
                </Link>
                <Link href={"/"} className="p-2 rounded-md hover:bg-gray-200">
                  Payment Method
                </Link>
                <Link href={"/"} className="p-2 rounded-md hover:bg-gray-200">
                  Notification
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between lg:justify-start w-full lg:w-auto border-b-[1px] lg:border-none py-2 lg:py-auto gap-2 cursor-pointer">
          <h3 className="text-base font-medium hover:text-[#0AAD0A]">
            Dashboard
          </h3>
        </div>
        <div className="relative flex flex-col items-start lg:items-center justify-between lg:justify-start w-full lg:w-auto border-b-[1px] lg:border-none py-2 lg:py-auto gap-2 doc cursor-pointer">
          <h3 className="text-base font-medium hover:text-[#0AAD0A]">Docs</h3>

          <div className="relative lg:absolute top-0 lg:top-10 left-0 lg:left-[-100px] xl:left-0 rounded-lg border-[1px] min-w-full lg:min-w-[200px] xl:min-w-[230px] bg-white font-medium flex-col z-30 text-gray-500 doc-hover">
            <Link
              href={"/"}
              className="p-2 rounded-md hover:bg-gray-200 flex items-center"
            >
              <TiDocumentText className="text-2xl" />
              <div className="flex flex-col">
                <h1>Documentations</h1>
                <p className="text-xs">Browse the all documentations</p>
              </div>
            </Link>

            <Link
              href={"/"}
              className="p-2 rounded-md hover:bg-gray-200 flex items-center"
            >
              <IoLogoBuffer className="text-2xl" />
              <div className="flex flex-col">
                <h1>
                  Changelog <span className="text-[#0AAD0A]">v1.3.0</span>
                </h1>
                <p className="text-xs">See what's new</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Header;
