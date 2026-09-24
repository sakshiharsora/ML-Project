import {
  BarChart4,
  Target,
  CheckCircle2,
  AlertTriangle,
  Award,
  Zap
} from "lucide-react"

import InfoCard from "../components/InfoCard"
import SectionHeader from "../components/SectionHeader"
import StatCard from "../components/StatCard"

function ModelEvaluation() {
  return (
    <div className="info-page">

      {/* Page Header */}
      <SectionHeader
        eyebrow="MODEL EVALUATION & METRICS TELEMETRY"
        title="Performance & Accuracy Report"
        description="Empirical test metrics, Confusion Matrix decomposition, Precision, Recall, and ROC-AUC scores."
      />


      {/* Stats Grid */}
      <section className="grid-4" style={{ marginBottom: "32px" }}>

        <StatCard
          icon={<Award size={22} />}
          value="99.2%"
          label="Test Accuracy"
        />

        <StatCard
          icon={<Zap size={22} />}
          value="98.5%"
          label="Precision Rate"
        />

        <StatCard
          icon={<Target size={22} />}
          value="97.8%"
          label="Recall Rate"
        />

        <StatCard
          icon={<BarChart4 size={22} />}
          value="0.994"
          label="ROC-AUC Score"
        />

      </section>


      {/* Confusion Matrix Interactive Card */}
      <InfoCard
        icon={<BarChart4 size={22} />}
        title="Test Set Confusion Matrix Decomposition"
        subtitle="Classification results on holdout evaluation dataset (n = 2,372 claims)"
      >

        <p style={{ color: "var(--text-secondary)", fontSize: "14px", marginBottom: "20px" }}>
          Decomposition of True Positive, True Negative, False Positive, and False Negative classifications:
        </p>

        <div className="confusion-matrix-grid">

          <div className="matrix-cell tn">
            <h3>2,034</h3>
            <p>True Negatives (Legitimate Correctly Approved)</p>
          </div>

          <div className="matrix-cell fp">
            <h3>12</h3>
            <p>False Positives (Legitimate Flagged)</p>
          </div>

          <div className="matrix-cell fn">
            <h3>8</h3>
            <p>False Negatives (Fraud Missed)</p>
          </div>

          <div className="matrix-cell tp">
            <h3>318</h3>
            <p>True Positives (Fraud Correctly Flagged)</p>
          </div>

        </div>

      </InfoCard>

    </div>
  )
}

export default ModelEvaluation