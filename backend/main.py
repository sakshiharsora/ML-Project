from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from pydantic import BaseModel
import pandas as pd
import joblib

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
    "http://localhost:5173",
],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

model = joblib.load("random_forest_model.pkl")


class PredictionInput(BaseModel):
    claim_number: float
    age_of_driver: float
    gender: str
    marital_status: str
    safety_rating: float
    annual_income: float
    high_education: float
    address_change: float
    property_status: str
    zip_code: float
    claim_date: str
    claim_day_of_week: str
    accident_site: str
    past_num_of_claims: float
    witness_present: str
    liab_prct: float
    channel: str
    police_report: float
    age_of_vehicle: float
    vehicle_category: str
    vehicle_price: float
    vehicle_color: str
    total_claim: float
    injury_claim: float
    policy_deductible: float
    annual_premium: float
    days_open: float
    form_defects: float


@app.get("/")
def home():
    return {"message": "Insurance Fraud Prediction API is running"}


@app.post("/predict")
def predict(data: PredictionInput):

    input_data = pd.DataFrame([{
        "claim_number": data.claim_number,
        "age_of_driver": data.age_of_driver,
        "gender": data.gender,
        "marital_status": data.marital_status,
        "safety_rating": data.safety_rating,
        "annual_income": data.annual_income,
        "high_education": data.high_education,
        "address_change": data.address_change,
        "property_status": data.property_status,
        "zip_code": data.zip_code,
        "claim_date": data.claim_date,
        "claim_day_of_week": data.claim_day_of_week,
        "accident_site": data.accident_site,
        "past_num_of_claims": data.past_num_of_claims,
        "witness_present": data.witness_present,
        "liab_prct": data.liab_prct,
        "channel": data.channel,
        "police_report": data.police_report,
        "age_of_vehicle": data.age_of_vehicle,
        "vehicle_category": data.vehicle_category,
        "vehicle_price": data.vehicle_price,
        "vehicle_color": data.vehicle_color,
        "total_claim": data.total_claim,
        "injury_claim": data.injury_claim,
        "policy deductible": data.policy_deductible,
        "annual premium": data.annual_premium,
        "days open": data.days_open,
        "form defects": data.form_defects
    }])

    # Date preprocessing
    input_data["claim_date"] = pd.to_datetime(input_data["claim_date"])
    input_data["claim_year"] = input_data["claim_date"].dt.year
    input_data["claim_month"] = input_data["claim_date"].dt.month
    input_data["claim_day"] = input_data["claim_date"].dt.day
    input_data = input_data.drop("claim_date", axis=1)

    # Convert categorical values to dummy variables
    input_data = pd.get_dummies(
        input_data,
        columns=[
            "gender",
            "marital_status",
            "property_status",
            "claim_day_of_week",
            "accident_site",
            "witness_present",
            "channel",
            "vehicle_category",
            "vehicle_color"
        ],
        drop_first=True
    )

    # Make sure the input has exactly the same features as the trained model
    input_data = input_data.reindex(
        columns=model.feature_names_in_,
        fill_value=0
    )

    prediction = model.predict(input_data)[0]

    if prediction == 1:
        result = "Fraud"
    else:
        result = "Not Fraud"

    return {"prediction": result}