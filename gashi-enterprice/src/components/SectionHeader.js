const SectionHeader = ({icon, title,className,preview}) => {
  return(
      <div className={`section__head ${className}`}>
          {/*<span>{icon}</span>*/}
          <h4>{preview}</h4>
          <h2>{title}</h2>
      </div>
  )
}
export default SectionHeader