import React from "react";
import AddBatch from "./_components/AddBatch";

const Batch = () => {
  return (
    <div className="flex justify-between p-7 items-center-safe">
      <h2 className="text-2xl font-bold">Batches</h2>
      <AddBatch />
    </div>
  );
};

export default Batch;
