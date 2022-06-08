import React from "react";
import Image from "next/image";
import AddToCart from "../assets/svgs/addToCart.svg";
import Save from "../assets/svgs/saveIcon.svg";

const Products = ({ data }) => {
    return (
        <div className="container gap-4 p-4 mx-auto grid-cols-2 md:grid-cols-3 grid lg:grid-cols-4 lg:gap-8">
            {data.map((item) => (
                <div key={item.id} className="bg-[#141414] rounded-2xl overflow-hidden flex flex-col">
                    <div className="relative w-full h-52 md:h-80 bg-center">
                        <Image
                            src={item.image[0]}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="absolute"
                            className="brightness-75"
                            alt={item.image[0]}
                        />
                        <Save className="absolute top-2 right-2 cursor-pointer stroke-white" />
                    </div>
                    <div className="p-2 md:p-4">
                        <h1 className="text-xl line-clamp-2">{item.name}</h1>
                        <div className="flex justify-between items-center">
                            {item.inr_discount > 0 ? (
                                <div>
                                    ₹ {item.special_price} <span className="line-through text-gray-400">₹ {item.price}</span>{" "}
                                    <span className="text-green-400 inline-block">( {item.inr_discount}% Off )</span>
                                </div>
                            ) : (
                                <p>₹ {item.price} </p>
                            )}

                            <AddToCart className="w-12 h-12 cursor-pointer" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Products;
