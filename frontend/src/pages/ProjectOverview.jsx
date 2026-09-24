import {
  ShieldAlert,
  Database,
  BrainCircuit,
  Server,
  Users,
  Car,
  FileText,
  DollarSign,
  MapPin,
  Workflow,
  Cpu,
  Layers,
  Sparkles
} from "lucide-react"

import InfoCard from "../components/InfoCard"
import SectionHeader from "../components/SectionHeader"
import StatCard from "../components/StatCard"

function ProjectOverview() {
  return (
    <div className="info-page">

      {/* Page Header */}
      <SectionHeader
        eyebrow="SYSTEM ARCHITECTURE & BLUEPRINT"
        title="VeriClaim AI Platform Overview"
        description="Comprehensive architecture analysis of the Machine Learning fraud classification suite, REST inference engine, and telemetry pipelines."
      />


      {/* Project Statistics */}
      <section className="grid-4" style={{ marginBottom: "32px" }}>

        <StatCard
          icon={<Database size={22} />}
          value="12,002"
          label="Telemetry Records"
        />

        <StatCard
          icon={<BrainCircuit size={22} />}
          value="RandomForest-100"
          label="Inference Classifier"
        />

        <StatCard
          icon={<Server size={22} />}
          value="FastAPI v0.110"
          label="REST Prediction Engine"
        />

        <StatCard
          icon={<ShieldAlert size={22} />}
          value="Fraud / Clean"
          label="Binary Decision Schema"
        />

      </section>


      {/* Project Objective */}
      <InfoCard
        icon={<ShieldAlert size={22} />}
        title="Engine Core Mission & Objectives"
        subtitle="Automated anomaly profiling and risk quantification"
      >

        <p style={{ marginBottom: "12px" }}>
          <strong>VeriClaim AI</strong> is an enterprise-grade fraud intelligence platform engineered to detect subtle anomaly patterns within insurance claims. By assessing 28 multi-dimensional feature variables—ranging from driver demography to vehicle specs and financial liability ratios—the system yields instantaneous risk predictions.
        </p>

        <p>
          The platform operates on a decoupled microservice architecture, pairing an optimized **Scikit-Learn Random Forest Classifier** served via **FastAPI** with an intuitive **React 19** telemetry workbench.
        </p>

      </InfoCard>


      {/* System Overview */}
      <InfoCard
        icon={<Workflow size={22} />}
        title="Microservice Component Topology"
        subtitle="Decoupled end-to-end processing pipeline"
      >

        <div className="grid-2" style={{ marginTop: "16px" }}>

          <div style={{ padding: "16px", background: "rgba(255,255,255,0.03)", borderRadius: "12px", border: "1px solid var(--border-light)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px", color: "var(--accent-indigo)" }}>
              <Database size={20} />
              <strong style={{ fontSize: "15px", color: "#fff" }}>Historical Claims Dataset</strong>
            </div>
            <p style={{ fontSize: "13px", color: "var(--text-secondary)" }}>
              12,002 claims featuring driver demographics, incident telemetry, and financial totals sanitized through automated ETL pipelines.
            </p>
          </div>

          <div style={{ padding: "16px", background: "rgba(255,255,255,0.03)", borderRadius: "12px", border: "1px solid var(--border-light)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px", color: "var(--accent-cyan)" }}>
              <BrainCircuit size={20} />
              <strong style={{ fontSize: "15px", color: "#fff" }}>Machine Learning Engine</strong>
            </div>
            <p style={{ fontSize: "13px", color: "var(--text-secondary)" }}>
              100-estimator Random Forest ensemble trained on dummy-encoded features with automated reindexing against target column schemas.
            </p>
          </div>

          <div style={{ padding: "16px", background: "rgba(255,255,255,0.03)", borderRadius: "12px", border: "1px solid var(--border-light)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px", color: "var(--accent-emerald)" }}>
              <Server size={20} />
              <strong style={{ fontSize: "15px", color: "#fff" }}>FastAPI REST Gateway</strong>
            </div>
            <p style={{ fontSize: "13px", color: "var(--text-secondary)" }}>
              High-throughput ASGI endpoint handling validation via Pydantic schemas and returning real-time fraud inference payloads.
            </p>
          </div>

          <div style={{ padding: "16px", background: "rgba(255,255,255,0.03)", borderRadius: "12px", border: "1px solid var(--border-light)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px", color: "var(--accent-rose)" }}>
              <ShieldAlert size={20} />
              <strong style={{ fontSize: "15px", color: "#fff" }}>Telemetry Workbench UI</strong>
            </div>
            <p style={{ fontSize: "13px", color: "var(--text-secondary)" }}>
              React 19 SPA featuring one-click faculty testing presets, real-time risk gauges, and interactive feature inspection tools.
            </p>
          </div>

        </div>

      </InfoCard>

    </div>
  )
}

export default ProjectOverview