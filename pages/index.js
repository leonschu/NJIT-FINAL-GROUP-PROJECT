import { BadgeMessage, BadgeGroup} from "@components/Badge";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Layout } from "@components/Layout";
import { HomeBanner } from "@components/Banner";
import { Columns } from "@components/Columns";
import { ContentImage } from "@components/ContentImage";
import { Content } from "@components/Content";
import { MotionBTTContainer } from "@components/Motion";
import SEO from "@components/SEO/SEO";
import { getPurpose } from '../lib/markdown2';


export default function Home({ contentHtml }) {
    return (
        <Layout className="">
            <SEO
                title="Elite Business Caffee - Home"
                description="Seal Your Next Big Deal in the Ambience of Luxury and Sophistication."
            />
            <div className="main-wrapper bg-[#F3F5F8] relative z-10 pb-20 pt-20 ">
                {/* { Page Banner } */}
                <HomeBanner />
                {/* Components Container */}
                <SectionContainer className="components--container wrap wrap-px grid gap-8 sm:gap-24">
                <div className="mt-5" style={{ background: 'linear-gradient(103deg, #382E0A -1.23%, #A69D74 99.83%)', height: '2px' }}></div>
                    {/* Features */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="features" className="features">
                            <BadgeGroup alignment="center">
                                <BadgeMessage><b>Our Purpose</b></BadgeMessage>
                            </BadgeGroup>
                            <Content className="text-center" alignment="center">
                           
                                <p>
                                <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
                                </p>

                                <div className="mt-5" style={{ background: 'linear-gradient(103deg, #382E0A -1.23%, #A69D74 99.83%)', height: '2px' }}></div>
                            </Content>
                            <ContentImage />
                        
                        </SectionContainer>

                        <SectionContainer id="features" className="features">
                        </SectionContainer>

                    </MotionBTTContainer>
                    
                    {/* Testimonials */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer
                            id="testimonials"
                            className="benefits"
                        >
                            <BadgeGroup alignment="left">
                                <BadgeMessage>Testimonials</BadgeMessage>
                            </BadgeGroup>
                            <PageTitle className="" type="default">
                                This is what our customers have to say
                            </PageTitle>
                            <Columns />
                        </SectionContainer>
                    </MotionBTTContainer>
                    
                </SectionContainer>
            </div>
        </Layout>
    );
}

export async function getStaticProps() {
    const { contentHtml } = await getPurpose('our_purpose.md');
    return {
        props: {
            contentHtml,
        },
    };
}