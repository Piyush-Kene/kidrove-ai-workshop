# Kidrove AI & Robotics Summer Workshop

A full-stack workshop landing page built as part of the Kidrove assignment.

## Features

* Responsive React.js landing page
* Hero section with workshop information
* Workshop details section
* Learning outcomes section
* FAQ accordion
* Registration form with validation
* Loading states and toast notifications
* Express.js REST API
* MongoDB Atlas integration
* Enquiry data storage

## Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* Axios
* React Hook Form
* React Toastify

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose

## API Endpoint

### POST /api/enquiry

Accepts:

```json
{
  "name": "Piyush",
  "email": "piyush@gmail.com",
  "phone": "9876543210"
}
```

Returns:

```json
{
  "success": true,
  "message": "Registration submitted successfully"
}
```

## Installation

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
npm run dev
```

## Environment Variables

Backend:

```env
MONGO_URI=your_mongodb_connection_string
PORT=PORTNUMBER
```

Frontend:

```env
VITE_API_URL=http://localhost:PORTNUMBER
```

## Author

Piyush Kene
