import React from "react";
import AddFaculty from "./_components/AddFaculty";

const Faculty = () => {
  return (
    <div className="flex justify-between p-7 items-center-safe">
      <h2 className="text-2xl font-bold">Faculties</h2>
      <AddFaculty />
    </div>
  );
};

export default Faculty;
