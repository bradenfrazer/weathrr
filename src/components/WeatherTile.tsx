interface WeatherTileProps {
  label: string;
  value: string;
  unit?: string;
}

export const WeatherTile = ({ label, value, unit }: WeatherTileProps) => {
  return (
    <div className="grid flex-1 gap-2 rounded-lg bg-slate-900/25 p-8">
      <p className="text-sm uppercase tracking-widest">{label}</p>
      <p className="flex items-end justify-center gap-1 font-semibold">
        <span className="whitespace-nowrap text-4xl">{value}</span>
        {unit && <span className="text-xl">{unit}</span>}
      </p>
    </div>
  );
};
