// import {
//   Github,
//   Linkedin,
//   Instagram,
//   Facebook,
//   Twitter,
//   Mail,
// } from "lucide-react";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../assets/logo.png"

export default function Footer() {
  const socials = [
      { name: "Facebook", icon: FaFacebookF, href: "https://www.facebook.com/share/1957TaSKtT/?mibextid=wwXIfr" },
      { name: "Instagram", icon: FaInstagram, href: "https://www.instagram.com/mohammad_alemi__" },
      { name: "LinkedIn", icon: FaLinkedinIn, href: "https://www.linkedin.com/in/mohammad-alemi-af/" },
    //   { name: "Twitter", icon: FaXTwitter , href: "#" },
    { name: "GitHub", icon: FiGithub, href: "https://github.com/MohammadAlemi" },
    { name: "Email", icon: FaRegEnvelope, href: "mailto:mohammadalemi1403@outlook.com" },
  ];

  return (
    <footer className="py-10 px-4 pb-6 sm:px-6 lg:px-8 bg-[#08162f]">
      <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">

        {/* LEFT BOX */}
        <div
          className="
            group
            rounded-3xl
            border border-white/10
            bg-white/[0.035]
            p-8
            backdrop-blur-2xl
            shadow-[0_8px_40px_rgba(0,0,0,0.25)]
            transition-all duration-500

            hover:-translate-y-1
            hover:border-white/20
            hover:bg-white/[0.055]
            hover:shadow-[0_15px_50px_rgba(0,0,0,0.35)]
          "
        >
          {/* Logo */}
          <div
            className="
              flex h-14 w-14 items-center justify-center
              rounded-2xl
              border border-white/10
              bg-white/[0.06]
              backdrop-blur-xl
              text-white
              shadow-lg
              transition-all duration-300

              group-hover:border-white/25
              group-hover:bg-white/[0.12]
              group-hover:scale-105
            "
          >
            <img src={logo} alt="" />
          </div>

          {/* Name */}
          <h2 className="mt-7 text-2xl font-bold text-white">
            Mohammad Alemi
          </h2>

          {/* Description */}
          <p className="mt-3 max-w-lg text-sm leading-6 text-white/50">
            I build modern, responsive, and scalable web applications, combining intuitive front-end experiences with powerful and reliable back-end solutions.
          </p>
        </div>

        {/* RIGHT BOX */}
        <div
          className="
            group
            rounded-3xl
            border border-white/10
            bg-white/[0.035]
            p-8
            backdrop-blur-2xl
            shadow-[0_8px_40px_rgba(0,0,0,0.25)]
            transition-all duration-500

            hover:-translate-y-1
            hover:border-white/20
            hover:bg-white/[0.055]
            hover:shadow-[0_15px_50px_rgba(0,0,0,0.35)]

            flex
            flex-col
            justify-center
          "
        >
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
            Connect With Me
          </h3>

          {/* Social Icons */}
          <div className="mt-6 flex flex-wrap gap-3">
            {socials.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="
                    group/icon
                    flex h-12 w-12 items-center justify-center
                    rounded-2xl
                    border border-white/10
                    bg-white/[0.04]
                    backdrop-blur-xl
                    text-white/50

                    transition-all duration-300

                    hover:-translate-y-1.5
                    hover:scale-105
                    hover:border-white/25
                    hover:bg-white/[0.12]
                    hover:text-white
                    hover:shadow-[0_10px_30px_rgba(255,255,255,0.08)]
                  "
                >
                  <Icon
                    size={19}
                    strokeWidth={1.7}
                    className="transition-transform duration-300 group-hover/icon:scale-110"
                  />
                </a>
              );
            })}
          </div>

          <p className="mt-6 text-sm text-white/35">
            Let's build something amazing together.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <p className="mx-auto mt-6 max-w-7xl text-center text-xs text-white/30">
        © {new Date().getFullYear()} Mohammad Alemi. All rights reserved.
      </p>
    </footer>
  );
}