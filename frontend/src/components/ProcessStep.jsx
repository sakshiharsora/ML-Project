function ProcessStep({ number, icon, label, title, description }) {
    return (
      <div className="system-flow-step">
  
        <div className="system-flow-number">
          {number}
        </div>
  
        <div className="system-flow-icon">
          {icon}
        </div>
  
        <div className="system-flow-content">
  
          {label && (
            <span>{label}</span>
          )}
  
          <h3>{title}</h3>
  
          <p>{description}</p>
  
        </div>
  
      </div>
    )
  }
  
  export default ProcessStep