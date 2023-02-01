import {
  Button,
  Form,
  Input,
  TextArea,
  Title,
  ContactFormWrapper,
} from "./ContactForm.styled";

const ContactForm = () => {
  return (
    <ContactFormWrapper>
      <Title>Contact me!</Title>
      <Form>
        <Input type="text" placeholder="Name" />
        <Input type="email" placeholder="Email" />
        <Input type="text" placeholder="Subject" />
        <TextArea placeholder="Message" />

        <Button>Send</Button>
      </Form>
    </ContactFormWrapper>
  );
};

export default ContactForm;
