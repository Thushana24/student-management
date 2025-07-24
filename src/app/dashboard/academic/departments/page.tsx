import React from "react";
import AddDepartment from "./_components/AddDepartment";

const Department = () => {
  return (
    <div className="flex justify-between p-7 items-center-safe">
      <h2 className="text-2xl font-bold">Departments</h2>
      <AddDepartment />
    </div>
  );
};

export default Department;
