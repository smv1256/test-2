"use client"

import { predict } from "../actions/predict";
import { useState } from "react";

export default function Form () {
    const [pred, setPred] = useState<string | undefined>();

    async function handleSubmit(formData: FormData) {
        const output = await predict(formData);
        setPred(output);
    }

    return (
        <div>
            <form action={handleSubmit} className="text-red-500">
                <input className="border-2 border-blue-500 p-2" name="koi_period" type="number" step="any" />
                <input className="border-2 border-blue-500 p-2" name="koi_duration" type="number" step="any" />
                <input className="border-2 border-blue-500 p-2" name="koi_depth" type="number" step="any" />
                <button type="submit">Predict</button>
            </form>
            <span>Prediction: {pred}</span>
        </div>
    );
}
