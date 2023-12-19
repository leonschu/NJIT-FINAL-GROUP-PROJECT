import { BadgeMessage, BadgeGroup, BadgeIcon } from "@components/Badge";
import { SectionContainer } from "@components/Section";
import { Layout } from "@components/Layout";
import { ContentImage_menu } from "@components/ContentImage";
import { MotionBTTContainer } from "@components/Motion";
import SEO from "@components/SEO/SEO";
import { HomeBanner_short } from "@components/Banner";

export default function Home() {
    return (
        <Layout className="">
            <SEO
                title="Elite Business Caffee - Menu"
                description="Seal Your Next Big Deal in the Ambience of Luxury and Sophistication."
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
                                <BadgeMessage><b>Drink Menu</b></BadgeMessage>
                            </BadgeGroup>

                            <ContentImage_menu />
                        
                        </SectionContainer>

                        <SectionContainer id="features" className="features">
                        </SectionContainer>
                        

                    </MotionBTTContainer>
                    </SectionContainer>

            </div>
        </Layout>
    );
}
