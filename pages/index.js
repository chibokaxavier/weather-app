import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import axios  from 'axios'
import {BsSearch} from "react-icons/bs"
import { useState } from "react";


export default function Home() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=dubai&appid={process.env.NEXT_PUBLIC_WEATHER_KEY}`;
  
  return (
    <>
      <Head>
        <title>WEATHER APP</title>
      </Head>
      <main className="bg-red-300">
        <h1>Hello World</h1>
      </main>
    </>
  );
}
