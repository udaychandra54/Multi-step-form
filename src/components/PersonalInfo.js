import React from 'react'

function PersonalInfo({formData,setFormData}) {
    return (
        <div className='container w-50 mx-auto'>
             <form>
        <div className="mb-3">
          <label htmlFor="first name" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="f-name"
            aria-describedby="emailHelp"
            value={formData.firstName}
            onChange={(e)=>setFormData({...formData,firstName:e.target.value})}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="l-name" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="l-name"
            value={formData.lastName}
            onChange={(e)=>setFormData({...formData,lastName:e.target.value})}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="u-name" className="form-label">
            User Name
          </label>
          <input
            type="text"
            className="form-control"
            id="u-name"
            value={formData.userName}
            onChange={(e)=>setFormData({...formData,userName:e.target.value})}
          />
        </div>
      </form>
        </div>
    )
}

export default PersonalInfo
