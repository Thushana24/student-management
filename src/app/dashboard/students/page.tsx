import React from "react";
import AddNewStudent from "./_components/AddNewStudent";

const Student = () => {
  return (
    <div className="flex justify-between p-7 items-center-safe">
      <h2 className="text-2xl font-bold">Students</h2>
      <AddNewStudent />
    </div>
  );
};

export default Student;
