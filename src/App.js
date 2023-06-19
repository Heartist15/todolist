import "./App.css"; 
import React from "react";
import LoginPage from "./Pages/LoginPage"; 
import { Route, Routes } from "react-router-dom"; 
import AuthProtectedRoutes from "./Routes/AuthProtected"; // Importing AuthProtectedRoutes component
import TaskListPage from "./Pages/TaskListPage"; 

function App() {
  return (
    <Routes>
      {" "}
      {/* Creating a routing configuration using the Routes component */}
      <Route path="/login" element={<LoginPage />} />{" "}
      {/* Route for the "/login" path, rendering the LoginPage component */}
      <Route element={<AuthProtectedRoutes />}>
        {" "}
        {/* Parent route that wraps AuthProtectedRoutes */}
        <Route index element={<TaskListPage />} />{" "}
        {/* Child route with the "index" path, rendering the TaskListPage component */}
      </Route>
    </Routes>
  );
}

export default App; // Exporting the App component as the default export
