import React, { useState } from "react";
import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./OtherInfo";

function Form() {
  const [page, setPage] = useState(0);
  const formTitles = ["Sign Up", "Personal Info", "Other"];
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    userName: "",
    nationality: "",
    other: "",
  });
  const displayPage = () => {
    if (page === 0) {
      return <SignUpInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <OtherInfo formData={formData} setFormData={setFormData} />;
    }
  };
  return (
    <div className="form">
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: page === 0 ? "0%" : page === 1 ? "50%" : "100%" }}
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div className="form-container">
        <div className="header">
          <h2>{formTitles[page]}</h2>
        </div>
        <div className="body">{displayPage()}</div>
        <div className="footer">
          <button
            className="btn btn-info mr-5"
            disabled={page === 0}
            onClick={() => setPage(page - 1)}
          >
            Prev
          </button>
          <button
            className="btn btn-info ml-5"
            disabled={page === formTitles.length - 1}
            onClick={() => {
                if (page === formTitles.length - 1) {
                  alert("FORM SUBMITTED");
                  console.log(formData);
                } else {
                  setPage((currPage) => currPage + 1);
                }
              }}
          >
            {page===formTitles.length-1?'Submit':'Next'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
