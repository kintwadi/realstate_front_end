"use client";

import React from "react";
import Link from "next/link";
import Container from "../container";
import { useScrollBehavior } from "@/hooks/useScrollBehavior";

const Footer = () => {
  const { isFooterVisible } = useScrollBehavior();

  return (
    <>
      <div className="height-emulator"></div>
      <footer 
        className={`main-footer fixed bottom-0 left-0 right-0 transition-transform duration-300 ${
          isFooterVisible ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <Container>
          {/* Footer Bottom */}
          <div className="footer-bottom">
            <Link href="/" className="footer-home_link">
              <i className="fa-solid fa-house"></i>
            </Link>
            <div className="copyright">
              <span>&#169;Renstate 2024</span> . All rights reserved.
            </div>
            <div className="footer-social">
              <span className="footer-social-title">Follow Us</span>
              <div className="footer-social-wrap">
                <Link href="#" target="_blank">
                  <i className="fa-brands fa-facebook-f"></i>
                </Link>
                <Link href="#" target="_blank">
                  <i className="fa-brands fa-x-twitter"></i>
                </Link>
                <Link href="#" target="_blank">
                  <i className="fa-brands fa-instagram"></i>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;