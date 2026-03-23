import { useState } from "react";
import { X, ZoomIn, ZoomOut, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DocumentViewerProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  title: string;
  downloadFilename?: string;
}

const DocumentViewer = ({ isOpen, onClose, src, title, downloadFilename }: DocumentViewerProps) => {
  const [zoom, setZoom] = useState(100);

  if (!isOpen) return null;

  const isImage = /\.(jpg|jpeg|png|gif|webp)$/i.test(src);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative z-10 w-[90vw] h-[90vh] max-w-5xl bg-card border border-border rounded-xl shadow-2xl flex flex-col overflow-hidden">
        {/* Toolbar */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-card">
          <h3 className="font-heading font-semibold text-sm text-foreground truncate">{title}</h3>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setZoom((z) => Math.max(50, z - 25))}>
              <ZoomOut size={16} />
            </Button>
            <span className="text-xs text-muted-foreground w-12 text-center">{zoom}%</span>
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setZoom((z) => Math.min(200, z + 25))}>
              <ZoomIn size={16} />
            </Button>
            <div className="w-px h-5 bg-border mx-1" />
            <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
              <a href={src} download={downloadFilename || true}>
                <Download size={16} />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
              <a href={src} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={16} />
              </a>
            </Button>
            <div className="w-px h-5 bg-border mx-1" />
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={onClose}>
              <X size={16} />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto bg-muted/30 flex items-start justify-center p-6">
          {isImage ? (
            <img
              src={src}
              alt={title}
              style={{ width: `${zoom}%`, maxWidth: "none" }}
              className="rounded shadow-lg transition-all duration-200"
            />
          ) : (
            <iframe
              src={src}
              title={title}
              style={{ width: `${zoom}%`, height: `${zoom}%`, minHeight: "100%" }}
              className="bg-white rounded shadow-lg border-0"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default DocumentViewer;
