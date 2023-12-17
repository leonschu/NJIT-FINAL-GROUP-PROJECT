import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import { v4 as uuid } from "uuid";

const ColumnData = [
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
        title: "Morgan R. - Time Travel Enthusiast",
        icon: "carbon:user-avatar-filled-alt",
        content:
        "I've visited websites from 1999 to 2050, and this is by far the best one yet! It's so good, I decided not to go back to the future. Now, if only I could remember where I parked my time machine..."
    },
    {
        id: uuid(),
        title: "Casey B. - Underwater Basket Weaver",
        icon: "carbon:user-avatar-filled-alt",
        content:
        "Who knew underwater basket weaving had so much in common with web design? This site is a breath of fresh air – figuratively speaking, of course. I can’t weave baskets underwater and surf the web at the same time, but if I could, I would!"
    }
];

export const Columns = () => {
    return (
        <SectionContainer className="benefits-lists grid gap-x-8 gap-y-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-16">
            {ColumnData.map((item) => (
                <div
                    id={item.id}
                    key={item.id}
                    className="benefits-list--item text-[#737373] text-left"
                >
                    <Icon icon={item.icon} className="mb-4 w-10 h-10 my-2" />
                    <h3 className="text-xl mb-2 font-medium text-black">
                        {item.title}
                    </h3>
                    <p>{item.content}</p>
                    <o className="flex">
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                    </o>
                </div>
            ))}
        </SectionContainer>
    );
};
