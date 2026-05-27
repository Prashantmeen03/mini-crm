import React, { useState } from 'react';
import axios from 'axios';

function LeadForm({ fetchLeads }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    source: 'Call'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post('http://localhost:5000/api/leads', formData);

    setFormData({
      name: '',
      phone: '',
      source: 'Call'
    });

    fetchLeads();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />

      <select
        name="source"
        value={formData.source}
        onChange={handleChange}
      >
        <option>Call</option>
        <option>WhatsApp</option>
        <option>Field</option>
      </select>

      <button type="submit">Add Lead</button>
    </form>
  );
}

export default LeadForm;