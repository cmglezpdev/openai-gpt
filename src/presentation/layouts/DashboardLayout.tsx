import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <>
      <div>Dashboard</div>
      <Outlet />
    </>
  )
}
