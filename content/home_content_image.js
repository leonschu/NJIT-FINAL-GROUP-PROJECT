import { v4 as uuid } from "uuid";

const home_content_image = [
    {
        id: uuid(),
        title: "We care about your money",
        content:
            "At Elite Business Café, we understand that money isn't just important – it's everything. Our exclusive environment caters to those who know the value of a dollar and the thrill of multiplying it. Here, we don't just serve coffee; we serve opportunities to expand your wealth. Remember, they say money can't buy happiness, but we've never seen anyone frown in a limo, clad in a $10,000 suit and a Rolex. Let us be your partner in your journey to unparalleled financial success.",
        align: "right",
        image: "/persona.jpg"
    },
    {
        id: uuid(),
        title: "A Refuge for Power Lunches and Networking",
        content:
            "In the hushed elegance of our cafe, our coveted couches provide the perfect setting for closing business deals, forging new connections, and exchanging ideas with influential individuals. The soft ambiance, the impeccable service, and the aroma of freshly brewed coffee create an atmosphere conducive to both creativity and productivity. Dont miss out on this opportunity and get your phrase to be able to reserve a table today.",
        align: "left",
        image: "/street.jpg"
    }
];

export default home_content_image;