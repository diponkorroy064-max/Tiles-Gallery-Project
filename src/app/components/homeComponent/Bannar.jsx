import Image from 'next/image';
import Link from 'next/link';
import bannarImg from '@/assets/bannar_img1.avif'
import 'animate.css';


const Hero = () => {
    return (
        <section className="container mx-auto relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
            {/* Background Image / Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/30 z-10" /> {/* Dark overlay for text readability */}
                <Image src={bannarImg} width={500}
                    height={500}
                    alt="Aesthetic Tiles"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold tracking-tighter text-white drop-shadow-lg animate__animated animate__zoomIn">
                    Discover Your Perfect <span className="text-indigo-400">Aesthetic</span>
                </h1>

                <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-medium">
                    Elevate your space with our curated collection of premium tiles.
                    Uncompromising quality meets timeless design.
                </p>

                <div className="mt-10">
                    <Link
                        href="/allTiles"
                        className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-indigo-600 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-500 shadow-xl hover:scale-105"
                    >
                        Browse Now
                        <svg
                            className="w-5 h-5 ml-2 -mr-1 transition-transform group-hover:translate-x-1 animate-bounce"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;

