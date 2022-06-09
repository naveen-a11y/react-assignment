import React from "react";
import SearchIcon from "../assets/svgs/searchIcon.svg";
import UserIcon from "../assets/svgs/userIcon.svg";
import SaveIcon from "../assets/svgs/saveIcon.svg";
import CartIcon from "../assets/svgs/cartIcon.svg";
import BagsIcon from "../assets/svgs/bags.svg";
import VanityIcon from "../assets/svgs/vanityPouch.svg";
import BagIcon from "../assets/svgs/bag.svg";
import Logo from "../assets/svgs/logo.svg";
import DuffleBagIcon from "../assets/svgs/duffleBag.svg";
import LaptopSleeve from "../assets/svgs/laptopSleeve.svg";
import MessengerBag from "../assets/svgs/messengerBag.svg";
import SlingsBag from "../assets/svgs/slingsBag.svg";
import HandBags from "../assets/svgs/handBags.svg";

import Link from "next/link";
export const Header = () => {
    const navLinks = [
        { title: "Bags", link: "" },
        { title: "Travel", link: "" },
        { title: "Accesories", link: "" },
        { title: "Gifting", link: "" },
        { title: "Jewlery", link: "" },
    ];
    const products = [
        { title: "All Bags", Icon: <BagsIcon /> },
        { title: "Vanity Pouch", Icon: <VanityIcon /> },
        { title: "Tote Bag", Icon: <BagIcon /> },
        { title: "Duffle Bag", Icon: <DuffleBagIcon /> },
        { title: "Laptop Sleeve", Icon: <LaptopSleeve /> },
        { title: "Messenger Bags", Icon: <MessengerBag /> },
        { title: "Slings Bags", Icon: <SlingsBag /> },
        { title: "Hand Bags", Icon: <HandBags /> },
    ];
    const icons = [
        {
            Icon: <SearchIcon />,
        },
        {
            Icon: <UserIcon />,
        },
        {
            Icon: <SaveIcon />,
        },
        {
            Icon: <CartIcon />,
        },
    ];
    return (
        <div className="p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Logo />
                <div className="space-x-2 md:space-x-4 flex items-center">
                    {icons.map((icon) => (
                        <p className="w-6 h-6 cursor-pointer" key={icon.Icon}>
                            {icon.Icon}
                        </p>
                    ))}
                </div>
            </div>
            <div className="md:container md:mx-auto flex space-x-8 my-4 overflow-scroll scrollbar-hide sm:justify-center">
                {navLinks.map((navLink) => (
                    <Link href={navLink.link} key={navLink.title}>
                        <a className="text-lg">{navLink.title}</a>
                    </Link>
                ))}
            </div>
            <div className="container mx-auto flex space-x-8 md:space-x-20 overflow-x-scroll scrollbar-hide">
                {products.map((product) => (
                    <div className="text-center flex flex-col items-center justify-center" key={product.Icon}>
                        {product.Icon}
                        {product.title}
                    </div>
                ))}
            </div>
        </div>
    );
};
