import "dotenv/config";

console.log("(Expected output: Not exoplanet)");

const response = await fetch(process.env.NEXT_PUBLIC_EXOPLANET_API, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
  "koi_period": 25.643845,
  "koi_impact": null,
  "koi_duration": 5.0500,
  "koi_depth": null,
  "koi_prad": null,
  "koi_model_snr": null,
  "koi_steff": null,
  "koi_slogg": null,
  "koi_srad": null,
  "koi_fpflag_nt": 0,
  "koi_fpflag_co": 0,
  "koi_fpflag_ss": 0,
  "koi_fpflag_ec": 0
  }),
});

const data = await response.json();

console.log(data.prediction);
