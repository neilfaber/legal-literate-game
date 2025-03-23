
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Download, X } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface TemplateViewerProps {
  template: {
    id: string;
    title: string;
    category: string;
    content: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

const TemplateViewer = ({ template, isOpen, onClose }: TemplateViewerProps) => {
  const handleDownload = () => {
    if (!template) return;
    
    const element = document.createElement('a');
    const file = new Blob([template.content], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${template.title.toLowerCase().replace(/\s+/g, '-')}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    
    toast({
      title: 'Template Downloaded',
      description: `${template.title} has been downloaded successfully.`,
    });
  };
  
  if (!template) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <div>
              <DialogTitle className="text-xl">{template.title}</DialogTitle>
              <DialogDescription className="text-sm text-gray-500 mt-1">
                Category: {template.category}
              </DialogDescription>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>
        
        <div className="flex-1 overflow-auto my-4 p-4 border rounded-md bg-gray-50 font-mono text-sm whitespace-pre-wrap">
          {template.content}
        </div>
        
        <DialogFooter>
          <Button 
            onClick={handleDownload} 
            className="bg-legalease-600 hover:bg-legalease-700 text-white"
          >
            <Download className="mr-2 h-4 w-4" /> Download Template
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TemplateViewer;
