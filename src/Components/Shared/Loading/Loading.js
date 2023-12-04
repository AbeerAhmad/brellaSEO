import React from "react";
import './loadingAnimation.css';
const Loading = () => {
  return (
                  <div className="row justify-content-center">
                  <div className="col-12  p-3 text-center">
                    <div className="lds-ellipsis">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                </div>
  )
};
export default Loading;