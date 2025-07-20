import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <main className="px-[5%] py-10 bg-[#f0f3f2] text-[#5C6C75]">
            <section className="flex items-start justify-between flex-wrap gap-4 text-sm">
                <div className="grid gap-3">
                    <h3 className="font-medium text-[#000000]">Categories</h3>
                    <div className="flex items-start justify-start flex-wrap gap-4">
                        <div className="flex flex-col gap-2">
                            <a href="#" className="hover:text-[#0AAD0A]">Vegetables & Fruits</a>
                            <a href="#" className="hover:text-[#0AAD0A]">Breakfast & instant food</a>
                            <a href="#" className="hover:text-[#0AAD0A]">Bakery & Biscuits</a>
                            <a href="#" className="hover:text-[#0AAD0A]">Atta, rice & dal</a>
                            <a href="#" className="hover:text-[#0AAD0A]">Sauces & spreads</a>
                            <a href="#" className="hover:text-[#0AAD0A]">Organic & gourmet</a>
                            <a href="#" className="hover:text-[#0AAD0A]">Baby care</a>
                            <a href="#" className="hover:text-[#0AAD0A]">Cleaning essentials</a>
                            <a href="#" className="hover:text-[#0AAD0A]">Personal care</a>
                        </div>
                        <div className="flex flex-col gap-2">
                            <a href="#" className="hover:text-[#0AAD0A]">Dairy, bread & eggs</a>
                            <a href="#" className="hover:text-[#0AAD0A]">Cold drinks & juices</a>
                            <a href="#" className="hover:text-[#0AAD0A]">Tea, coffee & drinks</a>
                            <a href="#" className="hover:text-[#0AAD0A]">Masala, oil & more</a>
                            <a href="#" className="hover:text-[#0AAD0A]">Chicken, meat & fish</a>
                            <a href="#" className="hover:text-[#0AAD0A]">Paan corner</a>
                            <a href="#" className="hover:text-[#0AAD0A]">Pharma & wellness</a>
                            <a href="#" className="hover:text-[#0AAD0A]">Home & office</a>
                            <a href="">Pet care</a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <h3 className="font-medium text-[#000000]">Get to know us</h3>
                    <div className="flex flex-col gap-2">
                        <a href="#" className="hover:text-[#0AAD0A]">Company</a>
                        <a href="#" className="hover:text-[#0AAD0A]">About</a>
                        <a href="#" className="hover:text-[#0AAD0A]">Blog</a>
                        <a href="#" className="hover:text-[#0AAD0A]">Help Center</a>
                        <a href="#" className="hover:text-[#0AAD0A]">Our Value</a>
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <h3 className="font-medium text-[#000000]">For Consumers</h3>
                    <div className="flex flex-col gap-2">
                        <a href="#" className="hover:text-[#0AAD0A]">Payments</a>
                        <a href="#" className="hover:text-[#0AAD0A]">Shipping</a>
                        <a href="#" className="hover:text-[#0AAD0A]">Product Returns</a>
                        <a href="#" className="hover:text-[#0AAD0A]">FAQ</a>
                        <a href="#" className="hover:text-[#0AAD0A]">Shop Checkout</a>
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <h3 className="font-medium text-[#000000]">Become a Shopper</h3>
                    <div className="flex flex-col gap-2">
                        <a href="#" className="hover:text-[#0AAD0A]">Shopper Opportunities</a>
                        <a href="#" className="hover:text-[#0AAD0A]">Become a Shopper</a>
                        <a href="#" className="hover:text-[#0AAD0A]">Earnings</a>
                        <a href="#" className="hover:text-[#0AAD0A]">Ideas & Guides</a>
                        <a href="#" className="hover:text-[#0AAD0A]">New Retailers</a>
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <h3 className="font-medium text-[#000000]">DailyGrocer programs</h3>
                    <div className="flex flex-col gap-2">
                        <a href="#" className="hover:text-[#0AAD0A]">DailyGrocer programs</a>
                        <a href="#" className="hover:text-[#0AAD0A]">Gift Cards</a>
                        <a href="#" className="hover:text-[#0AAD0A]">Promos & Coupons</a>
                        <a href="#" className="hover:text-[#0AAD0A]">DailyGrocer Ads</a>
                        <a href="#" className="hover:text-[#0AAD0A]">Careers</a>
                    </div>
                </div>
            </section>

            <section className="flex flex-col lg:flex-row items-center justify-between gap-4 py-4 mt-5 border-t-2 border-b-2">
                <div className="flex flex-col md:flex-row items-center justify-center gap-2">
                    <p className="font-medium text-[#000000]">Payment Partners</p>
                    <div className="flex items-center justify-center gap-2">
                        <img src="/imgs/amazonpay.svg" alt="amazonpay" />
                        <img src="/imgs/american-express.svg" alt="american-express" />
                        <img src="/imgs/paypal.svg" alt="paypal" />
                        <img src="/imgs/paypal.svg" alt="paypal" />
                        <img src="/imgs/visa.svg" alt="visa" />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-2">
                    <p className="font-medium text-[#000000]">Get deliveries with DailyGrocer</p>
                    <div className="flex items-center justify-center gap-3">
                        <img src="/imgs/appstore-btn.svg" alt="appstore" className="w-[120px]" />
                        <img src="/imgs/googleplay-btn.svg" alt="googleplay" className="w-[120px]" />
                    </div>
                </div>
            </section>

            <section className="flex flex-col lg:flex-row items-center justify-between gap-4 py-4 mt-5 text-sm">
                <div>
                    <p className="text-center lg:text-left">© 2022 - 2024 DailyGrocer eCommerce HTML Template. All rights reserved.</p>
                </div>

                <div className="flex items-center justify-center gap-3">
                    <p>Follow us on</p>
                    <div className="flex items-center justify-center gap-2">
                        <a href="#" className="p-2 rounded-lg border-[1px] border-[#5C6C75] hover:text-[#0AAD0A] hover:border-[#0AAD0A]">
                            <FaFacebook />
                        </a>

                        <a href="#" className="p-2 rounded-lg border-[1px] border-[#5C6C75] hover:text-[#0AAD0A] hover:border-[#0AAD0A]">
                            <FaInstagram />
                        </a>

                        <a href="#" className="p-2 rounded-lg border-[1px] border-[#5C6C75] hover:text-[#0AAD0A] hover:border-[#0AAD0A]">
                            <FaXTwitter />
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Footer;