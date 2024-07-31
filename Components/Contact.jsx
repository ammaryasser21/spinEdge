"use client";
import React from "react";
import "../style/Contact.css";
import CenterHero from "./CenterHero";
import Info from "./Info";
import CustomButton from "./CustomButton";
import BlogCards from "./BlogCards";
import ContactComp from "./ContactComp";
import { Space_Grotesk } from "next/font/google";
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

const FormInput = ({ label, type, placeholder, id }) => {
  return (
    <div>
      <label htmlFor={id}>
        {label} <span>*</span>
      </label>
      <input type={type} name={id} placeholder={placeholder} id={id} />
    </div>
  );
};

const ContactInfo = ({ items, fontClass }) => {
  return (
    <div className="links-contact">
      <ul>
        {items.map(({ icon, text }, index) => (
          <li key={index}>
            <i className={icon} aria-hidden="true"></i>
            <p className={fontClass}>{text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Contact = () => {
  const formFields = [
    {
      label: "Name",
      type: "text",
      placeholder: "What's your name?",
      id: "Name",
    },
    {
      label: "Email",
      type: "email",
      placeholder: "What's your email?",
      id: "Email",
    },
    {
      label: "Company",
      type: "text",
      placeholder: "b*************.com",
      id: "Company",
    },
    {
      label: "Budget",
      type: "number",
      placeholder: "$2,000-$5,000 USD",
      id: "Budget",
    },
  ];

  const contactItems = [
    { icon: "fa fa-map", text: "Old Port Mouseio, Mykonos, Greece" },
    { icon: "fa fa-clock", text: "Monday to Friday: 9:00 AM to 5:00 PM" },
    { icon: "fa fa-envelope", text: "jessica.hanson@example.com" },
  ];

  return (
    <div className="contact-page">
      <CenterHero
        showImages={true}
        subtitle="Contact"
        description="Welcome to ElevateSphere's blog, where we dive into the ever-evolving world of digital innovation."
        prefix=""
        suffix="with ElevateSphere"
        span="Get in Touch"
        circle={{ Width: "449px", Height: "88px", Color: "#B290BA" }}
        font={spaceGrotesk}
      />

      <section className="get-quote">
        <div className="left">
          <Info
            primaryText="Get a quote"
            secondaryText="Our team is available to assist you during our office hours. Feel free to drop by or schedule a meeting during the following hours."
            subheading="Send a message to get your free quote"
            font={spaceGrotesk}
          />
          <ContactInfo
            items={contactItems}
            fontClass={spaceGrotesk.className}
          />
        </div>

        <form className={spaceGrotesk.className} action="submit">
          {formFields.map((field) => (
            <FormInput key={field.id} {...field} />
          ))}
          <div>
            <label htmlFor="Comment">Comment or Message</label>
            <textarea
              name="Comment"
              id="Comment"
              placeholder="Your message..."
            />
            <CustomButton
              buttons={[
                {
                  title: "Send Message",
                  to: "",
                  showArrow: true,
                },
              ]}
              center={false}
            />
          </div>
        </form>
      </section>

      <section className="Blog-Home">
        <div className="top">
          <Info
            primaryText="Blog"
            subheading="Navigating the Digital "
            font={spaceGrotesk}
          />
          <CustomButton
            buttons={[
              {
                title: "See All",
                classColor: "",
                to: "/service",
                showArrow: false,
              },
            ]}
          />
        </div>
        <BlogCards font={spaceGrotesk} />
      </section>
      <ContactComp />
    </div>
  );
};

export default Contact;
