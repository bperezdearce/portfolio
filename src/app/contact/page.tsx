"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import dotenv from "dotenv";
import { ToastContainer, toast, Slide } from "react-toastify";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+56) 9 8127 2793",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "barbara.perezdearce@gmail.com",
  },
];

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  dotenv.config();

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (serviceId && templateId && publicKey) {
    emailjs
      .sendForm(serviceId, templateId, e.currentTarget, publicKey)
      .then(() => {
        toast.success("Message sent successfully!", {
          position: "bottom-right",
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Slide,
        });
      })
      .catch((error) => {
        toast.error("Error sending message: " + error.text, {
          position: "bottom-right",
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Slide,
        });
      });
  } else {
    toast.error("Error: Missing email service configuration.", {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Slide,
    });
  }
};

const Contact = () => {
  const [selectedService, setSelectedService] = React.useState<string>("");
  const handleSelectChange = (value: string) => {
    setSelectedService(value);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent-default font-bold">
                Let&apos;s work together
              </h3>
              <p className="text-white/60">
                Leave your details below, and let's create something amazing
                together.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="firstname"
                  name="firstname"
                  placeholder="Firstname"
                />
                <Input type="lastname" name="lastname" placeholder="Lastname" />
                <Input type="email" name="email" placeholder="Email address" />
                <Input type="phone" name="phone" placeholder="Phone number" />
              </div>
              {/* select */}
              <Select onValueChange={handleSelectChange} name="service">
                <SelectTrigger
                  className={selectedService ? "text-white" : "text-white/60"}
                >
                  <SelectValue placeholder="Select a Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem
                      value="web application development"
                      className="text-white/60"
                    >
                      Web Application Development
                    </SelectItem>
                    <SelectItem
                      value="mobile application development"
                      className="text-white/60"
                    >
                      Mobile Application Development
                    </SelectItem>
                    <SelectItem value="UI/UX design" className="text-white/60">
                      UI/UX Design
                    </SelectItem>
                    <SelectItem value="research" className="text-white/60">
                      Research
                    </SelectItem>
                    <SelectItem value="other" className="text-white/60">
                      Other
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* select */}
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here"
                name="message"
              />
              {/* button */}
              <Button size="default" className="max-w-40" type="submit">
                Send message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent-default rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="md:text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <ToastContainer />
    </motion.section>
  );
};

export default Contact;
