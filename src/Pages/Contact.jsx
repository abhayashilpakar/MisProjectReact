import React from "react";

function Contact() {
  return (
    // <div classNameName="sm:p-10 my-auto">
    //   <section classNameName="mx-auto max-w-screen-xl  ">
    //     <div classNameName="grid grid-cols-4 text-gray-800 lg:grid-cols-3">
    //       <div classNameName="col-span-4 bg-gray-50 px-8 py-10 text-gray-800 md:col-span-2  md:px-10 md:py-12 lg:col-span-1">
    //         <h2 classNameName="mb-8 text-2xl font-black">Contact me</h2>
    //         <ul>
    //           <li classNameName="mb-6 flex items-start text-left">
    //             <svg
    //               classNameName="shrink-0 mr-6 text-2xl text-gray-500"
    //               xmlns="http://www.w3.org/2000/svg"
    //               aria-hidden="true"
    //               role="img"
    //               width="1em"
    //               height="1em"
    //               preserveAspectRatio="xMidYMid meet"
    //               viewBox="0 0 24 24"
    //             >
    //               <path
    //                 fill="currentColor"
    //                 d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5l-8-5V6l8 5l8-5v2z"
    //               />
    //             </svg>
    //             <div>
    //               <a
    //                 classNameName="cursor-pointer font-serif text-base md:text-lg"
    //                 href="d"
    //               >
    //                 abhaya@microsoft.com
    //               </a>
    //               <span classNameName="block text-xs uppercase">email</span>
    //             </div>
    //           </li>
    //           <li classNameName="my-6 flex items-center text-left">
    //             <svg
    //               classNameName="shrink-0 mr-6 text-2xl text-gray-500"
    //               xmlns="http://www.w3.org/2000/svg"
    //               aria-hidden="true"
    //               role="img"
    //               width="1em"
    //               height="1em"
    //               preserveAspectRatio="xMidYMid meet"
    //               viewBox="0 0 1024 1024"
    //             >
    //               <path
    //                 fill="currentColor"
    //                 d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4c0 146.8-111.8 315.9-316.1 315.9c-63 0-121.4-18.3-170.6-49.8c9 1 17.6 1.4 26.8 1.4c52 0 99.8-17.6 137.9-47.4c-48.8-1-89.8-33-103.8-77c17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35c25.1-4.7 49.1-14.1 70.5-26.7c-8.3 25.7-25.7 47.4-48.8 61.1c22.4-2.4 44-8.6 64-17.3c-15.1 22.2-34 41.9-55.7 57.6z"
    //               />
    //             </svg>
    //             <div>
    //               <a
    //                 classNameName="cursor-pointer font-serif text-base md:text-lg"
    //                 href="d"
    //               >
    //                 abhayaShilpakar
    //               </a>
    //               <span classNameName="block text-xs uppercase">twitter</span>
    //             </div>
    //           </li>
    //           <li classNameName="my-6 flex items-center text-left">
    //             <svg
    //               classNameName="shrink-0 mr-6 text-2xl text-gray-500"
    //               xmlns="http://www.w3.org/2000/svg"
    //               aria-hidden="true"
    //               role="img"
    //               width="1em"
    //               height="1em"
    //               preserveAspectRatio="xMidYMid meet"
    //               viewBox="0 0 24 24"
    //             >
    //               <path
    //                 fill="currentColor"
    //                 fill-rule="evenodd"
    //                 d="M1 2.838A1.838 1.838 0 0 1 2.838 1H21.16A1.837 1.837 0 0 1 23 2.838V21.16A1.838 1.838 0 0 1 21.161 23H2.838A1.838 1.838 0 0 1 1 21.161V2.838Zm8.708 6.55h2.979v1.496c.43-.86 1.53-1.634 3.183-1.634c3.169 0 3.92 1.713 3.92 4.856v5.822h-3.207v-5.106c0-1.79-.43-2.8-1.522-2.8c-1.515 0-2.145 1.089-2.145 2.8v5.106H9.708V9.388Zm-5.5 10.403h3.208V9.25H4.208v10.54ZM7.875 5.812a2.063 2.063 0 1 1-4.125 0a2.063 2.063 0 0 1 4.125 0Z"
    //                 clip-rule="evenodd"
    //               />
    //             </svg>
    //             <div>
    //               <p classNameName="font-serif text-base md:text-lg">Abhaya</p>
    //               <span classNameName="block text-xs uppercase">LinkedIn</span>
    //             </div>
    //           </li>
    //         </ul>
    //       </div>

    //       <div classNameName="order-first col-span-4 max-w-screen-md px-8 py-10 md:order-last md:col-span-2 md:px-10 md:py-12">
    //         <h2 classNameName="mb-8 text-2xl font-black">Get in touch</h2>
    //         <p classNameName="mt-2 mb-4 font-sans text-sm tracking-normal">
    //           Don't be shy to ask me a question.
    //         </p>

    //         {/* form */}
    //         <form action="">
    //           <div classNameName="md:col-gap-4 mb-5 grid md:grid-cols-2 gap-4 ">
    //             <input
    //               classNameName="col-span-1  border-b py-3   text-sm outline-none focus:border-b-2  focus:border-black placeholder-black border-orange-400"
    //               type="text"
    //               placeholder="Name"
    //               name="name"
    //             />
    //             <input
    //               classNameName="col-span-1  border-b py-3 text-sm outline-none focus:border-b-2 focus:border-black border-orange-400"
    //               type="email"
    //               placeholder="Email"
    //               name="email"
    //             />
    //           </div>
    //           <textarea
    //             classNameName="mb-10 w-full resize-y whitespace-pre-wrap border-b py-3 text-sm outline-none focus:border-b-2 focus:border-black border-orange-400"
    //             id=""
    //             rows="6"
    //             placeholder="Question"
    //             name="question"
    //           ></textarea>
    //           <button
    //             type="submit"
    //             classNameName="group flex cursor-pointer items-center rounded-xl bg-orange-500 bg-none px-8 py-4 text-center font-semibold leading-tight text-white"
    //           >
    //             Send
    //             <svg
    //               classNameName="group-hover:ml-8 ml-4 transition-all"
    //               xmlns="http://www.w3.org/2000/svg"
    //               aria-hidden="true"
    //               role="img"
    //               width="1em"
    //               height="1em"
    //               preserveAspectRatio="xMidYMid meet"
    //               viewBox="0 0 24 24"
    //             >
    //               <path
    //                 fill="none"
    //                 stroke="currentColor"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //                 stroke-width="2"
    //                 d="M9.912 12H4L2.023 4.135A.662.662 0 0 1 2 3.995c-.022-.721.772-1.221 1.46-.891L22 12L3.46 20.896c-.68.327-1.464-.159-1.46-.867a.66.66 0 0 1 .033-.186L3.5 15"
    //               />
    //             </svg>
    //           </button>
    //         </form>
    //       </div>
    //     </div>
    //   </section>
    // </div>

    <div className="font-[sans-serif] max-w-6xl mx-auto relative bg-white rounded-3xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] overflow-hidden my-5">
      {/* <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-blue-400"></div> */}
      {/* <div className="absolute -bottom-6 -left-0 w-24 h-20 rounded-tr-[40px] bg-teal-200"></div> */}
      {/* <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-blue-400"></div> */}
      {/* <div className="absolute -bottom-6 -right-0 w-24 h-20 rounded-tl-[40px] bg-blue-300"></div> */}
      <div className="grid md:grid-cols-2">
        <div className="text-center p-6 xl:p-10 flex flex-col items-center justify-center">
          <h2 className="text-3xl text-orange-500 font-bold">Contact Us</h2>
          <img
            src="https://readymadeui.com/contact.webp"
            className="mt-4 shrink-0 w-full"
            alt=""
          />
        </div>
        <form className="p-6 xl:p-10">
          <div className="max-w-sm mx-auto space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-gray-100  text-black rounded-full py-3 px-6 text-sm outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-gray-100 rounded-full py-3 px-6 text-sm outline-none"
            />
            <input
              type="email"
              placeholder="Phone No."
              className="w-full bg-gray-100 rounded-full py-3 px-6 text-sm outline-none"
            />
            <textarea
              placeholder="Message"
              rows="6"
              className="w-full bg-gray-100 rounded-3xl px-6 text-sm pt-3 outline-none"
            ></textarea>
            <button
              type="button"
              className="text-white w-full relative bg-orange-500 hover:bg-orange-550 font-semibold rounded-full text-sm px-6 py-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                fill="#fff"
                className="mr-2 inline"
                viewBox="0 0 548.244 548.244"
              >
                <path
                  fill-rule="evenodd"
                  d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                  clipRule="evenodd"
                  data-original="#000000"
                />
              </svg>
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
