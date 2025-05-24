"use client";
import './slider-article.css'
import { useEffect, useRef } from "react";
export default function SliderArticle() {
    const sliderContainerRef = useRef<HTMLDivElement | null>(null);
    const sliderTrackRef = useRef<HTMLDivElement | null>(null);
    const buttonToLeftRef = useRef<HTMLButtonElement | null>(null);
    const buttonToRightRef = useRef<HTMLButtonElement | null>(null);

    const positionRef = useRef(0);
    const getStep = () => {
        const width = window.innerWidth;
    
        if (width <= 420) {
            return 90; 
        } else if (width <= 450) {
            return 100; 
        } else {
            return 215;
        }
    };
    

    useEffect(() => {
        const sliderTrack = sliderTrackRef.current!;
        const buttonToLeft = buttonToLeftRef.current!;
        const buttonToRight = buttonToRightRef.current!;
        const sliderContainer = sliderContainerRef.current!;

        if (!sliderTrack || !buttonToLeft || !buttonToRight || !sliderContainer) {
            return
        }
        const step: number = getStep()
        function toRight() {
            const newPosition = positionRef.current - step;
            positionRef.current = newPosition;
            sliderTrack.style.transform = `translateX(${newPosition}px)`;
            sliderTrack.style.transition = "transform 0.5s ease-in-out";
            updateButtons(newPosition);
            return newPosition;
        }

        function toLeft() {
                const newPosition = positionRef.current + step;
                positionRef.current = newPosition;
                sliderTrack.style.transform = `translateX(${newPosition}px)`;
                sliderTrack.style.transition = "transform 0.5s ease-in-out";
                updateButtons(newPosition);
                return newPosition;
            
        }

        function updateButtons(newPosition: number) {
            const trackWidth = sliderTrack.scrollWidth;
            const containerWidth = sliderContainer.offsetWidth;

            const leftDisabled = newPosition >= 0;
            const rightDisabled = Math.abs(newPosition) + containerWidth >= trackWidth;

          
            buttonToLeft.style.opacity = leftDisabled ? "0.5" : "1";
            buttonToRight.style.opacity = rightDisabled ? "0.5" : "1";

            buttonToLeft.style.pointerEvents = leftDisabled ? "none" : "auto";
            buttonToRight.style.pointerEvents = rightDisabled ? "none" : "auto";
        }

        buttonToRight.addEventListener("click", toRight);
        buttonToLeft.addEventListener("click", toLeft);

        updateButtons(positionRef.current)

        return () => {
            buttonToRight.removeEventListener("click", toRight);
            buttonToLeft.removeEventListener("click", toLeft);
        };
    }, []);


    return(
        <section className="main-slider-article-container">
            <h1>How to Make a Slider with<br></br> Pure JavaScript</h1>
            <p className='text-intruduction'>Слово &apos;слайдер&apos; может звучать пугающе, но на самом деле сделать его гораздо проще, чем кажется. В этом руководстве мы разберем, как создать слайдер с нуля, используя только чистый JavaScript — без сторонних библиотек и сложных решений.
            <br></br><br />Начнем с простого. Если вы понимаете базовую структуру слайдера, вам будет легче разобраться в более сложных концепциях.</p>
            <section className="slider-container" ref={sliderContainerRef}>
                <div className="slider-track" ref={sliderTrackRef}>
                    <div className="slider-item">
                        <p className="slider-content">1</p>
                    </div>
                    <div className="slider-item">
                        <p className="slider-content">2</p>
                    </div>
                    <div className="slider-item">
                        <p className="slider-content">3</p>
                    </div>
                    <div className="slider-item">
                        <p className="slider-content">4</p>
                    </div>
                    <div className="slider-item">
                        <p className="slider-content">5</p>
                    </div>
                    <div className="slider-item">
                        <p className="slider-content">6</p>
                    </div>
                </div>
            </section>
            <div className="slider-button-container">
                <button className="slider-button-left" ref={buttonToLeftRef}>Left</button>
                <button className="slider-button" ref={buttonToRightRef}>Right</button>
            </div>
        </section>
    )
}