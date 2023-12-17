import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { v4 as uuid } from "uuid";

import menu_data from '../../content/menu_data';
import home_content_image from '../../content/home_content_image';




export const ContentImage = () => {
    return (
        <SectionContainer className="process-items mt-16 space-y-16">
            {home_content_image.map((item) => (
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




export const ContentImage_menu = () => {
    return (
        <SectionContainer className="process-items mt-16 space-y-16">
            {menu_data.map((item) => (
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
                        <p>As a valued customer, you&apos;re invited to join our exclusive loyalty program, where you&apos;ll earn points for every purchase you make and unlock a world of exciting rewards.</p>
    
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
