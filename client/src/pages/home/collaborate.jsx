import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./horizontalScroll.css"; 

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  const containerRef = useRef(null);
  const panelsRef = useRef([]);

  useEffect(() => {
    let sections = gsap.utils.toArray(panelsRef.current);

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1), 
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: {
          snapTo: 1 / (sections.length - 1), 
          duration: 1, 
          ease: "power1.inOut"
        },
        end: () => "+=" + containerRef.current.scrollWidth,
      },
    });
  }, []);

  return (
    <div>

      <div className="container" ref={containerRef}>
        <section className="panel red mr-4" ref={(el) => (panelsRef.current[0] = el)}>
          ONE
        </section>
        <section className="panel orange" ref={(el) => (panelsRef.current[1] = el)}>
          TWO
        </section>
        <section className="panel purple" ref={(el) => (panelsRef.current[2] = el)}>
          THREE
        </section>
      
        <section className="panel green" ref={(el) => (panelsRef.current[3] = el)}>
          FOUR
        </section>
        
      </div>
      {/* <div></div> */}
      <div className="lastContainer flex items-center justify-center flex-col">
        <p>Hello</p>
        <button className="relative px-4 py-2 sm:px-5 sm:py-3 bg-primary_button text-white font-poppins text-[0.9rem] sm:text-[1rem] rounded-[.4rem] shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl flex items-center justify-center gap-2 mt-8">
          <p>Book now</p>
        </button>
      </div>
    </div>
  );
};

export default HorizontalScroll;
