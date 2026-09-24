function StatCard({ icon, value, label }) {
  return (
    <div className="glass-card highlight-hover stat-widget">
      <div>
        <span className="stat-label">{label}</span>
        <h2 className="stat-value">{value}</h2>
      </div>

      <div className="stat-icon-wrapper indigo">
        {icon}
      </div>
    </div>
  )
}

export default StatCard