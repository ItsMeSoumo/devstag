"use client";

import React from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import SplitText from "gsap/SplitText";

export default function SplitPage() {


  React.useEffect(() => {
    gsap.registerPlugin(CustomEase, SplitText);
    CustomEase.create("hop", ".8, 0, .3, 1");
    CustomEase.create("pop", ".25, 1, .5, 1");
    CustomEase.create("texture", "0.5, 0, 0.1, 1");

    const splitTextElements = (
      selector,
      type = "words,chars",
      addSpecialChars = false
    ) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((element) => {
        const splitText = new SplitText(element, {
          type,
          wordsClass: "word",
          charsClass: "char",
        });
        if (type.includes("chars")) {
          splitText.chars.forEach((char, index) => {
            const originalText = char.textContent;
            char.innerHTML = `<span>${originalText}</span>`;
            if (addSpecialChars) {
              if (index === 0) char.classList.add("first-char"); // D
              if (index >= 7 && index <= 8) char.classList.add("outro-char"); // 1 and 0
            }
          });
        }
      });
    };

    // Split setup with special character marking
    splitTextElements(".intro-title h1", "words,chars", true);
    splitTextElements(".outro-title h1");
    splitTextElements(".tag p", "words");
    splitTextElements(".card h1", "words, chars", true);

    const isMobile = window.innerWidth < 1000;

    // Initial state - hide all characters
    gsap.set(".preloader .intro-title .char span", { y: "-100%" });
    gsap.set(".preloader .outro-title .char span", { y: "-100%" });
    
    // Only show D initially
    gsap.set(".preloader .intro-title .char.first-char span", { y: "0%" });

    // Set final positions for overlay
    gsap.set(".split-overlay .intro-title .first-char", {
      x: isMobile ? "7.5rem" : "18rem",
      y: isMobile ? "-1rem" : "-2.75rem",
      fontWeight: "900",
      scale: 0.75,
    });

    gsap.set(".split-overlay .outro-title .char", {
      x: isMobile ? "-3rem" : "-8rem",
      fontSize: isMobile ? "6rem" : "14rem",
      fontWeight: "500",
    });

    gsap.set(".preloader .intro-title h1", {
      filter: "blur(10px)",
      scale: 1.25,
      opacity: 0.7,
    });

    const tl = gsap.timeline({ defaults: { ease: "hop" } });
    const tags = gsap.utils.toArray(".tag");

    // Tag word-in animation
    tags.forEach((tag, index) => {
      tl.to(
        tag.querySelectorAll("p .word"),
        { y: "0%", duration: 0.75 },
        0.5 + index * 0.1
      );
    });

    // Preloader sequence
    tl.to(".preloader .intro-title h1", {
      filter: "blur(0px)",
      scale: 1,
      opacity: 1,
      duration: 1.5,
      ease: "power3.out",
    }, 0.25)

    // Reveal all DEVSTAG STUDIO letters
    .to(".preloader .intro-title .char span", {
      y: "0%",
      duration: 0.75,
      stagger: {
        each: 0.05,
        from: "start"
      },
    }, 1)

    // Reveal 10
    .to(".preloader .outro-title .char span", {
      y: "0%",
      duration: 0.75,
      stagger: 0.05,
    }, 1.5)

    // Prepare for separation - make other letters fade slightly
    .to(".preloader .intro-title .char:not(.first-char):not(.outro-char)", {
      opacity: 0.4,
      filter: "blur(1px)",
      duration: 0.5,
      ease: "power2.in",
    }, 2)

    // D begins emerging from DEVSTAG
    .to(".preloader .intro-title .first-char", {
      scale: 1.4,
      zIndex: 10,
      duration: 0.3,
      ease: "pop",
    }, 2.5)
    .to(".preloader .intro-title .first-char", {
      x: isMobile ? "3rem" : "7rem",
      y: isMobile ? "-0.8rem" : "-1.5rem",
      duration: 0.6,
      ease: "power2.out",
    }, 2.8)

    // 10 emerges from STUDIO
    .to(".preloader .outro-title .char", {
      scale: 1.3,
      zIndex: 10,
      duration: 0.3,
      ease: "pop",
    }, 2.7)
    .to(".preloader .outro-title .char", {
      x: isMobile ? "-2rem" : "-5rem",
      duration: 0.6,
      ease: "power2.out",
    }, 3)

    // Disintegrate remaining letters with staggered fade
    .to(".preloader .intro-title .char:not(.first-char):not(.outro-char)", {
      opacity: 0,
      y: "20%",
      filter: "blur(5px)",
      duration: 0.8,
      ease: "power2.in",
      stagger: {
        amount: 0.6,
        from: "random"
      },
      onComplete: () => {
        gsap.set(".preloader .intro-title .char:not(.first-char):not(.outro-char)", {
          display: "none"
        });
      }
    }, 3)

    // Final positioning with bounce
    .to(".preloader .intro-title .first-char", {
      x: isMobile ? "7.5rem" : "18rem",
      y: isMobile ? "-1rem" : "-2.75rem",
      scale: 0.75,
      duration: 1.2,
      ease: "elastic.out(1, 0.3)",
    }, 4)

    .to(".preloader .outro-title .char", {
      x: isMobile ? "-3rem" : "-8rem",
      fontSize: isMobile ? "6rem" : "14rem",
      duration: 1.2,
      ease: "elastic.out(1, 0.3)",
      onComplete: () => {
        gsap.set(".preloader", {
          clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
        });
        gsap.set(".split-overlay", {
          clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
        });
      }
    }, 4)

    // Hero image reveal
    .fromTo(".hero-img img", {
      scale: 1.1,
      opacity: 0,
      filter: "blur(5px)",
    }, {
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
      duration: 1.25,
      ease: "power4.out",
    }, 5.5)

    .to(".container", {
      clipPath: "polygon(0 48%, 100% 48%, 100% 52%, 0 52%)",
      duration: 1,
    }, 5);

    // Tag word-out
    tags.forEach((tag, index) => {
      tl.to(
        tag.querySelectorAll("p .word"),
        { y: "100%", duration: 0.75 },
        5.5 + index * 0.1
      );
    });

    // Final transitions
    tl.to([".preloader", ".split-overlay"], {
      y: (i) => (i === 0 ? "-50%" : "50%"),
      duration: 1,
    }, 6)

    .to(".container", {
      clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
      duration: 1,
    }, 6)

    .to(".card", {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      duration: 1,
      ease: "expo.out",
    }, 6.5)

    .to(".card h1 .char span", {
      y: "0%",
      duration: 0.75,
      stagger: 0.05,
      ease: "power2.out",
    }, 6.75);

    return () => {
      // Cleanup
      gsap.globalTimeline.clear();
    };
  }, []);

  return (
    <>
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        h1 {
          text-transform: uppercase;
          font-size: 6rem;
          font-weight: 600;
          line-height: 1;
        }
        p {
          text-transform: uppercase;
          font-size: 13px;
          font-weight: 600;
        }
        .preloader, .split-overlay, .tags-overlay {
          position: fixed;
          width: 100vw;
          height: 100svh;
        }
        .preloader, .split-overlay {
          background-color: #000;
          color: #fff;
        }
        .preloader, .tags-overlay {
          z-index: 2;
        }
        .split-overlay {
          z-index: 1;
        }
        .intro-title {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          text-align: center;
        }
        .outro-title {
          position: absolute;
          top: 50%;
          left: calc(50% + 10rem);
          transform: translate(-50%, -50%);
        }
        .tag {
          position: absolute;
          width: max-content;
          color: #5a5a5a;
          overflow: hidden;
        }
        .tag-1 {
          top: 15%;
          left: 15%;
        }
        .tag-2 {
          bottom: 15%;
          left: 25%;
        }
        .tag-3 {
          bottom: 30%;
          right: 15%;
        }
        .container {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          clip-path: polygon(0 48%, 0 48%, 0 52%, 0 52%);
          z-index: 2;
        }
        .container .hero-img {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        nav,
        footer {
          position: relative;
          width: 100vw;
          padding: 2em;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #fff;
          z-index: 2;
        }
        nav p#logo {
          font-weight: 600;
          font-size: 20px;
        }
        .card {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 30%;
          height: 70%;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #fff;
          clip-path: polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%);
        }
        .card h1 {
          text-align: center;
          width: 100%;
          font-size: 3rem;
        }
        .card .char span {
          position: relative;
          display: inline-block;
          transform: translateY(100%);
          will-change: transform;
        }
        .intro-title .char,
        .outro-title .char,
        .card .char {
          position: relative;
          display: inline-block;
          overflow: hidden;
        }
        .intro-title .char,
        .outro-title .char {
          margin-top: 0.75rem;
        }
        .intro-title .char span,
        .outro-title .char span,
        .tag .word {
          position: relative;
          display: inline-block;
          transform: translateY(-100%);
          will-change: transform;
        }
        .intro-title .first-char {
          transform-origin: top left;
        }
        @media (max-width: 1000px) {
          h1 {
            font-size: 2.5rem;
          }
          .outro-title {
            left: calc(50% + 4rem);
          }
          .card {
            width: 75%;
          }
          .card h1 {
            font-size: 2.5rem;
          }
          .intro-title .char,
          .outro-title .char {
            margin-top: 0.5rem;
          }
        }
      `}</style>

      <div className="preloader">
        <div className="intro-title">
          <h1>Devstag Studio</h1>
        </div>
        <div className="outro-title">
          <h1>10</h1>
        </div>
      </div>

      <div className="split-overlay">
        <div className="intro-title">
          <h1>Devstag Studio</h1>
        </div>
        <div className="outro-title">
          <h1>10</h1>
        </div>
      </div>

      <div className="tags-overlay">
        <div className="tag tag-1"><p>Negative Space</p></div>
        <div className="tag tag-2"><p>Form & Void</p></div>
        <div className="tag tag-3"><p>Light Studies</p></div>
      </div>

      <div className="container">
        <nav>
          <p id="logo">D10</p>
          <p>Menu</p>
        </nav>
        <div className="hero-img">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" alt="Hero" />
        </div>
        <footer>
          <p>Scroll Down</p>
        </footer>
      </div>
    </>
  );
}