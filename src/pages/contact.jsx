import { ContactPageWrapper } from "@/components/contact/Contact.styled";
import ContactForm from "@/components/contact/ContactForm/ContactForm";
import Navbar from "@/components/Navbar/Navbar";

const ContactPage = () => {
  return (
    <ContactPageWrapper>
      <Navbar />
      <ContactForm />
    </ContactPageWrapper>
  );
};

export default ContactPage;
