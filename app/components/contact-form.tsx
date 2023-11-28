"use client";

import { useForm, ValidationError } from "@formspree/react";
import { DotLottiePlayer } from "@dotlottie/react-player";

export const ContactForm = () => {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM!);

  if (state.succeeded) {
    return (
      <DotLottiePlayer
        src="/images/lotties/send.lottie"
        className="mx-auto p-32 lg:w-1/2"
        autoplay
      />
    );
  }

  return (
    <div
      className="flex min-h-screen flex-wrap items-center justify-center"
      id="contact"
    >
      <div className="p-8 lg:w-1/2">
        <h1 className="text-center text-6xl">Contact Me</h1>
        <form
          onSubmit={handleSubmit}
          className="mx-auto flex flex-col p-8 shadow-xl"
        >
          <label className="text-lg font-semibold" htmlFor="full-name">
            Name
          </label>
          <input
            className="mb-8 rounded-xl border-2 border-solid border-purple-600 p-4"
            type="text"
            id="full-name"
            name="full-name"
            required
          />

          <label className="text-lg font-semibold" htmlFor="email">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mb-8 rounded-xl border-2 border-solid border-purple-600 p-4"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label className="text-lg font-semibold" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            className="h-32 rounded-xl border-2 border-solid border-purple-600 p-4"
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
