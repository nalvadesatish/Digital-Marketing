import React, { useState } from 'react';
import axios from 'axios';
const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
    service: ""
  });

  const InputEvent = (event) => {
    const {  name, value } = event.target;
    setData({
      ...data,
       [name]: value,
    });
  };
  


    const formSubmit = async (e) => {
      e.preventDefault();

      const{fullname,phone,email,msg,service}=data;
    
      try {
        if (email &&fullname && phone && service && msg) {
          await axios.post('http://localhost:9002/submit', data)
          .then(res=>console.log(res));
          alert(`submitted successfully`)
        } else {
          throw new Error('All fields are required');
        }
      } catch (error) {
        alert(error.message);
      }
    
  };

  return (
    <>
      <section>
        <div className='my-5'>
          <h1 className='text-center'>Contact Us</h1>
        </div>
        <div className='container contact_div'>
          <div className='row'>
            <div className='col-md-6 col-10 mx-auto'>
              <form onSubmit={formSubmit}>
                <div className="form-group">
                  <label htmlFor="exampleFormControlInput1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    autoComplete='off'
                    name="email"
                    value={data.email}
                    onChange={InputEvent}
                    placeholder="name@example.com" 
                  />
                  </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlInput1">Name</label>
                  <input type="text" className="form-control" id="exampleFormControlInput2" autoComplete='off' name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter Your Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlInput1">Phone Number</label>
                  <input type="tel" className="form-control" id="exampleFormControlInput3" autoComplete='off' name="phone" value={data.phone} onChange={InputEvent} placeholder="Enter Your Contact Number" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlSelect1">Select the Service</label>
                  <select className="form-control" id="exampleFormControlSelect4" autoComplete='off' name="service" value={data.service} onChange={InputEvent}>
                    <option value="" disabled>Select Option</option>
                    <option value="SEO">SEO</option>
                    <option value="SMM">SMM</option>
                    <option value="Outsourcing">Outsourcing</option>
                    <option value="Content Writing">Content Writing</option>
                    <option value="Copy Writing">Copy Writing</option>
                    <option value="Youtube SEO">Youtube SEO</option>
                  </select>

                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea5">Message</label>
                  <textarea className="form-control" id="exampleFormControlTextarea5" autoComplete='off' name="msg" value={data.msg} onChange={InputEvent} rows="3"></textarea>
                </div>
                <div className='form-group my-2'>
                  <button type="submit" className="btn btn-outline-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
