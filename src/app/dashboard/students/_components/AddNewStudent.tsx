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

const AddNewStudent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState<number | null>(null);

  const handleBirthDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setBirthDate(value);
    const calculatedAge = calculateAge(value);
    setAge(calculatedAge);
  };

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>+ Add New Student</Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Student</DialogTitle>
            <DialogDescription>
              <div className="py-2 space-y-3">
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
                <div>
                  <Label>Grade</Label>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select d Grade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Grades</SelectLabel>
                        <SelectItem value="19/20">19/20</SelectItem>
                        <SelectItem value="20/21">20/21</SelectItem>
                        <SelectItem value="21/22">21/22</SelectItem>
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
