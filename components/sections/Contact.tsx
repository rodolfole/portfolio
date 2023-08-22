"use client";

import { FieldValues, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import Button from "@/components/ui/Button";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      name: "",
      message: "",
    },
  });

  const sendEmail = async (values: FieldValues) => {
    const resp = await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify({
        ...values,
      }),
    });

    const data = await resp.json();

    if (data.success) {
      toast.success("Message sent.");
      reset();
    }
  };

  return (
    <section className="bg-white dark:bg-slate-900 pb-28" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col gap-3 items-center">
          <h1 className="text-bright-pink font-bold text-3xl">
            CONTACT <span className="text-white">ME!</span>
          </h1>
        </div>
        <form className="p-8 flex flex-col gap-5 items-center">
          <input
            className="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:ring-0 dark:text-white"
            id="name"
            placeholder="Name"
            {...register("name", {
              required: true,
            })}
            type="text"
          />
          <input
            className="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:ring-0 dark:text-white"
            id="email"
            placeholder="Email"
            {...register("email", {
              required: true,
            })}
            type="email"
          />
          <textarea
            className="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:ring-0 dark:text-white"
            cols={30}
            id="message"
            placeholder="Message"
            {...register("message", {
              required: true,
            })}
            rows={10}
          ></textarea>
          <Button
            onClick={handleSubmit(sendEmail)}
            className="opacity-100 px-3 py-2 text-base rounded-lg h-12 w-1/2 bg-gradient-to-r from-purple-600 to-bright-pink relative "
          >
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
