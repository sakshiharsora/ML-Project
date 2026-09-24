import { BrowserRouter, Routes, Route } from "react-router-dom"

import Layout from "./components/Layout"

import Dashboard from "./pages/Dashboard"
import Prediction from "./pages/Prediction"

import ProjectOverview from "./pages/ProjectOverview"
import Dataset from "./pages/Dataset"
import DataProcessing from "./pages/DataProcessing"
import MLModel from "./pages/MLModel"
import ModelEvaluation from "./pages/ModelEvaluation"
import HowItWorks from "./pages/HowItWorks"


function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Layout />}>

          {/* Main Pages */}
          <Route index element={<Dashboard />} />

          <Route
            path="prediction"
            element={<Prediction />}
          />


          {/* Project Information */}
          <Route
            path="project-overview"
            element={<ProjectOverview />}
          />

          <Route
            path="dataset"
            element={<Dataset />}
          />

          <Route
            path="data-processing"
            element={<DataProcessing />}
          />

          <Route
            path="ml-model"
            element={<MLModel />}
          />

          <Route
            path="model-evaluation"
            element={<ModelEvaluation />}
          />

          <Route
            path="how-it-works"
            element={<HowItWorks />}
          />

        </Route>

      </Routes>

    </BrowserRouter>
  )
}

export default App

// import { useState } from "react"

// function App() {
//   const [formData, setFormData] = useState({
//     claim_number: "",
//     age_of_driver: "",
//     gender: "",
//     marital_status: "",
//     safety_rating: "",
//     annual_income: "",
//     high_education: "",
//     address_change: "",
//     property_status: "",
//     zip_code: "",
//     claim_date: "",
//     claim_day_of_week: "",
//     accident_site: "",
//     past_num_of_claims: "",
//     witness_present: "",
//     liab_prct: "",
//     channel: "",
//     police_report: "",
//     age_of_vehicle: "",
//     vehicle_category: "",
//     vehicle_price: "",
//     vehicle_color: "",
//     total_claim: "",
//     injury_claim: "",
//     policy_deductible: "",
//     annual_premium: "",
//     days_open: "",
//     form_defects: ""
//   })

//   const [result, setResult] = useState("")
//   const [loading, setLoading] = useState(false)

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     })
//   }

//   const handlePredict = async () => {
//     setLoading(true)
//     setResult("")

//     try {
//       const response = await fetch("http://127.0.0.1:8000/predict", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//           ...formData,
//           claim_number: Number(formData.claim_number),
//           age_of_driver: Number(formData.age_of_driver),
//           safety_rating: Number(formData.safety_rating),
//           annual_income: Number(formData.annual_income),
//           high_education: Number(formData.high_education),
//           address_change: Number(formData.address_change),
//           zip_code: Number(formData.zip_code),
//           past_num_of_claims: Number(formData.past_num_of_claims),
//           liab_prct: Number(formData.liab_prct),
//           police_report: Number(formData.police_report),
//           age_of_vehicle: Number(formData.age_of_vehicle),
//           vehicle_price: Number(formData.vehicle_price),
//           total_claim: Number(formData.total_claim),
//           injury_claim: Number(formData.injury_claim),
//           policy_deductible: Number(formData.policy_deductible),
//           annual_premium: Number(formData.annual_premium),
//           days_open: Number(formData.days_open),
//           form_defects: Number(formData.form_defects)
//         })
//       })

//       if (!response.ok) {
//         throw new Error("Prediction request failed")
//       }

//       const data = await response.json()

//       setResult(data.prediction)
//     } catch (error) {
//       console.error(error)
//       setResult("Error connecting to the prediction server")
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div>
//       <h1>Insurance Fraud Detection</h1>

//       <p>
//         Enter the insurance claim details below to predict whether
//         the claim is fraudulent.
//       </p>

//       <form>
//         <h2>Claim Information</h2>

//         <input
//           name="claim_number"
//           placeholder="Claim Number"
//           value={formData.claim_number}
//           onChange={handleChange}
//         />

//         <input
//           name="claim_date"
//           type="date"
//           value={formData.claim_date}
//           onChange={handleChange}
//         />

//         <select
//           name="claim_day_of_week"
//           value={formData.claim_day_of_week}
//           onChange={handleChange}
//         >
//           <option value="">Claim Day</option>
//           <option value="Monday">Monday</option>
//           <option value="Tuesday">Tuesday</option>
//           <option value="Wednesday">Wednesday</option>
//           <option value="Thursday">Thursday</option>
//           <option value="Friday">Friday</option>
//           <option value="Saturday">Saturday</option>
//           <option value="Sunday">Sunday</option>
//         </select>

//         <input
//           name="days_open"
//           type="number"
//           placeholder="Days Open"
//           value={formData.days_open}
//           onChange={handleChange}
//         />

//         <input
//           name="form_defects"
//           type="number"
//           placeholder="Form Defects"
//           value={formData.form_defects}
//           onChange={handleChange}
//         />

//         <h2>Driver Information</h2>

//         <input
//           name="age_of_driver"
//           type="number"
//           placeholder="Age of Driver"
//           value={formData.age_of_driver}
//           onChange={handleChange}
//         />

//         <select
//           name="gender"
//           value={formData.gender}
//           onChange={handleChange}
//         >
//           <option value="">Gender</option>
//           <option value="M">Male</option>
//           <option value="F">Female</option>
//         </select>

