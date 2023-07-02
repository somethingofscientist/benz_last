import React, { useEffect } from "react";
import "./style.css";

const OurMission = () => {
  useEffect(() => {
    window.scroll(0, 0);
    const ourMission = document.getElementById("our-missions");
    const ourMissionWrapper = document.getElementById("our-missions-wrapper");
    const zoomParagraph = document.getElementById("zoom-paragraph");
    const headers = document.getElementById("headers");
    ourMissionWrapper.style.top = "0%";
    ourMissionWrapper.style.position = "absolute";
    zoomParagraph.style.transform = "scale(1)";
    const { top, bottom, height } = ourMission.getBoundingClientRect();
    const interval = height / 5;
    const animationBottom = bottom - interval;
    const animationHeight = height - interval;
    document.addEventListener("scroll", (event) => {
      const currentScrollbarYPosition = window.pageYOffset;
      if (currentScrollbarYPosition < Number(top)) {
        ourMissionWrapper.style.top = "0%";
        ourMissionWrapper.classList = "our-missions-wrapper";
        zoomParagraph.style.transform = "scale(1)";
        zoomParagraph.style.opacity = 1;
        headers.style.opacity = 0;
      }

      if (currentScrollbarYPosition > animationBottom) {
        ourMissionWrapper.style.top = "80%";
        ourMissionWrapper.classList = "our-missions-wrapper";
        zoomParagraph.style.transform = `scale(${
          ((currentScrollbarYPosition - Number(top)) * 9) / animationHeight + 1
        })`;
        ourMissionWrapper.classList = "our-missions-wrapper active";
        zoomParagraph.style.opacity = 0;
        headers.style.opacity = 1;
      }

      if (
        currentScrollbarYPosition >= Number(top) &&
        currentScrollbarYPosition <= animationBottom
      ) {
        ourMissionWrapper.style.top = `${Number(
          currentScrollbarYPosition - Number(top) - 255
        )}px`;
        zoomParagraph.style.transform = `scale(${
          ((currentScrollbarYPosition - Number(top)) * 29) / animationHeight + 1
        })`;
        zoomParagraph.style.opacity = 1;
        headers.style.opacity = 0;
        ourMissionWrapper.classList = "our-missions-wrapper";
      }
    });
    return () => document.removeEventListener("scroll", () => {});
  }, []);
  return (
    <div className="our-missions" id="our-missions">
      <div className="our-missions-wrapper" id="our-missions-wrapper">
        <p id="zoom-paragraph">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
        <div className="headers" id="headers">
          <h2>Our Missions</h2>
          <span>Eco - Friendly packaging</span>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
