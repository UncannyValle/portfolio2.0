"use client";

import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import send from "../../../public/images/lotties/send.json";

export const ContactForm = () => {
  const [state, handleSubmit] = useForm("xvodaqva");

  if (state.succeeded) {
    return <div>Thank you for signing up!</div>;
  }

  return (
    <div className="flex min-h-screen flex-wrap items-center justify-center" id="contact">
      <Lottie animationData={send} className="lg:w-1/2" />
      <div className="lg:w-1/2 p-8">
        <h1 className="text-center text-6xl">Contact Me</h1>
        <form
          onSubmit={handleSubmit}
          className="mx-auto flex flex-col p-8 shadow-xl"
        >
          <label className="text-lg font-semibold" htmlFor="name">
            Name
          </label>
          <input
            className="rounded-xl border-2 border-solid border-purple-600 p-4 mb-8"
            type="text"
            name="name"
            required
          />

          <label className="text-lg font-semibold" htmlFor="email">
            E-mail
          </label>
          <input
            type="email"
            name="email"
            required
            className="rounded-xl border-2 border-solid border-purple-600 p-4 mb-8"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label className="text-lg font-semibold" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            className="rounded-xl border-2 border-solid border-purple-600 p-4 h-32"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <div className="text-center">
            <button
              type="submit"
              disabled={state.submitting}
              className="my-8 rounded-xl  bg-purple-600 px-8 py-4 text-white transition hover:scale-110"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
