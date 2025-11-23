from fastapi import FastAPI
import joblib
from pydantic import BaseModel
import pandas as pd

app = FastAPI()

with open("model/rf_model.pkl", "rb") as m:
    rf = joblib.load(m)

class PredictionOutput(BaseModel):
    prediction: str

class InputData(BaseModel):
    koi_period: float | None = None
    koi_impact: float | None = None
    koi_duration: float | None = None
    koi_depth: float | None = None
    koi_prad: float | None = None
    koi_model_snr: float | None = None
    koi_steff: float | None = None
    koi_slogg: float | None = None
    koi_srad: float | None = None
    koi_fpflag_nt: int | None = None
    koi_fpflag_co: int | None = None
    koi_fpflag_ss: int | None = None
    koi_fpflag_ec: int | None = None

@app.post("/predict")
def predict(data: InputData):
    d = pd.DataFrame([data.model_dump()])
    d.fillna(d.median(), inplace = True)
    pred = "Exoplanet" if (rf.predict(d)[0] == 1) else "Not exoplanet"
    return { "prediction": pred }
