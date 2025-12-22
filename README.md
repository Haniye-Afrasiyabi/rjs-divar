# Divar - Ad Management Platform

A web platform for posting, managing, and browsing ads with features like categorization, image uploads, and user-specific ad management.

---

## Features

- **Ad Management**

  - Create, view, and delete user ads
  - Display ads on the main page and user dashboard
  - Categorize ads and filter by category

- **Forms & File Upload**

  - User-friendly ad submission form
  - Upload images for each ad
  - Send form data and files to the backend using `FormData`

- **UI & Responsiveness**

  - Loading indicators for async operations
  - Success and error notifications with `react-hot-toast`
  - Responsive design using Tailwind CSS
  - Persian date and number formatting

- **Authentication**

  - Login via mobile number and OTP code
  - Store `accessToken` and `refreshToken` in cookies
  - Access control based on login status

- **Data Management with React Query**

  - Cache and manage server data with `react-query`
  - Automatically refresh ad lists after creating or deleting an ad

- **Sidebar & Categories**

  - Display categories in a sidebar
  - Filter ads based on category selection

---

## Technologies Used

- **Frontend**

  - React
  - Vite
  - Tailwind CSS
  - React Query (`@tanstack/react-query`)
  - react-hot-toast
  - react-hook-form
  - react-input-otp

- **Backend (API)**

  - Axios for server requests
  - JWT-based authentication
  - Cookies for token storage

---

## Project Structure

```
src/
 ├─ app/          # Main application entry
 ├─ components/   # UI components
 ├─ services/     # API requests
 ├─ utils/        # Helper functions (e.g., Cookie, Number formatting)
 └─ styles/       # Styles and Tailwind configuration
```
