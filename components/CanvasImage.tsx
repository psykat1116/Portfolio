"use client";
import React, { ElementRef, useEffect, useRef } from "react";
import { mouse, Particle } from "@/utils/Particle";

const CanvasImage = () => {
  const canvasRef = useRef<ElementRef<"canvas">>(null);
  let particlesArray: any[] = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    window.addEventListener("mousemove", (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const image = new Image();
      image.src = "profile4.jpg";
      canvas.height = 320;
      canvas.width = 320;

      image.addEventListener("load", () => {
        ctx.drawImage(image, 0, 0);
        const scannedImage = ctx.getImageData(
          0,
          0,
          canvas.height,
          canvas.height
        );
        const scannedData = scannedImage.data;

        function init() {
          particlesArray = [];
          for (let y = 0, y1 = scannedImage.height; y < y1; y++) {
            for (let x = 0, x1 = scannedImage.width; x < x1; x++) {
              const red = scannedData[y * 4 * scannedImage.width + x * 4];
              const green = scannedData[y * 4 * scannedImage.width + x * 4 + 1];
              const blue = scannedData[y * 4 * scannedImage.width + x * 4 + 2];
              const alpha = scannedData[y * 4 * scannedImage.width + x * 4 + 3];
              if (alpha > 0) {
                const rgba = `rgba(${red},${green},${blue},${alpha})`;
                let positionX = x;
                let positionY = y;
                particlesArray.push(new Particle(positionX, positionY, rgba));
              }
            }
          }
        }

        init();

        function animate() {
          if (canvas && ctx) {
            ctx?.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particlesArray.length; i++) {
              particlesArray[i].draw(ctx);
              particlesArray[i].update(mouse, image);
            }
            requestAnimationFrame(animate);
          }
        }

        animate();
      });
    }
  }, [canvasRef]);

  return <canvas ref={canvasRef} />;
};

export default CanvasImage;
