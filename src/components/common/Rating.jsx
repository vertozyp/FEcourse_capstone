export default function Rating ({img, name, rating, description}) {
    return (
        <figure className="rating">
            <figcaption>
                <img src={img} alt={`Photo of ${name}`}/>
                <div>
                    <h6>{name}</h6>
                    <span>{rating}</span>
                </div>
            </figcaption>
            <p>{description}</p>
        </figure>
    )
}