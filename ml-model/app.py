from fastapi import FastAPI
import joblib
from pydantic import BaseModel
import pandas as pd

app = FastAPI()

with open("model/rf_model.pkl", "rb") as m:
    rf = joblib.load(m)

# features = ["koi_period", "koi_impact", "koi_duration", "koi_depth", "koi_prad", "koi_model_snr", "koi_steff", "koi_slogg", "koi_srad", "koi_fpflag_nt", "koi_fpflag_co", "koi_fpflag_ss", "koi_fpflag_ec"]

class InputData(BaseModel):
    koi_period: float = None
    koi_impact: float = None
    koi_duration: float = None
    koi_depth: float = None
    koi_prad: float = None
    koi_model_snr: float = None
    koi_steff: float = None
    koi_slogg: float = None
    koi_srad: float = None
    koi_fpflag_nt: int = None
    koi_fpflag_co: int = None
    koi_fpflag_ss: int = None
    koi_fpflag_ec: int = None

@app.post("/predict")
def predict(data: InputData):
    d = pd.DataFrame([data.model_dump()])
    d.fillna(d.median(), inplace = True)
    return {"prediction": rf.predict(d)[0]}
