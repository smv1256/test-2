"use client"

import { predict } from "./predict";
import { useState } from "react";

export default function Form () {
    const [result, setResult] = useState(null);

    async function handleSubmit(formData: FormData) {
        const output = await predict(formData);
        setResult(output);
    }

    return (
        <div>
            <form action={ predict } className="color:white">
                <input name="koi_period" type="number" step="any" />
                <input name="koi_duration" type="number" step="any" />
                <input name="koi_depth" type="number" step="any" />
                <button type="submit">Predict</button>
            </form>

            { result && ( <div>{JSON.stringify(result, null, 2)}</div> ) }
        </div>
    );
}
