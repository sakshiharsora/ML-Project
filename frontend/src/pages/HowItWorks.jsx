import {
  Workflow,
  MousePointer,
  Server,
  BrainCircuit,
  FileCheck2,
  ArrowRight
} from "lucide-react"

import InfoCard from "../components/InfoCard"
import SectionHeader from "../components/SectionHeader"

function HowItWorks() {
  const steps = [
    {
      icon: <MousePointer size={24} color="var(--accent-indigo)" />,
      title: "1. Interactive Claim Telemetry Entry",
      desc: "User inputs claim metadata, driver details, incident specs, and financial totals into the VeriClaim UI or clicks a Faculty Test Preset."
    },
    {
      icon: <Server size={24} color="var(--accent-cyan)" />,
      title: "2. REST Request & Pydantic Validation",
      desc: "React frontend executes HTTP POST to http://127.0.0.1:8000/predict. FastAPI parses payload against PredictionInput Pydantic model."
    },
    {
      icon: <BrainCircuit size={24} color="var(--accent-emerald)" />,
      title: "3. Feature Engineering & Tree Inference",
      desc: "Pandas transforms claim_date, computes get_dummies categorical vectors, reindexes columns, and queries random_forest_model.pkl."
    },
    {
      icon: <FileCheck2 size={24} color="var(--accent-rose)" />,
      title: "4. Anomaly Decision & Visual Diagnosis",
      desc: "API returns binary prediction ('Fraud' / 'Not Fraud'). UI renders animated risk score studio, anomaly breakdown, and audit status."
    }
  ]

  return (
    <div className="info-page">

      {/* Page Header */}
      <SectionHeader
        eyebrow="EXECUTION FLOW & INFRASTRUCTURE"
        title="How VeriClaim AI Operates"
        description="End-to-end telemetry workflow from UI user input to machine learning model inference."
      />


      {/* Workflow Diagram Cards */}
      <InfoCard
        icon={<Workflow size={22} />}
        title="Execution Sequence Diagram"
        subtitle="Step-by-step transaction flow"
      >

        <div className="grid-2" style={{ marginTop: "16px" }}>
          {steps.map((step, idx) => (
            <div key={idx} style={{
              padding: "24px",
              borderRadius: "14px",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid var(--border-light)"
            }}>
              <div style={{ marginBottom: "14px" }}>
                {step.icon}
              </div>
              <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#fff", marginBottom: "8px" }}>
                {step.title}
              </h3>
              <p style={{ fontSize: "13.5px", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </InfoCard>

    </div>
  )
}

export default HowItWorks