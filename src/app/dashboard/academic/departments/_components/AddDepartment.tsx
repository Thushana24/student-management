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
import { Save } from "lucide-react";

const mockFaculties = [
  { id: "1", name: "Engineering", code: "ENG" },
  { id: "2", name: "Business", code: "BUS" },
  { id: "3", name: "Arts", code: "ART" },
];

const AddDepartment = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFacultyId, setSelectedFacultyId] = useState("");

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>+ Add New Departmet</Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Faculty</DialogTitle>
            <DialogDescription>
              <div className="flex flex-col w-full ">
                <div className="flex flex-col space-y-2">
                  <Label>Select Faculty</Label>
                  <Select
                    onValueChange={(value) => setSelectedFacultyId(value)}
                  >
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
                <div className="flex flex-col py-2 space-y-2">
                  <Label>Department Name</Label>
                  <Input />
                </div>

                <div className="flex flex-col py-2 space-y-2">
                  <Label>Department Code</Label>
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

export default AddDepartment;
