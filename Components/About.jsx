"use client";
import React from "react";
import "../style/About.css";
import ContactComp from "./ContactComp.jsx";
import Info from "./Info.jsx";
import CenterHero from "./CenterHero.jsx";
import Image from "next/image";

const Stats = () => (
  <section className="count">
    {[
      { value: "85M+", label: "Revenue Generated" },
      { value: "50+", label: "Team Members" },
      { value: "500+", label: "Projects Completed" },
      { value: "250+", label: "Clients Worldwide" },
    ].map((stat) => (
      <div key={stat.label}>
        <p>{stat.value}</p>
        <p>{stat.label}</p>
      </div>
    ))}
  </section>
);

const Card = ({ img, title, description }) => (
  <div className="card">
    <div className="img">
      <Image src={img.Src} alt={title} width={img.Width} height={img.Height} />
    </div>
    <div className="card-content">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  </div>
);

const About = () => {
  return (
    <div className="AboutPage">
      <CenterHero
        showImages={true}
        p1="About The Team"
        p2="At ElevateSphere, We are not just another digital marketing agency; we are your dedicated partner in transforming your digital vision into reality"
        prefix="Transforming"
        suffix="Visions into Reality"
        span="Digital"
        button={{ Text: "Contact Us", Link: "/contact", showArrow: false }}
        circle={{ Width: "275px", Height: "88px", Color: "#B7BA90" }}
      />
      <Stats />
      <section className="OurMission">
        <Info
          title="Learn More"
          classColor="green"
          to="/contact"
          showArrow={true}
          p1="Our Mission"
          p2="At ElevateSphere, our mission is clear: to empower businesses to thrive in the digital landscape. We are dedicated to providing tailored, innovative solutions that propel our clients towards their goals."
          h2="Empowering Your Digital Success"
        />
        <div className="img">
          <Image
            src="/images/aboutUsPage.png"
            alt="About Us"
            width={470}
            height={433}
          />
        </div>
      </section>
      <section className="OurVision">
        <Info
          showArrow={true}
          p1="Our Vision"
          p2="Empowering businesses to effortlessly transform ideas into successful digital ventures."
          h1="Why Choose ElevateSphere?"
          center={true}
        />
        <div className="cards">
          {[
            {
              img: {
                Src: "/images/ourvision1.png",
                Width: "64",
                Height: "64",
              },
              title: "Experience",
              description:
                "With years of experience, we have a proven track record of success.",
            },
            {
              img: {
                Src: "/images/ourvision2.png",
                Width: "64",
                Height: "64",
              },
              title: "Expert Team",
              description:
                "Our talented team of developers, designers, branding experts, and marketing strategists work together to deliver outstanding results.",
            },
            {
              img: {
                Src: "/images/ourvision3.png",
                Width: "64",
                Height: "64",
              },

              title: "Innovation",
              description:
                "We stay at the forefront of industry trends and technology to provide the best solutions for our clients.",
            },
            {
              img: {
                Src: "/images/ourvision4.png",
                Width: "64",
                Height: "64",
              },

              title: "Client-Centric",
              description:
                "Your success is our success, and we are dedicated to your satisfaction.",
            },
          ].map((card) => (
            <Card
              key={card.title}
              title={card.title}
              description={card.description}
              img={card.img}
            />
          ))}
        </div>
      </section>
      <ContactComp />
    </div>
  );
};

export default About;
