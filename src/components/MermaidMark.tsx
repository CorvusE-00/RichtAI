interface MermaidMarkProps {
  className?: string;
}

export function MermaidMark({ className = '' }: MermaidMarkProps) {
  return <img src="/images/mermaid-mark.png" alt="" className={className} aria-hidden="true" />;
}
