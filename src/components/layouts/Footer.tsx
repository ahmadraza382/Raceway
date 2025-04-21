import { Link } from "react-router-dom";

const footerLinks = [
  { label: "About", url: "/about" },
  { label: "Mission & Vision", url: "/mission" },
  { label: "FAQs", url: "/faq" },
  { label: "Terms & Conditions", url: "/term" },
  { label: "Contact Us", url: "/contact-us" },
  { label: "About UAE RMC", url: "/about-us" },
  { label: "Starting Karting", url: "/about-us" },
  { label: "How to Register & Race", url: "/about-us" },
  { label: "Ho₩ much does it", url: "/about-us" },
  { label: "News", url: "/news" },
  { label: "Gallery", url: "/gallery" },
  { label: "Videos", url: "/videos" },
  { label: "Links", url: "/link" },
];

const socialIcons = [
  "/favicon/facebook.svg",
  "/favicon/instagram.svg",
  "/favicon/twitter.svg",
];

const FooterLinksSection = ({ title, links }: any) => (
  <div className="text-[#ffffff] py-4">
    <div className="italic text-lg font-bold">{title}</div>
    <ul>
      {links.map((item: any, index: any) => (
        <li key={index}>
          <div className="flex items-center gap-x-2 py-1">
            <img src={"/favicon/red-vector.svg"} alt="vector-icon" />
            <Link className="text-sm font-medium" to={item.url}>
              {item.label}
            </Link>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => (
  <footer>
    <div className="arw-container lg:flex">
      <div className="lg:w-2/5">
        <div className="Logo_Content text-[#ffffff]">
          <img
            className="w-[130px] max-w-[130px]"
            src={"/favicon/logo.svg"}
            alt="Footer Logo"
          />
          <p className="text-sm font-medium text-justify py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
            nobis. Numquam laboriosam, provident enim totam quod fugiat tenetur
            iste ratione dolore amet vitae facilis recusandae eum rem nobis
            officia minus nostrum mollitia quasi, cupiditate aliquam sapiente.
            Ut doloribus magni quaerat, cum, nihil deserunt beatae
            necessitatibus omnis ab sint corporis assumenda.
          </p>
        </div>

        <div className="Social_Links flex gap-x-4 justify-center lg:justify-start">
          {socialIcons.map((icon, index) => (
            <img
              key={index}
              src={icon}
              alt={`social-icon-${index}`}
              className="p-4 rounded-full bg-[#101010]"
            />
          ))}
        </div>
      </div>

      <div className="Links py-4 sm:flex justify-around lg:w-[60%]">
        <FooterLinksSection
          title="Useful Links"
          links={footerLinks.slice(0, 5)}
        />

        <FooterLinksSection
          title="The Series"
          links={footerLinks.slice(4, 8)}
        />

        <FooterLinksSection title="Media" links={footerLinks.slice(9)} />
      </div>
    </div>

    <div className="Footer_Description h-12 p-4 flex justify-center items-center bg-[#101010]">
      <p className="text-[.65rem] sm:text-sm font-normal leading-5 text-[#ffffff]">
        © Copyright 2024 Al Ain Raceway | All Rights Reserved
      </p>
    </div>
  </footer>
);

export default Footer;
