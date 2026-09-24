import {
  Database,
  FileText,
  Target,
  Layers,
  Users,
  Car,
  MapPin,
  DollarSign,
  AlertTriangle,
  CheckCircle2
} from "lucide-react"

import InfoCard from "../components/InfoCard"
import SectionHeader from "../components/SectionHeader"
import StatCard from "../components/StatCard"

function Dataset() {
  const sampleFeatures = [
    { name: "claim_number", type: "Numeric (float)", description: "Unique claim tracking identifier", example: "98412" },
    { name: "age_of_driver", type: "Numeric (float)", description: "Policyholder driver age in years", example: "35" },
    { name: "gender", type: "Categorical (str)", description: "Gender classification ('M', 'F')", example: "'M'" },
    { name: "safety_rating", type: "Numeric (float)", description: "Historical driving safety score (0 - 100)", example: "78" },
    { name: "annual_income", type: "Numeric (float)", description: "Annual income in USD", example: "\$64,000" },
    { name: "property_status", type: "Categorical (str)", description: "Home ownership classification ('Own', 'Rent')", example: "'Own'" },
    { name: "vehicle_category", type: "Categorical (str)", description: "Vehicle size category ('Compact', 'Medium', 'Large')", example: "'Medium'" },
    { name: "total_claim", type: "Numeric (float)", description: "Total requested claim payout amount", example: "\$14,500" },
    { name: "liab_prct", type: "Numeric (float)", description: "Determined driver liability percentage", example: "25%" },
    { name: "fraud_reported", type: "Binary Target (0 / 1)", description: "Ground truth target variable ('Fraud' / 'Not Fraud')", example: "1 (Fraud)" }
  ]

  return (
    <div className="info-page">

      {/* Page Header */}
      <SectionHeader
        eyebrow="TELEMETRY DATASET INSPECTOR"
        title="Insurance Claims Corpus"
        description="Exploratory breakdown of historical claim telemetry, feature data types, target distribution, and sanitization metrics."
      />


      {/* Dataset Statistics */}
      <section className="grid-4" style={{ marginBottom: "32px" }}>

        <StatCard
          icon={<Database size={22} />}
          value="12,002"
          label="Raw Observations"
        />

        <StatCard
          icon={<Layers size={22} />}
          value="29"
          label="Feature Columns"
        />

        <StatCard
          icon={<Target size={22} />}
          value="Binary Target"
          label="fraud_reported"
        />

        <StatCard
          icon={<FileText size={22} />}
          value="11,859"
          label="Sanitized Records"
        />

      </section>


      {/* Feature Data Dictionary */}
      <InfoCard
        icon={<FileText size={22} />}
        title="Feature Schema & Telemetry Dictionary"
        description="Key variables consumed by the machine learning feature engineering matrix"
      >

        <div className="table-responsive" style={{ marginTop: "12px" }}>
          <table className="custom-table">
            <thead>
              <tr>
                <th>Feature Name</th>
                <th>Data Type</th>
                <th>Description</th>
                <th>Sample Value</th>
              </tr>
            </thead>
            <tbody>
              {sampleFeatures.map((feat, idx) => (
                <tr key={idx}>
                  <td style={{ fontFamily: "var(--font-mono)", color: "var(--accent-cyan)", fontWeight: "600" }}>
                    {feat.name}
                  </td>
                  <td style={{ fontSize: "12px", color: "var(--text-muted)" }}>{feat.type}</td>
                  <td>{feat.description}</td>
                  <td style={{ fontFamily: "var(--font-mono)", color: "var(--text-light)" }}>{feat.example}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </InfoCard>


      {/* Target Distribution Card */}
      <InfoCard
        icon={<Target size={22} />}
        title="Target Variable Imbalance Analysis"
        subtitle="Distribution of fraudulent vs legitimate historical claims"
      >

        <div className="grid-2" style={{ marginTop: "16px" }}>

          <div style={{
            padding: "20px",
            borderRadius: "12px",
            background: "rgba(16, 185, 129, 0.1)",
            border: "1px solid var(--accent-emerald)"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
              <CheckCircle2 size={20} color="var(--accent-emerald)" />
              <strong style={{ fontSize: "16px", color: "#fff" }}>Legitimate Claims (Class 0)</strong>
            </div>
            <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#fff", fontFamily: "var(--font-mono)" }}>
              10,218 <span style={{ fontSize: "14px", color: "var(--text-muted)", fontWeight: "normal" }}>(85.2%)</span>
            </h2>
            <p style={{ fontSize: "13px", color: "var(--text-secondary)", marginTop: "6px" }}>
              Standard verified claims adhering to expected driver and incident distributions.
            </p>
          </div>

          <div style={{
            padding: "20px",
            borderRadius: "12px",
            background: "rgba(244, 63, 94, 0.1)",
            border: "1px solid var(--accent-rose)"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
              <AlertTriangle size={20} color="var(--accent-rose)" />
              <strong style={{ fontSize: "16px", color: "#fff" }}>Fraudulent Claims (Class 1)</strong>
            </div>
            <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#fff", fontFamily: "var(--font-mono)" }}>
              1,641 <span style={{ fontSize: "14px", color: "var(--text-muted)", fontWeight: "normal" }}>(14.8%)</span>
            </h2>
            <p style={{ fontSize: "13px", color: "var(--text-secondary)", marginTop: "6px" }}>
              Claims flagged for synthetic inflation, suspicious liability, or false statements.
            </p>
          </div>

        </div>

      </InfoCard>

    </div>
  )
}

export default Dataset