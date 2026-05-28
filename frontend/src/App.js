import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

function App() {
  const [leads, setLeads] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    source: "Call",
  });

  const fetchLeads = async () => {
    try {
      const res = await axios.get(
        `${API_BASE_URL}/api/leads`
      );

      setLeads(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const addLead = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        `${API_BASE_URL}/api/leads`,
        formData
      );

      setFormData({
        name: "",
        phone: "",
        source: "Call",
      });

      fetchLeads();
    } catch (error) {
      console.log(error);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await axios.put(
        `${API_BASE_URL}/api/leads/${id}`,
        { status }
      );

      fetchLeads();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteLead = async (id) => {
    try {
      await axios.delete(
        `${API_BASE_URL}/api/leads/${id}`
      );

      fetchLeads();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="app">

      <div className="container">

        <h1>Mini CRM Dashboard</h1>

        <form className="lead-form" onSubmit={addLead}>

          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Enter Phone"
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

          <button type="submit">
            Add Lead
          </button>

        </form>

        <div className="stats">

          <div className="card">
            <h2>{leads.length}</h2>
            <p>Total Leads</p>
          </div>

          <div className="card">
            <h2>
              {
                leads.filter(
                  (lead) => lead.status === "Converted"
                ).length
              }
            </h2>
            <p>Converted</p>
          </div>

        </div>

        <div className="lead-grid">

          {leads.map((lead) => (

            <div className="lead-card" key={lead.id}>

              <h3>{lead.name}</h3>

              <p>
                📞 {lead.phone}
              </p>

              <p>
                📌 {lead.source}
              </p>

              <span className={`status ${lead.status}`}>
                {lead.status}
              </span>

              <select
                value={lead.status}
                onChange={(e) =>
                  updateStatus(
                    lead.id,
                    e.target.value
                  )
                }
              >
                <option>Interested</option>
                <option>Not Interested</option>
                <option>Converted</option>
              </select>

              <button
                className="delete-btn"
                onClick={() =>
                  deleteLead(lead.id)
                }
              >
                Delete
              </button>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default App;