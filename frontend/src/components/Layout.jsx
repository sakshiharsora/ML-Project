import { NavLink, Outlet } from "react-router-dom"
import {
  ShieldAlert,
  LayoutDashboard,
  FileCheck2,
  Cpu,
  Database,
  GitMerge,
  BarChart4,
  Workflow,
  Sparkles,
  Server,
  Terminal,
  UserCheck
} from "lucide-react"

function Layout() {
  return (
    <div className="app-layout">

      {/* Left Navigation Sidebar */}
      <aside className="sidebar">

        {/* Brand Header */}
        <div className="brand">
          <div className="brand-logo-wrapper">
            <ShieldAlert size={26} />
          </div>
          <div>
            <h2 className="brand-title">VeriClaim AI</h2>
            <p className="brand-subtitle">Fraud Intelligence Engine</p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="sidebar-nav">

          <p className="nav-label">OPERATIONS</p>

          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            <LayoutDashboard size={18} />
            <span>Risk Dashboard</span>
          </NavLink>

          <NavLink
            to="/prediction"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            <FileCheck2 size={18} />
            <span>New Risk Audit</span>
          </NavLink>


          <p className="nav-label">MODEL TELEMETRY</p>

          <NavLink
            to="/project-overview"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            <Cpu size={18} />
            <span>System Architecture</span>
          </NavLink>

          <NavLink
            to="/dataset"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            <Database size={18} />
            <span>Dataset Inspector</span>
          </NavLink>

          <NavLink
            to="/data-processing"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            <GitMerge size={18} />
            <span>Feature Pipeline</span>
          </NavLink>

          <NavLink
            to="/ml-model"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            <Terminal size={18} />
            <span>Model Engine</span>
          </NavLink>

          <NavLink
            to="/model-evaluation"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            <BarChart4 size={18} />
            <span>Evaluation Metrics</span>
          </NavLink>

          <NavLink
            to="/how-it-works"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            <Workflow size={18} />
            <span>Execution Flow</span>
          </NavLink>

        </nav>


        {/* Sidebar Footer System Monitor */}
        <div className="sidebar-footer">
          <div className="telemetry-card">
            <div className="pulse-indicator">
              <div className="pulse-dot"></div>
              <div className="pulse-ring"></div>
            </div>
            <div>
              <p className="telemetry-title">REST API Active</p>
              <p className="telemetry-sub">http://127.0.0.1:8000</p>
            </div>
          </div>
        </div>

      </aside>


      {/* Main Right Content Section */}
      <div className="main-wrapper">

        {/* Top Floating Glass Header */}
        <header className="top-header">
          <div className="header-left">
            <span className="environment-badge">
              <Sparkles size={13} />
              Enterprise AI v2.4
            </span>
          </div>

          <div className="header-right">
            <div className="header-stat">
              <Server size={14} />
              <span>Model: RandomForest-100</span>
            </div>

            <div className="header-stat">
              <UserCheck size={14} />
              <span>Role: Lead Risk Auditor</span>
            </div>
          </div>
        </header>


        {/* Dynamic Route Content */}
        <main className="main-content">
          <Outlet />
        </main>

      </div>

    </div>
  )
}

export default Layout