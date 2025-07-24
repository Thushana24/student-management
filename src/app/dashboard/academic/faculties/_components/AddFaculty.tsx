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

const AddFaculty = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>+ Add New Faculty</Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Faculty</DialogTitle>
            <DialogDescription>
              <div className="flex flex-col w-full ">
                <div className="flex flex-col py-2 space-y-2">
                  <Label>Faculty Name</Label>
                  <Input />
                </div>

                <div className="flex flex-col py-2 space-y-2">
                  <Label>Faculty Code</Label>
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

export default AddFaculty;
