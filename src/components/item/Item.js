import React, { useState } from "react";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import "./item.scss";
const Item = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSZPYRCww1RGQzJxZRG2F5XKPyT30FR3O6dPOM719hee14DQC2n"
        alt="movie pic"
      />
      {isHovered && (
        <>
          <video
            src="https://media.istockphoto.com/id/1409495051/video/manufacturing-worker-using-a-steel-machine-in-a-workshop-a-male-engineer-technician-or.mp4?s=mp4-640x640-is&k=20&c=MMyDC9JbxROgaGXqCMBKnGKv2zbk0eBbZnDsmA4PY-4="
            autoPlay
            loop
          />
          <div className="info">
            <div className="icons">
              <PlayArrowIcon className="icon" />
              <AddIcon className="icon" />
              <ThumbUpOffAltIcon className="icon" />
              <ThumbDownOffAltIcon className="icon" />
            </div>
            <div className="info__top">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Glass Onion: A Knives Out Mystery (titled onscreen as simply Glass
              Onion) is a 2022 American mystery film written and directed by
              Rian Johnson
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
};

export default Item;
