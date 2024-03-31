import React from "react";

function Alert() {
  return (
    <div>
      <section class="flex items-center h-screen bg-gray-100 font-poppins dark:bg-gray-900 ">
        <div class="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-10 ">
          <div
            class="relative max-w-xl p-6 mx-auto bg-white border-t-4 border-orange-500 rounded-md shadow dark:border-orange-400 dark:bg-gray-800"
            role="alert"
          >
            <div class="flex items-center">
              <div class="py-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="w-6 h-6 mr-4 text-orange-500 dark:text-orange-400 bi bi-exclamation-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                </svg>
              </div>
              <div>
                <p class="mb-1 text-lg font-bold text-gray-700 dark:text-gray-300">
                  Something may be wrong.
                </p>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  Sorry, There was a problem with your request
                </p>
              </div>
            </div>
            <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="w-6 h-6 text-orange-500 dark:text-gray-400 hover:text-orange-600 bi bi-x"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Alert;
