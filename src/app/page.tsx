"use client";

import { useState } from "react";
import Image from "next/image";

const videoData = [
  {
    id: "TOq3-b_0Sm4",
    title: "Dirilis Urdu | Episode 12",
    category: "Pakistani dramas",
    channel: "TRT Urdu",
  },
  {
    id: "09R8_2nJtjg",
    title: "Maroon 5 - Sugar",
    category: "India pop music",
    channel: "Sony Music India",
  },


  {
    id: "JGwWNGJdvx8",
    title: "Ed Sheeran - Shape of You",
    category: "India pop music",
    channel: "T-Series",
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
  { id: "4b-1h8tTGR8", title: "Infinix Note 30 Review", category: "Infinix Mobile" },
  { id: "1LkJZ6cW7gQ", title: "Infinix Zero Ultra Unboxing", category: "Infinix Mobile" },
  { id: "c6VZ1z2jKf8", title: "Nokia 3310 Review", category: "Feature Phones" },
  { id: "E6G_tl93rxk", title: "Old Nokia Phones Collection", category: "Feature Phones" },
  { id: "r9UoQz1N2lU", title: "Comedy Drama Short Film", category: "Dramedy" },
  { id: "5qap5aO4i9A", title: "Funny Emotional Drama", category: "Dramedy" },
  { id: "Oe421EPjeBE", title: "Joe Rogan Experience #1", category: "Podcasts" },
  { id: "ixRKeSgR3jM", title: "Lex Fridman Podcast with Elon Musk", category: "Podcasts" },
  { id: "6XwqD5a8g-s", title: "Basic Electrical Engineering Lecture", category: "Electrical Engineering" },
  { id: "dp5hsDgENLk", title: "Ohm’s Law Explained", category: "Electrical Engineering" },
  { id: "sT0g16_LQaQ", title: "Comedy Nights Sketch", category: "Sketch comedy" },
  { id: "hJg1RZN8wbs", title: "College Comedy Skit", category: "Sketch comedy" },
];



export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [home, setHome] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");


  const filteredVideos =
    selectedCategory === "All"
      ? videoData
      : videoData.filter((v) => v.category === selectedCategory);

  return (
    <div className="bg-white min-h-screen w-full p-0 text-black bg-blue-500">
      {/* navbar */}
      <div
        className="flex justify-between items-center px-3 py-2 fixed bg-white z-30 w-full">
        <div className="flex items-center px-1 gap-6">
          <div
            className="flex cursor-pointer hover:bg-gray-100 hover:rounded-full px-2 py-2"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Image
              src="/images/menu icon.png"
              alt="menu icon"
              width={25}
              height={0}
            />
          </div>

          <div className="flex items-center gap-1">
            <Image
              src="/images/youtube logo.png"
              alt="YouTube Logo"
              width={90}
              height={40}
            />
            <div className="mt-[-22px] text-gray-500 text-[12px]">
              <p>pk</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-57 px-2 hidden sm:flex">
          <div className="flex gap-4">
            <div className="flex items-center ">
              <input
                type="text"
                placeholder="Search"
                className="shrink border border-gray-300 rounded-l-full h-10 text-[16px] px-4 font-medium py-2 outline-none w-120 max-sm:w-30 max-md:w-70 max-lg:w-96 max-xl:w-[28rem] max-2xl:w-[36rem]"
              />

              <div className="border p-2.5 rounded-r-full border-gray-300  bg-gray-50">
                <Image
                  src="/images/search.svg"
                  alt="Search icon"
                  width={47}
                  height={1}
                  className="h-4.5"
                />
              </div>
            </div>
            <div className=" p-3 md:block rounded-full bg-gray-100">
              <Image
                src="/images/mic-microphone-icon.webp"
                alt="microphone Logo"
                width={20}
                height={1}
              />
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div
            className="flex lg:flex lg:gap-1.5 md:gap-1.5 md:w-ful lg:w-auto gap-2 bg-gray-100 py-2 px-3 rounded-full mt-1">
            <Image src="/images/plus icon.png" alt="plus" width={21} height={10} />
            <div className="text-[14px] lg:text-[13px] md:text-[13px] md:mt-0.5 lg:mt-0.5 font-semibold">
              <p>Create</p>
            </div>
          </div>
          <div>
            <Image
              src="/images/bell icon.png"
              alt="bell"
              width={20}
              height={1}
              className="mt-1.5 md:w-6"
            />
          </div>

          <div
            className="flex gap-3 bg-yellow-900 text-white px-2.5 xl:ml-4 rounded-full mt-0.5"
          >
            <p className="my-1">C</p>
          </div>
        </div>
      </div>

      {/* toggle navbar */}
      {isSidebarOpen && (
        <div className="fixed top-15 max-sm:top-4 left-0 bg-white max-sm:hover:overflow-y-scroll w-60 hover:overflow-y-scroll max-sm:mt-10 h-screen max-sm:overflow-y-auto p-2 z-40 ">
          <ul className="flex flex-col border-b-1 border-gray-200 pb-2.5">
            <li className="flex items-center gap-4  p-1.5 px-3 hover:bg-gray-100 hover:rounded-[0.8vw] text-[14px] font-[500] font-sans">
              <Image
                src="/images/home_icon.png"
                alt="Home"
                width={32}
                height={24}
              />
              <span>Home</span>
            </li>
            <li className="flex items-center gap-4  p-1 px-3 hover:bg-gray-100 hover:rounded-[0.8vw] text-[14px] font-[500] font-sans">
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
      )}

      {/* home side */}
      <div className="fixed mt-15 ml-1 bg-white hidden sm:block ">
        <div
          className="flex flex-col py-3 gap-0.5 hover:bg-gray-200 items-center w-16 rounded-[0.8vw] cursor-pointer"
          onClick={() => setHome(!home)}
        >
          <Image
            src={home ? "/images/home_icon.png" : "/images/home_icon_2.png"}
            alt="Home Icon"
            width={80}
            height={1}
            className="w-8 h-8"
          />
          <span className="text-[10px]">Home</span>
        </div>
        <div className="flex flex-col py-3.5 gap-1 hover:bg-gray-200 items-center w-16 rounded-[0.8vw]">
          <Image
            src="/images/short_icon.png"
            alt="Shorts"
            width={30}
            height={1}
          />
          <p className="text-[10px]">Shorts</p>
        </div>
        <div className="flex flex-col py-3 hover:bg-gray-200 items-center w-16 rounded-[0.8vw]">
          <Image
            src="/images/subscription_icon.png"
            alt="Subscriptions"
            width={100}
            height={10}
            className="w-10 h-12"
          />
          <p className="text-[10px]">Subscriptions</p>
        </div>
        <div className="flex flex-col py-3 gap-0.5 hover:bg-gray-200 items-center w-16 rounded-[0.8vw]">
          <Image
            src="/images/profile_icon.png"
            alt="You"
            width={32}
            height={1}
          />
          <p className="text-[10px]">You</p>
        </div>
      </div>

      {/* slider */}
      <div className="flex">
        <div className={`w-full bg-white-500 max-sm:ml-0 ${isSidebarOpen ? "ml-60" : "ml-20"}`}>
          <div
            className="flex fixed mt-13 bg-white overflow-x-auto px-4 py-3 w-screen gap-4 border-gray-200 scrollbar-hide z-20"
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
          <div className="flex mt-29 justify-between p-5 flex-1 shrink flex-wrap">
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

                  <div className="relative group w-full h-[200px] max-sm:h-[180px]">
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover rounded-[0.8vw] max-sm:rounded-[3vw]"
                    />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <iframe
                        className="w-full h-full rounded-[0.8vw] max-sm:rounded-[3vw] pointer-events-none"
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
                    <div className="flex items-center mt-2">
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
    </div>
  );
}
