import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import axios from "axios";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import Weather from "@/components/Weather";
import Spinner from "@/components/Spinner";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;
  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(url).then((response) => {
      setWeather(response.data);
    });
    setCity("");
    setLoading(false);
  };

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className=" min-h-screen">
        <Head>
          <title>WEATHER APP</title>
        </Head>
        {/* overlay */}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[1]" />

        {/* Background image */}
        <Image
          src="https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          className="object-cover"
          alt=""
          layout="fill"
        />

        <div className="relative flex justify-between items-center  max-w-[500px] mx-auto p-4 text-white  z-10 ">
          <div className="flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl">
            <div>
              <input
                onChange={(e) => setCity(e.target.value)}
                className="bg-transparent focus:outline-none border-none text-white text-2l"
                type="text"
                placeholder="Search City"
              />
            </div>
            <button disabled={!city.trim()} onClick={fetchWeather}>
              <BsSearch size={20} />
            </button>
          </div>
        </div>

        {weather && <Weather data={weather} />}
      </div>
    );
  }
}
