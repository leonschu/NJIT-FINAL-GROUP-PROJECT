import { BadgeMessage, BadgeGroup, BadgeIcon } from "@components/Badge";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Layout } from "@components/Layout";
import { HomeBanner, HomeBanner_short  } from "@components/Banner";
import { Columns } from "@components/Columns";
import { ContentImage } from "@components/ContentImage";
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
                title="NutriTrack - A landing page template 🚀"
                description="Discover NutriTrack, the effortless way to plan your meals with the power of Notion. Streamline your nutrition journey and achieve your health goals with ease."
            />
            <div className="main-wrapper bg-[#F3F5F8] relative z-10 pb-20 pt-20 ">
                {/* { Page Banner } */}
                <HomeBanner_short />
                {/* Components Container */}
                <SectionContainer className="components--container wrap wrap-px grid gap-8 sm:gap-24">
                Privacy Policy

                Effective Date: [Insert Effective Date]

                This Privacy Policy (the "Policy") is designed to inform you about the collection, use, and disclosure of personal information when you use our website, services, and related applications (collectively, the "Services"). By accessing or using our Services, you consent to the practices described in this Policy.

                1. Information We Collect

                We collect several types of information from and about users of our Services, including:

                1.1 Personal Information

                Name
                Email address
                Mailing address
                Phone number
                Other contact information
                1.2 Usage Information

                IP address
                Browser type
                Operating system
                Referral source
                Pages visited
                Time and date of visits
                1.3 Cookies and Tracking Technologies

                We use cookies and similar tracking technologies to enhance your user experience and collect information about your usage of our Services. You can control cookies through your browser settings and other tools.

                2. How We Use Your Information

                We may use your information for various purposes, including but not limited to:

                2.1 Providing the Services

                To communicate with you
                To process transactions
                To fulfill your requests
                To provide customer support
                2.2 Analytics and Improvement

                To analyze user behavior and preferences
                To improve our Services
                To develop new features and offerings
                2.3 Marketing and Promotions

                To send promotional materials
                To conduct surveys or contests
                To personalize your experience
                3. Disclosure of Your Information

                We may disclose your information to third parties, including:

                3.1 Service Providers

                Third-party companies or individuals who assist with our operations
                3.2 Legal Compliance

                When required by law or legal process
                To protect our rights, privacy, safety, or property
                3.3 Business Transactions

                In connection with a merger, acquisition, or sale of all or a portion of our assets
                4. Your Choices

                You have choices regarding the information you provide and how it's used:

                4.1 Opt-Out

                You can opt-out of marketing communications by following the instructions provided in the communication.
                4.2 Cookies

                You can manage cookies through your browser settings.
                5. Data Security

                We take reasonable measures to protect your information from unauthorized access and disclosure. However, no method of data transmission or storage is completely secure, and we cannot guarantee the security of your data.

                6. International Data Transfers

                Your information may be transferred to and processed in countries outside your jurisdiction, where privacy laws may be less protective. By using our Services, you consent to such transfers.

                7. Children's Privacy

                Our Services are not intended for individuals under the age of 13, and we do not knowingly collect personal information from children.

                8. Changes to This Policy

                We may update this Policy to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated Policy on our website.

                9. Contact Us

                If you have any questions or concerns about this Policy or our data practices, please contact us at [insert contact information].
                                      
                </SectionContainer>
            </div>
        </Layout>
    );
}
