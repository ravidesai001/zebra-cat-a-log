import React, {useEffect, useState} from "react";

function Card(){
  const [image, setImage] = useState({});
  return(
    <div class="card" style={{width: 100 + "%", paddingTop: "10px"}}>
      <img class="card-img-top" src="" alt="CAT" />
      <div class="card-body">
        <p class="card-text">Beeg Yoshi</p>
        <p class="card-text">⭐⭐⭐⭐⭐</p>
      </div>
    </div>
  );
}

export default Card;
