export default function Speciality ({img, title, price, description}) {
    return (
        <figure className="speciality">
            <img src={img} alt={`photo of ${title}`} />
            <figcaption>
                <h6>{title}</h6>
                <span>{price}</span>
            </figcaption>
            <p>{description}</p>
            <span>Order a delivery</span>
        </figure>
    )
}