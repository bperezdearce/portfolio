"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+569) 8127 2793",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "barbara.perezdearce@gmail.com",
  },
];

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_w1ebj7u", // Reemplaza con tu Service ID
      "template_157kqbp", // Reemplaza con tu Template ID
      e.currentTarget,
      "lM3vkokEgk34gMC8t" // Reemplaza con tu Public Key
    )
    .then(() => {
      alert("Message sent successfully!");
    })
    .catch((error) => {
      alert("Error sending message: " + error.text);
    });
};

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
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
                <Input type="firstname" name="firstname" placeholder="Firstname" />
                <Input type="lastname" name="lastname" placeholder="Lastname" />
                <Input type="email" name="email" placeholder="Email address" />
                <Input type="phone" name="phone" placeholder="Phone number" />
              </div>
              {/* select */}
              <Select name="service">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value="web application development">
                      Web Application Development
                    </SelectItem>
                    <SelectItem value="mobile application development">
                      Mobile Application Development
                    </SelectItem>
                    <SelectItem value="UI/UX design">UI/UX Design</SelectItem>
                    <SelectItem value="research">Research</SelectItem>
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
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
