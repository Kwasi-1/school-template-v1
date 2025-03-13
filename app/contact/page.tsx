import Head from "next/head";
import ContactSection from "@/components/contact/ContactSection";
import CampusContacts from "@/components/contact/CampusContacts";
import ContactForm from "@/components/contact/ContactForm";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Contact Us - Peskab Construction</title>
        <meta
          name="description"
          content="Get in touch with Peskab Construction for personalized consultation and expert advice."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ContactSection />

      <CampusContacts />

      <ContactForm />
    </div>
  );
}
