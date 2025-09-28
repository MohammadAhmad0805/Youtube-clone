"use client";

import { useState } from "react";
import Image from "next/image";
import { ThumbsUp, ThumbsDown, MessageCircle, Share2, Repeat } from "lucide-react";



const videoData = [
  {
    id: "vswStEtXhYI",
    title: " As Gaming Vs Brother Collection Versus After 1 Year 😍 Most Rare Bundles - Garena Free Fire",
    category: "Gaming",
    channel: "AS Gaming",
  },
  {
    id: "L6DpRDrzDd0",
    title: "Sultan Salahuddin Ayyubi Season 2 Episode 17 - 2 September 25 - HUM TV",
    category: "Pakistani dramas",
    channel: "HUM TV",
  },


  {
    id: "fJM7rfcyVI0",
    title: " VIVO Y400 Unboxing | IP69,8GB,256GB,6000mAh",
    category: "Feature Phones",
    channel: "VideoWaliSarkar",
  },
  {
    id: "SUCOg5T7LqU",
    title: " LIVE | Peer Ajmal Raza Qadri | By Pir Ajmal Raza Qadri 2025 ...",
    category: "Live",
    channel: "Makhdoomi Sound",
  },
  {
    id: "jj6dY5KwHoE",
    title: " Meri Maa | Atif Mahmood ",
    category: "Pakistani dramas",
    channel: "Atif Mahmood ",
  },
  {
    id: "bDiQILFv7wQ",
    title: " Google Pixel 9 Pro - Best Android Flagship ?",
    category: "Feature Phones",
    channel: "Tech Burner",
  },
  {
    id: "b0dtSFXelfM",
    title: " V8 Bolan Vs Honda CG 125 😍| DRAG RACE 🚀",
    category: "India pop music",
    channel: "Tech Burner",
  },

  {
    id: "KZMvvBHRU8c",
    title: "Ertugrul Ghazi Urdu | Episode 67 | Season 3",
    category: "Pakistani dramas",
    channel: "TRT Urdu",
  },
  { id: "9bZkp7q19f0", title: "PSY - Gangnam Style", category: "Music" },
  { id: "dQw4w9WgXcQ", title: "Rick Astley - Never Gonna Give You Up", category: "Music" },
  { id: "l482T0yNkeo", title: "AC/DC - Thunderstruck (Live)", category: "Music" },
  { id: "RgKAFK5djSk", title: "Wiz Khalifa - See You Again", category: "Music" },
  { id: "VYOjWnS4cMY", title: "Childish Gambino - This Is America", category: "Music" },
  { id: "3JZ_D3ELwOQ", title: "Top 10 Football Goals 2023", category: "Gaming" },
  { id: "kJQP7kiw5Fk", title: "FIFA 23 Gameplay Highlights", category: "Gaming" },
  { id: "6Dh-RL__uN4", title: "Fortnite Battle Royale - Victory", category: "Gaming" },
  { id: "L_jWHffIx5E", title: "Top 20 Mobile Games 2023", category: "Gaming" },
  { id: "Zl7j6a5B20k", title: "Yunus Emre Episode 1", category: "Turkish television dramas" },
  { id: "l0EvQa8Nc7Y", title: "Payitaht Abdulhamid Episode 1", category: "Turkish television dramas" },
  { id: "wB7qE3OqQZc", title: "Mehmetcik Kutul Amare Episode 1", category: "Turkish television dramas" },
  { id: "hY7m5jjJ9mM", title: "Funny Cat Compilation Live", category: "Live" },
  { id: "y6120QOlsfU", title: "Dramatic Chipmunk Live", category: "Live" },
  { id: "5qap5aO4i9A", title: "Lofi Hip Hop Radio - Beats to Relax/Study", category: "Live" },
  { id: "jfKfPfyJRdk", title: "Chill Beats Radio", category: "Live" },
  { id: "dQw4w9WgXcQ", title: "Rick Astley - Never Gonna Give You Up", category: "New to you" },
  { id: "L_jWHffIx5E", title: "Coolio - Gangsta's Paradise", category: "New to you" },
  { id: "4fa7hD6E6b0", title: "Shaheen Afridi 5 Wickets vs India", category: "Wickets" },
  { id: "E3BblUv2O9M", title: "Wasim Akram Magic Swing Bowling", category: "Wickets" },
  { id: "wZz3bmFCr3M", title: "Shane Warne Best Wickets", category: "Wickets" },
  { id: "JGwWNGJdvx8", title: "Ed Sheeran - Shape of You", category: "India pop music" },
  { id: "2Vv-BfVoq4g", title: "Ed Sheeran - Perfect", category: "Music" },
  { id: "nlyfYEpELAg", title: "Infinix Note 50 Pro Racing Edition / Unboxing ASMR", category: "Infinix Mobile" },
  { id: "MDIDLPQCrnM", title: "Infinix Zero Ultra Review - 0 to 100% in 12 Minutes with 180W charger, 200MP camera, 5G", category: "Infinix Mobile" },
  { id: "r9UoQz1N2lU", title: "Comedy Drama Short Film", category: "Dramedy" },
  { id: "5qap5aO4i9A", title: "Funny Emotional Drama", category: "Dramedy" },
  { id: "Oe421EPjeBE", title: "Joe Rogan Experience #1", category: "Podcasts" },
  { id: "ixRKeSgR3jM", title: "Lex Fridman Podcast with Elon Musk", category: "Podcasts" },
  { id: "6XwqD5a8g-s", title: "Basic Electrical Engineering Lecture", category: "Electrical Engineering" },
  { id: "dp5hsDgENLk", title: "Ohm’s Law Explained", category: "Electrical Engineering" },
  { id: "sT0g16_LQaQ", title: "Comedy Nights Sketch", category: "Sketch comedy" },
  { id: "hJg1RZN8wbs", title: "College Comedy Skit", category: "Sketch comedy" },
];
const shortsData = [
  { id: "n63yhFAVSBU", title: "Epic Car Drift Compilation", channel: "AutoZone" },
  { id: "kgfhGZW23Ls", title: "Funny Cat Fails 😹", channel: "PetWorld" },
  { id: "adBIwa_rfpA", title: "Quick & Easy Pasta Recipe", channel: "Cooking Hub" },
  { id: "Tg5yH8LkW2Q", title: "Amazing Street Dance Moves", channel: "Dance Central" },
  { id: "Bv4mKzN7X1A", title: "Incredible Magic Tricks Revealed", channel: "Magic Mania" },
];

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState("home");
  const [currentIndex, setCurrentIndex] = useState(0);


  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % shortsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? shortsData.length - 1 : prev - 1
    );
  };

  const currentShort = shortsData[currentIndex];



  const filteredVideos =
    selectedCategory === "All"
      ? videoData
      : videoData.filter((v) => v.category === selectedCategory);


  return (
    <div className="bg-white min-h-screen w-full p-0 text-black bg-blue-500">
      {/* navbar */}


      <div
        className="flex justify-between  items-center px-3 py-2 max-sm:px-1.5 fixed bg-white z-30 w-full">
        <div className="flex items-center px-2 max-sm:px-1 gap-6 max-sm:gap-3">
          <div
            className="flex cursor-pointer hover:bg-gray-100 hover:rounded-full  items-center px-1.4 py-1.4"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Image
              src="/images/menu.png"
              alt="menu icon"
              width={100}
              height={1}
              className="w-9 h-10 max-sm:w-10 mt-[-6]"
            />
          </div>

          <div className="flex items-center mt-[-2] gap-1">
            <Image
              src="/images/youtube logo.png"
              alt="YouTube Logo"
              width={90}
              height={40}
              className="max-sm:w-22"
            />
            <div className="mt-[-22px] text-gray-500 text-[12px]">
              <p>pk</p>
            </div>
          </div>
        </div>

        <div className="flex items-center   px-2 ">
          <div className="flex gap-4">
            <div className="flex items-center max-sm:hidden ">
              <input
                type="text"
                placeholder="Search"
                className="shrink border  max-sm:hidden sm:flex border-gray-300 rounded-l-full h-10 text-[16px] px-4 font-medium py-2 outline-none w-120 max-sm:w-30 max-md:w-30 max-lg:w-65 max-xl:w-[28rem] max-2xl:w-[36rem]"
              />

              <div className="border p-2.5 max-sm:hidden max-sm:p-0 rounded-r-full max-sm:rounded-none max-sm:border-none max-md:w-12 border-gray-300 max-sm:bg-white bg-gray-50">
                <Image
                  src="/images/search.svg"
                  alt="Search icon"
                  width={47}
                  height={1}
                  className="h-4.5"
                />
              </div>
            </div>
            <div className=" p-3 md:block  max-sm:hidden rounded-full bg-gray-100">
              <Image
                src="/images/mic-microphone-icon.webp"
                alt="microphone Logo"
                width={20}
                height={1}
              />;
            </div>
          </div>
        </div>
        <div className="flex gap-2 max-sm:gap-0 items-center">
           <div className="hidden   max-sm:block ">
                <Image
                  src="/images/search.svg"
                  alt="Search icon"
                  width={47}
                  height={1}
                  className="h-4.5"
                />
              </div>
          <button onClick={() => setOpen(!open)} className="bg-gray-100 hover:bg-gray-200 flex  items-center gap-2 max-sm:gap-1 bg-gray-100 py-2 px-3 rounded-full  text-[15px] max-lg:text-[13px] max-md:text-[13px] max-sm:text-[13px] font-bold focus:outline-none cursor-pointer">
            <Image src="/images/plus icon.png" alt="plus" width={21} height={10} className="" />
            Create
          </button>
          <div className={`${open ? 'visible' : 'hidden'} flex top-13 absolute py-2.5  flex-col rounded-[1vw] shadow z-1 bg-white w-43`}>
            <div className="flex items-center gap-4 py-2 text-[14px] px-4 hover:bg-gray-200">
              <Image
                src="/images/upload icon.png"
                alt="bell"
                width={100}
                height={1}
                className=" w-6.5  max-md:w-6"
              />
              <h1 className="">Upload video</h1>
            </div>
            <div className="flex items-center gap-4 py-2 text-[14px] px-4 hover:bg-gray-200">
              <Image
                src="/images/go live icon.png"
                alt="bell"
                width={100}
                height={1}
                className=" w-6.5 max-md:w-6"
              />
              <h1 className="">Go live</h1>
            </div>
            <div className="flex items-center gap-4 py-2 text-[14px] px-4 hover:bg-gray-200">
              <Image
                src="/images/create icon.png"
                alt="bell"
                width={100}
                height={1}
                className=" w-6.5 max-md:w-6"
              />
              <h1 className="">Create post</h1>
            </div>
          </div>

          <div>
            <Image
              src="/images/bell icon.png"
              alt="bell"
              width={20}
              height={1}
              className="mt-0.5 w-11 max-sm:w-11.5 max-md:w-11.5 max-lg:w-11.5 max-xl:w-11.5 hover:bg-gray-100 px-3 py-3 rounded-full"
            />
          </div>

          <div
            className="flex gap-3 bg-yellow-900 text-white px-3 xl:ml-4 rounded-full "
          >
            <p className="my-1.5">C</p>
          </div>
        </div>
      </div>

      {/* toggle navbar */}
      <div className={`${isSidebarOpen ? 'visible' : 'hidden'} transform transition duration-500 fixed top-15 max-sm:top-4 left-0 bg-white max-sm:hover:overflow-y-scroll w-60 hover:overflow-y-scroll max-sm:mt-10 h-screen max-sm:overflow-y-auto max-md:overflow-y-auto max-lg:overflow-y-auto max-xl:overflow-y-auto max-2xl:overflow-y-auto p-2 z-40 `}>
        <ul className="flex flex-col border-b-1 border-gray-200 pb-2.5">
          <li onClick={() => setPage("home")} className="flex items-center gap-4  p-1.5 px-3 hover:bg-gray-100 hover:rounded-[0.8vw] text-[14px] font-[500] font-sans">
            <Image
              src="/images/home_icon.png"
              alt="Home"
              width={32}
              height={24}
            />
            <span>Home</span>
          </li>
          <li onClick={() => setPage("shorts")} className="flex items-center gap-4  p-1 px-3 hover:bg-gray-100 hover:rounded-[0.8vw] text-[14px] font-[500] font-sans">
            <Image
              src="/images/short_icon.png"
              alt="Shorts"
              width={30}
              height={24}
            />
            <span>Shorts</span>
          </li>
          <li className="flex items-center gap-4  p-1 px-3 hover:bg-gray-100 hover:rounded-[0.8vw] text-[14px] font-[500] font-sans">
            <Image
              src="/images/subscription_icon.png"
              alt="Subscriptions"
              width={35}
              height={24}
              className="w- h-10"
            />
            <span>Subscriptions</span>
          </li>
        </ul>
        <div className="flex flex-row gap-3 px-5 pt-4">
          <span className="text-[16px] font-[500] font-sans">You</span>
          <Image
            src="/images/right-arrow-removebg-preview.png"
            alt="You"
            width={100}
            height={4}
            className=" w-2.5 h-2.5 mt-2"
          />
        </div>
        <div className=" flex flex-col border-b-1 border-gray-200 pb-2.5 pt-2">
          <div className="flex flex-row p-2 gap-6 px-5 py-2.5 items-center  hover:bg-gray-100 hover:rounded-[0.8vw] text-[14px] font-[500] font-sans">
            <Image
              src="/images/history.png"
              alt="Shorts"
              width={100}
              height={10}
              className="w-5 h-5"
            />
            <p>History</p>
          </div>
          <div className="flex flex-row p-2 gap-6 px-5 py-2.5 items-center hover:bg-gray-100 hover:rounded-[0.8vw] text-[14px] font-[500] font-sans">
            <Image
              src="/images/palylists.png"
              alt="Shorts"
              width={100}
              height={10}
              className="w-6 h-6"
            />
            <p>Playlists</p>
          </div>
          <div className="flex flex-row p-2 gap-6 px-5 py-2.5 items-center hover:bg-gray-100 hover:rounded-[0.8vw] text-[14px] font-[500] font-sans">
            <Image
              src="/images/you video icon.png"
              alt="Shorts"
              width={100}
              height={10}
              className="w-5.5 h-5.5"
            />
            <p>Your Video</p>
          </div>
          <div className="flex flex-row p-2 gap-6 px-5 py-2.5items-center  hover:bg-gray-100 hover:rounded-[0.8vw] text-[14px] font-[500] font-sans">
            <Image
              src="/images/watch later icon.png"
              alt="Shorts"
              width={100}
              height={10}
              className="w-6 h-6"
            />
            <p>Watch Later</p>
          </div>
          <div className="flex flex-row p-2 gap-6 px-5 py-2.5 items-center hover:bg-gray-100 hover:rounded-[0.8vw] text-[14px] font-[500] font-sans">
            <Image
              src="/images/liked icon.png"
              alt="Shorts"
              width={100}
              height={10}
              className="w-6 h-6"
            />
            <p>liked Videos</p>
          </div>
        </div>
        <div className=" flex flex-col border-b border-gray-200 pb-2.5 pt-2">
          <div className="flex flex-row p-2 gap-6 px-5 py-2  items-center  hover:bg-gray-100 hover:rounded-[0.8vw] text-[16px] font-[500] font-sans">
            <h2>Explore</h2>
          </div>
          <div className="flex flex-row p-2 gap-6 px-5 py-2.5 items-center  hover:bg-gray-100 hover:rounded-[0.8vw] text-[14px] font-[500] font-sans">
            <Image
              src="/images/music icon.png"
              alt="Shorts"
              width={100}
              height={10}
              className="w-5 h-5"
            />
            <p>Music</p>
          </div>
          <div className="flex flex-row p-2 gap-6 px-5 py-2.5 items-center hover:bg-gray-100 hover:rounded-[0.8vw] text-[14px] font-[500] font-sans">
            <Image
              src="/images/gaming icon.png"
              alt="Shorts"
              width={100}
              height={10}
              className="w-6 h-6"
            />
            <p>Gaming</p>
          </div>
          <div className="flex flex-row p-2 gap-6 px-5 py-2.5 items-center hover:bg-gray-100 hover:rounded-[0.8vw] text-[14px] font-[500] font-sans">
            <Image
              src="/images/news-icon.png"
              alt="Shorts"
              width={100}
              height={10}
              className="w-5.5 h-5.5"
            />
            <p>News</p>
          </div>
          <div className="flex flex-row p-2 gap-6 px-5 py-2.5items-center hover:bg-gray-100 hover:rounded-[0.8vw] text-[14px] font-[500] font-sans">
            <Image
              src="/images/sports icon.png"
              alt="Shorts"
              width={100}
              height={10}
              className="w-6 h-5"
            />
            <p className="pr-6">Sports</p>
          </div>
        </div>

        <div className=" flex flex-col border-b border-gray-200 pb-2.5 pt-2">
          <div className="flex flex-row p-2 gap-6 px-5 py-2 items-center  hover:bg-gray-100 hover:rounded-[0.8vw] text-[16px] font-[500] font-sans">
            <h2>More from YouTube</h2>
          </div>
          <div className="flex flex-row p-2 gap-6 px-5 py-2.5 items-center  hover:bg-gray-100 hover:rounded-[0.8vw] text-[14px] font-[500] font-sans">
            <Image
              src="/images/premium.png"
              alt="Shorts"
              width={100}
              height={10}
              className="w-5 h-4"
            />
            <p>YouTube Premium</p>
          </div>
          <div className="flex flex-row p-2 gap-6 px-3 py-2.5 items-center hover:bg-gray-100 hover:rounded-[0.8vw] text-[14px] font-[500] font-sans">
            <Image
              src="/images/studio icon.png"
              alt="Shorts"
              width={100}
              height={10}
              className="w-8 h-7"
            />
            <p>YouTube Studio</p>
          </div>
          <div className="flex flex-row p-2 gap-6 px-5 py-2.5 items-center hover:bg-gray-100 hover:rounded-[0.8vw] text-[14px] font-[500] font-sans">
            <Image
              src="/images/music icon (2).png"
              alt="Shorts"
              width={100}
              height={10}
              className="w-5.5 h-5.5"
            />
            <p>Youtube Music</p>
          </div>
          <div className="flex flex-row p-2 gap-6  py-2.5items-center  hover:bg-gray-100 hover:rounded-[0.8vw] text-[14px] font-[500] font-sans">
            <Image
              src="/images/kids icon.png"
              alt="Shorts"
              width={100}
              height={10}
              className="w-12 h-6"
            />
            <p>Youtube Kids</p>
          </div>
        </div>
        <div className=" flex flex-col border-b border-gray-200 pb-2.5 pt-2">
          <div className="flex flex-row p-2 gap-6 px-2.5 py-2.5 items-center hover:bg-gray-100 hover:rounded-[0.8vw] text-[14px] font-[500] font-sans">
            <Image
              src="/images/setting icon.png"
              alt="Shorts"
              width={100}
              height={10}
              className="w-9 h-5"
            />
            <p>Settings</p>
          </div>
          <div className="flex flex-row p-2 gap-6 px-5 py-2.5 items-center hover:bg-gray-100 hover:rounded-[0.8vw] text-[14px] font-[500] font-sans">
            <Image
              src="/images/report history icon.png"
              alt="Shorts"
              width={100}
              height={10}
              className="w-6 h-6"
            />
            <p>Report history</p>
          </div>
          <div className="flex flex-row p-2 gap-6 px-5 py-2.5 items-center hover:bg-gray-100 hover:rounded-[0.8vw] text-[14px] font-[500] font-sans">
            <Image
              src="/images/help icon.png"
              alt="Shorts"
              width={100}
              height={10}
              className="w-5.5 h-5.5"
            />
            <p>Help</p>
          </div>
          <div className="flex flex-row p-2 gap-6 px-5 py-2.5items-center  hover:bg-gray-100 hover:rounded-[0.8vw] text-[14px] font-[500] font-sans">
            <Image
              src="/images/send feedback.png"
              alt="Shorts"
              width={100}
              height={10}
              className="w-6 h-6"
            />
            <p>Send feedback</p>
          </div>
        </div>
        <div className="flex flex-col gap-5 p-3">
          <p className="text-[13px] text-gray-600">
            About Press Copyright Contact us Creators Advertise Developers
          </p>
          <p className="text-[13px] text-gray-600">
            TermsPrivacyPolicy & SafetyHow YouTube worksTest new features
          </p>
          <p className="text-[12px] text-gray-400">© 2025 Google LLC</p>
          <br />
        </div>
      </div>

      <div className="flex">

        <div className="fixed top-14 left-0 p-1.5 bg-white hidden sm:block h-screen ">

          <div onClick={() => setPage("home")}
            className="flex flex-col py-3 gap-0.5 hover:bg-gray-200 items-center w-16 rounded-[0.6vw] cursor-pointer"
          >
            <button className="text-[10px]">
              <Image
                src="/images/home_icon.png"
                alt="Home Icon"
                width={80}
                height={1}
                className="w-8 h-8"
              />
              Home
            </button>
          </div>

          <div
            className="flex flex-col py-3 hover:bg-gray-200 items-center w-16 rounded-[0.6vw]"
            onClick={() => setPage("shorts")}
          >
            <button className="text-[10px]">

              <Image
                src="/images/short_icon.png"
                alt="Shorts"
                width={30}
                height={3}
              />
              Shorts
            </button>
          </div>

          <div className="flex flex-col py-3 hover:bg-gray-200 items-center w-16 rounded-[0.6vw]"
          onClick={() => setPage("Subscriptions")}
          >
            <button className="text-[10px]">
              <Image
                src="/images/subscription_icon.png"
                alt="Subscriptions"
                width={100}
                height={10}
                className="w-10 h-12 ml-2.5"
              />
              Subscriptions
            </button>
          </div>
          <div className="flex flex-col py-3 gap-0.5 hover:bg-gray-200 items-center w-16 rounded-[0.6vw]">
            <button className="text-[10px]">
              <Image
                src="/images/profile_icon.png"
                alt="You"
                width={32}
                height={1}
              />
              You
            </button>
          </div>
        </div>

        {/* ==== Main Home Content ==== */}
        <div className="  w-full">
          {page === "home" && (
            <div className="flex">
              <div className={`w-full bg-white-500 max-sm:ml-0 max-md:ml-16 max-lg:ml-16 max-xl:ml-16 ${isSidebarOpen ? "ml-60" : "ml-19"}`}>
                <div
                  className="flex fixed mt-14 bg-white overflow-x-auto px-4 py-3 w-screen gap-4 border-gray-200 scrollbar-hide z-20"
                >
                  {[
                    "All",
                    "Music",
                    "Feature Phones",
                    "Gaming",
                    "Pakistani dramas",
                    "Live",
                    "Infinix Mobile",
                    "podcasts",
                    "New to you",
                    "Dramedy",
                    "Wickets",
                    "Hadrat",
                    "Electrical Engineering",
                    "Turkish television dramas",
                    "Masala films",
                    "India pop music",
                    "sketch comedy",
                    "Watched",
                  ].map((cat, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3 py-1.5 rounded-[0.6vw] max-sm:rounded-[2vw] flex-shrink-0 text-sm font-[550] transition-colors 
                  ${selectedCategory === cat
                          ? "bg-black text-white"
                          : "bg-gray-100 0 text-black"
                        }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* ✅ VIDEOS */}
                <div className="flex mt-29  gap-2.5 p-5 flex-1 shrink flex-wrap">
                  {filteredVideos.map((video, index) => (
                    <div
                      key={index}
                      className={`bg-white overflow-hidden mb-4 max-sm:w-screen max-md:w-[45%] max-lg:w-[32%] max-xl:w-[32.5%] rounded-[0.8vw] ${isSidebarOpen ? "w-79" : "w-89"
                        }`}
                    >
                      <a
                        href={`https://www.youtube.com/watch?v=${video.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >

                        <div className="relative group hover:rounded-[0vw] w-full h-[200px] max-sm:h-[230px]">
                          <img
                            src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                            alt={video.title}
                            className="w-full h-full object-cover  rounded-[0.8vw] max-sm:rounded-[3vw]"
                          />
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <iframe
                              className="w-full h-full  rounded-[0.8vw]  max-sm:rounded-[3vw] pointer-events-none"
                              src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0`}
                              title={video.title}
                              allow="autoplay; encrypted-media"
                              allowFullScreen
                            ></iframe>
                          </div>
                        </div>

                        {/* Title + Channel Info */}
                        <div className="p-3">
                          <p className="font-[500] text-[16px] line-clamp-2 font-sans">
                            {video.title}
                          </p>
                          {/* Channel logo + name */}
                          <div className="flex items-center ">
                            <p className="text-sm text-gray-700 font-medium">
                              {video.channel}
                            </p>
                          </div>
                          <p className="text-sm text-gray-600">
                            15M views · 3 years ago
                          </p>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {/* Short main content */}
          {page === "shorts" && (
            <div className="flex justify-center mt-5">
              <div className="relative flex top-11">
                <div className="w-95 h-168 max-md:h-150 max-lg:h-150 max-xl:h-150 rounded-xl overflow-y-auto shadow-lg flex items-center justify-center">
                  <iframe
                    key={currentShort.id}
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${currentShort.id}?autoplay=1&loop=1&playlist=${currentShort.id}`}

                    title={currentShort.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* Right Side Actions */}
                <div className="ml-4 flex flex-col mt-30 justify-center gap-8 items-center">
                  <button className="flex flex-col items-center text-black">
                    <ThumbsUp size={28} /> <span className="text-sm">1.2K</span>
                  </button>
                  <button className="flex flex-col items-center text-black">
                    <ThumbsDown size={28} /> <span className="text-sm">25</span>
                  </button>
                  <button className="flex flex-col items-center text-black">
                    <MessageCircle size={28} /> <span className="text-sm">692</span>
                  </button>
                  <button className="flex flex-col items-center text-black">
                    <Share2 size={28} /> <span className="text-sm">Share</span>
                  </button>
                  <button className="flex flex-col items-center text-black">
                    <Repeat size={28} /> <span className="text-sm">Remix</span>
                  </button>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="absolute  left-270 gap-3 top-100 -translate-x-1 flex flex-col py-5 pointer-events-none">
                <button
                  onClick={handlePrev}
                  className="pointer-events-auto bg-white/80 hover:bg-black text-black p-5 rounded-full shadow"
                >
                  ⬆️
                </button>
                <button
                  onClick={handleNext}
                  className="pointer-events-auto bg-white/80 hover:bg-black text-black p-5 rounded-full shadow"
                >
                  ⬇️
                </button>
              </div>
            </div>
          )}
          {page === "Subscriptions" && (
            <div className={`flex flex-col max-sm:ml-0 max-md:ml-16 max-lg:ml-16 max-xl:ml-16 ${isSidebarOpen ? "ml-60" : "ml-19"}`}>
              <h1 className="mt-25 pl-5 text-black text-xl font-sans font-[500]">Latest</h1>

            <div className="flex flex-row  gap-2.5 p-5 flex-1 shrink flex-wrap">
                  {filteredVideos.map((video, index) => (
                    <div
                      key={index}
                      className={`bg-white overflow-hidden mb-4 max-sm:w-screen max-md:w-[45%] max-lg:w-[32%] max-xl:w-[32.5%] rounded-[0.8vw] ${isSidebarOpen ? "w-79" : "w-89"
                        
                        }`}
                    >
                      <a
                        href={`https://www.youtube.com/watch?v=${video.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >

                        <div className="relative group hover:rounded-[0vw] w-full h-[200px] max-sm:h-[230px]">
                          <img
                            src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                            alt={video.title}
                            className="w-full h-full object-cover  rounded-[0.8vw] max-sm:rounded-[3vw]"
                          />
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <iframe
                              className="w-full h-full  rounded-[0.8vw]  max-sm:rounded-[3vw] pointer-events-none"
                              src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0`}
                              title={video.title}
                              allow="autoplay; encrypted-media"
                              allowFullScreen
                            ></iframe>
                          </div>
                        </div>

                        {/* Title + Channel Info */}
                        <div className="p-3">
                          <p className="font-[500] text-[16px] line-clamp-2 font-sans">
                            {video.title}
                          </p>
                          {/* Channel logo + name */}
                          <div className="flex items-center ">
                            <p className="text-sm text-gray-700 font-medium">
                              {video.channel}
                            </p>
                          </div>
                          <p className="text-sm text-gray-600">
                            15M views · 3 years ago
                          </p>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
                </div>
            
          )}
        </div>
      </div>
      {/* slider */}
    </div>
  );
}