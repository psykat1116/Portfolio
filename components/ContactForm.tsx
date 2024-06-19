"use client";
import React, { ElementRef, useRef, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { toast } from "sonner";
import { IoIosSend } from "react-icons/io";

const ContactForm = () => {
  const formRef = useRef<ElementRef<"form">>(null);
  const [state, handleSubmit] = useForm("xpwaaaaz");
  const [values, setValues] = useState({
    email: "",
    message: "",
  });

  if (values.email !== "" && values.message !== "" && state.succeeded) {
    toast.success("Thanks For Contacting Me!");
    formRef?.current?.reset();
    setTimeout(() => {
      toast.dismiss();
    }, 3000);
  }
  
  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="w-full md:w-1/2 flex flex-col items-start"
    >
      <label htmlFor="email" className="text-2xl w-full">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        className="bg-transparent text-2xl border-2 border-solid border-['#eeeef2'] p-2 rounded-sm focus-visible:outline-none mt-1 w-full tracking-wider"
        placeholder="Enter Your Email"
        autoComplete="off"
        required
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
        className="text-redcolor w-full"
      />
      <label htmlFor="email" className="text-2xl mt-5 w-full">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        className="bg-transparent text-2xl border-2 border-solid border-['#eeeef2'] p-2 rounded-sm focus-visible:outline-none resize-none mt-1 h-64 w-full tracking-wider"
        placeholder="Enter Your Message"
        autoComplete="off"
        required
        value={values.message}
        onChange={(e) => setValues({ ...values, message: e.target.value })}
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
        className="text-redcolor"
      />
      <button
        type="submit"
        disabled={state.submitting}
        className="px-2 py-1 bg-redcolor text-xl mt-4 flex items-center rounded-sm disabled:cursor-not-allowed disabled:bg-red-400 disabled:text-[#232323]"
      >
        <IoIosSend size={20} className="mr-1" />
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
