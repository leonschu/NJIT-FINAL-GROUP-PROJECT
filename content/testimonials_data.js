import { v4 as uuid } from "uuid";

const testimonials_data = [
    {
        id: uuid(),
        title: "Jamie L. - Aspiring Astronaut",
        icon: "carbon:user-avatar-filled-alt",
        content:
        "I used to think rocket science was hard, then I found this website. Now, I'm pretty sure I could build a spaceship in my backyard. Bonus points for not having to wear a space suit while browsing!"
    },
    {
        id: uuid(),
        title: "Alex D. - Professional Cat Herder",
        icon: "carbon:user-avatar-filled-alt",
        content:
        "Managing a herd of cats is a walk in the park compared to finding a good website. But this site? It's like a giant catnip for my organizational needs. My feline friends and I give it two paws up!"
    },
    {
        id: uuid(),
        title: "Morgan R. - Account Executive",
        icon: "carbon:user-avatar-filled-alt",
        content:
        "I've logged enough hours in boardrooms to know a good chair when I see one, but the seats here, they're something else entirely."
    },
    {
        id: uuid(),
        title: "Casey B. - Startup Entrepreneur",
        icon: "carbon:user-avatar-filled-alt",
        content:
        "This place is my secret weapon, Elite Business Cafe is the central nervous system of the city, all the energy channeled right here through these windows."
    }
];

export default testimonials_data;