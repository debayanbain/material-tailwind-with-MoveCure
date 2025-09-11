"use client";

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@/lib/MtConfig";
import { useState } from "react";

const IntialModal = () => {
const [openModal, setopenModal] = useState<boolean>(true);

  return (
    <Dialog open={openModal} handler={() => setopenModal(false)} size="md" className="bg-white">
      <DialogHeader className="text-center text-2xl font-semibold">
        Welcome to MoveCure
      </DialogHeader>
      <DialogBody divider className="text-center">
        <p className="text-gray-600">
          Your journey to better health starts here. Let&apos;s get moving!
        </p>
      </DialogBody>
      <DialogFooter className="justify-center">
        <Button
          variant="gradient"
          color="blue"
          onClick={() => {
            // Add your action here
          }}
        >
          Get Started
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default IntialModal;