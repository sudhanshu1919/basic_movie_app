import React, { useEffect } from "react";

const WhatsAppWidget = () => {
  useEffect(() => {
    const handleWhatsAppClick = () => {
      // Handle WhatsApp button click event here
      // You can use window.open or any other method to open WhatsApp chat
      // For example:
      const phoneNumber = "+918788365413";
      const message = "Hello, I have a question.";
      const encodedMessage = encodeURIComponent(message);
      const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
      window.open(whatsappURL, "_blank");
    };

    // Add event listener to handle WhatsApp button click
    const whatsappButton = document.getElementById("whatsappButton");
    whatsappButton.addEventListener("click", handleWhatsAppClick);

    return () => {
      // Clean up the event listener when the component is unmounted
      whatsappButton.removeEventListener("click", handleWhatsAppClick);
    };
  }, []);

  return (
    <button id="whatsappButton" className="whatsapp-button">
      WhatsApp
    </button>
  );
};

export default WhatsAppWidget;
