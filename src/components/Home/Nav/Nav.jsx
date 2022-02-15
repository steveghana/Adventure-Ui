import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./index.scss";
import { navigate } from "./index";
function Nav({ nav }) {
  const navcontainer = React.useRef(null);
  const [screensize, setscreensize] = useState("");
  const history = useHistory();
  useEffect(() => {
    let abort = new AbortController();
    const resize = () => setscreensize(window.innerWidth);
    resize();
    window.addEventListener("resize", resize);
    navigate();
    setTimeout(navigate, 2000);
    return () => {
      abort.abort();
    };
  }, [screensize]);
  const closeNav = () => nav.current.classList.remove("open");
  const fullHomeRefresh = () => {
    history.push("/");
    window.location.reload();
  };
  const navigation = (e) => {
    switch (e.target.innerText) {
      case "Categories":
        return history.push("/categories");
      case "Projects":
        return history.push("/allprojects");
      case "About":
        return history.push("/aboutme");
      case "Contact":
        return history.push("/contactInfo");
      default:
        return null;
    }
  };
  return (
    <>
      <ol class="nav_content">
        <li class="nav_content__item">
          <button onClick={closeNav} class="nav_button button--rhea">
            <span>Close</span>
          </button>
        </li>
      </ol>
      <div class="nav_main" ref={navcontainer}>
        <div class="indicator-circle">
          <div class="circ-fill"></div>
        </div>
        <div class="list">
          <div class="indicator">
            <div class="id-selector">
              <div onClick={fullHomeRefresh} class="id-list-item hide_cursor">
                Home
              </div>
              <br />
              <div class="id-list-item hide_cursor" onClick={navigation}>
                Categories
              </div>
              <br />
              <div class="id-list-item hide_cursor" onClick={navigation}>
                Projects
              </div>
              <br />
              <div class="id-list-item hide_cursor" onClick={navigation}>
                Contact
              </div>
              <br />
              <div class="id-list-item hide_cursor">Home</div>
              <br />
              <div class="id-list-item hide_cursor">Categories</div>
              <br />
              <div class="id-list-item hide_cursor">Projects</div>
              <br />
              <div class="id-list-item hide_cursor">Contact</div>
              <br />
            </div>
          </div>
          <div class="list-item hide_cursor">Home</div>
          <br />
          <div class="list-item hide_cursor">Categories</div>
          <br />
          <div class="list-item hide_cursor">Projects</div>
          <br />
          <div class="list-item hide_cursor">Contact</div>
          <br />
        </div>
      </div>
    </>
  );
}

export default Nav;
// function clickToScroll() {
//   const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
//   const listOfLinks = document.querySelectorAll("a[href^='#sectionLink");
//   listOfLinks.forEach(function (link) {
//     link.addEventListener("click", () => {
//       listOfLinks.forEach((link) => {
//         if (link.classList.contains("highlighted")) {
//           link.classList.remove("highlighted");
//         }
//       });
//       link.classList.add("highlighted");
//       let ref = link.href.split("#sectionLink");
//       ref = "#section" + ref[1];
//       if (isIE11) {
//         window.scrollTo(0, document.querySelector(ref).offsetTop);
//       } else {
//         let scrollwindow = document.querySelector(".appwrapper");

//         scrollwindow.scroll({
//           behavior: "smooth",
//           left: 0,
//           top: document.querySelector(ref).offsetTop,
//         });
//       }
//     });
//   });
// }
