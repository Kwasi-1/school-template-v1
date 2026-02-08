import ContactSection from "@/components/contact/ContactSection";
import CampusContacts from "@/components/contact/CampusContacts";
import ContactForm from "@/components/contact/ContactForm";
import { siteConfig } from "@/content/site-config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Contact Us - ${siteConfig.name}`,
  description: `Get in touch with ${siteConfig.name} for personalized consultation and expert advice.`,
};

export default function Contact() {
  return (
    <div className="min-h-screen">
      <ContactSection />

      <CampusContacts />

      <ContactForm />
    </div>
  );
}
