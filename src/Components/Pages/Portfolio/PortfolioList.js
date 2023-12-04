import React from "react";
import PortfolioLink from "./PortfolioLink.js";

const PortfolioList = ({ examples }) => {
  let listNew = [];
  let rowWidth = 0;

  listNew = examples.map((example) => {
    return {
      name: example.data.name,
      id: example.uid,
      angle: example.data.angle,
      startGradient: example.data.startgradient,
      endGradient: example.data.endgradient,
      sizeMinimum: example.data.sizeminimum,
      thumbnail: example.data.thumbnail_image,
    };
  });

  // if there is an orphan example, make it the full width
  if (listNew.length > 0) {
    if (Number(listNew[listNew.length - 1].sizeMinimum) === rowWidth) {
      listNew[listNew.length - 1].sizeMinimum = "12";
    }
  }
  return (
    <div className="port-list-back">
      <div className="container no-select">
        <div className="row no-margin">
          {listNew.map((example) => {
            return (
              <PortfolioLink
                key={example.id}
                name={example.name}
                id={example.id}
                angle={example.angle}
                gradientStart={example.startGradient}
                gradientEnd={example.endGradient}
                md={example.sizeMinimum}
                thumbnail={example.thumbnail}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PortfolioList;
