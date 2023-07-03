const ServiceLabel = (id,checked,text,checkboxChange) => {
    return (
        <label htmlFor={id}>
            <input
                type="checkbox"
                id={id}
                name={id}
                checked={checked}
                onChange={checkboxChange}
            />
            {text}
        </label>
    )
}
export default ServiceLabel