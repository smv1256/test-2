from fastapi import FastAPI
import joblib

app = FastAPI()

with open("model/rf_model.pkl", "rb") as m:
    rf = joblib.load(m)

features = ["koi_period", "koi_impact", "koi_duration", "koi_depth", "koi_prad", "koi_model_snr", "koi_steff", "koi_slogg", "koi_srad", "koi_fpflag_nt", "koi_fpflag_co", "koi_fpflag_ss", "koi_fpflag_ec"]

@app.post("/predict")
def predict(data: dict):
    pred = rf.predict(data[features]).tolist()
    return {"prediction": pred}

