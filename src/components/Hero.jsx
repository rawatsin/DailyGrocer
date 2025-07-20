import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const heroContents =[
    {
        id: 1,
        bg: "./imgs/slide-1.jpg",
        info: "Free Shipping - orders over $100",
        title: "Free Shipping on Orders over $100",
        description: "Free Shipping On First-Time Customers Only, After Promotions and Discounts are Applied"
    },
    {
        id: 2,
        bg: "./imgs/slider-2.jpg",
        info: "New Product Launch",
        title: "Discover Our New Collection",
        description: "Experience the latest fashion trends and exclusive offers at our supermarket."
    }
]

const Hero = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return ( 
        <main className="px-[5%] py-5 min-h-[80vh] w-full">
            <Carousel responsive={responsive} infinite={true} autoPlay={true} arrows={false} showDots={true}>
                {
                    heroContents.map((content, index) => (
            <div className="w-full min-h-[70vh] bg-gray-500 rounded-xl py-5 px-[5%] flex flex-col items-start justify-center gap-2"  style={{ backgroundImage: `url(${content.bg})`, backgroundSize: "cover" }}>

            <p className="px-2 py-1 rounded-lg bg-yellow-500 font-medium text-xs">{content.info}</p>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold w-full sm:w-[90%] lg:w-[60%] text-[#001E2B]">{content.title}</h1>
            <p className="text-lg md:text-xl font-medium w-full sm:w-[80%] lg:w-[50%] text-[#5C6C75]">{content.description}</p>

            <button className="py-3 px-5 rounded-lg bg-[#001E2B] text-white font-medium">Shop Now</button>

            </div>
            ))
        }
            </Carousel>

        </main>
     );
}
 
export default Hero;