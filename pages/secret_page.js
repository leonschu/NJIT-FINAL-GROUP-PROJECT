import { BadgeMessage, BadgeGroup, BadgeIcon } from "@components/Badge";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Layout } from "@components/Layout";
import { HomeBanner, HomeBanner_short  } from "@components/Banner";
import { Columns } from "@components/Columns";
import { ContentImage_loyalty } from "@components/ContentImage";
import { Content } from "@components/Content";
import { Accordion } from "@components/Accordion";
import { MotionBTTContainer } from "@components/Motion";
import SEO from "@components/SEO/SEO";
import {
    CardBody,
    CardGroup,
    CardHeader,
    CardImage,
    Card
} from "@components/Card";

export default function Home() {
    return (
        <Layout className="">
            <SEO
                title="Elite Business Caffee - Secret Page"
                description="TBU"
            />
            <div className="main-wrapper bg-[#F3F5F8] relative z-10 pb-20 pt-20 ">
                {/* { Page Banner } */}
                <HomeBanner_short />
                <SectionContainer className="components--container wrap wrap-px grid gap-8 sm:gap-24">
                
                    {/* Features */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="features" className="features">
                            <BadgeGroup alignment="center">
                                <BadgeMessage><b>Platinum Member</b></BadgeMessage>
                            </BadgeGroup>

                            <ContentImage_loyalty />
                        
                        </SectionContainer>

                        <SectionContainer id="features" className="features">
                        </SectionContainer>
                        
                    </MotionBTTContainer>
                    </SectionContainer>

            </div>
        </Layout>
    );
}
