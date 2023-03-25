import "./Contact.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n3o3f15",
        "template_9ehgiyk",
        form.current,
        "N3Z_Yk1v_VXbhNmO7"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div data-aos="fade-right" data-aos-duration="1000" className="connect">
        <h1> Lets </h1> <h1>Connect </h1>
      </div>

      <form
        data-aos="fade-up"
        data-aos-duration="1000"
        className="contact"
        ref={form}
        onSubmit={sendEmail}
      >
        <div id="contacttextid" className="contacttext">
          <p>
            Use the form below. Or ping me over on
            <a href="Linkedind"> LinkedIn</a>
          </p>
          <p>
            Alternatively, shoot me an email at
            <a href="mailto:"> alexander.r2000@hotmail.com</a>
          </p>
        </div>

        <input type="text" name="user_name" placeholder="Your name" />
        <input type="email" name="user_email" placeholder="Email" />
        <textarea name="message" placeholder="Message" />
        <input type="submit" value="Send" />
      </form>
    </>
  );
};

export default Contact;
