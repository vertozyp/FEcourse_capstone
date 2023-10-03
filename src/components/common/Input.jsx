export default function Input ({id, type, value, onChange, children, min, max}) {
    return (
        <div className="input">
            <label htmlFor={id}>{children}</label>
            <input type={type} id={id} value={value} onChange={onChange} min={min} max={max}/>
        </div>
    )
}