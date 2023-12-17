import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { v4 as uuid } from "uuid";

const ContentImageData = [
    {
        id: uuid(),
        title: "We care about your money",
        content:
            "At Elite Business Café, we understand that money isn't just important – it's everything. Our exclusive environment caters to those who know the value of a dollar and the thrill of multiplying it. Here, we don't just serve coffee; we serve opportunities to expand your wealth. Remember, they say money can't buy happiness, but we've never seen anyone frown in a limo, clad in a $10,000 suit and a Rolex. Let us be your partner in your journey to unparalleled financial success.",
        align: "right",
        image: "/persona.png"
    },
    {
        id: uuid(),
        title: "A Refuge for Power Lunches and Networking",
        content:
            "In the hushed elegance of our cafe, our coveted couches provide the perfect setting for closing business deals, forging new connections, and exchanging ideas with influential individuals. The soft ambiance, the impeccable service, and the aroma of freshly brewed coffee create an atmosphere conducive to both creativity and productivity. Dont miss out on this opportunity and get your phrase to be able to reserve a table today.",
        align: "left",
        image: "/street.png"
    }
];

export const ContentImage = () => {
    return (
        <SectionContainer className="process-items mt-16 space-y-16">
            {ContentImageData.map((item) => (
                <div
                    id={item.id}
                    key={item.id}
                    className="process-item--container grid md:grid-cols-2 gap-y-8"
                >
                    <div
                        className={`process-item--image rounded-3xl ${
                            item.align === "left" ? "md:order-1" : ""
                        }`}
                    >
                        <Image
                            src={item.image}
                            width={512}
                            height={512}
                            objectFit="cover"
                            alt="Process Banner 1"
                            className="drop-shadow-xl w-full offset-y-0 offset-x-8 blur-16"
                        />
                    </div>
                    
                    <div
                        className={`process-item--content ${
                            item.align === "left"
                                ? "md:pr-16 lg:pr-24 xl:pr-32 ml-auto"
                                : "md:pl-16 lg:pl-24 xl:pl-32  mr-auto"
                        } my-auto content text-black/60`}
                    >
                        <h3 className="mb-6 h4 md:h3 font-semibold text-black">
                            {item.title}
                        </h3>
                        <div className="mt-5" style={{ background: 'linear-gradient(103deg, #382E0A -1.23%, #A69D74 99.83%)', height: '2px' }}></div>
                        <p>{item.content}</p>
                        <ul className="process-item--list space-y-3">
                            {item.listItems?.length &&
                                item.listItems.map((listItem) => (
                                    <li
                                        id={listItem.id}
                                        key={listItem.id}
                                        className="inline-grid grid-flow-col-dense"
                                    >
                                        <Icon
                                            icon="ph:seal-check-bold"
                                            className="w-6 h-6 text-secondary-500 mr-2"
                                        />
                                        {listItem.content}
                                    </li>
                                ))}
                        </ul>
                        
                    </div>
                    
                </div>
            ))}
        </SectionContainer>
    );
};


const ContentImageData_inside = [
    {
        id: uuid(),
        align: "left",
        image: "/inside.png"
    }
];



export const ContentImage_inside = () => {
    return (
        <SectionContainer className="process-items mt-16 space-y-16">
            {ContentImageData_inside.map((item) => (
                <div
                    id={item.id}
                    key={item.id}
                    className="process-item--container grid md:grid-cols-2 gap-y-8"
                >
                    <div
                        className={`process-item--image rounded-3xl ${
                            item.align === "left" ? "md:order-1" : ""
                        }`}
                    >
                        <Image
                            src={item.image}
                            width={512}
                            height={512}
                            objectFit="cover"
                            alt="Process Banner 1"
                            className="drop-shadow-xl w-full offset-y-0 offset-x-8 blur-16"
                        />
                    </div>
                    
                    <div
                        className={`process-item--content ${
                            item.align === "left"
                                ? "md:pr-16 lg:pr-24 xl:pr-32 ml-auto"
                                : "md:pl-16 lg:pl-24 xl:pl-32  mr-auto"
                        } my-auto content text-black/60`}
                    >

            
                        <p>Stepping into the cafe, you are immediately enveloped in a sense of warmth and luxury. The rich aroma of freshly brewed coffee mingles with the sweet scent of pastries, creating an irresistible invitation to indulge. Soft, ambient lighting casts a flattering glow over the plush furnishings, while carefully curated artwork adorns the walls, adding a touch of sophistication to the inviting space.</p>
                        <br></br>
                        <p>Underfoot, a plush carpet cushions your every step, its soft fibers providing a welcome respite from the harshness of the outside world. Comfortable couches beckon you to sink into their embrace, promising hours of relaxation and conversation. Their rich fabrics and ample proportions exude an air of opulence, while their plush cushions promise to cradle you in comfort.</p>
                        <br></br>
                        <p>The cafe&aposs seating arrangements are designed to cater to a variety of preferences. For those seeking intimate conversations, cozy booths tucked away in corners provide a sense of privacy and seclusion. For larger groups, spacious tables offer ample room to spread out and enjoy each others company.</p>

                        <div class="seating-capacity">
                            <strong>Seating capacity:</strong> 50 people
                        </div>
                        
                        <div class="booths">
                        <strong>Booths 1-4:</strong> There are four cozy booths located in the corners of the cafe. Each booth can comfortably seat four people.
                        </div>
                        <div class="tables">
                        <strong>Tables 1-6:</strong> There are 10 tables located throughout the cafe. The tables are a variety of sizes, from small tables for two people to large tables for six people.
                        </div>
                        <div class="couches">
                        <strong>Couches 1-8 (Reservable):</strong> There are two large couches located in the center of the cafe. The couches are plush and comfortable, and they can each seat up to four people.
                        </div>
               
        

                        <ul className="process-item--list space-y-3">
                            {item.listItems?.length &&
                                item.listItems.map((listItem) => (
                                    <li
                                        id={listItem.id}
                                        key={listItem.id}
                                        className="inline-grid grid-flow-col-dense"
                                    >
                                        <Icon
                                            icon="ph:seal-check-bold"
                                            className="w-6 h-6 text-secondary-500 mr-2"
                                        />
                                        {listItem.content}
                                    </li>
                                ))}
                        </ul>
                        
                    </div>
                    
                </div>
            ))}
        </SectionContainer>
    );
};


