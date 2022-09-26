import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const Modal = (props: any) => {
  const { project, toggleModal } = props;

  return (
    <div
      id="modalEl"
      className="flex justify-center items-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"
    >
      <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
        {/* <!-- Modal content --> */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-600">
          {/* <!-- Modal header --> */}
          <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-300 mb-2">
                {project.title}
              </h3>
              {project.devStyle && (
                <span className="text-xs font-semibold inline-block py-1 px-2 mr-2 mt-1 rounded text-blue-600 bg-blue-200 last:mr-0">
                  {project.devStyle}
                </span>
              )}
              <span className="text-xs font-semibold inline-block py-1 px-2 mr-2 mt-1 rounded text-blue-600 bg-blue-200 last:mr-0">
                {project.category}
              </span>
            </div>
            <button
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              onClick={() => toggleModal(null)}
            >
              <FontAwesomeIcon icon={faX} size="lg" />
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* <!-- Modal body --> */}
          <div className="p-6 space-y-6">
            <p className="mb-4 font-bold tracking-tight text-gray-900 dark:text-gray-300">
              What I Learnt
            </p>
            <p className="text-base leading-relaxed text-gray-900 dark:text-gray-400">
              {project.whatIlearnt}
            </p>

            <p className="mb-4 font-bold tracking-tight text-gray-900 dark:text-gray-300">
              Difficult Parts
            </p>
            <p className="text-base leading-relaxed text-gray-900 dark:text-gray-400">
              {project.difficulties}
            </p>
            {project.techStack && (
              <>
                <p className="mb-4 font-bold tracking-tight text-gray-900 dark:text-gray-300">
                  Tech Stack
                </p>
                {project.techStack.map((name: String, idx: number) => {
                  return (
                    <span
                      key={`techStack-${name}-${idx}`}
                      className="text-xs font-semibold inline-block py-1 px-2 mx-1 rounded text-blue-600 bg-blue-200 last:mr-0 mr-1"
                    >
                      {name}
                    </span>
                  );
                })}
              </>
            )}
          </div>
          {/* <!-- Modal footer --> */}
          <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200">
            {project.link.github && (
              <Link href={project.link.github}>
                <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 mr-3 hover:text-blue-700 dark:hover:text-blue-700 text-gray-900 dark:text-gray-300">
                  Github
                </button>
              </Link>
            )}
            {project.link.live && (
              <Link href={project.link.live}>
                <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 mr-3 hover:text-blue-700 dark:hover:text-blue-700 text-gray-900 dark:text-gray-300">
                  Live
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
