import React from "react";
import A from "./A";

function Apaya({ title, img, path }) {
  return (
    <div>
      <div>
        <A href={"/property/" + path} className="">
          <div>{title}</div>
          <div className="d">{img}</div>
        </A>
      </div>
    </div>
  );
}

export default Apaya;
