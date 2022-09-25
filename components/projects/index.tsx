import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import Modal from "./modal";
import projectsData from "../../public/projects/data/projects.json";
import { TabMenu } from "../../type/project";
import Image from "next/image";

const Projects: NextPage = () => {
  const hidden = "hidden";
  const auto = "auto";
  const highLight = "text-blue-700";

  const [tabFilter, setTabFilter] = useState<String>(TabMenu.All);
  const [projectsList, setProjectList] = useState(projectsData);
  const [modalProject, setModalProject] = useState<any>();

  const hasProjects = () => {
    return projectsList.length !== 0;
  };

  const isModalOpen = () => {
    if (!modalProject) return false;
    return true;
  };

  const toggleBodyScrollStyle = () => {
    const body = document.querySelector("body")!;
    if (body.style.overflow === hidden) {
      body.style.overflow = auto;
      return;
    }
    body.style.overflow = hidden;
  };

  const highLightTab = (menu: String) => {
    if (menu !== tabFilter) return;
    return highLight;
  };

  const toggleModal = (project: any) => {
    toggleBodyScrollStyle();
    setModalProject(project);
  };

  const filterProjects = (menu: String) => {
    const projects = projectsData.filter((data) => {
      if (menu === TabMenu.All) return true;

      const category = data.category.toLowerCase();
      return category === menu.toLowerCase();
    });

    setTabFilter(menu);
    setProjectList(projects);
  };

  return (
    <>
      <Head>
        <title>Projects - Yusuke Portfolio</title>
      </Head>
      <section className="bg-white h-max py-8">
        <div className="py-8 mx-auto max-w-screen-md content-center">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
            Projects
          </h2>
          <ul
            className="nav nav-tabs nav-justified flex flex-row justify-center list-none border-b-0 pl-0 mb-4"
            id="tabs-tabJustify"
            role="tablist"
          >
            {Object.keys(TabMenu).map((menu, idx) => {
              return (
                <li
                  className={`nav-item flex-grow text-center ${highLightTab(
                    menu
                  )}`}
                  role="presentation"
                  key={`${idx}-${menu} project tab`}
                >
                  <button
                    className="nav-link w-full block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:bg-gray-100"
                    id={menu}
                    onClick={() => filterProjects(menu)}
                  >
                    {menu}
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="flex flex-wrap justify-between">
            {!hasProjects() && (
              <p className="mb-3 font-normal text-gray-700">Comming soon...</p>
            )}

            {isModalOpen() && (
              <Modal project={modalProject} toggleModal={toggleModal} />
            )}

            {projectsList.map((project, idx) => {
              return (
                <>
                  <div
                    className="m-auto mb-3 w-9/12 md:w-[45%] bg-white rounded-lg border border-gray-200 shadow-md h-fit md:mb-0 md:m-3"
                    key={`${idx}-${project.title}`}
                  >
                    <Image
                      src={project.img}
                      alt=""
                      width="100%"
                      layout="responsive"
                      height="50%"
                      className="rounded-t-lg"
                    />
                    <div className="p-5 h-1/2">
                      <div className="flex items-center flex-wrap">
                        <p className="mb-4 text-2xl font-bold tracking-tight text-gray-900 m-0">
                          {project.title}
                        </p>
                        {project.devStyle && (
                          <span className="text-xs font-semibold inline-block py-1 px-2 mx-3 mb-3 rounded text-blue-600 bg-blue-200 last:mr-0">
                            {project.devStyle}
                          </span>
                        )}
                      </div>

                      <p className="mb-5 font-normal text-gray-700">
                        {project.description}
                      </p>
                      <hr className="bg-gray-100" />
                      <br />
                      <button
                        className="inline-flex items-center py-2 px-3 text-sm font-medium text-center rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 mr-3 hover:text-blue-700"
                        onClick={() => toggleModal(project)}
                      >
                        Read more
                      </button>
                      {project.link.github && (
                        <Link href={project.link.github}>
                          <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 mr-3 hover:text-blue-700">
                            Github
                          </button>
                        </Link>
                      )}
                      {project.link.live && (
                        <Link href={project.link.live}>
                          <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 mr-3 hover:text-blue-700">
                            Live
                          </button>
                        </Link>
                      )}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
