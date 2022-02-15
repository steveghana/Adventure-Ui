import React from "react";
import { Clear } from "@material-ui/icons";
import { ArrowRightAlt } from "@material-ui/icons";
import { useMediaQuery } from "@material-ui/core";
import "./card.scss";

function Card({ cardImg, setcardImg }) {
  const card = React.useRef("null");
  const isTablet = useMediaQuery("(max-width:800px)");
  React.useEffect(() => {
    setcardImg({ ...cardImg, cardcontainer: card.current });
  }, []);

  const closeCard = () => {
    cardImg.hoverContainer.style.pointerEvents = "all";
    card.current.style.display = "none";
  };
  return (
    <div ref={card} className="question_card_container">
      <div className="questioncard_wrapper">
        <div className="card_content">
          <div className="card_content_wrapper">
            <div className="clear_btn" onClick={closeCard}>
              <Clear fontSize="large" style={{ color: "black" }} />
            </div>
            <div
              className="card_img"
              style={{ backgroundImage: `url("${!isTablet && cardImg.img}")` }}
            ></div>

            <h2>{cardImg?.cardDescription?.header}</h2>
            <div className="card_description">
              {cardImg?.cardDescription?.headerDesc}
            </div>
            <ol className="card_offers">
              <div className="card_offer">Things i can do for you.</div>
              {cardImg?.cardDescription?.desc1?.map((item, i) => (
                <li key={i} className="offers">{`0${i}. ${item}`}</li>
              ))}
            </ol>
          </div>
          <div className="card_footer">
            <div className="card_footer_description">
              {cardImg?.cardDescription?.submission}
            </div>
            <div className="card_footer_head_link">
              <ArrowRightAlt />
              <ol className="card_footer_content">
                <li className="card_footer_content__item">
                  <a
                    href="/contactInfo"
                    className="card_footer_link link--helike hide_cursor"
                  >
                    <span>Lets Do This</span>
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
