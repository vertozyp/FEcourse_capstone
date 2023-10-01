export default function Button ({text, onClick}) {
    return <h3 className="button" onClick={onClick}>{text}</h3>
}