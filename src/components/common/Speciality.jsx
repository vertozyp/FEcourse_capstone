export default function Speciality ({img, title, price, description}) {
    return (
        <figure>
            <img src={img} alt={`photo of ${title}`} />
            <h6>{title}</h6>
            <span>{price}</span>
            <p>{description}</p>
            <span>Order a delivery</span>
        </figure>
    )
}