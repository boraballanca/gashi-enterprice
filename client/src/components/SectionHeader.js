const SectionHeader = ({title, className, preview}) => {
    return (
        <div className={`section__head ${className}`}>
            <h4>{preview}</h4>
            <h2>{title}</h2>
        </div>
    )
}
export default SectionHeader