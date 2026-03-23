import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, X, ZoomIn, ZoomOut } from "lucide-react";

interface DocumentViewerProps {
  open: boolean;
  onClose: () => void;
  src: string;
  title: string;
  downloadName: string;
}

const DocumentViewer = ({ open, onClose, src, title, downloadName }: DocumentViewerProps) => {
  const [zoom, setZoom] = useState(100);

  useEffect(() => {
    if (open) setZoom(100);
  }, [open, src]);

  const isImage = useMemo(() => /\.(jpg|jpeg|png|webp|gif|svg)$/i.test(src), [src]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <button
        type="button"
        aria-label="Close document viewer"
        onClick={onClose}
        className="absolute inset-0 bg-background/85 backdrop-blur-sm"
      />

      <div className="relative z-10 w-[94vw] max-w-6xl h-[90vh] bg-card border border-border rounded-xl shadow-2xl flex flex-col overflow-hidden">
        <div className="flex items-center justify-between border-b border-border px-3 py-2">
          <p className="text-sm font-medium text-foreground truncate pr-4">{title}</p>

          <div className="flex items-center gap-1">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => setZoom((prev) => Math.max(50, prev - 10))}
              aria-label="Zoom out"
            >
              <ZoomOut size={16} />
            </Button>
            <span className="text-xs text-muted-foreground min-w-10 text-center">{zoom}%</span>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => setZoom((prev) => Math.min(200, prev + 10))}
              aria-label="Zoom in"
            >
              <ZoomIn size={16} />
            </Button>

            <Button type="button" variant="ghost" size="icon" className="h-8 w-8" asChild>
              <a href={src} download={downloadName} aria-label="Download document">
                <Download size={16} />
              </a>
            </Button>

            <Button type="button" variant="ghost" size="icon" className="h-8 w-8" asChild>
              <a href={src} target="_blank" rel="noopener noreferrer" aria-label="Open in new tab">
                <ExternalLink size={16} />
              </a>
            </Button>

            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={onClose}
              aria-label="Close viewer"
            >
              <X size={16} />
            </Button>
          </div>
        </div>

        <div className="flex-1 overflow-auto bg-muted/20 p-4">
          <div
            className="mx-auto bg-background rounded-lg overflow-hidden shadow-sm border border-border"
            style={{ width: `${zoom}%`, maxWidth: "1000px" }}
          >
            {isImage ? (
              <img src={src} alt={title} className="w-full h-auto block" />
            ) : (
              <iframe
                src={src}
                title={title}
                className="w-full border-0"
                style={{ minHeight: "70vh" }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentViewer;
