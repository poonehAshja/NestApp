import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ItemCart = ({ title, desc, imgurl }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div>{desc}</div>
      <div>
        {" "}
        <img src={imgurl} />
      </div>
    </div>
  );
};

ItemCart.defaultProps = {
  title: "default Title",
  desc: "Default Description",
  imgurl: null,
};

export default ItemCart;
