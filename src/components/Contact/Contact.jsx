import "./Contact.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Contact = () => {
  const notify = () => {
    result
      ? toast.success("Your e-mail has been successfully sent. Thank You!", {
          position: toast.POSITION.BOTTOM_RIGHT,
          className: "foo-bar",
        })
      : toast.error("Please fill in all required fields", {
          position: toast.POSITION.BOTTOM_RIGHT,
          className: "foo-bar",
        });
    toast.clearWaitingQueue();
  };
  const form = useRef();
  const [result, setResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current.checkValidity()) {
      form.current.reportValidity();
      return;
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        () => {
          setResult(true);
          setTimeout(() => {
            setResult(false);
          }, 7000);
          form.current.reset();
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
        <ul className="contactnameemail">
          <li>
            <input
              type="text"
              name="user_name"
              placeholder="Your name"
              required
            />
          </li>
          <li>
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
            />
          </li>
        </ul>
        <ul className="subject">
          <li>
            <input type="text" name="subject" placeholder="Subject" required />
          </li>
        </ul>

        <ul className="message">
          <li>
            <textarea name="message" placeholder="Message"></textarea>
            <div className="line"></div>
          </li>
        </ul>
        <ul className="submit">
          <li>
            <input onClick={notify} type="submit" value="Send" />
          </li>
        </ul>
      </form>
      <div className="formresponse">
        <ToastContainer limit={1} toastStyle={{ backgroundColor: "#2b2b2b" }} />
      </div>
    </>
  );
};

export default Contact;
