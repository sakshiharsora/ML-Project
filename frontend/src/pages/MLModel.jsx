import {
  Terminal,
  Cpu,
  Sliders,
  CheckCircle2,
  TreeDeciduous,
  Zap
} from "lucide-react"

import InfoCard from "../components/InfoCard"
import SectionHeader from "../components/SectionHeader"
import StatCard from "../components/StatCard"

function MLModel() {
  const hyperparams = [
    { name: "n_estimators", val: "100", desc: "Total decision trees built in ensemble" },
    { name: "criterion", val: "'gini'", desc: "Node split impurity measurement metric" },
    { name: "max_depth", val: "None (Full)", desc: "Maximum depth limit of decision trees" },
    { name: "min_samples_split", val: "2", desc: "Min samples required to split internal node" },
    { name: "min_samples_leaf", val: "1", desc: "Min samples required to be at a leaf node" },
    { name: "random_state", val: "42", desc: "Reproducibility seed for consistent splits" }
  ]

  return (
    <div className="info-page">

      {/* Page Header */}
      <SectionHeader
        eyebrow="MACHINE LEARNING ENGINE"
        title="Random Forest Classifier Architecture"
        description="Specifications, hyperparameter configurations, and feature importance weightings of the production model."
      />


      {/* Stats Grid */}
      <section className="grid-4" style={{ marginBottom: "32px" }}>

        <StatCard
          icon={<TreeDeciduous size={22} />}
          value="100 Trees"
          label="n_estimators"
        />

        <StatCard
          icon={<Cpu size={22} />}
          value="Scikit-Learn"
          label="Library Engine"
        />

        <StatCard
          icon={<Sliders size={22} />}
          value="Gini Impurity"
          label="Split Criterion"
        />

        <StatCard
          icon={<Zap size={22} />}
          value="28 Features"
          label="Input Dimension"
        />

      </section>


      {/* Hyperparameter Inspector Table */}
      <InfoCard
        icon={<Sliders size={22} />}
        title="Trained Model Hyperparameters"
        subtitle="Configuration parameters loaded from random_forest_model.pkl"
      >

        <div className="table-responsive" style={{ marginTop: "12px" }}>
          <table className="custom-table">
            <thead>
              <tr>
                <th>Hyperparameter</th>
                <th>Configured Value</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {hyperparams.map((hp, idx) => (
                <tr key={idx}>
                  <td style={{ fontFamily: "var(--font-mono)", color: "var(--accent-cyan)", fontWeight: "600" }}>
                    {hp.name}
                  </td>
                  <td style={{ fontFamily: "var(--font-mono)", color: "#fff", fontWeight: "700" }}>
                    {hp.val}
                  </td>
                  <td>{hp.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </InfoCard>

    </div>
  )
}

export default MLModel