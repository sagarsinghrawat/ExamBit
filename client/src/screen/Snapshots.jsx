import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { getAllImages } from "../actions/snapshots";

const Snapshots = () => {
  const query = new URLSearchParams(useLocation().search);
  const testId = query.get("testId");
  const studentId = query.get("studentId");
  const [imgSrc, setImgSrc] = useState([]);
  useEffect(() => {
    async function getImg() {
      const images = await getAllImages(testId, studentId);
      console.log(images);
      setImgSrc(images);
    }
    getImg();
  }, []);

  return (
    <div style={{ margin: "5px", textAlign: "center" }}>
      {imgSrc && imgSrc.map((i, j) => <img src={i} key={j} />)}
    </div>
  );
};
export default Snapshots;