//         <select
//           name="marital_status"
//           value={formData.marital_status}
//           onChange={handleChange}
//         >
//           <option value="">Marital Status</option>
//           <option value="1">Married</option>
//           <option value="0">Single</option>
//         </select>

//         <input
//           name="safety_rating"
//           type="number"
//           placeholder="Safety Rating"
//           value={formData.safety_rating}
//           onChange={handleChange}
//         />

//         <input
//           name="annual_income"
//           type="number"
//           placeholder="Annual Income"
//           value={formData.annual_income}
//           onChange={handleChange}
//         />

//         <select
//           name="high_education"
//           value={formData.high_education}
//           onChange={handleChange}
//         >
//           <option value="">Higher Education</option>
//           <option value="1">Yes</option>
//           <option value="0">No</option>
//         </select>

//         <h2>Address & Property</h2>

//         <select
//           name="address_change"
//           value={formData.address_change}
//           onChange={handleChange}
//         >
//           <option value="">Address Changed</option>
//           <option value="1">Yes</option>
//           <option value="0">No</option>
//         </select>

//         <select
//           name="property_status"
//           value={formData.property_status}
//           onChange={handleChange}
//         >
//           <option value="">Property Status</option>
//           <option value="Own">Own</option>
//           <option value="Rent">Rent</option>
//         </select>

//         <input
//           name="zip_code"
//           type="number"
//           placeholder="ZIP Code"
//           value={formData.zip_code}
//           onChange={handleChange}
//         />

//         <h2>Accident Information</h2>

//         <select
//           name="accident_site"
//           value={formData.accident_site}
//           onChange={handleChange}
//         >
//           <option value="">Accident Site</option>
//           <option value="Highway">Highway</option>
//           <option value="Local">Local</option>
//           <option value="Parking Lot">Parking Lot</option>
//         </select>

//         <input
//           name="past_num_of_claims"
//           type="number"
//           placeholder="Past Number of Claims"
//           value={formData.past_num_of_claims}
//           onChange={handleChange}
//         />

//         <select
//           name="witness_present"
//           value={formData.witness_present}
//           onChange={handleChange}
//         >
//           <option value="">Witness Present</option>
//           <option value="1">Yes</option>
//           <option value="0">No</option>
//         </select>

//         <input
//           name="liab_prct"
//           type="number"
//           placeholder="Liability Percentage"
//           value={formData.liab_prct}
//           onChange={handleChange}
//         />

//         <select
//           name="police_report"
//           value={formData.police_report}
//           onChange={handleChange}
//         >
//           <option value="">Police Report</option>
//           <option value="1">Yes</option>
//           <option value="0">No</option>
//         </select>

//         <h2>Vehicle Information</h2>

//         <input
//           name="age_of_vehicle"
//           type="number"
//           placeholder="Age of Vehicle"
//           value={formData.age_of_vehicle}
//           onChange={handleChange}
//         />

//         <select
//           name="vehicle_category"
//           value={formData.vehicle_category}
//           onChange={handleChange}
//         >
//           <option value="">Vehicle Category</option>
//           <option value="Large">Large</option>
//           <option value="Medium">Medium</option>
//           <option value="Compact">Compact</option>
//         </select>

//         <input
//           name="vehicle_price"
//           type="number"
//           placeholder="Vehicle Price"
//           value={formData.vehicle_price}
//           onChange={handleChange}
//         />

//         <select
//           name="vehicle_color"
//           value={formData.vehicle_color}
//           onChange={handleChange}
//         >
//           <option value="">Vehicle Color</option>
//           <option value="silver">Silver</option>
//           <option value="black">Black</option>
//           <option value="gray">Gray</option>
//           <option value="red">Red</option>
//           <option value="white">White</option>
//           <option value="blue">Blue</option>
//           <option value="other">Other</option>
//         </select>

//         <h2>Claim Amount</h2>

//         <input
//           name="total_claim"
//           type="number"
//           placeholder="Total Claim"
//           value={formData.total_claim}
//           onChange={handleChange}
//         />

//         <input
//           name="injury_claim"
//           type="number"
//           placeholder="Injury Claim"
//           value={formData.injury_claim}
//           onChange={handleChange}
//         />

//         <input
//           name="policy_deductible"
//           type="number"
//           placeholder="Policy Deductible"
//           value={formData.policy_deductible}
//           onChange={handleChange}
//         />

//         <input
//           name="annual_premium"
//           type="number"
//           placeholder="Annual Premium"
//           value={formData.annual_premium}
//           onChange={handleChange}
//         />

//         <h2>Claim Channel</h2>

//         <select
//           name="channel"
//           value={formData.channel}
//           onChange={handleChange}
//         >
//           <option value="">Channel</option>
//           <option value="Phone">Phone</option>
//           <option value="Online">Online</option>
//           <option value="Broker">Broker</option>
//         </select>

//         <br />
//         <br />

//         <button type="button" onClick={handlePredict} disabled={loading}>
//           {loading ? "Predicting..." : "Predict"}
//         </button>
//       </form>

//       {result && (
//         <div>
//           <h2>Prediction Result</h2>
//           <h3>{result}</h3>
//         </div>
//       )}
//     </div>
//   )
// }

// export default App