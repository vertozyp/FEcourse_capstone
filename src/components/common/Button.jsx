export default function Button ({children, onClick, type}) {
    return <button aria-label="On Click" onClick={onClick} type={type}>{children}</button>
}