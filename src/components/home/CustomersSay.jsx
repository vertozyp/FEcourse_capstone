import Rating from "../common/Rating"

export default function CustomersSay () {
    return (
        <section id="customerssay">
            <h4>Testamonials</h4>
            <div>
                <Rating 
                    img="user1.jpg" 
                    name="David" 
                    rating="★★★★★"
                    description="The food is always master crafted and tastes incredible."
                />
                <Rating 
                    img="user2.jpg" 
                    name="Kelly" 
                    rating="★★★★"
                    description="I love feel of this restaurant. I could sit here all day long."
                />
                <Rating 
                    img="user3.jpg" 
                    name="Rose" 
                    rating="★★★★"
                    description="Staff in this restaurant are really pleasant."
                />
                <Rating 
                    img="user4.jpg" 
                    name="John" 
                    rating="★★★★★"
                    description="If you don’t know where to go, this is the way."
                />
            </div>
        </section>
    )
}