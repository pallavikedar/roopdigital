"use client"

import { useState } from "react"
import AdminLogin from "../../components/admin/AdminLogin"
import AdminDashboard from "../../components/admin/AdminDashboard"

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {!isLoggedIn ? (
        <AdminLogin onLogin={handleLogin} />
      ) : (
        <div className="w-full max-w-2xl">
          <div className="flex justify-between items-center mb-4 bg-white p-4 shadow rounded">
            <h1 className="text-xl font-bold">Admin Dashboard</h1>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          </div>
          <AdminDashboard />
        </div>
      )}
    </div>
  )
}
