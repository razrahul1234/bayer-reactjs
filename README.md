# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# 🌟 Bayer Frontend Application

## 📌 Overview

This is a ReactJS-based frontend application developed for Bayer. The application provides user authentication, a public homepage, and a secure dashboard where users can view patient details, including preventive care, wellness goals, and health tips.

## Features

### Authentication
- **Login Page**
- **Registration Page**

### Common Pages
- **Home Page** (accessible without login)

### Protected Pages
- **Dashboard** (accessible after login)
  - Preventive Cares
  - Wellness Goals
  - Health Tips

### API Integration
- User Authentication (Login, Registration)
- Wellness Goals
- Preventive Care
- Health Tips

### State Management
- Implemented using **@reduxjs/toolkit**

### UI Components
- Created using **React Material UI**

## Tech Stack

- **ReactJS** - Frontend framework
- **Redux Toolkit** - State management
- **React Material UI** - UI components
- **React Router** - Navigation
- **Axios / Fetch API** - API calls

## Folder Structure

```
📦 bayer-frontend
├── 📂 src
│   ├── 📂 components       # Reusable components
│   ├── 📂 pages            # Page components (Login, Register, Dashboard, etc.)
│   ├── 📂 redux            # Redux store, slices, and actions
│   ├── 📂 services         # API calls
│   ├── 📂 styles           # CSS / MUI styles
│   ├── 📜 App.js           # Main React component
│   ├── 📜 index.js         # Entry point
│   ├── 📜 routes.js        # Route definitions
├── 📜 package.json         # Dependencies and scripts
├── 📜 README.md            # Project documentation
```

## Installation & Setup

### Prerequisites
- **Node.js (>=16.x)**
- **npm or yarn**

### Steps

#### Clone the Repository
```sh
git clone https://github.com/your-repo/bayer-frontend.git
cd bayer-frontend
```

#### Install Dependencies
```sh
npm install  # or yarn install
```

#### Configure Environment Variables
Create a `.env` file in the root directory and add API endpoints:
```
REACT_APP_API_BASE_URL=https://api.bayer.com
```

#### Run the Development Server
```sh
npm start  # or yarn start
```

## API Endpoints

| Endpoint             | Method | Description          |
|----------------------|--------|----------------------|
| `/api/login`        | POST   | User login          |
| `/api/register`     | POST   | User registration   |
| `/api/wellness-goals` | GET  | Fetch wellness goals |
| `/api/preventive-care` | GET  | Fetch preventive care |
| `/api/health-tips`  | GET   | Fetch health tips   |

## State Management (Redux Toolkit)

Used **@reduxjs/toolkit** for managing authentication and patient details.

### Example structure:
```
📂 redux
├── 📜 store.js       # Store configuration
├── 📂 slices
│   ├── 📜 authSlice.js         # User authentication slice
│   ├── 📜 wellnessSlice.js     # Wellness goals slice
│   ├── 📜 preventiveSlice.js   # Preventive care slice
│   ├── 📜 healthTipsSlice.js   # Health tips slice
```

## UI Framework

Used **React Material UI** to design an interactive and responsive dashboard.

Components like **Card, Table, Grid, Button, Typography, and Drawer** were used for UI layout.

## Contributing

Feel free to contribute by creating pull requests. Follow these steps:

1. Fork the repository
2. Create a new branch (`feature-xyz`)
3. Commit your changes
4. Push to your fork and create a pull request

![Screenshot 2025-03-02 115139](https://github.com/user-attachments/assets/44247292-f381-4e99-9e3d-3a3c7650bddb)


![Screenshot 2025-03-02 115051](https://github.com/user-attachments/assets/c8652962-0dbe-4bb9-8662-bf8c12b2baa3)


## License

This project is licensed under the **MIT License**.

