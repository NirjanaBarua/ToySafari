import { useEffect, useState } from "react";

const Banner = () => {
    // Array of image paths
    const slides = [
        "/images/koala.png",
        "/images/teddy.png",
        "/images/rabbit.png",
    ];
    const animalNames = ["Koala", "Teddy Bear", "Rabbit"];

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    useEffect(() => {
        
        const interval = setInterval(nextSlide, 3000); 

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[700px] bg-purple-200">
            <div className="relative w-full h-[500px] overflow-hidden">
                {/* Display the current slide */}
                <img
                    src={slides[currentSlide]}
                    className="w-full h-full mt-5 object-contain "
                    alt=" "
                />

            </div>
            {/* Text for large Devices */}
            <div className="absolute top-1/2 left-32 hidden lg:block">
                <h1 className="text-4xl font-bold ">ToySafari</h1>
                <p className="text-lg ">Explore the wild world of toys and adventures!</p>
            </div>
            <div className="absolute top-1/2 right-60 hidden lg:block">
                <p className="text-3xl font-bold ">{animalNames[currentSlide]}</p>
            </div>
            {/* Text for Small and Medium Devices  */}
            <div className="absolute lg:hidden bottom-2 left-0 right-0 text-center flex flex-col justify-center items-center">
                <h1 className="text-2xl sm:text-3xl font-bold">ToySafari</h1>
                <p className="text-sm sm:text-lg">Explore the wild world of toys and adventures!</p>
                <p className="text-lg sm:text-3xl font-bold">{animalNames[currentSlide]}</p>
            </div>
        </div>
    );
};

export default Banner;
