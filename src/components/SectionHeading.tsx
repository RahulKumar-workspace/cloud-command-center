interface Props {
  label: string;
  sub?: string;
}

const SectionHeading = ({ label, sub }: Props) => (
  <div className="text-center space-y-2">
    {sub && <span className="text-xs text-primary font-medium tracking-widest uppercase">✦ {sub}</span>}
    <h2 className="text-3xl md:text-4xl font-bold">{label}</h2>
    <div className="w-12 h-1 bg-primary mx-auto mt-3 rounded-full" />
  </div>
);

export default SectionHeading;
