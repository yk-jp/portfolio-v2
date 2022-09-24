import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import Modal from "./modal";
import projectsData from "../../public/projects/data/projects.json";
import { TabMenu } from "../../type/project";

const Projects: NextPage = () => {
  const hidden = "hidden";
  const auto = "auto";
  const hightLight = "text-blue-700";

  const [tabFilter, setTabFilter] = useState<String>(TabMenu.All);
  const [projectsList, setProjectList] = useState(projectsData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const hasProjects = () => {
    return projectsList.length !== 0;
  };

  const toggleBodyScrollStyle = () => {
    const body = document.querySelector("body")!;
    if (body.style.overflow == hidden) {
      body.style.overflow = auto;
      return;
    }
    body.style.overflow = auto;
  };

  const highLightTab = (menu: String) => {
    if (menu !== tabFilter) return;
    return hightLight;
  };

  const toggleModal = (e: any) => {
    const id = e.target.id!;
    const ele = document.getElementById(id)!;

    if (ele.classList.contains(hidden)) {
      ele.classList.remove(hidden);
      return;
    }
    ele.classList.add(hidden);
  };

  const openModal = (project: any) => {
    setIsModalOpen(true) 
    return <Modal project={project} />;
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
              <p className="mb-3 font-normal text-gray-700">
                {" "}
                Comming soon...{" "}
              </p>
            )}
            {projectsList.map((project, idx) => {
              return (
                <div
                  className="m-auto mb-3 w-8/12 md:w-[45%] bg-white rounded-lg border border-gray-200 shadow-md h-fit md:mb-0 md:m-3"
                  key={`${idx}-${project.title}`}
                >
                  <img
                    src={project.img}
                    className="rounded-t-lg w-full p-0 h-[200px]"
                  />
                  <div className="p-5 h-1/2">
                    <p className="mb-4 text-2xl font-bold tracking-tight text-gray-900">
                      {project.title}
                    </p>
                    <p className="mb-5 font-normal text-gray-700">
                      {project.description}
                    </p>
                    <button
                      className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 mr-3"
                      onClick={() => openModal(project)}
                    >
                      Read more
                    </button>
                    {project.link.github && (
                      <Link href={project.link.github}>
                        <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 mr-3">
                          Github
                        </button>
                      </Link>
                    )}
                    {project.link.live && (
                      <Link href={project.link.live}>
                        <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 mr-3">
                          Live
                        </button>
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
