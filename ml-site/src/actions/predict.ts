"use server"

export async function predict (formData : FormData): Promise<string> {
  try {
    const body: any = Object.fromEntries(formData.entries());

    for (const d in body) {
        body[d] = (body[d] === "") ? null : Number(body[d]);
    }

    const response = await fetch(process.env.EXOPLANET_API!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const pred = await response.json();
    console.log(pred);

    return pred.prediction;
  } catch (err) {
    return "Error";
  }
}
