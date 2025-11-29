"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const StarBg = dynamic(() => import("../components/star-bg"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Suspense fallback={<p>Loading...</p>}>
        <StarBg />
      </Suspense>
    </div>
  );
}
