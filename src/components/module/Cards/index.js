import React, { Fragment } from "react";
import * as AiIcons from "react-icons/ai";
import suit from "../../../assets/img/suit.png";
import "./cards.css";

const Cards = ({ ...props }) => {
  return (
    <Fragment>
      <div className="card ">
        <img src={suit} className="card-img-top" alt="product" />
        <div className="card-body">
          <h5 className="product-name">{props.productName}</h5>
          <p className="product-price">Rp {props.productPrice}</p>
          <p className="store-name">{props.storeName}</p>
          <AiIcons.AiFillStar className="star-icons" />
          <AiIcons.AiFillStar className="star-icons" />
          <AiIcons.AiFillStar className="star-icons" />
        </div>
      </div>
    </Fragment>
  );
};

export default Cards;