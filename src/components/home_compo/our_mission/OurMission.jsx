import React, { useEffect } from "react";
import "./style.css";

const OurMission = () => {
  useEffect(() => {
    // window.scroll(0, 0);
    const ourMission = document.getElementById("our-missions");
    const zoomParagraph = document.getElementById("zoom-paragraph");
    const slideUpHeader = document.getElementById("slide-up-header");
    const slideUpSpan = document.getElementById("slide-up-span");
    const overlay = document.getElementById("overlay");
    zoomParagraph.style.transform = "scale(1)";
    const { top, bottom, height } = ourMission.getBoundingClientRect();
    const interval = height / 5;
    const animationBottom = bottom - interval;
    const animationHeight = height - interval;
    const headers = document.getElementById("headers");
    document.addEventListener("scroll", (event) => {
      const currentScrollbarYPosition = window.pageYOffset;
      if (currentScrollbarYPosition < Number(top)) {
        ourMission.classList = "our-missions top";
        zoomParagraph.style.transform = "scale(1)";
        zoomParagraph.style.display = "block";
        headers.style.display = "none";
      }

      if (
        currentScrollbarYPosition >= Number(top) &&
        currentScrollbarYPosition <= animationBottom - interval
      ) {
        const opacity =
          1 -
          (currentScrollbarYPosition - Number(top)) /
            (animationHeight - 1.5 * interval);
        zoomParagraph.style.color = `rgba(0,0,0,${opacity}`;
        zoomParagraph.style.transform = `scale(${
          ((currentScrollbarYPosition - Number(top)) * 24) /
            (animationHeight - 1.5 * interval) +
          1
        })`;
        ourMission.classList = "our-missions active";
        zoomParagraph.style.display = "block";
        headers.style.display = "none";
      }

      if (currentScrollbarYPosition > animationBottom - interval) {
        ourMission.classList = "our-missions active";
        zoomParagraph.style.display = "none";
        headers.style.display = "flex";
      }

      if (currentScrollbarYPosition > animationBottom + interval) {
        ourMission.classList = "our-missions bottom";
      }

      if (
        currentScrollbarYPosition > animationBottom - interval &&
        currentScrollbarYPosition < animationBottom
      ) {
        const headerAnimationInterval = interval / 2;

        // SLIDE UP HEADER ANIMATION

        if (
          currentScrollbarYPosition <
          animationBottom - 0.5 * headerAnimationInterval
        ) {
          slideUpHeader.style.marginBottom = "-300px";
          slideUpHeader.style.color = "rgba(255,255,255,0)";
        }

        if (
          currentScrollbarYPosition >=
            animationBottom - 2 * headerAnimationInterval &&
          currentScrollbarYPosition <= animationBottom - headerAnimationInterval
        ) {
          slideUpHeader.style.marginBottom = `-${
            ((animationBottom -
              (headerAnimationInterval + currentScrollbarYPosition)) /
              headerAnimationInterval) *
            300
          }px`;

          slideUpHeader.style.color = `rgba(255,255,255,${
            1 -
            (animationBottom -
              (headerAnimationInterval + currentScrollbarYPosition)) /
              headerAnimationInterval
          })`;
        }

        if (
          currentScrollbarYPosition >
          animationBottom - headerAnimationInterval
        ) {
          slideUpHeader.style.marginBottom = "0px";
          slideUpHeader.style.color = "rgba(255,255,255,1)";
        }

        // SLIDE UP SPAN ANIMATION

        if (
          currentScrollbarYPosition <
          animationBottom - headerAnimationInterval
        ) {
          slideUpSpan.style.marginBottom = "-300px";
          slideUpSpan.style.color = "rgba(255,255,255,0)";
        }

        if (
          currentScrollbarYPosition >=
            animationBottom - headerAnimationInterval &&
          currentScrollbarYPosition <= animationBottom
        ) {
          slideUpSpan.style.marginBottom = `-${
            ((animationBottom - currentScrollbarYPosition) /
              headerAnimationInterval) *
            300
          }px`;

          slideUpSpan.style.color = `rgba(255,255,255,${
            1 -
            (animationBottom - currentScrollbarYPosition) /
              headerAnimationInterval
          })`;
        }

        if (currentScrollbarYPosition > animationBottom) {
          slideUpSpan.style.marginBottom = "0px";
          slideUpSpan.style.color = "rgba(255,255,255,1)";
        }
      }
    });
    return () => document.removeEventListener("scroll", () => {});
  }, []);
  
  return (
    <div className="our-missions" id="our-missions">
      <div className="our-missions-wrapper" id="our-missions-wrapper">
        <p
          id="zoom-paragraph"
          style={{
            background: `url("/images/aero.jpg")`,
            WebkitBackgroundClip: "text",
          }}
        >
          Our Mission
        </p>
        <div className="headers" id="headers">
          <h2 id="slide-up-header">Our Missions</h2>
          <span id="slide-up-span">Eco - Friendly packaging</span>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
