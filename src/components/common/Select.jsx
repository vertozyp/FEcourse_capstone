export default function Select ({id, value, onChange, options, children}) {
    return (
        <div className="input">
            <label htmlFor={id}>{children}</label>
            <select id={id} value={value} onChange={onChange}>
                {options.map(opt => <option key={opt}>{opt}</option>)}
            </select>
        </div>
    )
}