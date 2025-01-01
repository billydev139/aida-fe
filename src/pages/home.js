import React, { useState } from "react";
import Navbar from "../components/navbar";
import BG from "../assets/bg.png";
import Layers from "../assets/layers.png";
import Layers2 from "../assets/layers2.png";
import Eclipse from "../assets/eclipse.png";
import Group from "../assets/group.png";
import Legal from "../assets/legal.png";
import Photo from "../assets/Photo.png";
import Plans from "../assets/plans.png";

import { BsArrowRight, BsFileSpreadsheet, BsStars } from "react-icons/bs";
import { BiCopy, BiDiamond, BiMessageSquare } from "react-icons/bi";
import { FiFileText } from "react-icons/fi";
import { RiStarSLine } from "react-icons/ri";
import { VscGraph } from "react-icons/vsc";
import Footer from "../components/footer";
const Home = () => {
  const [question, setQuestion] = useState("");

  const suggestedQuestions = [
    "What are the steps to file a petition?",
    "How can I draft a legal contract?",
    "What are the court fees for a case?",
  ];

  const questions = [
    {
      title: "How do I file a petition in Turkish court?",
      subtitle: "To file a petition, follow these steps.",
    },
    {
      title: "How do I file a petition in Turkish court?",
      subtitle: "To file a petition, follow these steps.",
    },
    {
      title: "How do I file a petition in Turkish court?",
      subtitle: "To file a petition, follow these steps.",
    },
  ];

  const cards = [
    {
      title: "Instant Legal Chat",
      description:
        "Transform existing processes with AI-powered workflows integrated into your martech stack, so you can embed AI into every marketing process, empowering every marketer.",
      icon: <RiStarSLine className="w-8 h-8" />,
    },
    {
      title: "Draft Petitions",
      description:
        "Transform existing processes with AI-powered workflows integrated into your martech stack, so you can embed AI into every marketing process, empowering every marketer.",
      icon: <VscGraph className="w-6 h-6" />,
    },
    {
      title: "Legal Templates",
      description:
        "Transform existing processes with AI-powered workflows integrated into your martech stack, so you can embed AI into every marketing process, empowering every marketer.",
      icon: <BiCopy className="w-6 h-6" />,
    },
  ];

  const testimonials = [
    {
      title: "Incredible Experience",
      content:
        "We had an incredible experience working with AIDA and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the concept so quickly.",
      author: "Anya Tailor Joy",
      role: "CEO, SF Headline",
    },
    {
      title: "Incredible Experience",
      content:
        "We had an incredible experience working with AIDA and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the concept so quickly.",
      author: "Anya Tailor Joy",
      role: "CEO, SF Headline",
    },
  ];
  return (
    <div>
      <Navbar />
      <div
        className="flex justify-center items-center"
        style={{
          backgroundImage: `url(${BG})`,
          backgroundSize: "cover", // Ensures the image covers the entire div
          backgroundRepeat: "no-repeat", // Prevents tiling
          backgroundPosition: "center", // Centers the image
          height: "637px", // Example height
          width: "auto", // Example width
        }}
      >
        <div className="container mx-auto lg:px-20 px-8 ">
          <h1 className="lg:text-[48px] md:text-[32px] sm:[32px] text-[32px] ml-2 text-center font-semibold pb-4 text-[#ffff]">
            Empowering Your{" "}
            <span className="text-[#3077FF]">Legal Journey</span>
          </h1>
          <p className="lg::text-[16px] text-[14px] font-normal pb-8 text-center text-white">
            We are dedicated to making legal services accessible. From drafting
            contracts to managing
            <br /> petitions, our AI-powered platform offers tailored solutions
            for all your legal needs.
          </p>

          <div className="lg:max-w-4xl w-auto mx-auto pb-8">
            <div className=" bg-[#F8F1F180] border border-[#ffffff] bg-opacity-50 backdrop-blur-md rounded-full px-2 py-1 flex items-center gap-6">
              {/* New button */}
              <button className="flex items-center gap-1 px-4 py-2 rounded-full bg-[#ffffff] text-[#000000] font-medium text-[16px] transition-colors">
                <BsStars size={16} />
                <span>New</span>
              </button>

              {/* Title section */}
              <div className="flex-1 flex items-center gap-2 text-white">
                <span className="text-[#262627] font-semibold text-[16px] whitespace-nowrap">
                  Introducing:
                </span>
                <span className="truncate text-[#000000] font-medium lg:text-sm text-[12px] sm:text-base lg:max-w-auto max-w-[0px] md:max-w-[300px]">
                  What can an artificial intelligence specialized in Turkish law
                  do at most?
                </span>
              </div>

              {/* Arrow button */}
              <button className="p-1 rounded-full hover:bg-white/10 text-white transition-colors">
                <BsArrowRight size={20} />
              </button>
            </div>
          </div>
          <div className=" w-full flex md:flex-row flex-col justify-center gap-4 items-center">
            <button className=" bg-[#0057FF] hover:bg-transparent border-transparent hover:border border hover:border-[#ffff] rounded-lg lg:text-[18px] text-[14px] font-semibold text-[#ffffff] px-16 py-2 ">
              Try Me
            </button>
            <button className="bg-transparent border border-[#ffffff] hover:bg-white hover:text-[#0057FF]  rounded-lg lg:text-[18px] text-[]14px font-semibold text-[#ffffff] px-10 py-2 ">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* //tryaida */}

      <div className="w-full container mx-auto -mt-[40px] bg-white rounded-lg shadow-lg lg:px-12 px-6 py-8">
        <h1 className="lg:text-[48px] text-[24px] text-[#092D50] font-semibold mb-4">
          Try AiDA, You Will Get the Answer
        </h1>

        <p className="text-sm text-[#092D50] lg:text-[18px] text-[14px] font-normal mb-6">
          Type your question below and experience AiDA's power.
        </p>

        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Write a question here to ask..........."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full pr-28 pl-8  text-[#B6B6B6] text-[18px] font-normal rounded-lg py-4 bg-[#F3F3F3] border  outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button className="absolute  right-1 top-3   bg-[#0057FF] text-[16px] font-medium hover:bg-blue-700 text-white px-6 py-2 rounded-full hidden md:flex lg:flex items-center gap-2 transition-colors">
            <span>Chat to AiDA</span>
            {/* Simple chat icon using SVG */}
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </button>
        </div>

        <div>
          <div className="flex flex-wrap gap-2">
            {suggestedQuestions.map((q, index) => (
              <button
                key={index}
                className="flex items-center justify-center gap-2 text-sm border shadow-lg bg-[#F8F1F180] bg-opacity-50 border-[#ffffff] rounded-full px-4 py-3 mt-2 hover:bg-gray-50 transition-colors"
                style={{ color: "#092D50" }}
                onClick={() => setQuestion(q)}
              >
                <p className="text-[14px] font-semibold text-[#092D50] ml-1 ">
                  Suggested:
                </p>
                {q}
                {/* Simple chevron icon using SVG */}
                <BsArrowRight />
              </button>
            ))}
          </div>
        </div>
      </div>
      <div
        class
        style={{
          backgroundImage: `url(${Layers})`,
          backgroundSize: "cover", // Ensures the image covers the entire div
          backgroundRepeat: "no-repeat", // Prevents tiling
          backgroundPosition: "center", // Centers the image
          height: "250px", // Example height
          width: "auto", // Example width
        }}
      ></div>
      <div className=" container mx-auto -mt-[70px] mb-24 flex justify-center items-center">
        <div>
          <h1 className="lg:text-[48px] text-[32px] text-[#092D50] text-center font-semibold mb-2">
            Explore Common Legal Questions
          </h1>
          <p className="lg:text-[18px] sm:text-[14px] text-center text-[#092D50] font-normal mb-2">
            Discover what others are asking AiDA and see its expert responses
          </p>

          <div className="flex flex-wrap gap-6 p-6">
            {questions.map((question, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-xl p-6 max-w-md"
              >
                <div className="flex justify-end">
                  <span className="inline-block px-3 py-1 text-[12px] font-normal bg-[#DAE9FF] text-[#1657B8] rounded-[4px] mb-4">
                    POPULAR
                  </span>
                </div>

                <h2 className="text-[24px] font-normal text-[#262627] mb-4">
                  {question.title}
                </h2>
                <p className="text-[#262627] text-[14px] font-normal mb-4">
                  {question.subtitle}
                </p>
                <button className="inline-flex items-center text-[15px] text-[#262627] font-normal hover:text-gray-900">
                  Continue to chat
                  <BsArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* why choose aida */}
      <div
        className="flex lg:h-[802px] h-[910px]  justify-center"
        style={{
          backgroundImage: `url(${Eclipse})`,
          backgroundSize: "cover", // Ensures the image covers the entire div
          backgroundRepeat: "no-repeat", // Prevents tiling
          backgroundPosition: "center", // Centers the image
          // Example height
          width: "auto", // Example width
        }}
      >
        <div className="container mx-auto py-8 px-12  flex lg:flex-row flex-col  justify-between items-center">
          <div className=" max-w-[550px]">
            <h1 className="lg:text-[56px] text-[32px] lg:text-start text-center  text-[#ffff] mb-4 font-semibold ">
              Why Choose AiDA?
            </h1>
            <p className="lg:text-[24px] text-[14px] lg:text-start text-center text-white  mb-4 font-normal">
              AiDA is a powerful AI assistant designed to simplify legal
              processes in Turkey. Whether it’s drafting petitions, answering
              legal queries, or providing legal templates, AiDA saves you time
              and effort with accurate and reliable answers
            </p>
            <div className="flex lg:justify-start justify-center ">
            <button className="bg-transparent border border-[#ffffff] hover:bg-white hover:text-[#0057FF]  rounded-lg lg:text-[18px] text-[]14px font-semibold text-[#ffffff] px-10 py-2 ">
              Learn More
            </button>
            </div>
          </div>
          <div>
            <img src={Group} className="h-full w-full" />
          </div>
        </div>
      </div>
      <div
        className="flex justify-center items-center"
        style={{
          backgroundImage: `url(${Layers2})`,
          backgroundSize: "cover", // Ensures the image covers the entire div
          backgroundRepeat: "no-repeat", // Prevents tiling
          backgroundPosition: "center", // Centers the image
          height: "387px", // Example height
          width: "auto", // Example width
        }}
      >
        <div>
        <h1 className="lg:text-[48px] text-[32px] text-[#092D50] text-center font-semibold mb-4">
            Features Sections
          </h1>
          <p className=" lg:text-[18px] text-[14px] text-center text-[#092D50] font-normal mb-2">
            What Can AiDA Do for You?
          </p>
        </div>
      </div>

      <div className=" container mx-auto lg:-mt-[70px] -mt-[270px] flex justify-center items-center">
        <div>
  

          <div className="flex lg:flex-row flex-col gap-4 p-4 mb-24">
            {cards.map((card, index) => (
              <div
                key={index}
                className="flex-1 px-8 py-6 bg-white rounded-xl shadow-2xl  shadow-[#95CFFF61] hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-[#262627] text-[30px] font-medium ">
                    {card.title}
                  </h3>
                  {card.icon}
                </div>

                <p className="text-[18px] font-normal pr-16 mb-4 text-[#262627]">
                  {card.description}
                </p>
                <div className="flex justify-end items-center">
                  <BsArrowRight className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="flex justify-center items-center lg:h-[402px] h-[677px]"
        style={{
          backgroundImage: `url(${Legal})`,
          backgroundSize: "cover", // Ensures the image covers the entire div
          backgroundRepeat: "no-repeat", // Prevents tiling
          backgroundPosition: "center", // Centers the image
          // Example height
          width: "auto", // Example width
        }}
      >
        {/* Content */}
        <div className="relative container items-center lg:px-24 px-12 flex lg:flex-row flex-col lg:justify-between justify-center lg:gap-0 gap-6 mx-auto z-10">
          <div>
            <div className="flex items-center lg:justify-start mt-6 justify-center gap-2 mb-4">
              <BiDiamond size={16} className="text-[#ffff]" />
              <span className="text-[16px] text-[#ffff]">
                The Legal AI Toolkit
              </span>
            </div>

            <h1 className="lg:text-[48px] text-[30px] text-white font-normal lg:text-start text-center mb-6 lg:max-w-xl w-full">
              Unveiling the Impact of <br /> Smart Legal Solutions
            </h1>
            <div className="flex items-center lg:justify-start justify-center gap-2 mb-4">
              <button className="bg-transparent border border-[#ffffff]  rounded-lg text-[18px] font-semibold text-[#ffffff] px-10 py-2 ">
                Learn More
              </button>
            </div>
          </div>
          {/* Stats Grid */}
          <div className="grid grid-cols-2  gap-8 mt-4">
            {[
              { value: "12K+", label: "Active Users" },
              {
                value: "25K+",
                label: "Chats Completed",
              },
              {
                value: "15K+",
                label: "Forms Generated",
              },
              {
                value: "95%",
                label: "Client Satisfaction",
              },
            ].map((stat, index) => (
              <div key={index} className="lg:ml-36 ml-6">
                <div
                  className={`lg:text-[70px] text-[45px] text-white font-semibold ${stat.color}`}
                >
                  {stat.value}
                </div>
                <div className="text-[18px]  font-medium text-[#2672FF]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="flex justify-center items-center"
        style={{
          backgroundImage: `url(${Layers2})`,
          backgroundSize: "cover", // Ensures the image covers the entire div
          backgroundRepeat: "no-repeat", // Prevents tiling
          backgroundPosition: "center", // Centers the image
          height: "387px", // Example height
          width: "auto", // Example width
        }}
      >
        <div>
          <h1 className="lg:text-[48px] text-[32px]  text-[#092D50] text-center font-semibold mb-4">
            What Our Users Say{" "}
          </h1>
          <p className="text-[18px] text-center text-[#092D50] font-normal mb-2">
            What Can AiDA Do for You?
          </p>
        </div>
      </div>

      <div className=" container mx-auto -mt-[80px] flex justify-center items-center">
        <div>
          <div className="flex flex-wrap gap-4 mb-12">
            {testimonials.map((testimonial, index) => (
              <div key={index}>
                <div className="p-6 bg-white text-center border-[#E0E0E1] shadow-2xl  border-opacity-50  shadow-[#95CFFF61] border rounded-lg max-w-lg py-12 px-6">
                  <h2 className="lg:text-[24px] text-[18px] text-[#151617] font-medium mb-4">
                    {testimonial.title}
                  </h2>
                  <p className="text-[#4F4F4F] mb-6">{testimonial.content}</p>
                </div>
                <div className="flex justify-center gap-3 mt-8 mb-6 items-center">
                  <img src={Photo} className="rounded-full" />
                  <div>
                    <h3 className="font-bold text-[18px] text-[#151617]">
                      {testimonial.author}
                    </h3>
                    <p className="text-[#4F4F4F] text-[14px]">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="flex justify-center items-start"
        style={{
          backgroundImage: `url(${Layers2})`,
          backgroundSize: "cover", // Ensures the image covers the entire div
          backgroundRepeat: "no-repeat", // Prevents tiling
          backgroundPosition: "center", // Centers the image
          height: "387px", // Example height
          width: "auto", // Example width
        }}
      >
        <div>
          <h1 className="lg:text-[48px] text-[32px] text-[#092D50] text-center font-semibold ">
            Subscription Plans{" "}
          </h1>
        </div>
      </div>
      <div className=" container mx-auto -mt-[280px] flex justify-center items-center mb-10">
        <img src={Plans} />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
