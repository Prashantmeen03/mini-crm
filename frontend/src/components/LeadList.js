import React from 'react';
import axios from 'axios';

function LeadList({ leads, fetchLeads }) {

  const updateStatus = async (id, status) => {
    await axios.put(`http://localhost:5000/api/leads/${id}`, {
      status
    });

    fetchLeads();
  };

  const deleteLead = async (id) => {
    await axios.delete(`http://localhost:5000/api/leads/${id}`);
    fetchLeads();
  };

  return (
    <div>
      {leads.map((lead) => (
        <div key={lead.id}>
          <h3>{lead.name}</h3>
          <p>{lead.phone}</p>
          <p>{lead.source}</p>
          <p>{lead.status}</p>

          <select
            onChange={(e) =>
              updateStatus(lead.id, e.target.value)
            }
          >
            <option>Interested</option>
            <option>Not Interested</option>
            <option>Converted</option>
          </select>

          <button onClick={() => deleteLead(lead.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default LeadList;
