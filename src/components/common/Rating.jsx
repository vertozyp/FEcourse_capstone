export default function Rating ({img, name, rating, description}) {
    return (
        <figure>
            <h6>Rating</h6>
            <img src={img} alt={`Photo of ${name}`}/>
            <h6>{name}</h6>
            <span>{rating}</span>
            <p>{description}</p>
        </figure>
    )
}