import React from "react";

function OtherInfo({ formData, setFormData }) {
  return (
    <div className="container w-50 mx-auto other-container">
      <form action="">
        <div className="mb-3">
          <label htmlFor="nationality" className="form-label">
            Nationality
          </label>
          <input type="text" className="form-control" id="nationality"  value={formData.nationality}
            onChange={(e)=>setFormData({...formData,nationality:e.target.value})}/>
        </div>
        <div className="mb-3">
          <label htmlFor="other" className="form-label">
            Others
          </label>
          <input type="text" className="form-control" id="other"  value={formData.other}
            onChange={(e)=>setFormData({...formData,other:e.target.value})}/>
        </div>
      </form>
    </div>
  );
}

export default OtherInfo;
