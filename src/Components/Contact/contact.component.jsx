// import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";

// import {
//   ContactSection,
//   Container,
//   Heading,
//   Text,
//   ContactForm,
//   Input,
//   TextArea,
//   Label,
//   Button,
// } from "./contact.styles";

// // eredeti
// // export const Contact = () => {
// //   const form = useRef();

// //   const [buttonText, setButtonText] = useState("Send");
// //   const changeText = (text) => {
// //     setButtonText(text);
// //   };

// //   const sendEmail = (e) => {
// //     e.preventDefault();

// //     emailjs
// //       .sendForm(
// //         "service_b2mafh9",
// //         "template_2n0vqoq",
// //         form.current,
// //         "BdPPPjGG5Y0xDqapC"
// //       )
// //       .then(
// //         (result) => {
// //           console.log(result.text);
// //         },
// //         (error) => {
// //           console.log(error.text);
// //         }
// //       );
// //   };

// //   return (
// //     <ContactSection>
// //       <Container>
// //         <Heading>Contact Us</Heading>
// //         <Text>
// //           Feel free to send us a message about anything you might need help
// //           with.
// //         </Text>
// //         <ContactForm ref={form} onSubmit={sendEmail}>
// //           <Label>Name</Label>
// //           <Input type="text" name="user_name" />
// //           <Label>Email</Label>
// //           <Input type="email" name="user_email" />
// //           <Label>Message</Label>
// //           <TextArea name="message" />
// //           <Button type="submit" onClick={() => changeText("Message Sent")}>
// //             {buttonText}
// //           </Button>
// //         </ContactForm>
// //       </Container>
// //     </ContactSection>
// //   );
// // };

// // export default Contact;

// const defaultFormFields = {
//   user_name: "",
//   user_email: "",
//   message: "",
//   button_text: "",
// };

// export const Contact = () => {
//   const form = useRef();

//   const [formFields, setFormFields] = useState(defaultFormFields);
//   const { user_name, user_email, message, button } = formFields;
//   const [buttonText, setButtonText] = useState("Send");

//   const resetFormFields = () => {
//     setFormFields(defaultFormFields);
//   };

//   const changeText = (text) => {
//     setButtonText(text);
//   };

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_b2mafh9",
//         "template_2n0vqoq",
//         form.current,
//         "BdPPPjGG5Y0xDqapC"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           resetFormFields();
//           alert("Message sent successfully");
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormFields({ ...formFields, [name]: value });
//   };

//   return (
//     <ContactSection>
//       <Container>
//         <Heading>Contact Us</Heading>
//         <Text>
//           Feel free to send us a message about anything you might need help
//           with.
//         </Text>
//         <ContactForm ref={form} onSubmit={sendEmail}>
//           <Label>Name</Label>
//           <Input
//             type="text"
//             name="user_name"
//             value={user_name}
//             required
//             onChange={handleChange}
//           />
//           <Label>Email</Label>
//           <Input
//             type="email"
//             name="user_email"
//             value={user_email}
//             required
//             onChange={handleChange}
//           />
//           <Label>Message</Label>
//           <TextArea name="message" value={message} onChange={handleChange} />
//           <Button
//             type="submit"
//             name="button"
//             value={button}
//             // onClick={() => changeText("Message Sent")}
//           >
//             {buttonText}
//           </Button>
//         </ContactForm>
//       </Container>
//     </ContactSection>
//   );
// };

// export default Contact;
