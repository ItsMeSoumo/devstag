"use client";
// import { useGSAP } from "@gsap/react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

import { Spotlight } from "@/components/ui/spotlight";
import LightRays from "@/components/ui/lightrays";
import Squares from "@/components/ui/movingsquares";
import Plasma from "@/components/ui/plasma";
import Orb from "@/components/ui/orb";

export default function Capsules() {
  const container = useRef();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);


    const cards = gsap.utils.toArray(".card");
    const introCard = cards[0];

    const titles = gsap.utils.toArray(".card-title h1");
    if (titles.length) {
      titles.forEach((title) => {
        const split = new SplitText(title, {
          type: "chars",
          charsClass: "char",
          tag: "div",
        });
        split.chars.forEach((char) => {
          char.innerHTML = `<span>${char.textContent}</span>`;
        });
      });
    }

    const cardImgWrapper = introCard.querySelector(".card-img");
    const cardImg = introCard.querySelector(".card-img img");
    gsap.set(cardImgWrapper, { scale: 0.5, borderRadius: "400px" });
    gsap.set(cardImg, { scale: 1.5 });

    function animateContentIn(titleChars, description) {
      gsap.to(titleChars, { x: "0%", duration: 0.75, ease: "power4.out" });
      gsap.to(description, {
        x: 0,
        opacity: 1,
        duration: 0.75,
        delay: 0.1,
        ease: "power4.out",
      });
    }

    function animateContentOut(titleChars, description) {
      gsap.to(titleChars, { x: "100%", duration: 0.5, ease: "power4.out" });
      gsap.to(description, {
        x: "40px",
        opacity: 0,
        duration: 0.5,
        ease: "power4.out",
      });
    }

    const marquee = introCard.querySelector(".card-marquee .marquee");
    const titleChars = introCard.querySelectorAll(".char span");
    const description = introCard.querySelector(".card-description");

    ScrollTrigger.create({
      trigger: introCard,
      start: "top top",
      end: "+=300vh",
      onUpdate: (self) => {
        const progress = self.progress;
        const imgScale = 0.5 + progress * 0.5;
        const borderRadius = 400 - progress * 375;
        const innerImgScale = 1.5 - progress * 0.5;

        gsap.set(cardImgWrapper, {
          scale: imgScale,
          borderRadius: borderRadius + "px",
        });
        gsap.set(cardImg, { scale: innerImgScale });

        if (imgScale >= 0.5 && imgScale <= 0.75) {
          const fadeProgress = (imgScale - 0.5) / (0.75 - 0.5);
          gsap.set(marquee, { opacity: 1 - fadeProgress });
        } else if (imgScale < 0.5) {
          gsap.set(marquee, { opacity: 1 });
        } else if (imgScale > 0.75) {
          gsap.set(marquee, { opacity: 0 });
        }

        if (progress >= 1 && !introCard.contentRevealed) {
          introCard.contentRevealed = true;
          animateContentIn(titleChars, description);
        }
        if (progress < 1 && introCard.contentRevealed) {
          introCard.contentRevealed = false;
          animateContentOut(titleChars, description);
        }
      },
    });

    cards.forEach((card, index) => {
      const isLastCard = index === cards.length - 1;
      ScrollTrigger.create({
        trigger: card,
        start: "top top",
        end: isLastCard ? "+=100vh" : "top top",
        endTrigger: isLastCard ? null : cards[cards.length - 1],
        pin: true,
        pinSpacing: isLastCard,
      });
    });

    cards.forEach((card, index) => {
      if (index < cards.length - 1) {
        const cardWrapper = card.querySelector(".card-wrapper");
        ScrollTrigger.create({
          trigger: cards[index + 1],
          start: "top bottom",
          end: "top top",
          onUpdate: (self) => {
            const progress = self.progress;
            gsap.set(cardWrapper, {
              scale: 1 - progress * 0.25,
              opacity: 1 - progress,
            });
          },
        });
      }
    });

    cards.forEach((card, index) => {
      if (index > 0) {
        const cardImg = card.querySelector(".card-img img");
        const imgContainer = card.querySelector(".card-img");
        ScrollTrigger.create({
          trigger: card,
          start: "top bottom",
          end: "top top",
          onUpdate: (self) => {
            const progress = self.progress;
            gsap.set(cardImg, { scale: 2 - progress });
            gsap.set(imgContainer, { borderRadius: 150 - progress * 125 + "px" });
          },
        });
      }
    });

    cards.forEach((card, index) => {
      if (index === 0) return;

      const cardDescription = card.querySelector(".card-description");
      const cardTitleChars = card.querySelectorAll(".char span");

      ScrollTrigger.create({
        trigger: card,
        start: "top top",
        onEnter: () => animateContentIn(cardTitleChars, cardDescription),
        onLeaveBack: () => animateContentOut(cardTitleChars, cardDescription),
      });
    });
    // Play/pause YouTube iframes per card visibility
    function sendYTCommand(iframe, func) {
      if (!iframe || !iframe.contentWindow) return;
      iframe.contentWindow.postMessage(
        JSON.stringify({ event: "command", func, args: [] }),
        "*"
      );
    }
    cards.forEach((card) => {
      const iframe = card.querySelector("iframe");
      if (!iframe) return;
      ScrollTrigger.create({
        trigger: card,
        start: "top center",
        end: "bottom center",
        onEnter: () => sendYTCommand(iframe, "playVideo"),
        onEnterBack: () => sendYTCommand(iframe, "playVideo"),
        onLeave: () => sendYTCommand(iframe, "pauseVideo"),
        onLeaveBack: () => sendYTCommand(iframe, "pauseVideo"),
      });
    });
    // setupMarqueeAnimation();

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, { scope: container });

  return (
    <>
      <div ref={container} style={{ position: 'relative', backgroundColor: '#000' }}>
        {/* Global background Squares */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
          <Squares direction="diagonal" speed={0.6} borderColor="rgba(255,255,255,0.08)" squareSize={46} hoverFillColor="rgba(127,60,255,0.12)" />
        </div>
        {/* Global styles */}
        <style jsx>{`
 @import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Inter", sans-serif;
}

img {
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  will-change: transform;
}

h1 {
  font-size: 5rem;
  font-weight: 500;
  letter-spacing: -0.1rem;
  line-height: 1.25;
}

p {
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.25;
}

section {
  position: relative;
  width: 100vw;
  background-color: transparent; /* let global bg canvas show through */
  color: #fff;
  z-index: 1; /* ensure content sits above bg canvas */
}

.intro,
.outro {
  height: 100svh;
  padding: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
}

.intro h1,
.outro h1 {
  width: 60%;
  text-align: center;
  line-height: 1.1;
}

.cards {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 25svh;
}

.card-marquee {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  overflow: hidden;
}

.card-marquee .marquee {
  display: flex;
}

.card-marquee .marquee h1 {
  white-space: nowrap;
  font-size: 10vw;
  font-weight: 600;
  margin-right: 30px;
}

.card {
  position: relative;
  width: 100vw;
  height: 100svh;
  padding: 1.5em;
}

.card-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  will-change: transform;
}

.card-img {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 150px;
  overflow: hidden;
}

.card-img img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  transform: scale(2);
}

.card-img iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  pointer-events: none;
}

.card-content {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  z-index: 1;
}

.card-content .card-title {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.card-content .card-description {
  text-align: center;
  width: 40%;
  margin-bottom: 3em;
  position: relative;
  transform: translateX(40px);
  opacity: 0;
}

.card:nth-child(2) {
  margin-top: 50vh;
}

.char {
  position: relative;
  overflow: hidden;
  display: inline-block;
}

.char span {
  transform: translateX(100%);
  display: inline-block;
  will-change: transform;
}

@media (max-width: 900px) {
  h1 {
    font-size: 2rem;
    letter-spacing: 0;
  }

  .intro h1,
  .outro h1 {
    width: 100%;
  }

  .card-content .card-description {
    width: 90%;
  }
}

      `}</style>

        {/* Sections */}
        <section className="intro">
          {/* LightRays overlay inside intro */}
          {/* <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            <LightRays
              raysOrigin="top-center"
              raysColor="#00ffff"
              raysSpeed={1.5}
              lightSpread={0.8}
              rayLength={1.2}
              followMouse={true}
              mouseInfluence={0.1}
              noiseAmount={0.1}
              distortion={0.05}
              className="custom-rays"
            />
          </div> */}
          <div style={{ width: '100%', height: '90vh', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', textAlign: 'center' }}>
            {/* <div style={{ width: 320, height: 320 }}>
              <Orb
                hoverIntensity={0.5}
                rotateOnHover={true}
                hue={0}
                forceHoverState={false}
              />
            </div> */}
            <h1 style={{ position: 'relative', zIndex: 10 }}>We design spaces that don’t just exist.</h1>
          </div>
          
        </section>
        <section className="cards">
          {/* <div className="card">
            <div className="card-wrapper">
              <div className="card-content">
                <div className="card-title"></div>
                <div className="card-description"></div>
              </div>
              <div className="card-img">
                <img src="/card-img-1.jpg" alt="" />
                <iframe
                  src="https://www.youtube.com/embed/y5jTAbAfY4E?enablejsapi=1&mute=1&playsinline=1&rel=0&modestbranding=1&controls=0&loop=1&playlist=y5jTAbAfY4E"
                  title="Eclipse Horizon"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div> */}
          {/* <div className="card">
            <div className="card-wrapper">
              <div className="card-content">
                <div className="card-title"></div>
                <div className="card-description"></div>
              </div>
              <div className="card-img">
                <img src="/card-img-2.jpg" alt="" />
                <iframe
                  src="https://www.youtube.com/embed/Xn369QC2-rI?enablejsapi=1&mute=1&playsinline=1&rel=0&modestbranding=1&controls=0&loop=1&playlist=Xn369QC2-rI"
                  title="Vision Link"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div> */}
          <div className="card">
            <div className="card-wrapper">
              <div className="card-content">
                <div className="card-title"></div>
                <div className="card-description"></div>
              </div>
              <div className="card-img">
                <img src="/card-img-3.jpg" alt="" />
                <iframe
                  src="https://www.youtube.com/embed/FpuanQiVlkA?enablejsapi=1&mute=1&playsinline=1&rel=0&modestbranding=1&controls=0&loop=1&playlist=FpuanQiVlkA"
                  title="Iro Bond"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-wrapper">
              <div className="card-content">
                <div className="card-title"></div>
                <div className="card-description"></div>
              </div>
              <div className="card-img">
                <img src="/card-img-4.jpg" alt="" />
                <iframe
                  src="https://www.youtube.com/embed/RkiChK5t48U?enablejsapi=1&mute=1&playsinline=1&rel=0&modestbranding=1&controls=0&loop=1&playlist=RkiChK5t48U"
                  title="Golden Case"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>
        <section className="cards">
          <div className="card">
            <div className="card-wrapper">
              <div className="card-content">
                <div className="card-title"></div>
                <div className="card-description"></div>
              </div>
              <div className="card-img">
                <img src="/card-img-2.jpg" alt="" />
                <iframe
                  src="https://www.youtube.com/embed/90EcLpzlm5Y?enablejsapi=1&mute=1&playsinline=1&rel=0&modestbranding=1&controls=0&loop=1&playlist=90EcLpzlm5Y"
                  title="Virtual Space"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* <div className="card">
            <div className="card-wrapper">
              <div className="card-content">
                <div className="card-title"></div>
                <div className="card-description"></div>
              </div>
              <div className="card-img">
                <img src="/card-img-3.jpg" alt="" />
                <iframe
                  src="https://www.youtube.com/embed/Xn369QC2-rI?enablejsapi=1&mute=1&playsinline=1&rel=0&modestbranding=1&controls=0&loop=1&playlist=Xn369QC2-rI"
                  title="Smart Vision"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div> */}

          {/* <div className="card">
            <div className="card-wrapper">
              <div className="card-content">
                <div className="card-title"></div>
                <div className="card-description"></div>
              </div>
              <div className="card-img">
                <img src="/card-img-4.jpg" alt="" />
                <iframe
                  src="https://www.youtube.com/embed/FpuanQiVlkA?enablejsapi=1&mute=1&playsinline=1&rel=0&modestbranding=1&controls=0&loop=1&playlist=FpuanQiVlkA"
                  title="Desert Tunnel"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div> */}
        </section>
        <section className="outro">
          <section className="relative w-full h-[100vh] overflow-hidden">
            {/* <Plasma
              color="#9032c3"
              speed={0.6}
              direction="forward"
              scale={1.1}
              opacity={0.8}
              mouseInteractive={false}
            /> */}
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-bold">
              Architecture reimagined for the virtual age.
            </h1>
          </section>
        </section>
      </div>
    </>
  );
}





