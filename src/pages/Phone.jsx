// pages/Home.jsx
import React from "react";
import './Phone.css';
import HeroSection from "../component/HeroSection";
import BookCard from "../component/BookCard ";
import WeeklyPickCard from "../component/WeeklyPickCard";
import iphone from "../assets/iphone.avif";
import redmi from "../assets/redmi.jpg";
import oneplus from "../assets/oneplus.jpg";
import motorola from "../assets/motorola.jpg";
import realme from "../assets/realme.jpg";
import bgimage from "../assets/phonebg.webp";


const Phone = () => {
    return (
    <div className="font-sans">
      {/* <Navbar /> */}
        <HeroSection img={bgimage} heading="Mobile Reviews" />
      {/* <SearchBar /> */}

      {/* Top Rated Section */}
        <section className="p-4 mt-8">
            {/* <h2 className="text-xl font-semibold mb-4">Top Rated</h2> */}
            <div className="bg-pink-200/50 rounded-2xl p-4">
                <h2 className="text-xl font-semibold mb-4">Top Rated</h2>
                <div className="overflow-hidden">
                    <div className="flex animate-scroll gap-6">
                    {/* Book Cards */}
                    <BookCard img={iphone} title="iPhone" author="Darnell Moore" className="flex-shrink-0" />
                    <BookCard img={redmi} title="The Death of Truth" author="Michiko Kakutani" className="flex-shrink-0" />
                    <BookCard img={oneplus} title="The Illegals" author="John Washington" className="flex-shrink-0" />
                    <BookCard img={motorola} title="The Walking Dead" author="Robert Kirkman" className="flex-shrink-0" />
                    <BookCard img={realme} title="Kafka on the Shore" author="Haruki Murakami" className="flex-shrink-0" />
                    <BookCard img={oneplus} title="The Border" author="Don Winslow" className="flex-shrink-0" />
                    <BookCard img={motorola} title="Pet Sematary" author="Stephen King" className="flex-shrink-0" />
                    <BookCard img={realme} title="Norwegian Wood" author="Haruki Murakami" className="flex-shrink-0" />
                    <BookCard img={oneplus} title="American Dirt" author="Jeanine Cummins" className="flex-shrink-0" />
                    <BookCard img={motorola} title="World War Z" author="Max Brooks" className="flex-shrink-0" />
                    <BookCard img={realme} title="1Q84" author="Haruki Murakami" className="flex-shrink-0" />
                    <BookCard img={iphone} title="iPhone" author="Darnell Moore" className="flex-shrink-0" />
                    <BookCard img={redmi} title="The Death of Truth" author="Michiko Kakutani" className="flex-shrink-0" />
                    <BookCard img={oneplus} title="The Illegals" author="John Washington" className="flex-shrink-0" />
                    <BookCard img={motorola} title="The Walking Dead" author="Robert Kirkman" className="flex-shrink-0" />
                    <BookCard img={realme} title="Kafka on the Shore" author="Haruki Murakami" className="flex-shrink-0" />
                    <BookCard img={oneplus} title="The Border" author="Don Winslow" className="flex-shrink-0" />
                    <BookCard img={motorola} title="Pet Sematary" author="Stephen King" className="flex-shrink-0" />
                    <BookCard img={realme} title="Norwegian Wood" author="Haruki Murakami" className="flex-shrink-0" />
                    <BookCard img={oneplus} title="American Dirt" author="Jeanine Cummins" className="flex-shrink-0" />
                    <BookCard img={motorola} title="World War Z" author="Max Brooks" className="flex-shrink-0" />
                    <BookCard img={realme} title="1Q84" author="Haruki Murakami" className="flex-shrink-0" />
                    <BookCard img={iphone} title="iPhone" author="Darnell Moore" className="flex-shrink-0" />
                    <BookCard img={redmi} title="The Death of Truth" author="Michiko Kakutani" className="flex-shrink-0" />
                    <BookCard img={oneplus} title="The Illegals" author="John Washington" className="flex-shrink-0" />
                    <BookCard img={motorola} title="The Walking Dead" author="Robert Kirkman" className="flex-shrink-0" />
                    <BookCard img={realme} title="Kafka on the Shore" author="Haruki Murakami" className="flex-shrink-0" />
                    <BookCard img={oneplus} title="The Border" author="Don Winslow" className="flex-shrink-0" />
                    <BookCard img={motorola} title="Pet Sematary" author="Stephen King" className="flex-shrink-0" />
                    <BookCard img={realme} title="Norwegian Wood" author="Haruki Murakami" className="flex-shrink-0" />
                    <BookCard img={oneplus} title="American Dirt" author="Jeanine Cummins" className="flex-shrink-0" />
                    <BookCard img={motorola} title="World War Z" author="Max Brooks" className="flex-shrink-0" />
                    <BookCard img={realme} title="1Q84" author="Haruki Murakami" className="flex-shrink-0" />
                    <BookCard img={iphone} title="iPhone" author="Darnell Moore" className="flex-shrink-0" />
                    <BookCard img={redmi} title="The Death of Truth" author="Michiko Kakutani" className="flex-shrink-0" />
                    <BookCard img={oneplus} title="The Illegals" author="John Washington" className="flex-shrink-0" />
                    <BookCard img={motorola} title="The Walking Dead" author="Robert Kirkman" className="flex-shrink-0" />
                    <BookCard img={realme} title="Kafka on the Shore" author="Haruki Murakami" className="flex-shrink-0" />
                    <BookCard img={oneplus} title="The Border" author="Don Winslow" className="flex-shrink-0" />
                    <BookCard img={motorola} title="Pet Sematary" author="Stephen King" className="flex-shrink-0" />
                    <BookCard img={realme} title="Norwegian Wood" author="Haruki Murakami" className="flex-shrink-0" />
                    <BookCard img={oneplus} title="American Dirt" author="Jeanine Cummins" className="flex-shrink-0" />
                    <BookCard img={motorola} title="World War Z" author="Max Brooks" className="flex-shrink-0" />
                    <BookCard img={realme} title="1Q84" author="Haruki Murakami" className="flex-shrink-0" />
                    </div>
                </div>
            </div>

        </section>

      {/* Latest Posts & Weekly Picks */}
        <section className="p-4 grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Left side: Latest Posts */}
        <div className="lg:col-span-3">
            <h2 className="text-xl font-semibold mb-4">Latest Posts</h2>

            <div className="flex flex-wrap gap-6">
                <BookCard 
                img={iphone} 
                title="iPhone" 
                author="Experience the future with Apple’s most powerful and secure smartphone." 
                />
                <BookCard 
                img={redmi} 
                title="Redmi" 
                author="Performance meets affordability — designed for the everyday tech lover." 
                />
                <BookCard 
                img={oneplus} 
                title="One Plus" 
                author="Fast and smooth like never before — flagship killer with style." 
                />
                <BookCard 
                img={motorola} 
                title="Motorola" 
                author="Reliable innovation with stock Android and sleek design." 
                />
                <BookCard 
                img={realme} 
                title="Realme" 
                author="Bold design, big performance — tech that’s trendsetting and smart." 
                />
                <BookCard 
                img={iphone} 
                title="iPhone" 
                author="Experience the future with Apple’s most powerful and secure smartphone." 
                />
                <BookCard 
                img={redmi} 
                title="Redmi" 
                author="Performance meets affordability — designed for the everyday tech lover." 
                />
                <BookCard 
                img={oneplus} 
                title="One Plus" 
                author="Fast and smooth like never before — flagship killer with style." 
                />
                <BookCard 
                img={motorola} 
                title="Motorola" 
                author="Reliable innovation with stock Android and sleek design." 
                />
                <BookCard 
                img={realme} 
                title="Realme" 
                author="Bold design, big performance — tech that’s trendsetting and smart." 
                />

                

            </div>
        </div>

        {/* Right side: Weekly Picks */}
        <aside className="bg-white p-6 rounded">
            <h3 className="font-bold text-xl mb-2">Weekly Picks</h3>
            <hr className="border-gray-300 mb-4" />

            <WeeklyPickCard
            number="01"
            title="The Psychology of Phone Upgrades: Why We Crave the New"
            author="Tech Mindset"
            date="Apr 10"
            readTime="6 min read"
            />

            <WeeklyPickCard
            number="02"
            title="From Buttons to Bezel-less: A Visual History of Phones"
            author="Mobile Archive"
            date="Apr 11"
            readTime="5 min read"
            />

            <WeeklyPickCard
            number="03"
            title="Why Foldable Phones Might Actually Be the Future"
            author="Digital Trends Daily"
            date="Apr 12"
            readTime="7 min read"
            />

            <WeeklyPickCard
            number="04"
            title="The Hidden Costs of Smartphone Manufacturing"
            author="EcoTech Review"
            date="Apr 13"
            readTime="6 min read"
            />

            <WeeklyPickCard
            number="05"
            title="How Mobile Cameras Replaced DSLRs for Most People"
            author="Lens & Pixel"
            date="Apr 14"
            readTime="4 min read"
            />

            <WeeklyPickCard
            number="06"
            title="The Rise of Gaming Phones: More Than Just Speed"
            author="NextGen Play"
            date="Apr 15"
            readTime="5 min read"
            />


        </aside>

        </section>

        </div>
    );
};

export default Phone;
