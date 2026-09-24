import {
  GitMerge,
  Filter,
  Calendar,
  Layers,
  CheckCircle2,
  ArrowRight,
  Database
} from "lucide-react"

import InfoCard from "../components/InfoCard"
import SectionHeader from "../components/SectionHeader"

function DataProcessing() {
  const steps = [
    {
      num: "01",
      title: "Sanitization & Missing Value Imputation",
      desc: "Removal of corrupted entries and handling of missing categorical indicators. 143 null records pruned."
    },
    {
      num: "02",
      title: "Temporal Date Decomposition",
      desc: "Extraction of claim_date into granular claim_year, claim_month, and claim_day numerical features."
    },
    {
      num: "03",
      title: "One-Hot Categorical Dummy Encoding",
      desc: "pd.get_dummies() transformation of gender, marital_status, accident_site, vehicle_category, and vehicle_color."
    },
    {
      num: "04",
      title: "Feature Alignment & Matrix Reindexing",
      desc: "reindex(columns=model.feature_names_in_, fill_value=0) to guarantee 100% column match with trained tree nodes."
    }
  ]

  return (
    <div className="info-page">

      {/* Page Header */}
      <SectionHeader
        eyebrow="ETL PIPELINE & FEATURE PREPROCESSING"
        title="Data Transformation Pipeline"
        description="Detailed walk-through of the feature engineering transformations applied from raw JSON input to matrix evaluation."
      />


      {/* Pipeline Steps Flow */}
      <InfoCard
        icon={<GitMerge size={22} />}
        title="Preprocessing Sequence"
        subtitle="Sequential data transformations executed during model inference"
      >

        <div style={{ display: "flex", flexDirection: "column", gap: "18px", marginTop: "16px" }}>
          {steps.map((step, idx) => (
            <div key={idx} style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "20px",
              padding: "20px",
              borderRadius: "14px",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid var(--border-light)"
            }}>
              <div style={{
                fontSize: "20px",
                fontWeight: "800",
                fontFamily: "var(--font-mono)",
                color: "var(--accent-indigo)",
                background: "rgba(99, 102, 241, 0.15)",
                padding: "8px 14px",
                borderRadius: "10px",
                border: "1px solid var(--border-glow)"
              }}>
                {step.num}
              </div>

              <div>
                <h4 style={{ fontSize: "16px", fontWeight: "700", color: "#fff", marginBottom: "4px" }}>
                  {step.title}
                </h4>
                <p style={{ fontSize: "13.5px", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </InfoCard>

    </div>
  )
}

export default DataProcessing