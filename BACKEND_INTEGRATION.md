# Backend Integration Guide for INLD Website

## Overview
The JoinPage component is now ready for backend integration with the following features:

## Features Implemented

### 1. Form State Management
- Complete form state handling with React hooks
- Real-time validation
- Error handling and display
- Loading states during submission

### 2. API Integration Ready
- Centralized API configuration in `src/utils/api.js`
- Environment-based URL configuration
- Error handling for network requests
- Standardized request/response format

### 3. Form Validation
- Client-side validation for required fields
- Email format validation
- Phone number format validation
- Real-time error display

### 4. User Experience Enhancements
- Visual feedback for selected registration category
- Loading states during form submission
- Success/error messages
- Disabled state for submit button during processing

## Backend Requirements

### API Endpoint
The frontend expects a POST endpoint at `/api/join` that accepts the following JSON payload:

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "phone": "+91 9876543210",
  "age": "25",
  "address": "Complete address with city, state, PIN",
  "constituency": "Gurgaon",
  "profession": "Software Engineer",
  "skills": "Web development, organizing events",
  "category": "Ground Operations",
  "agreeTerms": true,
  "receiveUpdates": true,
  "timestamp": "2025-08-06T10:30:00.000Z",
  "source": "website"
}
```

### Expected Response Format
The backend should respond with:

**Success Response:**
```json
{
  "success": true,
  "message": "Registration successful",
  "data": {
    "id": "user_id",
    "confirmationId": "CONF123456"
  }
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Error description",
  "errors": {
    "email": "Email already exists",
    "phone": "Invalid phone number"
  }
}
```

## Configuration

### 1. Environment Variables
Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Update the API URL in `.env`:
```
REACT_APP_API_URL=http://localhost:5000
```

### 2. API Configuration
The API configuration is centralized in `src/utils/api.js`. Update the endpoints as needed:

```javascript
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const API_ENDPOINTS = {
  JOIN: `${API_BASE_URL}/api/join`,
  // Add other endpoints as needed
};
```

## Backend Implementation Suggestions

### 1. Database Schema
Consider this schema for the registration table:

```sql
CREATE TABLE registrations (
  id INT PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(20) NOT NULL,
  age INT,
  address TEXT NOT NULL,
  constituency VARCHAR(100) NOT NULL,
  profession VARCHAR(100),
  skills TEXT,
  category ENUM('Ground Operations', 'Party Membership', 'Support & Advocacy', 'Youth Initiatives') NOT NULL,
  agree_terms BOOLEAN NOT NULL DEFAULT FALSE,
  receive_updates BOOLEAN DEFAULT FALSE,
  source VARCHAR(50) DEFAULT 'website',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### 2. Validation
Implement server-side validation for:
- Required fields
- Email format and uniqueness
- Phone number format
- Constituency validation against Haryana constituencies

### 3. Email Notifications
After successful registration, send:
- Confirmation email to the user
- Notification to admin/coordinator

### 4. Security Considerations
- Input sanitization
- Rate limiting for form submissions
- CORS configuration for frontend domain
- Data encryption for sensitive information

## Testing the Integration

### 1. Start the Frontend
```bash
npm start
```

### 2. Test Form Submission
1. Navigate to `/join`
2. Select a registration category
3. Fill out the form
4. Submit and verify API call in browser dev tools

### 3. Error Handling
Test various scenarios:
- Network errors
- Validation errors
- Server errors

## Development Workflow

1. **Frontend Development**: Form works with mock data
2. **API Contract**: Agree on request/response format
3. **Backend Implementation**: Create the API endpoint
4. **Integration Testing**: Test end-to-end functionality
5. **Production Deployment**: Update environment variables

## Additional Features to Consider

### 1. File Upload
For future enhancements, consider adding:
- Profile photo upload
- Document verification
- Resume/CV upload

### 2. Multi-step Form
Break the form into steps:
- Personal Information
- Address & Constituency
- Interests & Skills
- Confirmation

### 3. Dashboard
Create a user dashboard for:
- Registration status
- Event notifications
- Profile management

## Support

For questions about the frontend implementation, check:
- Component code in `src/pages/JoinPage.jsx`
- Styling in `src/styles/JoinPage.css`
- API utilities in `src/utils/api.js`
