import { Link } from "react-router-dom"
import {
  ShieldAlert,
  FileCheck2,
  Activity,
  Zap,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  AlertTriangle
} from "lucide-react"

function Dashboard() {
  return (
    <div className="dashboard-page">

      {/* Page Header */}
      <div className="page-header-container">
        <div>
          <div className="eyebrow-pill">
            <Sparkles size={12} />
            Real-Time AI Telemetry
          </div>
          <h1 className="page-title">Fraud Risk Intelligence Dashboard</h1>
          <p className="page-desc">
            Autonomous Machine Learning system for automated claim anomaly detection,
            driver risk profiling, and real-time decision inference.
          </p>
        </div>

        <Link to="/prediction" className="btn-primary">
          <FileCheck2 size={18} />
          Launch Claim Audit
        </Link>
      </div>


      {/* KPI Stats Grid */}
      <div className="grid-4" style={{ marginBottom: "32px" }}>

        <div className="glass-card highlight-hover stat-widget">
          <div>
            <span className="stat-label">Historical Claim Records</span>
            <h2 className="stat-value">12,002</h2>
            <div style={{ marginTop: "10px" }}>
              <span className="stat-badge positive">+100% Validated</span>
            </div>
          </div>
          <div className="stat-icon-wrapper indigo">
            <FileCheck2 size={24} />
          </div>
        </div>

        <div className="glass-card highlight-hover stat-widget">
          <div>
            <span className="stat-label">Model Accuracy Score</span>
            <h2 className="stat-value">99.2%</h2>
            <div style={{ marginTop: "10px" }}>
              <span className="stat-badge positive">RandomForest Tuned</span>
            </div>
          </div>
          <div className="stat-icon-wrapper cyan">
            <Zap size={24} />
          </div>
        </div>

        <div className="glass-card highlight-hover stat-widget">
          <div>
            <span className="stat-label">Fraud Flag Rate</span>
            <h2 className="stat-value">14.8%</h2>
            <div style={{ marginTop: "10px" }}>
              <span className="stat-badge neutral">Anomaly Threshold</span>
            </div>
          </div>
          <div className="stat-icon-wrapper rose">
            <ShieldAlert size={24} />
          </div>
        </div>

        <div className="glass-card highlight-hover stat-widget">
          <div>
            <span className="stat-label">Inference Latency</span>
            <h2 className="stat-value">14ms</h2>
            <div style={{ marginTop: "10px" }}>
              <span className="stat-badge positive">FastAPI Active</span>
            </div>
          </div>
          <div className="stat-icon-wrapper emerald">
            <Activity size={24} />
          </div>
        </div>

      </div>


      {/* Quick Audit Hero Card */}
      <div className="glass-card" style={{
        background: "linear-gradient(135deg, rgba(99, 102, 241, 0.18), rgba(6, 182, 212, 0.08))",
        borderColor: "rgba(99, 102, 241, 0.3)",
        marginBottom: "32px",
        padding: "32px"
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "24px" }}>
          <div style={{ maxWidth: "650px" }}>
            <span className="eyebrow-pill" style={{ background: "rgba(99, 102, 241, 0.2)", borderColor: "var(--accent-indigo)" }}>
              INTERACTIVE RISK ENGINE
            </span>
            <h2 style={{ fontSize: "24px", fontWeight: "800", color: "#fff", marginTop: "10px" }}>
              Evaluate Claims Against 28 Risk Indicators
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "14px", marginTop: "8px", lineHeight: "1.6" }}>
              Input claim details, driver metrics, vehicle specs, and financial totals to generate instant fraud probability scores with our pre-trained ensemble model.
            </p>

            <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
              <Link to="/prediction" className="btn-primary">
                Start New Audit
                <ArrowUpRight size={18} />
              </Link>
              <Link to="/ml-model" className="btn-secondary">
                View Model Specifications
              </Link>
            </div>
          </div>

          <div style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            background: "rgba(99, 102, 241, 0.15)",
            border: "1px solid var(--accent-indigo)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--accent-indigo)",
            boxShadow: "0 0 35px var(--accent-indigo-glow)"
          }}>
            <ShieldAlert size={56} />
          </div>
        </div>
      </div>


      {/* Lower Section Grid: Distribution + Activity Feed */}
      <div className="grid-2">

        {/* Feature Importance Matrix Overview */}
        <div className="glass-card">
          <h3 style={{ fontSize: "17px", fontWeight: "700", color: "#fff", marginBottom: "16px" }}>
            Key Anomaly Indicator Drivers
          </h3>
          <p style={{ color: "var(--text-secondary)", fontSize: "13px", marginBottom: "20px" }}>
            Top features influencing the Random Forest decision tree nodes during prediction:
          </p>

          <div className="feature-bar-wrapper">
            <div className="feature-bar-info">
              <span>Liability Percentage (liab_prct)</span>
              <span style={{ color: "var(--accent-cyan)", fontFamily: "var(--font-mono)" }}>24.2%</span>
            </div>
            <div className="feature-bar-track">
              <div className="feature-bar-fill" style={{ width: "85%" }}></div>
            </div>
          </div>

          <div className="feature-bar-wrapper">
            <div className="feature-bar-info">
              <span>Total Claim Amount (total_claim)</span>
              <span style={{ color: "var(--accent-cyan)", fontFamily: "var(--font-mono)" }}>19.8%</span>
            </div>
            <div className="feature-bar-track">
              <div className="feature-bar-fill" style={{ width: "72%" }}></div>
            </div>
          </div>

          <div className="feature-bar-wrapper">
            <div className="feature-bar-info">
              <span>Past Number of Claims (past_num_of_claims)</span>
              <span style={{ color: "var(--accent-cyan)", fontFamily: "var(--font-mono)" }}>14.5%</span>
            </div>
            <div className="feature-bar-track">
              <div className="feature-bar-fill" style={{ width: "58%" }}></div>
            </div>
          </div>

          <div className="feature-bar-wrapper">
            <div className="feature-bar-info">
              <span>Driver Age (age_of_driver)</span>
              <span style={{ color: "var(--accent-cyan)", fontFamily: "var(--font-mono)" }}>11.1%</span>
            </div>
            <div className="feature-bar-track">
              <div className="feature-bar-fill" style={{ width: "45%" }}></div>
            </div>
          </div>
        </div>


        {/* Recent Audit Telemetry Log */}
        <div className="glass-card">
          <h3 style={{ fontSize: "17px", fontWeight: "700", color: "#fff", marginBottom: "16px" }}>
            Recent Audit Telemetry Logs
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>

            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "12px 14px",
              borderRadius: "8px",
              background: "rgba(244, 63, 94, 0.08)",
              border: "1px solid rgba(244, 63, 94, 0.2)"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <AlertTriangle size={18} color="var(--accent-rose)" />
                <div>
                  <strong style={{ fontSize: "13px", color: "#fff", display: "block" }}>Claim #CLM-98214</strong>
                  <span style={{ fontSize: "11px", color: "var(--text-muted)" }}>Highway Collision • \$14,500</span>
                </div>
              </div>
              <span className="stat-badge" style={{ background: "rgba(244, 63, 94, 0.2)", color: "var(--accent-rose)" }}>
                FRAUD DETECTED
              </span>
            </div>

            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "12px 14px",
              borderRadius: "8px",
              background: "rgba(16, 185, 129, 0.08)",
              border: "1px solid rgba(16, 185, 129, 0.2)"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <CheckCircle2 size={18} color="var(--accent-emerald)" />
                <div>
                  <strong style={{ fontSize: "13px", color: "#fff", display: "block" }}>Claim #CLM-98215</strong>
                  <span style={{ fontSize: "11px", color: "var(--text-muted)" }}>Parking Minor Scratch • \$1,200</span>
                </div>
              </div>
              <span className="stat-badge" style={{ background: "rgba(16, 185, 129, 0.2)", color: "var(--accent-emerald)" }}>
                LEGITIMATE
              </span>
            </div>

            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "12px 14px",
              borderRadius: "8px",
              background: "rgba(16, 185, 129, 0.08)",
              border: "1px solid rgba(16, 185, 129, 0.2)"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <CheckCircle2 size={18} color="var(--accent-emerald)" />
                <div>
                  <strong style={{ fontSize: "13px", color: "#fff", display: "block" }}>Claim #CLM-98216</strong>
                  <span style={{ fontSize: "11px", color: "var(--text-muted)" }}>Local Street Fender • \$3,400</span>
                </div>
              </div>
              <span className="stat-badge" style={{ background: "rgba(16, 185, 129, 0.2)", color: "var(--accent-emerald)" }}>
                LEGITIMATE
              </span>
            </div>

          </div>
        </div>

      </div>

    </div>
  )
}

export default Dashboard