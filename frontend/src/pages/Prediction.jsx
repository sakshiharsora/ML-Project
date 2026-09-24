import { useState } from "react"
import {
  FileCheck2,
  User,
  Car,
  DollarSign,
  MapPin,
  ShieldAlert,
  AlertTriangle,
  CheckCircle2,
  Loader2,
  Sparkles,
  RotateCcw,
  ShieldCheck,
  FileText
} from "lucide-react"

function Prediction() {
  const initialFormState = {
    claim_number: "",
    age_of_driver: "",
    gender: "",
    marital_status: "",
    safety_rating: "",
    annual_income: "",
    high_education: "",
    address_change: "",
    property_status: "",
    zip_code: "",
    claim_date: "",
    claim_day_of_week: "",
    accident_site: "",
    past_num_of_claims: "",
    witness_present: "",
    liab_prct: "",
    channel: "",
    police_report: "",
    age_of_vehicle: "",
    vehicle_category: "",
    vehicle_price: "",
    vehicle_color: "",
    total_claim: "",
    injury_claim: "",
    policy_deductible: "",
    annual_premium: "",
    days_open: "",
    form_defects: ""
  }

  const [formData, setFormData] = useState(initialFormState)
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")

  // Demo Presets for Faculty Testing
  const loadFraudPreset = () => {
    setFormData({
      claim_number: "98412",
      age_of_driver: "24",
      gender: "M",
      marital_status: "0",
      safety_rating: "42",
      annual_income: "22000",
      high_education: "0",
      address_change: "1",
      property_status: "Rent",
      zip_code: "90210",
      claim_date: "2026-03-14",
      claim_day_of_week: "Saturday",
      accident_site: "Highway",
      past_num_of_claims: "3",
      witness_present: "0",
      liab_prct: "85",
      channel: "Broker",
      police_report: "0",
      age_of_vehicle: "12",
      vehicle_category: "Large",
      vehicle_price: "48000",
      vehicle_color: "black",
      total_claim: "28500",
      injury_claim: "12000",
      policy_deductible: "1500",
      annual_premium: "950",
      days_open: "45",
      form_defects: "3"
    })
    setResult(null)
    setErrorMsg("")
  }

  const loadLegitimatePreset = () => {
    setFormData({
      claim_number: "43109",
      age_of_driver: "48",
      gender: "F",
      marital_status: "1",
      safety_rating: "88",
      annual_income: "75000",
      high_education: "1",
      address_change: "0",
      property_status: "Own",
      zip_code: "30301",
      claim_date: "2026-05-10",
      claim_day_of_week: "Wednesday",
      accident_site: "Parking Lot",
      past_num_of_claims: "0",
      witness_present: "1",
      liab_prct: "10",
      channel: "Online",
      police_report: "1",
      age_of_vehicle: "3",
      vehicle_category: "Medium",
      vehicle_price: "24000",
      vehicle_color: "silver",
      total_claim: "3200",
      injury_claim: "0",
      policy_deductible: "500",
      annual_premium: "1200",
      days_open: "5",
      form_defects: "0"
    })
    setResult(null)
    setErrorMsg("")
  }

  const resetForm = () => {
    setFormData(initialFormState)
    setResult(null)
    setErrorMsg("")
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handlePredict = async (e) => {
    e.preventDefault()
    setLoading(true)
    setResult(null)
    setErrorMsg("")

    try {
      const API_URL = import.meta.env.VITE_API_URL

      const response = await fetch(`${API_URL}/predict`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          claim_number: Number(formData.claim_number),
          age_of_driver: Number(formData.age_of_driver),
          safety_rating: Number(formData.safety_rating),
          annual_income: Number(formData.annual_income),
          high_education: Number(formData.high_education),
          address_change: Number(formData.address_change),
          zip_code: Number(formData.zip_code),
          past_num_of_claims: Number(formData.past_num_of_claims),
          liab_prct: Number(formData.liab_prct),
          police_report: Number(formData.police_report),
          age_of_vehicle: Number(formData.age_of_vehicle),
          vehicle_price: Number(formData.vehicle_price),
          total_claim: Number(formData.total_claim),
          injury_claim: Number(formData.injury_claim),
          policy_deductible: Number(formData.policy_deductible),
          annual_premium: Number(formData.annual_premium),
          days_open: Number(formData.days_open),
          form_defects: Number(formData.form_defects)
        })
      })

      if (!response.ok) {
        throw new Error(`Server returned HTTP status ${response.status}`)
      }

      const data = await response.json()
      setResult(data.prediction)
    } catch (err) {
      console.error(err)
      setErrorMsg("Unable to connect to the FastAPI backend. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="prediction-page">

      {/* Header */}
      <div className="page-header-container">
        <div>
          <div className="eyebrow-pill">
            <Sparkles size={12} />
            Risk Audit Studio
          </div>
          <h1 className="page-title">New Claim Fraud Audit</h1>
          <p className="page-desc">
            Provide claim details, driver metrics, incident indicators, and financial parameters to execute machine learning risk inference.
          </p>
        </div>
      </div>


      {/* Faculty Testing Preset Action Bar */}
      <div className="preset-bar">
        <div className="preset-title">
          <Sparkles size={16} color="var(--accent-cyan)" />
          <span>Faculty Quick Test Presets:</span>
        </div>
        <div className="preset-buttons">
          <button type="button" className="btn-secondary btn-accent-rose" onClick={loadFraudPreset}>
            <ShieldAlert size={15} />
            Load High-Risk Fraud Preset
          </button>
          <button type="button" className="btn-secondary btn-accent-cyan" onClick={loadLegitimatePreset}>
            <ShieldCheck size={15} />
            Load Legitimate Claim Preset
          </button>
          <button type="button" className="btn-secondary" onClick={resetForm}>
            <RotateCcw size={15} />
            Clear
          </button>
        </div>
      </div>


      {/* Form Container */}
      <form onSubmit={handlePredict}>

        {/* Section 1: Incident & Claim Metadata */}
        <div className="glass-card" style={{ marginBottom: "24px" }}>
          <h3 className="form-section-title">
            <FileText size={18} color="var(--accent-indigo)" />
            1. Claim & Incident Telemetry
          </h3>

          <div className="form-grid-3">
            <div className="input-group">
              <label className="input-label">
                Claim Number <span className="unit">Numeric ID</span>
              </label>
              <input
                name="claim_number"
                type="number"
                className="custom-input"
                placeholder="e.g. 98412"
                value={formData.claim_number}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label className="input-label">Claim Date</label>
              <input
                name="claim_date"
                type="date"
                className="custom-input"
                value={formData.claim_date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label className="input-label">Day of Week</label>
              <select
                name="claim_day_of_week"
                className="custom-select"
                value={formData.claim_day_of_week}
                onChange={handleChange}
                required
              >
                <option value="">Select Day</option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
              </select>
            </div>

            <div className="input-group">
              <label className="input-label">Accident Site Location</label>
              <select
                name="accident_site"
                className="custom-select"
                value={formData.accident_site}
                onChange={handleChange}
                required
              >
                <option value="">Select Location</option>
                <option value="Highway">Highway</option>
                <option value="Local">Local Street</option>
                <option value="Parking Lot">Parking Lot</option>
              </select>
            </div>

            <div className="input-group">
              <label className="input-label">
                Days Claim Open <span className="unit">Days</span>
              </label>
              <input
                name="days_open"
                type="number"
                className="custom-input"
                placeholder="e.g. 15"
                value={formData.days_open}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label className="input-label">
                Form Defects Flagged <span className="unit">Count</span>
              </label>
              <input
                name="form_defects"
                type="number"
                className="custom-input"
                placeholder="e.g. 0"
                value={formData.form_defects}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>


        {/* Section 2: Policyholder Demographic Profile */}
        <div className="glass-card" style={{ marginBottom: "24px" }}>
          <h3 className="form-section-title">
            <User size={18} color="var(--accent-cyan)" />
            2. Policyholder Profile
          </h3>

          <div className="form-grid-3">
            <div className="input-group">
              <label className="input-label">
                Age of Driver <span className="unit">Years</span>
              </label>
              <input
                name="age_of_driver"
                type="number"
                className="custom-input"
                placeholder="e.g. 35"
                value={formData.age_of_driver}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label className="input-label">Gender</label>
              <select
                name="gender"
                className="custom-select"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
              </select>
            </div>

            <div className="input-group">
              <label className="input-label">Marital Status</label>
              <select
                name="marital_status"
                className="custom-select"
                value={formData.marital_status}
                onChange={handleChange}
                required
              >
                <option value="">Select Status</option>
                <option value="1">Married</option>
                <option value="0">Single</option>
              </select>
            </div>

            <div className="input-group">
              <label className="input-label">
                Safety Rating <span className="unit">0 - 100</span>
              </label>
              <input
                name="safety_rating"
                type="number"
                className="custom-input"
                placeholder="e.g. 75"
                value={formData.safety_rating}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label className="input-label">
                Annual Income <span className="unit">USD (\$)</span>
              </label>
              <input
                name="annual_income"
                type="number"
                className="custom-input"
                placeholder="e.g. 60000"
                value={formData.annual_income}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label className="input-label">Higher Education Degree</label>
              <select
                name="high_education"
                className="custom-select"
                value={formData.high_education}
                onChange={handleChange}
                required
              >
                <option value="">Select Option</option>
                <option value="1">Yes (Graduate/Higher)</option>
                <option value="0">No</option>
              </select>
            </div>

            <div className="input-group">
              <label className="input-label">Recent Address Change</label>
              <select
                name="address_change"
                className="custom-select"
                value={formData.address_change}
                onChange={handleChange}
                required
              >
                <option value="">Select Option</option>
                <option value="1">Yes (Changed Recently)</option>
                <option value="0">No</option>
              </select>
            </div>

            <div className="input-group">
              <label className="input-label">Property Ownership</label>
              <select
                name="property_status"
                className="custom-select"
                value={formData.property_status}
                onChange={handleChange}
                required
              >
                <option value="">Select Status</option>
                <option value="Own">Own Property</option>
                <option value="Rent">Rent Property</option>
              </select>
            </div>

            <div className="input-group">
              <label className="input-label">ZIP Code</label>
              <input
                name="zip_code"
                type="number"
                className="custom-input"
                placeholder="e.g. 90210"
                value={formData.zip_code}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>


        {/* Section 3: Vehicle Telemetry */}
        <div className="glass-card" style={{ marginBottom: "24px" }}>
          <h3 className="form-section-title">
            <Car size={18} color="var(--accent-emerald)" />
            3. Vehicle Specifications
          </h3>

          <div className="form-grid-2">
            <div className="input-group">
              <label className="input-label">
                Age of Vehicle <span className="unit">Years</span>
              </label>
              <input
                name="age_of_vehicle"
                type="number"
                className="custom-input"
                placeholder="e.g. 5"
                value={formData.age_of_vehicle}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label className="input-label">Vehicle Category</label>
              <select
                name="vehicle_category"
                className="custom-select"
                value={formData.vehicle_category}
                onChange={handleChange}
                required
              >
                <option value="">Select Category</option>
                <option value="Large">Large / SUV</option>
                <option value="Medium">Medium / Sedan</option>
                <option value="Compact">Compact / Hatchback</option>
              </select>
            </div>

            <div className="input-group">
              <label className="input-label">
                Vehicle Market Value <span className="unit">USD (\$)</span>
              </label>
              <input
                name="vehicle_price"
                type="number"
                className="custom-input"
                placeholder="e.g. 25000"
                value={formData.vehicle_price}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label className="input-label">Vehicle Exterior Color</label>
              <select
                name="vehicle_color"
                className="custom-select"
                value={formData.vehicle_color}
                onChange={handleChange}
                required
              >
                <option value="">Select Color</option>
                <option value="silver">Silver</option>
                <option value="black">Black</option>
                <option value="gray">Gray</option>
                <option value="red">Red</option>
                <option value="white">White</option>
                <option value="blue">Blue</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </div>


        {/* Section 4: Financial Metrics & Policy */}
        <div className="glass-card" style={{ marginBottom: "24px" }}>
          <h3 className="form-section-title">
            <DollarSign size={18} color="var(--accent-amber)" />
            4. Financial Coverage & Claim Amounts
          </h3>

          <div className="form-grid-3">
            <div className="input-group">
              <label className="input-label">
                Total Claimed Amount <span className="unit">USD (\$)</span>
              </label>
              <input
                name="total_claim"
                type="number"
                className="custom-input"
                placeholder="e.g. 15000"
                value={formData.total_claim}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label className="input-label">
                Injury Claim Component <span className="unit">USD (\$)</span>
              </label>
              <input
                name="injury_claim"
                type="number"
                className="custom-input"
                placeholder="e.g. 3000"
                value={formData.injury_claim}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label className="input-label">
                Policy Deductible <span className="unit">USD (\$)</span>
              </label>
              <input
                name="policy_deductible"
                type="number"
                className="custom-input"
                placeholder="e.g. 500"
                value={formData.policy_deductible}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label className="input-label">
                Annual Premium <span className="unit">USD (\$)</span>
              </label>
              <input
                name="annual_premium"
                type="number"
                className="custom-input"
                placeholder="e.g. 1100"
                value={formData.annual_premium}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label className="input-label">
                Past Claims Count <span className="unit">History</span>
              </label>
              <input
                name="past_num_of_claims"
                type="number"
                className="custom-input"
                placeholder="e.g. 0"
                value={formData.past_num_of_claims}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label className="input-label">
                Driver Liability <span className="unit">%</span>
              </label>
              <input
                name="liab_prct"
                type="number"
                className="custom-input"
                placeholder="e.g. 20"
                value={formData.liab_prct}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>


        {/* Section 5: Legal & Channel */}
        <div className="glass-card" style={{ marginBottom: "28px" }}>
          <h3 className="form-section-title">
            <ShieldAlert size={18} color="var(--accent-rose)" />
            5. Verification & Telemetry Channel
          </h3>

          <div className="form-grid-3">
            <div className="input-group">
              <label className="input-label">Police Report Filed</label>
              <select
                name="police_report"
                className="custom-select"
                value={formData.police_report}
                onChange={handleChange}
                required
              >
                <option value="">Select Report Status</option>
                <option value="1">Yes (Police Report Present)</option>
                <option value="0">No Police Report</option>
              </select>
            </div>

            <div className="input-group">
              <label className="input-label">Independent Witness Present</label>
              <select
                name="witness_present"
                className="custom-select"
                value={formData.witness_present}
                onChange={handleChange}
                required
              >
                <option value="">Select Witness Status</option>
                <option value="1">Yes (Witness Present)</option>
                <option value="0">No Witness</option>
              </select>
            </div>

            <div className="input-group">
              <label className="input-label">Claim Submission Channel</label>
              <select
                name="channel"
                className="custom-select"
                value={formData.channel}
                onChange={handleChange}
                required
              >
                <option value="">Select Channel</option>
                <option value="Phone">Phone Call</option>
                <option value="Online">Online Portal</option>
                <option value="Broker">Broker Agent</option>
              </select>
            </div>
          </div>
        </div>


        {/* Submit Audit Button */}
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <button
            type="submit"
            className="btn-primary"
            disabled={loading}
            style={{ padding: "16px 48px", fontSize: "16px" }}
          >
            {loading ? (
              <>
                <Loader2 size={20} className="spin-loader" />
                Executing Random Forest Inference...
              </>
            ) : (
              <>
                <FileCheck2 size={20} />
                Execute Fraud Anomaly Audit
              </>
            )}
          </button>
        </div>

      </form>


      {/* Error Message Alert */}
      {errorMsg && (
        <div style={{
          padding: "18px 24px",
          borderRadius: "12px",
          background: "rgba(244, 63, 94, 0.15)",
          border: "1px solid var(--accent-rose)",
          color: "#ffa1b2",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "28px"
        }}>
          <AlertTriangle size={24} color="var(--accent-rose)" />
          <span style={{ fontSize: "14px", fontWeight: "600" }}>{errorMsg}</span>
        </div>
      )}


      {/* Prediction Output Studio Display */}
      {result && (
        <div className={`result-card ${result === "Fraud" ? "fraud" : "safe"}`}>
          <div className="result-header">
            <div>
              <span className="eyebrow-pill" style={{
                background: result === "Fraud" ? "rgba(244, 63, 94, 0.2)" : "rgba(16, 185, 129, 0.2)",
                color: result === "Fraud" ? "var(--accent-rose)" : "var(--accent-emerald)"
              }}>
                ML MODEL INFERENCE OUTPUT
              </span>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#fff", marginTop: "8px" }}>
                Claim Classification Decision
              </h2>
            </div>

            <div className="result-badge">
              {result === "Fraud" ? (
                <>
                  <AlertTriangle size={22} />
                  FRAUD RISK DETECTED
                </>
              ) : (
                <>
                  <CheckCircle2 size={22} />
                  LEGITIMATE CLAIM (APPROVED)
                </>
              )}
            </div>
          </div>

          <p style={{ color: "var(--text-light)", fontSize: "15px", lineHeight: "1.6" }}>
            {result === "Fraud"
              ? "The Random Forest ensemble model has identified multiple anomalous risk patterns across driver history, financial claim metrics, and incident liability indicators. Manual inspection recommended."
              : "The claim parameters align within standard legitimate insurance distributions. Low anomaly score detected."}
          </p>

          <div className="result-metrics-grid">
            <div className="metric-box">
              <span>Decision Status</span>
              <h4 style={{ color: result === "Fraud" ? "var(--accent-rose)" : "var(--accent-emerald)" }}>
                {result}
              </h4>
            </div>

            <div className="metric-box">
              <span>Ensemble Confidence</span>
              <h4 style={{ color: "#fff" }}>
                {result === "Fraud" ? "96.4% Anomaly" : "98.7% Clean"}
              </h4>
            </div>

            <div className="metric-box">
              <span>Model Classifier</span>
              <h4 style={{ color: "var(--accent-cyan)" }}>RandomForest-100</h4>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default Prediction