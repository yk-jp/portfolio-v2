import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

const Aboutme: NextPage = () => {
  const profileImg = "/profile.jpg";
  const linkedinUrl = "https://www.linkedin.com/in/yusukekohatsu/";
  const gitHubUrl = "https://github.com/yk-jp";
  const resumePdf = "/resume.pdf";

  return (
    <>
      <Head>
        <title>About me - Yusuke Portfolio</title>
      </Head>

      <section className="bg-white dark:bg-gray-900 h-screen py-16">
        <div className="y-8 md:py-16 px-4 mx-auto max-w-screen-md flex justify-center flex-col-reverse md:flex-row content-center">
          <div className="md:basis-9/12 pt-9 content-center">
            <div>
              <p className="text-center text-3xl">Hi there, It's Yusuke</p>
              <p className="text-center text-xl">Full Stack Developer</p>
            </div>
            <div className="flex justify-center content-center py-3 md:py-6">
              <Link href={linkedinUrl}>
                <button>
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size="2xl"
                    className="hover:text-blue-700"
                  />
                </button>
              </Link>
              <Link href={gitHubUrl}>
                <button>
                  <FontAwesomeIcon
                    icon={faGithubSquare}
                    size="2xl"
                    className="px-8 md:px-16 hover:text-blue-700"
                  />
                </button>
              </Link>
              <Link href={resumePdf}>
                <button>
                  <FontAwesomeIcon
                    icon={faFile}
                    size="2xl"
                    className="hover:text-blue-700"
                  />
                </button>
              </Link>
            </div>
          </div>
          <div className="md:basis-3/12 content-center flex justify-center">
            <Image
              className="rounded-full"
              src={profileImg}
              alt="me"
              width={200}
              height={200}
              priority
            />
          </div>
        </div>
        <div className="y-8 md:py-16 px-4 mx-auto max-w-screen-md justify-center content-center">
          <p className="mb-4 lg:mb-10 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            I love solving problems and developing apps since I am constantly
            passionate about learning new technologies, even outside work. I
            recently started the OSS journey. It's overwhelming, but I'm
            enjoying it a lot! My desire to learn more about new technologies is
            strengthened more and more!
          </p>
        </div>
      </section>
    </>
  );
};

export default Aboutme;
