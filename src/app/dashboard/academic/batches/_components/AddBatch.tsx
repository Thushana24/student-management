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

// Mock Faculties and Departments
const mockFaculties = [
  { id: "1", name: "Engineering", code: "ENG" },
  { id: "2", name: "Business", code: "BUS" },
];

const mockDepartments = [
  { id: "1", facultyId: "1", name: "Computer Science", code: "CS" },
  { id: "2", facultyId: "1", name: "Mechanical", code: "ME" },
  { id: "3", facultyId: "2", name: "Marketing", code: "MKT" },
  { id: "4", facultyId: "2", name: "Finance", code: "FIN" },
];

const AddBatch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFacultyId, setSelectedFacultyId] = useState("");
  const [selectedDepartmentId, setSelectedDepartmentId] = useState("");

  const [batchName, setBatchName] = useState("");
  const [batchCode, setBatchCode] = useState("");

  const filteredDepartments = mockDepartments.filter(
    (dept) => dept.facultyId === selectedFacultyId
  );

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>+ Add New Batch</Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Batch</DialogTitle>
            <DialogDescription>
              <div className="flex flex-col w-full space-y-4">
                {/* Faculty */}
                <div className="flex flex-col space-y-2">
                  <Label>Select Faculty</Label>
                  <Select onValueChange={setSelectedFacultyId}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose Faculty" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Faculties</SelectLabel>
                        {mockFaculties.map((faculty) => (
                          <SelectItem key={faculty.id} value={faculty.id}>
                            {faculty.name} ({faculty.code})
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                {/* Department */}
                <div className="flex flex-col space-y-2">
                  <Label>Select Department</Label>
                  <Select
                    onValueChange={setSelectedDepartmentId}
                    disabled={!selectedFacultyId}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Choose Department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Departments</SelectLabel>
                        {filteredDepartments.map((dept) => (
                          <SelectItem key={dept.id} value={dept.id}>
                            {dept.name} ({dept.code})
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                {/* Batch Name */}
                <div className="flex flex-col space-y-2">
                  <Label>Batch Name</Label>
                  <Input
                    value={batchName}
                    onChange={(e) => setBatchName(e.target.value)}
                    placeholder="e.g. Batch 2025"
                  />
                </div>

                {/* Batch Code */}
                <div className="flex flex-col space-y-2">
                  <Label>Batch Code</Label>
                  <Input
                    value={batchCode}
                    onChange={(e) => setBatchCode(e.target.value)}
                    placeholder="e.g. B25"
                  />
                </div>

                {/* Buttons */}
                <div className="flex items-center justify-end w-full gap-2 pt-2">
                  <Button onClick={() => setIsOpen(false)} variant="ghost">
                    Cancel
                  </Button>
                  <Button
                    onClick={() => {
                      console.log({
                        faculty: selectedFacultyId,
                        department: selectedDepartmentId,
                        batchName,
                        batchCode,
                      });
                      setIsOpen(false);
                    }}
                  >
                    Add
                  </Button>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddBatch;
