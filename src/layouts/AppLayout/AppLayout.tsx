import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./AppLayout.css";

export default function AppLayout() {
  return (
    <div className="layout">
      <Header />

      <div className="content">
        <Sidebar />
        <main className="page">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
