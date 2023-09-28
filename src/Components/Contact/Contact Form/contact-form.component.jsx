import { useEffect, useState, useRef } from "react";
import InputField from "../Input/input.component";
import TextField from "../Textarea/textarea.component";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import {
  ContactSection,
  Form,
  FormHolder,
  Heading,
  Text,
  Button,
  Alert,
  AlertContainer,
  TextAlert,
} from "./contact-form.styles";

const ContactForm = () => {
  const captcha = useRef(null);
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    role: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [capVal, setCapVal] = useState(null);

  const renderAlert = () => (
    <Alert>
      <AlertContainer>
        <TextAlert>Your message sent successfully</TextAlert>
      </AlertContainer>
    </Alert>
  );

  const refresh = () => window.location.reload(true);

  const handleSubmit = (e) => {
    captcha.current.reset();
    e.preventDefault();
    emailjs
      .send("service_b2mafh9", "template_2n0vqoq", values, "BdPPPjGG5Y0xDqapC")

      .then(
        (response) => {
          console.log("SUCCESS!", response);
          setValues({
            fullName: "",
            email: "",
            message: "",
          });
          setStatus("SUCCESS");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  useEffect(() => {
    if (status === "SUCCESS") {
      setTimeout(() => {
        setStatus("");
        renderAlert();
        refresh();
      }, 2000);
    }
  }, [status]);

  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <ContactSection>
      {status && renderAlert()}
      <FormHolder>
        <Form onSubmit={handleSubmit}>
          <Heading>Contact Me</Heading>
          <Text>Feel free to send a message.</Text>
          <InputField
            value={values.fullName}
            handleChange={handleChange}
            label="Full Name"
            name="fullName"
            type="text"
            placeholder="Your name"
            required
          />
          <InputField
            value={values.email}
            handleChange={handleChange}
            label="E-Mail"
            name="email"
            type="email"
            placeholder="youremail@example.com"
            required
          />
          <TextField
            value={values.message}
            handleChange={handleChange}
            label="Your message here"
            name="message"
          />
          <ReCAPTCHA
            ref={captcha}
            sitekey={import.meta.env.VITE_SITE_KEY}
            onChange={(val) => setCapVal(val)}
          />
          <Button
            disabled={!capVal}
            type="submit"
            onClick={() => renderAlert()}
          >
            Send
          </Button>
        </Form>
      </FormHolder>
    </ContactSection>
  );
};

export default ContactForm;
