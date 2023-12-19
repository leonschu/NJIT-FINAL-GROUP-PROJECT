import { v4 as uuid } from "uuid";

const menu_data = [
    {
        id: uuid(),
        title: "Cosmic Caramel Nebula",
        content:
            "Immerse yourself in the wonders of the cosmos with our Cosmic Caramel Nebula. This exquisite concoction is a blend of rich espresso and frothed milk, elegantly swirled with caramel and sprinkled with edible gold dust, evoking the shimmering stars in a galaxy. A touch of cinnamon adds a spice of mystery, mirroring the endless exploration of space. This drink is a tribute to the innovative spirit and creative minds at NJIT, crafted for those who draw inspiration from the stars. It's not just a coffee; it's an experience that fuels the imagination of entrepreneurs and thinkers alike, making it a unique and exclusive offering on our menu.",
        align: "left",
        image: "/drink1.jpg"
    },
    {
        id: uuid(),
        title: "Quantum Quencher Mocha",
        content:
            "For the daring and the innovators, the Quantum Quencher Mocha is a testament to the bold and the brave. This drink merges the rich intensity of dark chocolate with the robust flavor of double espresso, balanced perfectly with steamed milk. But what truly sets it apart is the hint of chili, adding an unexpected twist that challenges the palate, much like the unpredictable nature of quantum physics. Topped with quantum foam whipped cream, it embodies the cutting-edge spirit of technology and innovation. It's crafted for those who aren't afraid to push boundaries, making it a unique addition to our menu that resonates with risk-takers and tech enthusiasts.",
        align: "right",
        image: "/drink2.jpg"
    },
    {
        id: uuid(),
        title: "Engineer's Espresso Elixir",
        content:
            "Precision and simplicity find their perfect blend in the Engineer's Espresso Elixir. This drink features a single-origin espresso, delicately enhanced with a drop of hazelnut syrup and complemented by the smoothness of steamed oat milk. The crowning touch is a tiny, edible gear-shaped chocolate, symbolizing the intricate and detailed work of engineers. This drink is a nod to the focused and meticulous nature of engineering, made with a rare coffee bean known for its clarity-inducing properties. It's a special brew, exclusively crafted for those who appreciate the fine details in both their work and their coffee, making it a distinctive and beloved choice on our menu.",
        align: "left",
        image: "/drink3.jpg"
    },
    {
        id: uuid(),
        title: "Architect’s Aromatic Alchemy",
        content:
            "The Architect’s Aromatic Alchemy is a masterpiece of flavor and design. This visually stunning drink combines light roast coffee with a delicate infusion of lavender in the milk foam, creating a soothing aroma. The foam is artistically drizzled with honey and dusted with cocoa powder, resembling the intricate details found in architectural designs. It's a tribute to the art of architecture, blending aesthetics with flavor in a way that appeals to those with a keen eye for design. The unique artisanal approach and calming effect of this drink make it an exclusive and sought-after item on our menu, particularly among those who appreciate beauty in both form and taste.",
        align: "right",
        image: "/drink4.jpg"
    },
    {
        id: uuid(),
        title: "Biotech Brew",
        content:
            "The Biotech Brew is a harmonious fusion of health and science. This innovative drink combines the refreshing qualities of green tea with the energizing kick of espresso, enhanced with a hint of mint extract and the zest of lemon. The swirl of spirulina, forming a DNA helix design atop the drink, not only adds a nutrient boost but also symbolizes the power and potential of biotechnology. This drink is specially crafted for health-conscious innovators and biotech enthusiasts, offering a unique blend that caters to both well-being and energy needs. It stands out on our menu as an exclusive choice for those who are passionate about the intersection of health, science, and coffee.",
        align: "left",
        image: "/drink5.jpg"
    }
];

export default menu_data;