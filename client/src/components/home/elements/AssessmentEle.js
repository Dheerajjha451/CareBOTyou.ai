import React from "react";
import Button from "../../shared/Uicomponents/Button";
import img1 from "../../images/assessment-img.png";
import InfoComp from "./InfoComp";
import "./AssessmentEle.css";
function AssessmentEle() {
  return (
    <>
    <div className="assessment-section">
      <div lassName="assessmentsection">
        <div className="assessment">
          <div className="image-box-asses">
            <img src={img1} className="assessment-img" />
          </div>
          <div className="text-box-asses">
            <h2 className="secondary-heading assess-heading">
              Unlocking Your Self -Assessment Journey
            </h2>
            <p className="assess-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur
            </p>
            <Button className = "assess-btn"> Take Test Now </Button>
          </div>
        </div>
      </div>
    </div>
    <InfoComp />
    </>
  );
}

export default AssessmentEle;
