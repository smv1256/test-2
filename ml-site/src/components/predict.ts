"use server"

export async function predict (formData : FormData) {
  try {
    const body: any = Object.fromEntries(formData.entries());

    for (const d in body) {
        if (body[d] === null || body[d] === undefined || body[d] === "") body[d] = null;
        else if (!isNaN(Number(body[d]))) body[d] = Number(body[d]);
    }

    const response = await fetch(process.env.EXOPLANET_API!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    return await response.json();
  } catch (err) {
    return "Error";
  }
}