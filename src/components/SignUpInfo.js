import React from "react";

function SignUpInfo({formData,setFormData}) {
  return (
    <div className='container w-50 mx-auto'>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={formData.email}
            onChange={(e)=>setFormData({...formData,email:e.target.value})}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={formData.password}
            onChange={(e)=>setFormData({...formData,password:e.target.value})}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword2" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword2"
            value={formData.confirmPassword}
            onChange={(e)=>setFormData({...formData,confirmPassword:e.target.value})}
          />
        </div>
      </form>
    </div>
  );
}

export default SignUpInfo;
