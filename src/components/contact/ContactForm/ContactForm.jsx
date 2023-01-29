import {
  Button,
  Form,
  Input,
  TextArea,
  Title,
  Wrapper,
} from "./ContactForm.styled";

const ContactForm = () => {
  return (
    <Wrapper>
      <Title>Contact me!</Title>
      <Form>
        <Input type="text" placeholder="Name" />
        <Input type="email" placeholder="Email" />
        <Input type="text" placeholder="Subject" />
        <TextArea placeholder="Message" />

        <Button>Send</Button>
      </Form>
    </Wrapper>
  );
};

export default ContactForm;
