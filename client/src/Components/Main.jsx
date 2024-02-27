// import React from "react";
// import { Link } from "react-router-dom";
// import About from "./About";
// import Projects from "./Projects";
// import Contact from "./Contact";
// const mainStyle = {
//   backgroundImage: `url(https://img.freepik.com/free-vector/stream-binary-code-design_53876-97406.jpg)`,
//   backgroundSize: "cover",
//   backgroundPosition: "center",
//   color: "white",
// };

// function Main() {
//   return (
//     <div style={{ backgroundColor: "black" }}>
//       <div style={mainStyle}>
//         <div className="container d-flex flex-column align-items-center vh-100">
//           <nav className="navbar navbar-expand-lg">
//             <div className="container-fluid">
//               <button
//                 className="navbar-toggler"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#navbarNavAltMarkup"
//                 aria-controls="navbarNavAltMarkup"
//                 aria-expanded="false"
//                 aria-label="Toggle navigation"
//                 style={{
//                   border: "none",
//                   color: "white",
//                   backgroundColor: "white",
//                 }}
//               >
//                 <span className="navbar-toggler-icon"></span>
//               </button>
//               <div
//                 className="collapse navbar-collapse "
//                 id="navbarNavAltMarkup"
//               >
//                 <div className="navbar-nav ms-auto heading-next">
//                   <Link className="nav-link active me-5 text-white" to="/about">
//                     About
//                   </Link>
//                   <Link
//                     className="nav-link active me-5 text-white"
//                     to="/contact"
//                   >
//                     Contact
//                   </Link>
//                   <Link
//                     className="nav-link active me-5 text-white"
//                     to="/contact"
//                   >
//                     Let's Connect
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </nav>
//           <div
//             className="text-center"
//             style={{ marginTop: "auto", marginBottom: "auto" }}
//           >
//             <p className="heading-next">Full Stack Web Developer</p>
//             <h1 className="heading">
//               Hi, I'm <span style={{ color: "red" }}>Vatsal Agarwal</span>
//             </h1>
//           </div>
//         </div>
//       </div>
//       <About />
//       <Projects />
//       <Contact />
//     </div>
//   );
// }

// export default Main;
import React from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
const mainStyle = {
  backgroundImage: `url(https://img.freepik.com/free-vector/stream-binary-code-design_53876-97406.jpg)`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: "white",
};

function Main() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <div style={mainStyle}>
        <div className="container d-flex flex-column align-items-center vh-100">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
                style={{
                  border: "none",
                  color: "white",
                  backgroundColor: "white",
                }}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto heading-next">
                  <Link className="nav-link active me-5 text-white" to="/about">
                    About
                  </Link>
                  <Link
                    className="nav-link active me-5 text-white"
                    to="/contact"
                  >
                    Contact
                  </Link>
                  <Link
                    className="nav-link active me-5 text-white"
                    to="/contact"
                  >
                    Let's Connect
                  </Link>
                </div>
              </div>
            </div>
          </nav>
          <div
            className="text-center"
            style={{ marginTop: "auto", marginBottom: "auto" }}
          >
            {/* <p className="heading-next">Full Stack Web Developer</p> */}
            <h1 className="heading">
              Hi, I'm <span style={{ color: "red" }}>Vatsal Agarwal</span>
            </h1>
          </div>
        </div>
      </div>
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default Main;
