import React from "react";
import "./style.css";
function Text() {
  return (
    <div class="bg_patterns">
      <svg className='bg_svg_wrapper' width="100%" height="100%">
        <text className='bg_svg_text' x="50%" y="60%" text-anchor="middle">
          Hello
        </text>
      </svg>
    </div>
  );
}

export default Text;
