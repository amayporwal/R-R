// pages/Home.jsx
import React from "react";
import './Home.css';
import HeroSection from "../component/HeroSection";
import BookCard from "../component/BookCard ";
import GenreCard from "../component/GenreCard "
import WeeklyPickCard from "../component/WeeklyPickCard"
import fireImage from "../assets/fire.jpg";
import deathImage from "../assets/death.jpg";
import illegalsImage from "../assets/illegals.jpg";
import deadImage from "../assets/livingwhiledead.jpg";
import haruImage from "../assets/haru.avif";
import espionage from "../assets/espionage.png";
import mystery from "../assets/mystery.png";
import love from "../assets/love.png";
import crime from "../assets/crime.png";
import fantasy from "../assets/fantasy.png";
import discover from "../assets/discover.png";
import bgimage from "../assets/book.webp";



const Home = () => {
    return (
    <div className="font-sans">
      {/* <Navbar /> */}
        <HeroSection img={bgimage} heading="Book Reviews" />
        {/* <SearchBar /> */}

      {/* Top Rated Section */}
        <section className="p-4 mt-8">
        {/* <h2 className="text-xl font-semibold mb-4">Top Rated</h2> */}
        <div className="bg-pink-200/50 rounded-2xl p-4">
            <h2 className="text-xl font-semibold mb-4">Top Rated</h2>
            <div className="overflow-hidden">
                <div className="flex animate-scroll gap-6">
                {/* Book Cards */}
                <BookCard img={fireImage} title="The Fire We Carry" author="Rebecca Nagle" className="flex-shrink-0" />
                <BookCard img={deathImage} title="Death in the Deccan" author="Aditya Sinha" className="flex-shrink-0" />
                <BookCard img={illegalsImage} title="The Illegals" author="Shaun Walker" className="flex-shrink-0" />
                <BookCard img={deadImage} title="Living While Dead" author="Chattanathan D" className="flex-shrink-0" />
                <BookCard img={haruImage} title="When Haru was Here" author="Dustin Thao" className="flex-shrink-0" />
                <BookCard img={fireImage} title="The Fire We Carry" author="Rebecca Nagle" className="flex-shrink-0" />
                <BookCard img={deathImage} title="Death in the Deccan" author="Aditya Sinha" className="flex-shrink-0" />
                <BookCard img={illegalsImage} title="The Illegals" author="Shaun Walker" className="flex-shrink-0" />
                <BookCard img={deadImage} title="Living While Dead" author="Chattanathan D" className="flex-shrink-0" />
                <BookCard img={haruImage} title="When Haru was Here" author="Dustin Thao" className="flex-shrink-0" />
                <BookCard img={fireImage} title="The Fire We Carry" author="Rebecca Nagle" className="flex-shrink-0" />
                <BookCard img={deathImage} title="Death in the Deccan" author="Aditya Sinha" className="flex-shrink-0" />
                <BookCard img={illegalsImage} title="The Illegals" author="Shaun Walker" className="flex-shrink-0" />
                <BookCard img={deadImage} title="Living While Dead" author="Chattanathan D" className="flex-shrink-0" />
                <BookCard img={haruImage} title="When Haru was Here" author="Dustin Thao" className="flex-shrink-0" />
                <BookCard img={fireImage} title="The Fire We Carry" author="Rebecca Nagle" className="flex-shrink-0" />
                <BookCard img={deathImage} title="Death in the Deccan" author="Aditya Sinha" className="flex-shrink-0" />
                <BookCard img={illegalsImage} title="The Illegals" author="Shaun Walker" className="flex-shrink-0" />
                <BookCard img={deadImage} title="Living While Dead" author="Chattanathan D" className="flex-shrink-0" />
                <BookCard img={haruImage} title="When Haru was Here" author="Dustin Thao" className="flex-shrink-0" />
                <BookCard img={fireImage} title="The Fire We Carry" author="Rebecca Nagle" className="flex-shrink-0" />
                <BookCard img={deathImage} title="Death in the Deccan" author="Aditya Sinha" className="flex-shrink-0" />
                <BookCard img={illegalsImage} title="The Illegals" author="Shaun Walker" className="flex-shrink-0" />
                <BookCard img={deadImage} title="Living While Dead" author="Chattanathan D" className="flex-shrink-0" />
                <BookCard img={haruImage} title="When Haru was Here" author="Dustin Thao" className="flex-shrink-0" />
                <BookCard img={fireImage} title="The Fire We Carry" author="Rebecca Nagle" className="flex-shrink-0" />
                <BookCard img={deathImage} title="Death in the Deccan" author="Aditya Sinha" className="flex-shrink-0" />
                <BookCard img={illegalsImage} title="The Illegals" author="Shaun Walker" className="flex-shrink-0" />
                <BookCard img={deadImage} title="Living While Dead" author="Chattanathan D" className="flex-shrink-0" />
                <BookCard img={haruImage} title="When Haru was Here" author="Dustin Thao" className="flex-shrink-0" />
                </div>
            </div>
        </div>

        </section>

      {/* Authors by Genres */}
        <section className="p-4">
            <h2 className="text-xl font-semibold mb-4">Authors by Genres</h2>
            <div className="overflow-hidden">
                <div className="flex animate-scroll gap-4">
                {/* Genre Cards */}
                <GenreCard img={espionage} label="Espionage" className="flex-shrink-0" />
                <GenreCard img={mystery} label="Mystery" className="flex-shrink-0" />
                <GenreCard img={love} label="Love" className="flex-shrink-0" />
                <GenreCard img={crime} label="Crime" className="flex-shrink-0" />
                <GenreCard img={discover} label="Discovery" className="flex-shrink-0" />
                <GenreCard img={fantasy} label="Fantasy" className="flex-shrink-0" />
                <GenreCard img={love} label="Love" className="flex-shrink-0" />
                <GenreCard img={crime} label="Crime" className="flex-shrink-0" />
                <GenreCard img={discover} label="Discovery" className="flex-shrink-0" />
                <GenreCard img={fantasy} label="Fantasy" className="flex-shrink-0" />
                <GenreCard img={crime} label="Crime" className="flex-shrink-0" />
                <GenreCard img={discover} label="Discovery" className="flex-shrink-0" />
                <GenreCard img={fantasy} label="Fantasy" className="flex-shrink-0" />
                <GenreCard img={crime} label="Crime" className="flex-shrink-0" />
                <GenreCard img={discover} label="Discovery" className="flex-shrink-0" />
                <GenreCard img={fantasy} label="Fantasy" className="flex-shrink-0" />
                {/* Duplicate the content to create seamless scrolling */}
                <GenreCard img={espionage} label="Espionage" className="flex-shrink-0" />
                <GenreCard img={mystery} label="Mystery" className="flex-shrink-0" />
                <GenreCard img={love} label="Love" className="flex-shrink-0" />
                <GenreCard img={crime} label="Crime" className="flex-shrink-0" />
                <GenreCard img={discover} label="Discovery" className="flex-shrink-0" />
                <GenreCard img={fantasy} label="Fantasy" className="flex-shrink-0" />
                <GenreCard img={love} label="Love" className="flex-shrink-0" />
                <GenreCard img={crime} label="Crime" className="flex-shrink-0" />
                <GenreCard img={discover} label="Discovery" className="flex-shrink-0" />
                <GenreCard img={fantasy} label="Fantasy" className="flex-shrink-0" />
                <GenreCard img={crime} label="Crime" className="flex-shrink-0" />
                <GenreCard img={discover} label="Discovery" className="flex-shrink-0" />
                <GenreCard img={fantasy} label="Fantasy" className="flex-shrink-0" />
                <GenreCard img={crime} label="Crime" className="flex-shrink-0" />
                <GenreCard img={discover} label="Discovery" className="flex-shrink-0" />
                <GenreCard img={fantasy} label="Fantasy" className="flex-shrink-0" />
                <GenreCard img={espionage} label="Espionage" className="flex-shrink-0" />
                <GenreCard img={mystery} label="Mystery" className="flex-shrink-0" />
                <GenreCard img={love} label="Love" className="flex-shrink-0" />
                <GenreCard img={crime} label="Crime" className="flex-shrink-0" />
                <GenreCard img={discover} label="Discovery" className="flex-shrink-0" />
                <GenreCard img={fantasy} label="Fantasy" className="flex-shrink-0" />
                <GenreCard img={love} label="Love" className="flex-shrink-0" />
                <GenreCard img={crime} label="Crime" className="flex-shrink-0" />
                <GenreCard img={discover} label="Discovery" className="flex-shrink-0" />
                <GenreCard img={fantasy} label="Fantasy" className="flex-shrink-0" />
                <GenreCard img={crime} label="Crime" className="flex-shrink-0" />
                <GenreCard img={discover} label="Discovery" className="flex-shrink-0" />
                <GenreCard img={fantasy} label="Fantasy" className="flex-shrink-0" />
                <GenreCard img={crime} label="Crime" className="flex-shrink-0" />
                <GenreCard img={discover} label="Discovery" className="flex-shrink-0" />
                <GenreCard img={fantasy} label="Fantasy" className="flex-shrink-0" />
                <GenreCard img={espionage} label="Espionage" className="flex-shrink-0" />
                <GenreCard img={mystery} label="Mystery" className="flex-shrink-0" />
                <GenreCard img={love} label="Love" className="flex-shrink-0" />
                <GenreCard img={crime} label="Crime" className="flex-shrink-0" />
                <GenreCard img={discover} label="Discovery" className="flex-shrink-0" />
                <GenreCard img={fantasy} label="Fantasy" className="flex-shrink-0" />
                <GenreCard img={love} label="Love" className="flex-shrink-0" />
                <GenreCard img={crime} label="Crime" className="flex-shrink-0" />
                <GenreCard img={discover} label="Discovery" className="flex-shrink-0" />
                <GenreCard img={fantasy} label="Fantasy" className="flex-shrink-0" />
                <GenreCard img={crime} label="Crime" className="flex-shrink-0" />
                <GenreCard img={discover} label="Discovery" className="flex-shrink-0" />
                <GenreCard img={fantasy} label="Fantasy" className="flex-shrink-0" />
                <GenreCard img={crime} label="Crime" className="flex-shrink-0" />
                <GenreCard img={discover} label="Discovery" className="flex-shrink-0" />
                <GenreCard img={fantasy} label="Fantasy" className="flex-shrink-0" />
                </div>
            </div>
        </section>



      {/* Latest Posts & Weekly Picks */}
        <section className="p-4 grid grid-cols-1 lg:grid-cols-4 gap-4">
            {/* Left side: Latest Posts */}
            <div className="lg:col-span-3">
                <h2 className="text-xl font-semibold mb-4">Latest Posts</h2>

                <div className="flex flex-wrap gap-6">
                <BookCard img={fireImage} title="The Fire We Carry" author="Rebecca Nagle" />
                <BookCard img={deathImage} title="Death in the Deccan" author="Aditya Sinha" />
                <BookCard img={illegalsImage} title="The Illegals" author="Shaun Walker" />
                <BookCard img={deadImage} title="Living While Dead" author="Chattanathan D" />
                <BookCard img={haruImage} title="When Haru was Here" author="Dustin Thao" />
                <BookCard img={fireImage} title="The Fire We Carry" author="Rebecca Nagle" />
                <BookCard img={deathImage} title="Death in the Deccan" author="Aditya Sinha" />
                <BookCard img={illegalsImage} title="The Illegals" author="Shaun Walker" />
                <BookCard img={deadImage} title="Living While Dead" author="Chattanathan D" />
                <BookCard img={haruImage} title="When Haru was Here" author="Dustin Thao" />
                <BookCard img={fireImage} title="The Fire We Carry" author="Rebecca Nagle" />
                <BookCard img={deathImage} title="Death in the Deccan" author="Aditya Sinha" />
                <BookCard img={illegalsImage} title="The Illegals" author="Shaun Walker" />
                <BookCard img={deadImage} title="Living While Dead" author="Chattanathan D" />
                <BookCard img={haruImage} title="When Haru was Here" author="Dustin Thao" />

                </div>
            </div>

        {/* Right side: Weekly Picks */}
        <aside className="bg-white p-6 rounded">
            <h3 className="font-bold text-xl mb-2">Weekly Picks</h3>
            <hr className="border-gray-300 mb-4" />

            <WeeklyPickCard
                number="01"
                title="Atomic Habits: Tiny Changes, Remarkable Results"
                author="James Clear"
                date="Apr 5 · 6 min read"
                readTime=""
                classNameBg=""
            />
            <WeeklyPickCard
                number="02"
                title="Deep Work: Rules for Focused Success"
                author="Cal Newport"
                date="Apr 8 · 7 min read"
                readTime=""
            />
            <WeeklyPickCard
                number="03"
                title="The Subtle Art of Not Giving a F*ck"
                author="Mark Manson"
                date="Mar 28 · 5 min read"
                readTime=""
            />
            <WeeklyPickCard
                number="04"
                title="Can't Hurt Me: Master Your Mind and Defy the Odds"
                author="David Goggins"
                date="Apr 2 · 8 min read"
                readTime=""
            />
            <WeeklyPickCard
                number="05"
                title="The Psychology of Money: Timeless Lessons"
                author="Morgan Housel"
                date="Mar 30 · 6 min read"
                readTime=""
            />
            <WeeklyPickCard
                number="06"
                title="Start With Why: How Great Leaders Inspire"
                author="Simon Sinek"
                date="Apr 10 · 7 min read"
                readTime=""
            />

        </aside>

        </section>

        </div>
    );
};

export default Home;
