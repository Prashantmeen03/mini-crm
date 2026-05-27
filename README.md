# Mini CRM

A simple Customer Relationship Management (CRM) application built with **React**, **Node.js**, **Express**, and **PostgreSQL**. 

## 🌍 Live Demo
* **Frontend:** [Link to your deployed frontend]
* **Backend API:** [Link to your deployed backend]

This application allows users to manage their sales leads efficiently by providing features to add new leads, view a list of all leads, update the status of existing leads, and delete leads.

## 🚀 Technologies Used
* **Frontend:** React, Vanilla CSS
* **Backend:** Node.js, Express.js
* **Database:** PostgreSQL
* **Other Tools:** Axios, CORS, pg (node-postgres)

## 📦 Prerequisites
Before you begin, ensure you have the following installed on your machine:
* [Node.js](https://nodejs.org/) (v14 or higher)
* [PostgreSQL](https://www.postgresql.org/)

## 🛠️ Installation and Setup

### 1. Database Setup
First, open your PostgreSQL terminal (`psql -U postgres`) and run the following commands to create the database and the required table:

```sql
CREATE DATABASE "mini crm";
\c "mini crm"

CREATE TABLE leads (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  source VARCHAR(50) NOT NULL,
  status VARCHAR(50) DEFAULT 'New'
);
```
*(Make sure to update the `backend/db.js` file if your Postgres password differs from the one hardcoded there).*

### 2. Backend Setup
Open a terminal, navigate to the `backend` directory, install dependencies, and start the server:

```bash
cd backend
npm install
npm start
```
The backend API will run on `http://localhost:5000`.

### 3. Frontend Setup
Open a new terminal, navigate to the `frontend` directory, install dependencies, and start the React application:

```bash
cd frontend
npm install
npm start
```
The frontend application will run on `http://localhost:3000`.

## 📡 API Endpoints

The backend server exposes the following RESTful API endpoints:

| Method | Endpoint         | Description                   |
|--------|------------------|-------------------------------|
| POST   | `/api/leads`     | Add a new lead                |
| GET    | `/api/leads`     | Get all leads                 |
| PUT    | `/api/leads/:id` | Update a lead's status by ID  |
| DELETE | `/api/leads/:id` | Delete a lead by ID           |

## 🎨 Features
* **Dynamic Lead Form:** Add leads with a Name, Phone Number, and Lead Source (Call, WhatsApp, Field).
* **Real-time Stats:** Instantly view the total number of leads and the number of converted leads.
* **Status Tracking:** Easily update the status of a lead to *Interested*, *Not Interested*, or *Converted*.

---
*Created as a full-stack learning project.*
