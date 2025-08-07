# INLD Backend – Join Form & Contact Form API

This is the backend part of the **INLD Website Project**, built using **Node.js**, **Express**, and **MongoDB**.

It handles:
- Join Form submissions (volunteer/member registration)
- Contact Form messages

---

## 🔧 Technologies Used

- Node.js
- Express.js
- MongoDB (via Mongoose)
- dotenv
- Thunder Client (for testing)

---

## 📁 Folder Structure

inld_backend/
├── server.js # Main backend logic
├── .env # Environment config (MongoDB URI, port)
├── package.json # Node project setup
├── node_modules/ # Installed dependencies


---

## 🚀 How to Run the Project

### 1. Clone or copy this folder

### 2. Install dependencies
Open terminal inside the project folder and run:
```bash
npm install

How to Run This Project
Clone or create the project folder
Folder name: inld_backend

Open the folder in VS Code

Open terminal inside the folder and run:
npm install

Create a file named .env in the same folder
Add this content to it:
PORT=5000
MONGO_URI=mongodb://localhost:27017/inld_db

(Make sure MongoDB is installed and running on your system)

Start the backend server by running:
node server.js

If everything works, you will see:
✅ MongoDB Connected
🚀 Server running on http://localhost:5000

API Endpoints
POST /api/join

Used for volunteer/member registration

Body should be in JSON format like:

{
"fullName": "Siddaram",
"phone": "9876543210",
"email": "sid@example.com",
"address": "Haryana",
"message": "I want to volunteer"
}

POST /api/contact

Used for general messages/inquiries

Body should be in JSON format like:

{
"name": "Siddaram",
"email": "sid@example.com",
"subject": "Joining Inquiry",
"message": "How can I get involved with INLD?"
}

How to Test the APIs
Open VS Code

Click on the Thunder Client ⚡ icon on the left side

Click "New Request"

Choose POST method

URL should be:
http://localhost:5000/api/join
or
http://localhost:5000/api/contact

Go to the "Body" tab and select "JSON"

Paste the JSON request body

Click Send

You should get a response showing the saved data

Example Success Response
{
"message": "Join form submitted successfully!",
"data": {
"fullName": "Siddaram",
"phone": "9876543210",
"email": "sid@example.com",
...
}
}

Developer Info
Name: Siddaram
Role: Backend Developer
Project: Website for Indian National Lok Dal (INLD)
Responsibility: Build and test backend for Join & Contact form submissions

Status
✅ Project Completed
✅ Both APIs Tested Successfully
✅ Data Stored in MongoDB
✅ Ready to Submit