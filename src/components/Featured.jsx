import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ControlBtn from './ControlBtn';

const featuredData = [
  {
    id: 1,
    title: "Diary, Bread & Egg",
    image: "/imgs/category-dairy-bread-eggs.jpg",
  },
  {
    id: 2,
    title: "Chicken, Meat & Fish",
    image: "/imgs/category-chicken-meat-fish.jpg",
  },
  {
    id: 3,
    title: "Bakery & Biscuits",
    image: "/imgs/category-bakery-biscuits.jpg",
  },
  {
    id: 4,
    title: "Tea, Coffee & Drinks",
    image: "/imgs/category-tea-coffee-drinks.jpg",
  },
  {
    id: 5,
    title: "Atta, Rice & Dal",
    image: "/imgs/category-atta-rice-dal.jpg",
  },
  {
    id: 6,
    title: "Baby Care",
    image: "/imgs/category-baby-care.jpg",
  },
  {
    id: 7,
    title: "Cleaning Essentials",
    image: "/imgs/category-cleaning-essentials.jpg",
  },
  {
    id: 8,
    title: "Instant Food",
    image: "/imgs/category-instant-food.jpg",
  },
  {
    id: 9,
    title: "Pet Care",
    image: "/imgs/category-pet-care.jpg",
  },
  {
    id: 10,
    title: "Snack Munchies",
    image: "/imgs/category-snack-munchies.jpg",
  },
];

const groceryBanners = [
  {
    id: 1,
    title: "Fruits & Vegetables",
    subTitle: "Get Upto 30% Off",
    image: "/imgs/grocery-banner.png",
  },
  {
    id: 2,
    title: "Freshly Baked Buns",
    subTitle: "Get Upto 25% Off",
    image: "/imgs/grocery-banner-2.jpg",
  },
];

const Featured = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  let carouselRef = null;

  return (
    <main className="py-10 px-[5%] bg-white">
      <div className='flex items-center justify-between gap-5'>
        <h1 className="text-2xl md:text-3xl font-medium">Featured Categories</h1>
        <ControlBtn
          next={() => carouselRef?.next()}
          previous={() => carouselRef?.previous()}
        />
      </div>

      <section className="grid ap-4 mt-5 z-10">
        <Carousel
          ref={(el) => (carouselRef = el)}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          arrows={false}
        >
          {featuredData.map((item) => (
            <div
              key={item.id}
              className="py-10 px-5 rounded-lg border flex flex-col items-center justify-center gap-4 hover:shadow-xl hover:border-green-600 cursor-pointer mr-4"
            >
              <img src={item.image} alt={item.title} />
              <p className="font-medium">{item.title}</p>
            </div>
          ))}
        </Carousel>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
        {groceryBanners.map((item) => (
          <div
            key={item.id}
            className="p-4 rounded-lg min-h-[230px] flex flex-col items-start justify-center gap-2"
            style={{
              backgroundImage: `url('${item.image}')`,
              backgroundSize: "cover",
            }}
          >
            <h1 className="text-2xl lg:text-3xl font-bold w-[70%] text-[#001E2B]">
              {item.title}
            </h1>
            <p className="text-base lg:text-lg font-medium w-[50%] text-[#5C6C75]">
              {item.subTitle}
            </p>
            <button className="py-2 px-4 rounded-lg bg-[#001E2B] text-white font-medium">
              Shop Now
            </button>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Featured;