import React from "react";
import { Typography, IconButton } from "@material-tailwind/react";
import { Instagram, Mail, Youtube } from "lucide-react";

import { Link } from "react-scroll";

import Whats from "../assets/icons/whatsapp.svg";

import { useNavigate } from "react-router-dom";

const links = [
  { hasScroll: true, label: "Quem somos", path: "who-we-are" },
  { hasScroll: true, label: "Depoimentos", path: "testimonials" },
  { hasScroll: true, label: "Serviços", path: "our-services" },
  { hasScroll: false, label: "Presencial", path: "/presencial" },
  { hasScroll: false, label: "Online", path: "/online" },
];
const links2 = ["Claim", "Privacy", "Terms"];
const currentYear = new Date().getFullYear();

function CustomFooter() {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <footer className="px-4 pt-10 bg-white lg:px-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-8 justify-center items-start md:justify-between">
          <div className="text-center md:text-left">
            <Typography variant="h4" className="mb-6">
              BestBio
            </Typography>

            <div className="flex gap-2 mt-6 w-full sm:w-fit">
              <IconButton
                variant="text"
                size="lg"
                color="gray"
                id="whatsapp"
                onClick={() =>
                  openInNewTab(
                    "https://wa.me/5584996152620?text=Olá,%20gostaria%20de%20mais%20informações!",
                  )
                }
              >
                <img
                  loading="lazy"
                  src={Whats}
                  className=""
                  alt="ínoce do whatsapp"
                />
              </IconButton>
              <IconButton
                variant="text"
                size="lg"
                color="gray"
                id="youtube"
                onClick={() =>
                  openInNewTab("https://www.youtube.com/@BestBioBrasil")
                }
              >
                <Youtube />
              </IconButton>
              <IconButton
                variant="text"
                size="lg"
                color="gray"
                id="instagram"
                onClick={() =>
                  openInNewTab(
                    "https://www.instagram.com/freitas_nutricionista/",
                  )
                }
              >
                <Instagram />
              </IconButton>
              <IconButton
                variant="text"
                size="lg"
                color="gray"
                id="email"
                onClick={() =>
                  window.location.href = "mailto:bestbiobrasil@gmail.com"
                }
              >
                <Mail />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-y-4 gap-x-8 justify-center items-center py-6 mt-8 border-t border-blue-gray-50 md:justify-between">
          <Typography
            className="text-center font-normal !text-gray-700 hover:scale-110 transition-all cursor-pointer"
            onClick={() => openInNewTab("https://codepresence.com")}
          >
            &copy; {currentYear} <strong className="">Code Presence™</strong>.
            Todos os direitos reservados.
          </Typography>

          <ul className="flex items-center">
            {links2.map((link, idx) => (
              <li key={link}>
                <Typography
                  as="a"
                  href="#"
                  className={`py-1 font-normal !text-gray-700 transition-colors hover:!text-gray-900 ${
                    idx === links2.length - 1 ? "pl-2" : "px-2"
                  }`}
                >
                  {link}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export { CustomFooter };
