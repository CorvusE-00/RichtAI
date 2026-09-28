interface MermaidMarkProps {
  className?: string;
}

export function MermaidMark({ className = '' }: MermaidMarkProps) {
  return (
    <span className={`mermaid-mark ${className}`} aria-hidden="true">
      <span className="mermaid-mark__silhouette" />
    </span>
  );
}
