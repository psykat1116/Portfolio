import Marker from "@/components/Marker";
import ContactForm from "@/components/Contact/ContactForm";

const Contact = () => {
  return (
    <div
      id="contact"
      className="p-5 w-full min-h-full font-bold text-lightprimary"
    >
      <div className="flex items-center">
        <Marker />
        <div className="ml-2 text-2xl tracking-wider">Contact Me</div>
      </div>
      <div className="flex w-full flex-col md:flex-row items-start justify-start gap-5 p-2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14758.75593598702!2d87.64297534204283!3d22.365369517923536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02b1aa1d3967a7%3A0xd5dc2baa4e3e8b36!2sHaur%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1718808069439!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full md:w-1/2 h-[450px] rounded-md"
        ></iframe>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
