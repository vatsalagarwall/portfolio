// // import React, { useState } from "react";
// // import { data } from "../data";
// // import { Link } from "react-router-dom";

// // function Projects() {
// //   return (
// //     <div style={{ backgroundColor: "black", color: "white" }}>
// //       <div
// //         className="container"
// //         style={{ marginTop: "60px", marginBottom: "60px" }}
// //       >
// //         <h1 className="heading">My works</h1>
// //         <div className="row">
// //           {data.map((item, index) => (
// //             <div class="card" style={{ width: "18rem" }}>
// //               <img
// //                 src={item.img}
// //                 class="card-img-top"
// //                 alt="..."
// //                 style={{ height: "300px" }}
// //               />
// //               <div class="card-body">
// //                 <h5 class="card-title" style={{ fontWeight: "bold" }}>
// //                   {item.name}
// //                 </h5>
// //                 <p class="card-text">{item.description}</p>
// //                 <Link to={item.link} target="_blank" style={{ color: "black" }}>
// //                   <svg
// //                     xmlns="http://www.w3.org/2000/svg"
// //                     width="24"
// //                     height="24"
// //                     viewBox="0 0 24 24"
// //                     fill="none"
// //                     stroke="currentColor"
// //                     strokeWidth="2"
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                     className="feather feather-external-link"
// //                   >
// //                     <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
// //                     <polyline points="15 3 21 3 21 9" />
// //                     <line x1="10" x2="21" y1="14" y2="3" />
// //                   </svg>
// //                 </Link>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Projects;
// import React, { useState } from "react";
// import { data } from "../data";
// import { Link } from "react-router-dom";

// function Projects() {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   return (
//     <div style={{ backgroundColor: "black", color: "white" }}>
//       <div
//         className="container"
//         style={{ marginTop: "60px", marginBottom: "60px" }}
//       >
//         <h1 className="heading">My works</h1>
//         <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
//           {data.map((item, index) => (
//             <div key={index} className="col">
//               <div className="card" style={{ width: "100%", height: "550px" }}>
//                 <img
//                   src={item.img}
//                   className="card-img-top"
//                   alt="..."
//                   style={{ height: "250px", objectFit: "cover" }}
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title" style={{ fontWeight: "bold" }}>
//                     {item.name}
//                   </h5>
//                   <p className="card-text">{item.description}</p>
//                   <Link to={item.link} target="_blank" className="btn btn-dark">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="feather feather-external-link"
//                     >
//                       <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
//                       <polyline points="15 3 21 3 21 9" />
//                       <line x1="10" x2="21" y1="14" y2="3" />
//                     </svg>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Projects;
import React, { useState } from "react";
import { data } from "../data";
import { Link } from "react-router-dom";

function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div style={{ backgroundColor: "black", color: "white" }}>
      <div
        className="container"
        style={{ marginTop: "60px", marginBottom: "60px" }}
      >
        <h1 className="heading">My works</h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {data.map((item, index) => (
            <div key={index} className="col">
              <div className="card" style={{ width: "100%", height: "550px" }}>
                <img
                  src={item.img}
                  className="card-img-top"
                  alt="..."
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontWeight: "bold" }}>
                    {item.name}
                  </h5>
                  <p className="card-text">{item.description}</p>
                </div>
                <div className="card-footer d-flex">
                  <Link
                    to={item.link}
                    target="_blank"
                    className="btn btn-dark me-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-external-link "
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" x2="21" y1="14" y2="3" />
                    </svg>
                  </Link>
                  <Link
                    to={item.github}
                    target="_blank"
                    className="btn btn-dark me-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-github"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </Link>
                  <Link
                    to={item.link}
                    target="_blank"
                    className="btn btn-dark me-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-youtube"
                    >
                      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                      <path d="m10 15 5-3-5-3z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
