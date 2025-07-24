"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { calculateAge } from "../_helpers/dateUtils";
import { DISTRICTS } from "../_helpers/districts";
import { Save } from "lucide-react";
import { FACULTIES, DEPARTMENTS, BATCHES } from "../_helpers/mockData";

// Define FacultyKey as keys of DEPARTMENTS
type FacultyKey = keyof typeof DEPARTMENTS;

const AddNewStudent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState<number | null>(null);

  // Make sure selectedFaculty has type FacultyKey or empty string
  const [selectedFaculty, setSelectedFaculty] = useState<FacultyKey | "">("");
  const [selectedDepartment, setSelectedDepartment] = useState<string>("");

  const handleBirthDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setBirthDate(value);
    const calculatedAge = calculateAge(value);
    setAge(calculatedAge);
  };

  // Get departments list safely with type assertion
  const departmentList: string[] = selectedFaculty
    ? DEPARTMENTS[selectedFaculty]
    : [];

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>+ Add New Student</Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Student</DialogTitle>
            <DialogDescription>
              <div className="py-2 space-y-3 max-h-[500px] overflow-y-auto">
                <div>
                  <Label>Student Code</Label>
                  <Input value="STU_0001" readOnly />
                </div>

                <div className="flex gap-2">
                  <div className="flex-1">
                    <Label>First Name</Label>
                    <Input />
                  </div>
                  <div className="flex-1">
                    <Label>Middle Name</Label>
                    <Input />
                  </div>
                  <div className="flex-1">
                    <Label>Last Name</Label>
                    <Input />
                  </div>
                </div>

                {/* Faculty Dropdown */}
                <div>
                  <Label>Faculty</Label>
                  <Select
                    onValueChange={(val) => {
                      setSelectedFaculty(val as FacultyKey);
                      setSelectedDepartment(""); // reset department on faculty change
                    }}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Faculty" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {FACULTIES.map((faculty) => (
                          <SelectItem key={faculty} value={faculty}>
                            {faculty}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                {/* Department Dropdown (Filtered by selected Faculty) */}
                {selectedFaculty && (
                  <div>
                    <Label>Department</Label>
                    <Select
                      onValueChange={setSelectedDepartment}
                      value={selectedDepartment}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {departmentList.map((dept) => (
                            <SelectItem key={dept} value={dept}>
                              {dept}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {/* Batch Dropdown */}
                <div>
                  <Label>Batch</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Batch" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {BATCHES.map((batch) => (
                          <SelectItem key={batch} value={batch}>
                            {batch}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Profile Image</Label>
                  <Input type="file" />
                </div>

                <div className="flex gap-2">
                  <div className="flex-1">
                    <Label>Birth Date</Label>
                    <Input
                      type="date"
                      value={birthDate}
                      onChange={handleBirthDateChange}
                    />
                  </div>
                  <div className="flex-1">
                    <Label>Age as of 01/01/2025</Label>
                    <Input value={age ?? ""} readOnly />
                  </div>
                </div>

                <div>
                  <Label>Address Line 1</Label>
                  <Input />
                </div>
                <div>
                  <Label>City</Label>
                  <Input />
                </div>
                <div>
                  <Label>District</Label>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select District" />
                    </SelectTrigger>
                    <SelectGroup>
                      <SelectContent>
                        <SelectLabel>Districts</SelectLabel>
                        {DISTRICTS.map((district) => (
                          <SelectItem key={district} value={district}>
                            {district}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </SelectGroup>
                  </Select>
                </div>

                <div>
                  <Label>Contact No</Label>
                  <Input />
                </div>

                <div className="flex items-center justify-end w-full gap-2">
                  <Button onClick={() => setIsOpen(false)} variant="ghost">
                    Cancel
                  </Button>
                  <Button onClick={() => console.log(Save)}>Add</Button>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddNewStudent;
