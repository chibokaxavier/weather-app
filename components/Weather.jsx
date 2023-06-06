import Image from "next/image";
import React from "react";

const Weather = ({ data }) => {
  return (
    <div className=" flex flex-col justify-between max-w-[500px] h-[90vh] text-gray-300 z-10 w-full m-auto p-4 ">
      <div className="relative flex justify-between pt-12">
        <div className="flex flex-col items-center">
          <Image
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="/"
            width={100}
            height={100}
          />
          <p className="text-2xl">{data.weather[0].main}</p>
        </div>
        <p className="text-9xl">{data.main.temp.toFixed(0)}&#176;</p>
      </div>


      
    </div>
  );
};

export default Weather;
