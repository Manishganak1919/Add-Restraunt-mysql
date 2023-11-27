
import { useState } from "react";
import './Restraunt.css'


const Addrestraunt = ({ addRestaurant }) => {
    const [formData, setFormData] = useState({
      name: '',
      address: '',
      contactNumber: '',
      imageUrl: '',
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      addRestaurant(formData);
     
      setFormData({ name: '', address: '', contactNumber: '', imageUrl: '' });
    };
  
    return (
      <form onSubmit={handleSubmit} className="form">
        <label className="form-title">
          Name:
          <input className="input-container" type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <br />
        <label className="form-title">
          Address:
          <input  className="input-container" type="text" name="address" value={formData.address} onChange={handleChange} required />
        </label>
        <br />
        <label className="form-title">
          Contact Number:
          <input className="input-container" type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />
        </label>
        <br />
        <label className="form-title">
          Image URL:
          <input className="input-container" type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} required />
        </label>
        <br />
        <button type="submit" className="btn">Add Restaurant</button>
      </form>
    );
  };
  
  export default Addrestraunt;
  