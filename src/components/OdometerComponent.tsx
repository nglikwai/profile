"use client";
import React, { useEffect, useRef, useState } from "react";
import "odometer/themes/odometer-theme-default.css"; // Or any other theme
// @ts-ignore
const loadOdometer = () => import("odometer");

function OdometerComponent() {
  const [value, setValue] = useState(40035010);
  const odometerRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    // Create an Intersection Observer

    async function initializeOdometer() {
      const { default: Odometer } = await loadOdometer();

      if (odometerRef.current) {
        const odometerInstance = new Odometer({
          el: odometerRef.current,
          value: 0,
          format: "(,ddd).dd", // Format the number with commas and 2 decimal places
          duration: 2000, // Animation duration (in milliseconds)
        });

        odometerInstance.update(value);
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true); // Ensure it only starts once
          initializeOdometer();
        }
      },
      { threshold: 0.5 }, // Trigger when 50% of the element is in view
    );

    // Observe the odometer element
    if (odometerRef.current) {
      observer.observe(odometerRef.current);
    }

    // Cleanup the observer on component unmount
    return () => {
      if (odometerRef.current) {
        observer.unobserve(odometerRef.current);
      }
    };
  }, [value, hasStarted]);

  return (
    <div>
      <div ref={odometerRef} className="odometer text-6xl font-black"></div>
    </div>
  );
}

export default OdometerComponent;
