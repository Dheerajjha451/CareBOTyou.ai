import React from "react";
import Card from "../../shared/Uicomponents/Card";
import "./Symptoms.css";
function Symptoms(props) {
  return (
    <div className="symptoms-section">
      <div className="symptomSection">
        <div className="symptoms">
          <h2 className="secondary-heading">
            Recognizing Signs of Poor Mental Health in Children
          </h2>
          <div className="content-box">
            {props.symptoms.map((symptom) => {
              return (
                <Card className = "card">
                  <div className="image-box">
                    <img src={symptom.img} className="image_sympton" />
                  </div>
                  <div className="text-box">
                    <p className="symptom-text"> {symptom.text} </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Symptoms;