const ContentImageData_menu = [
    {
        id: uuid(),
        title: "Cosmic Caramel Nebula",
        content:
            "Immerse yourself in the wonders of the cosmos with our Cosmic Caramel Nebula. This exquisite concoction is a blend of rich espresso and frothed milk, elegantly swirled with caramel and sprinkled with edible gold dust, evoking the shimmering stars in a galaxy. A touch of cinnamon adds a spice of mystery, mirroring the endless exploration of space. This drink is a tribute to the innovative spirit and creative minds at NJIT, crafted for those who draw inspiration from the stars. It's not just a coffee; it's an experience that fuels the imagination of entrepreneurs and thinkers alike, making it a unique and exclusive offering on our menu.",
        align: "left",
        image: "/drink1.png"
    },
    {
        id: uuid(),
        title: "Quantum Quencher Mocha",
        content:
            "For the daring and the innovators, the Quantum Quencher Mocha is a testament to the bold and the brave. This drink merges the rich intensity of dark chocolate with the robust flavor of double espresso, balanced perfectly with steamed milk. But what truly sets it apart is the hint of chili, adding an unexpected twist that challenges the palate, much like the unpredictable nature of quantum physics. Topped with quantum foam whipped cream, it embodies the cutting-edge spirit of technology and innovation. It's crafted for those who aren't afraid to push boundaries, making it a unique addition to our menu that resonates with risk-takers and tech enthusiasts.",
        align: "right",
        image: "/drink2.png"
    },
    {
        id: uuid(),
        title: "Engineer's Espresso Elixir",
        content:
            "Precision and simplicity find their perfect blend in the Engineer's Espresso Elixir. This drink features a single-origin espresso, delicately enhanced with a drop of hazelnut syrup and complemented by the smoothness of steamed oat milk. The crowning touch is a tiny, edible gear-shaped chocolate, symbolizing the intricate and detailed work of engineers. This drink is a nod to the focused and meticulous nature of engineering, made with a rare coffee bean known for its clarity-inducing properties. It's a special brew, exclusively crafted for those who appreciate the fine details in both their work and their coffee, making it a distinctive and beloved choice on our menu.",
        align: "left",
        image: "/drink3.png"
    },
    {
        id: uuid(),
        title: "Architect’s Aromatic Alchemy",
        content:
            "The Architect’s Aromatic Alchemy is a masterpiece of flavor and design. This visually stunning drink combines light roast coffee with a delicate infusion of lavender in the milk foam, creating a soothing aroma. The foam is artistically drizzled with honey and dusted with cocoa powder, resembling the intricate details found in architectural designs. It's a tribute to the art of architecture, blending aesthetics with flavor in a way that appeals to those with a keen eye for design. The unique artisanal approach and calming effect of this drink make it an exclusive and sought-after item on our menu, particularly among those who appreciate beauty in both form and taste.",
        align: "right",
        image: "/drink4.png"
    },
    {
        id: uuid(),
        title: "Biotech Brew",
        content:
            "The Biotech Brew is a harmonious fusion of health and science. This innovative drink combines the refreshing qualities of green tea with the energizing kick of espresso, enhanced with a hint of mint extract and the zest of lemon. The swirl of spirulina, forming a DNA helix design atop the drink, not only adds a nutrient boost but also symbolizes the power and potential of biotechnology. This drink is specially crafted for health-conscious innovators and biotech enthusiasts, offering a unique blend that caters to both well-being and energy needs. It stands out on our menu as an exclusive choice for those who are passionate about the intersection of health, science, and coffee.",
        align: "left",
        image: "/drink5.png"
    }
];

