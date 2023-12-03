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
                <h1>Privacy Policy</h1>
                <p><strong>Effective Date:</strong> [Insert Effective Date]</p>
                <p>This Privacy Policy (the &ldquo;Policy&rdquo;) is designed to inform you about the collection, use, and disclosure of personal information when you use our website, services, and related applications (collectively, the &ldquo;Services&rdquo;). By accessing or using our Services, you consent to the practices described in this Policy.</p>
                <h2>1. Information We Collect</h2>
                <p>We collect several types of information from and about users of our Services, including:</p>
                <h3>1.1 Personal Information</h3>
                <ul>
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Mailing address</li>
                    <li>Phone number</li>
                    <li>Other contact information</li>
                </ul>
                <h3>1.2 Usage Information</h3>
                <ul>
                    <li>IP address</li>
                    <li>Browser type</li>
                    <li>Operating system</li>
                    <li>Referral source</li>
                    <li>Pages visited</li>
                    <li>Time and date of visits</li>
                </ul>
                <h3>1.3 Cookies and Tracking Technologies</h3>
                <p>We use cookies and similar tracking technologies to enhance your user experience and collect information about your usage of our Services. You can control cookies through your browser settings and other tools.</p>
                <h2>2. How We Use Your Information</h2>
                <p>We may use your information for various purposes, including but not limited to:</p>
                <h3>2.1 Providing the Services</h3>
                <ul>
                    <li>To communicate with you</li>
                    <li>To process transactions</li>
                    <li>To fulfill your requests</li>
                    <li>To provide customer support</li>
                </ul>
                <h3>2.2 Analytics and Improvement</h3>
                <ul>
                    <li>To analyze user behavior and preferences</li>
                    <li>To improve our Services</li>
                    <li>To develop new features and offerings</li>
                </ul>
                <h3>2.3 Marketing and Promotions</h3>
                <ul>
                    <li>To send promotional materials</li>
                    <li>To conduct surveys or contests</li>
                    <li>To personalize your experience</li>
                </ul>
                <h2>3. Disclosure of Your Information</h2>
                <p>We may disclose your information to third parties, including:</p>
                <h3>3.1 Service Providers</h3>
                <p>Third-party companies or individuals who assist with our operations</p>
                <h3>3.2 Legal Compliance</h3>
                <p>When required by law or legal process<br>To protect our rights, privacy, safety, or property</p>
                <h3>3.3 Business Transactions</h3>
                <p>In connection with a merger, acquisition, or sale of all or a portion of our assets</p>
                <h2>4. Your Choices</h2>
                <p>You have choices regarding the information you provide and how it's used:</p>
                <h3>4.1 Opt-Out</h3>
                <p>You can opt-out of marketing communications by following the instructions provided in the communication.</p>
                <h3>4.2 Cookies</h3>
                <p>You can manage cookies through your browser settings.</p>
                <h2>5. Data Security</h2>
                <p>We take reasonable measures to protect your information from unauthorized access and disclosure. However, no method of data transmission or storage is completely secure, and we cannot guarantee the security of your data.</p>
                <h2>6. International Data Transfers</h2>
                <p>Your information may be transferred to and processed in countries outside your jurisdiction, where privacy laws may be less protective. By using our Services, you consent to such transfers.</p>
                <h2>7. Children's Privacy</h2>
                <p>Our Services are not intended for individuals under the age of 13, and we do not knowingly collect personal information from children.</p>
                <h2>8. Changes to This Policy</h2>
                <p>We may update this Policy to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated Policy on our website.</p>
                <h2>9. Contact Us</h2>
                <p>If you have any questions or concerns about this Policy or our data practices, please contact us at [insert contact information].</p>

                                      
                </SectionContainer>
            </div>
        </Layout>
    );
}
