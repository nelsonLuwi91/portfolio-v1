export function SkillCard({ name }: { name: string }) {
  return (
    <div className="flex flex-col items-center p-4 rounded-lg bg-card border shadow-sm">
      <h3 className="text-lg font-medium">{name}</h3>
    </div>
  )
}
