import { getMarkdownContent } from '../lib/markdown';
import { Layout } from "@components/Layout";
import SEO from "@components/SEO/SEO";
import { SectionContainer } from "@components/Section";
import { HomeBanner_short } from "@components/Banner";
import { BadgeGroup, BadgeMessage } from "@components/Badge"; // Import both BadgeGroup and BadgeMessage

export default function PrivacyPolicy({ contentHtml, badgeMessage }) {
    return (
        <Layout className="">
            <SEO
                title="Elite Business Cafe - Privacy Policy"
                description="Learn about our privacy practices."
            />
            <div className="main-wrapper bg-[#F3F5F8] relative z-10 pb-20 pt-20 ">
                <HomeBanner_short />
                <SectionContainer className="components--container wrap wrap-px grid gap-8 sm:gap-24">
                    {/* BadgeGroup and BadgeMessage to display the badge message */}
                    <BadgeGroup alignment="center">
                                <BadgeMessage><b><div dangerouslySetInnerHTML={{ __html: badgeMessage }} /></b></BadgeMessage>
                    </BadgeGroup>

                    {/* Render the Markdown content */}
                    
                    <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
                </SectionContainer>
            </div>
        </Layout>
    );
}

export async function getStaticProps() {
    const { contentHtml, badgeMessage } = await getMarkdownContent('privacy-policy.md');
    return {
        props: {
            contentHtml,
            badgeMessage,
        },
    };
}
