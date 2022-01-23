import Cursor from "./cursor2";
export const customCursor = () => {
  const eyeCursor = document.querySelector(".hk");
  const customCursor = document.querySelector(".cursor");
  const cursor = new Cursor({ eyeCursor, customCursor });
  const hookcontainer = document.querySelector(".question_hook_container");
  hookcontainer?.addEventListener("mouseenter", () => cursor.emit("magnify"));
  hookcontainer?.addEventListener("mouseleave", () => cursor.emit("leave"));

  [...document.querySelectorAll(".hide_cursor")].forEach((el) => {
    el?.addEventListener("mouseenter", () => cursor.emit("enter"));
    el?.addEventListener("mouseleave", () => cursor.emit("leave"));
  });
};
