"use client";

import Button from "@/components/ui/Button";

const Contact = () => {
  const sendEmail = async () => {
    const resp = await fetch("/api/send", {
      method: "POST",
    });

    const data = await resp.json();

    console.log(data);
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
            type="text"
            placeholder="Name Surname"
          />
          <input
            className="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:ring-0 dark:text-white"
            type="email"
            placeholder="Email"
          />
          <textarea
            className="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:ring-0 dark:text-white"
            cols={30}
            rows={10}
            placeholder="Message..."
          ></textarea>
          <Button
            onClick={sendEmail}
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
