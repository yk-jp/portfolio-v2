import type { NextPage } from "next";
import Head from "next/head";

const Contact: NextPage = () => {
  const email: string = "k82.y12@gmail.com";

  return (
    <>
      <Head>
        <title>Contact - Yusuke Portfolio</title>
      </Head>

      <section className="bg-white dark:bg-gray-900 h-screen py-8">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md content-center">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Contact
          </h2>
          <p className="mb-4 lg:mb-10 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            I appreciate that you visited my portfolio website. If you have
            something to say, please don't hesitate to send me a message. I'd
            love to hear your comments, feedback or suggestions!
          </p>
          <form
            action={`https://formsubmit.co/${email}`}
            method="POST"
            className="space-y-8"
          >
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="hidden"
                name="_subject"
                value="New message from my portfolio website!"
              />
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center rounded-lg sm:w-fit border border-gray-300 hover:text-blue-700 hover:border-blue-700"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
