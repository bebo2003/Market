import React from "react";
import bebo from "../../../src/assets/images/bebo.jpg";
import alaa from "../../../src/assets/images/Alaa.jpg";
import eslam from "../../../src/assets/images/Eslam.png";
import hossam from "../../../src/assets/images/hossam.png";

const teamMembers = [
  { img: alaa, name: "Alaa" },
  { img: "https://i.imgur.com/vOONp7T.png", name: "Habiba" },
  { img: eslam, name: "Eslam" },
  { img: bebo, name: "Abdelrahman" },
  { img: hossam, name: "Hossam" },
  { img: "https://i.imgur.com/mV0hE6p.png", name: "Ayten" },
  { img: "https://i.imgur.com/Zd0Lx0M.png", name: "Ahmed" },
  { img: "https://i.imgur.com/OtG6a9p.png", name: "Sara" },
  { img: "https://i.imgur.com/Y0S1L8y.png", name: "Mohamed" },
  { img: "https://i.imgur.com/ffWnINe.png", name: "Nada" },
  { img: "https://i.imgur.com/I7VmjCe.png", name: "Omar" },
  { img: "https://i.imgur.com/1x1USeR.png", name: "Lina" },
  { img: "https://i.imgur.com/QGeOfbr.png", name: "Youssef" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0F1C] to-[#1c2333] p-10 text-white flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-10 bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 text-transparent bg-clip-text">
        Meet Our Dream Team
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-7xl">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-md p-4 flex flex-col items-center text-center hover:scale-105 transition-all duration-300 group relative overflow-hidden shadow-lg"
          >
            {/* Gradient border effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 opacity-20 blur-lg rounded-xl group-hover:opacity-40 transition" />

            <img
              src={member.img}
              alt={member.name}
              className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover z-10 border-4 border-white"
            />
            <h3 className="mt-4 text-lg md:text-xl font-semibold z-10">{member.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
