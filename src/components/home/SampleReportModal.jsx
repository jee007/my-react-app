import React from 'react';
    import {
      Dialog,
      DialogContent,
      DialogDescription,
      DialogHeader,
      DialogTitle,
      DialogFooter,
      DialogClose,
    } from "@/components/ui/dialog";
    import { Button } from "@/components/ui/button";

    const SampleReportModal = ({ isOpen, onClose }) => {
      if (!isOpen) return null;

      return (
        <Dialog open={isOpen} onOpenChange={onClose}>
          <DialogContent className="sm:max-w-[600px] md:max-w-[800px] lg:max-w-[900px] p-0">
            <DialogHeader className="p-6 pb-0">
              <DialogTitle className="text-2xl font-bold text-neutral-800">Sample Inspection Report</DialogTitle>
              <DialogDescription className="text-neutral-600">
                This is an example of our comprehensive inspection reports. Confidential details have been blurred for privacy.
              </DialogDescription>
            </DialogHeader>
            <div className="p-6 max-h-[70vh] overflow-y-auto">
              <div className="bg-neutral-200 rounded-lg p-4">
                <img 
                  className="w-full h-auto rounded-md shadow-lg border border-neutral-300"
                  alt="Sample inspection report with blurred confidential details like names and addresses, showing graphs and findings."
                 src="https://images.unsplash.com/photo-1703765886965-6531cb9eaf8d" />
              </div>
            </div>
            <DialogFooter className="p-6 pt-0">
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      );
    };

    export default SampleReportModal;