export const ContentImage_menu = () => {
    return (
        <SectionContainer className="process-items mt-16 space-y-16">
            {ContentImageData_menu.map((item) => (
                <div
                    id={item.id}
                    key={item.id}
                    className="process-item--container grid md:grid-cols-2 gap-y-8"
                >
                    <div
                        className={`process-item--image rounded-3xl ${
                            item.align === "left" ? "md:order-1" : ""
                        }`}
                    >
                        <Image
                            src={item.image}
                            width={512}
                            height={512}
                            objectFit="cover"
                            alt="Process Banner 1"
                            className="drop-shadow-xl w-full offset-y-0 offset-x-8 blur-16"
                        />
                    </div>
                    
                    <div
                        className={`process-item--content ${
                            item.align === "left"
                                ? "md:pr-16 lg:pr-24 xl:pr-32 ml-auto"
                                : "md:pl-16 lg:pl-24 xl:pl-32  mr-auto"
                        } my-auto content text-black/60`}
                    >
                        <h3 className="mb-6 h4 md:h3 font-semibold text-black">
                            {item.title}
                        </h3>
                        <div className="mt-5" style={{ background: 'linear-gradient(103deg, #382E0A -1.23%, #A69D74 99.83%)', height: '2px' }}></div>
                        <p>{item.content}</p>
                        <ul className="process-item--list space-y-3">
                            {item.listItems?.length &&
                                item.listItems.map((listItem) => (
                                    <li
                                        id={listItem.id}
                                        key={listItem.id}
                                        className="inline-grid grid-flow-col-dense"
                                    >
                                        <Icon
                                            icon="ph:seal-check-bold"
                                            className="w-6 h-6 text-secondary-500 mr-2"
                                        />
                                        {listItem.content}
                                    </li>
                                ))}
                        </ul>
                        
                    </div>
                    
                </div>
            ))}
        </SectionContainer>
    );
};


const ContentImageData_loyalty = [
    {
        id: uuid(),
        title: "Unlock Exclusive Rewards",
        align: "right",
        image: "/card.png"
    }
];

export const ContentImage_loyalty = () => {
    return (
        <SectionContainer className="process-items mt-16 space-y-16">
            {ContentImageData_loyalty.map((item) => (
                <div
                    id={item.id}
                    key={item.id}
                    className="process-item--container grid md:grid-cols-2 gap-y-8"
                >
                    <div
                        className={`process-item--image rounded-3xl ${
                            item.align === "left" ? "md:order-1" : ""
                        }`}
                    >
                        <Image
                            src={item.image}
                            width={512}
                            height={512}
                            objectFit="cover"
                            alt="Process Banner 1"
                            className="drop-shadow-xl w-full offset-y-0 offset-x-8 blur-16"
                        />
                    </div>
                    
                    <div
                        className={`process-item--content ${
                            item.align === "left"
                                ? "md:pr-16 lg:pr-24 xl:pr-32 ml-auto"
                                : "md:pl-16 lg:pl-24 xl:pl-32  mr-auto"
                        } my-auto content text-black/60`}
                    >
                        <h3 className="mb-6 h4 md:h3 font-semibold text-black">
                            {item.title}
                        </h3>
                        <div className="mt-5" style={{ background: 'linear-gradient(103deg, #382E0A -1.23%, #A69D74 99.83%)', height: '2px' }}></div>
                        <p>As a valued customer, you're invited to join our exclusive loyalty program, where you'll earn points for every purchase you make and unlock a world of exciting rewards.</p>
    
                        <ul>
                            <li>Free drinks</li>
                            <li>Free food items</li>
                            <li>Early access to new products</li>
                            <li>Invitations to special events</li>
                        </ul>

                        <p>Thank you for being a valued customer!</p>

                        <ul className="process-item--list space-y-3">
                            {item.listItems?.length &&
                                item.listItems.map((listItem) => (
                                    <li
                                        id={listItem.id}
                                        key={listItem.id}
                                        className="inline-grid grid-flow-col-dense"
                                    >
                                        <Icon
                                            icon="ph:seal-check-bold"
                                            className="w-6 h-6 text-secondary-500 mr-2"
                                        />
                                        {listItem.content}
                                    </li>
                                ))}
                        </ul>
                        
                    </div>
                    
                </div>
            ))}
        </SectionContainer>
    );
};