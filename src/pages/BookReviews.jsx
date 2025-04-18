import React from "react";
import './BookReviews.css';
import BookCard from "../component/BookCard "
import Navbar from "../component/Navbar";
import WeeklyBookCard from "../component/WeeklyBookCard";
import fireImage from "../assets/fire.jpg";
import deathImage from "../assets/death.jpg";
import illegalsImage from "../assets/illegals.jpg";
import deadImage from "../assets/livingwhiledead.jpg";
import haruImage from "../assets/haru.avif";

const BookReviews = () => {
  return (
    <div className="font-sans">
      {/* <Navbar /> */}

      <div className=" py-8 mt-20">

        <section className="p-4">
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

      <section className="p-4">
  <h2 className="text-xl font-semibold mb-6">Weekly Picks</h2>

  <div className="space-y-8 ">
  <WeeklyBookCard
  image={fireImage}
  alt="The Fire We Carry"
  title="The Fire We Carry: The Generations-Long Fight for Justice and Resilience Among Native Communities in America"
  description="Discover the compelling and deeply researched narrative behind this powerful movement for Native justice. 
  Rebecca Nagle sheds light on historical trauma, cultural preservation, and the modern legal battles that define the Native experience today. 
  From landmark court decisions to grassroots activism, this book connects the dots between past and present. 
  The author carefully unpacks the complex relationship between Indigenous people and federal power. 
  Stories of courage, survival, and identity are interwoven with a sharp critique of systemic inequality. 
  With empathy and journalistic depth, Nagle portrays the challenges Native communities face in reclaiming sovereignty. 
  Whether you're new to the topic or deeply invested, this book offers vital insight. 
  It's more than just history—it’s a manifesto of resistance. 
  Each chapter feels like a tribute to resilience. 
  A must-read for anyone passionate about justice and equity."
  author="Rebecca Nagle"
/>

<WeeklyBookCard
  image={deadImage}
  alt="Living While Dead"
  title="Death in the Deccan: Unraveling the Shadows of Justice and the Life Beyond Bars"
  description="In this gripping nonfiction account, Chattanathan D takes readers deep into the heart of India’s criminal justice system. 
  Through real-life stories of death row inmates, he questions the moral and legal foundation of capital punishment. 
  The author provides chilling insight into courtroom failures, coerced confessions, and systemic biases. 
  What happens when justice is rushed—or worse, mistaken? 
  The book weaves in emotional interviews with prisoners, guards, and legal experts. 
  It’s both intimate and investigative, exposing the human cost of flawed systems. 
  The narrative flows with clarity and compassion. 
  Readers are left questioning not just the law, but society's collective conscience. 
  ‘Death in the Deccan’ is not just a book—it’s a wake-up call. 
  A haunting but necessary reflection on justice."
  author="Chattanathan D"
/>

<WeeklyBookCard
  image={haruImage}
  alt="When Haru Was Here"
  title="When Haru Was Here: A Tale of Lost Bonds, Healing Hearts, and the Search for Meaning in Silence"
  description="Dustin Thao crafts a beautiful story about grief, love, and the memories we never let go. 
  Tsuki, the protagonist, returns to his hometown only to confront the ghost of his best friend Haru—both literally and emotionally. 
  Set against the backdrop of cherry blossoms and fading friendships, this novel is gentle yet powerful. 
  Each chapter peels away layers of pain, guilt, and healing. 
  The dialogue is poetic, almost meditative, in its exploration of emotional silence. 
  The pacing invites introspection, asking readers to slow down and reflect. 
  Themes of mental health, isolation, and connection are woven with nuance. 
  Thao brings Japanese culture and symbolism to life with elegance. 
  A read that comforts even as it challenges. 
  Perfect for fans of character-driven, emotionally rich fiction."
  author="Dustin Thao"
/>

<WeeklyBookCard
  image={deathImage}
  alt="Death in the Deccan"
  title="Death in the Deccan: A Chronicle of Secrets, Society, and Survival in Southern India"
  description="In this fast-paced mystery-thriller, journalist Aditya Sinha uncovers a web of lies in a small town where death is more than what it seems. 
  A local MLA dies mysteriously, and the story spirals into a deeper conspiracy involving caste politics, land deals, and buried secrets. 
  With investigative grit, the protagonist navigates layers of local corruption. 
  Characters are morally complex, each hiding their own truths. 
  The setting itself—dusty roads, busy bazaars, hushed whispers—feels alive and breathing. 
  Sinha’s writing is cinematic, with vivid details that pull readers into the scene. 
  Clues are dropped cleverly, maintaining suspense throughout. 
  Beyond the whodunit, the book raises deeper questions about power, justice, and truth. 
  It's both socially aware and thrilling. 
  A fresh voice in Indian crime fiction that delivers both punch and purpose."
  author="Aditya Sinha"
/>

<WeeklyBookCard
  image={illegalsImage}
  alt="The Illegals"
  title="The Illegals: The Story of Stateless Souls, Border Crossings, and the Fight for Identity"
  description="Shaun Walker explores the stories of undocumented individuals across Eastern Europe who live in constant fear, yet never stop fighting for identity. 
  The book captures emotional portraits of people forced to flee war, economic collapse, and persecution. 
  These aren’t just statistics—they’re mothers, children, dreamers. 
  Through interviews and field reporting, Walker reveals the harsh realities of displacement. 
  Themes of belonging, loss, and survival run deep. 
  The writing is urgent and compassionate, pulling no punches. 
  Political borders are challenged, but so are personal boundaries. 
  The book critiques nationalism and highlights the failure of bureaucratic systems to uphold human dignity. 
  It's a heartbreaking yet empowering read. 
  Essential for understanding the global refugee crisis through a human lens."
  author="Shaun Walker"
/>


    </div>
</section>

      </div>
    </div>
  );
};

export default BookReviews;
