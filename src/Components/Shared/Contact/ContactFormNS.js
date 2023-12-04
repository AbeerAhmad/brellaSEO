import React from "react";
import useViewport from "CustomHooks/UseViewport.js";
import ContactFormDesktop from "./ContactFormDesktop.js";
import ContactFormDesktop4k from "./ContactFormDesktop4k.js";
import ContactFormMobile from "./ContactFormMobile.js";

const ContactFormNS = () => {
  const { width } = useViewport();

  return width < 960 ? (
    <ContactFormMobile />
  ) : width >= 2560 ? (
    <ContactFormDesktop4k />
  ) : (
    <ContactFormDesktop />
  );
};

export default ContactFormNS;
