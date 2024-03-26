"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BrainCircuit,
  BrainCog,
  Radio,
  SatelliteDish,
  Signal,
} from "lucide-react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import Footer from "@/components/Footer";

const teamMembers = [
  {
    name: "Prof. Aldebaro Klautau",
    role: "Coordinator",
    description:
      "Ph. D. University of California at San Diego (UCSD) and Full Professor at the Federal University of Pará (UFPA)",
    imageSrc: "/aldebaro.webp",
  },
  {
    name: "Prof. Leonardo Ramalho",
    role: "Coordinator",
    description:
      "Ph. D. Federal University of Pará (UFPA) Professor and Vice-Director of the Faculty of Computer Engineering",
    imageSrc: "/leo-1.webp",
  },
  {
    name: "João Vitor",
    role: "Student",
    description:
      "Telecommunications engineering student at UFPA and researcher at LASSE",
    imageSrc: "/jv.webp",
  },
  {
    name: "Eduardo Guedes",
    role: "Student",
    description:
      "Electrical engineering student at UFPA and researcher at LASSE",
    imageSrc: "/eduardo.webp",
  },
  {
    name: "Valdinei Conceição",
    description: "Computer engineering student at UFPA and researcher at LASSE",
    role: "Student",
    imageSrc: "/ValdineiConceicao.webp",
  },
  // ...outros membros da equipe
];
const courses = [
  {
    title: "Machine Learning",
    description: "",
    link: "https://stripe.com",
    icon: <BrainCircuit size={100} />,
  },
  {
    title: "Digital Signal Processing",
    description: "",
    link: "https://netflix.com",
    icon: <Radio size={100} />,
  },
  {
    title: "Deep Learning",
    description: "",
    link: "https://google.com",
    icon: <BrainCog size={100} />,
  },
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 ">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl  tracking-tight leading-none md:text-5xl xl:text-6xl text-black ">
              {" "}
              Digital Signal Processing with
              <span className="text-[#f0c538]"> Python,</span>
              <span className="text-[#fcad36]"> Matlab</span> or
              <span className="text-[#31ABCF]"> Octave</span>.
            </h1>
            <p className="max-w-2xl mb-6 text-[#686868] italic   lg:mb-8 md:text-lg lg:text-xl ">
              “The information age brought new possibilities to improve the
              learning process, which can complement the traditional lectures
              and homeworks.”
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button className={buttonVariants()}>
                <span>Start reading</span>
                <ArrowUpRight size={20} />
              </Button>
            </div>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image
              src="/book_cover.png"
              width={500}
              height={500}
              alt="book cover"
            />
          </div>
        </div>
      </MaxWidthWrapper>
      <section className=" bg-gray-50 ">
        <div className=" py-8 sm:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                Learn more
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-black sm:text-4xl">
                Courses
              </p>
            </div>
            <div className="mx-auto mt-8 max-w-2xl sm:mt-20 lg:mt-8 lg:max-w-4xl">
              <HoverEffect items={courses} />
            </div>
          </div>
        </div>
      </section>
      <MaxWidthWrapper>
        <div className="py-8 sm:py-16 text-center">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-black sm:text-4xl">
              Meet the team
            </p>

            <p className="text-gray-600">
              The team at LASSE is made up of visionaries who believe in
              changing the world by...
            </p>
          </div>

          <div className="flex justify-center space-x-6 overflow-hidden mt-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="flex flex-col items-center">
                <div className="w-48 h-48 bg-gray-200 rounded-full overflow-hidden">
                  <Image
                    src={member.imageSrc}
                    alt={member.name}
                    width={192}
                    height={192}
                  />
                </div>
                <h3 className="font-semibold mt-4 text-black">{member.name}</h3>
                <p className="text-gray-800">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
      <Footer />
    </>
  );
}
