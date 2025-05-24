"use client"
import './style-draggable-slider.css'
import { useRef, useEffect } from 'react'
export default function DraggableSlider() {
    const sliderContainerRef = useRef<HTMLDivElement | null>(null);
    const sliderTrackRef = useRef<HTMLDivElement | null>(null);
    const isDraggingRef = useRef(false);
    const startXRef = useRef(0);
    const initialPositionRef = useRef(0);
    const positionRef = useRef(0);

    useEffect(() => {
        const sliderTrack = sliderTrackRef.current!;
        const sliderContainer = sliderContainerRef.current!;
        if (!sliderTrack || !sliderContainer) {
            return
        }
        function startDrag(e: TouchEvent | MouseEvent) {
            isDraggingRef.current = true
                 if (e instanceof TouchEvent) {
                startXRef.current = e.touches[0].pageX;
              } else {
                startXRef.current = e.pageX;
              }
            initialPositionRef.current = positionRef.current
            sliderContainer.style.cursor = 'grabbing';
            }
        function endDrag() {
             isDraggingRef.current = false
             sliderContainer!.style.cursor = 'grab'
        }
        function moveDrag(e: TouchEvent | MouseEvent) {
            const containerWidth = sliderContainer.offsetWidth
            const trackWidth = sliderTrack.scrollWidth
            const minPosition = containerWidth - trackWidth
            const maxPosition = 0
            
            if (isDraggingRef.current === false) return
            let x: number;
            if (e instanceof TouchEvent) {
                x = e.touches[0].pageX;
              } else {
                x = e.pageX;
              }
            
            const walk = x - startXRef.current
            positionRef.current = initialPositionRef.current + walk
            positionRef.current = Math.max(minPosition, Math.min(positionRef.current, maxPosition))
            sliderTrack.style.transform = `translateX(${positionRef.current}px)`
        }
        
            sliderTrack.addEventListener('mousedown', startDrag)
            document.addEventListener('mouseup', endDrag)
            document.addEventListener('mousemove', moveDrag)
            sliderTrack.addEventListener('touchstart', startDrag)
            document.addEventListener('touchend', endDrag)
            document.addEventListener('touchmove', moveDrag)
    },[])


    return(
        <div className='explain-draggable-slider-container'>
            <h3>Draggable Slider — перетаскиваемый слайдер</h3>
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
            <p className='draggable-slider-introduction'>Теперь, когда мы разобрались с базовым слайдером на кнопках, давайте сделаем шаг вперед. В этом разделе мы добавим возможность перетаскивания слайдера с помощью мыши или сенсорного экрана.
            <br></br><br />Этот метод немного сложнее, так как нам нужно обработать события начала, движения и окончания перетаскивания. Но не переживайте — разберем всё шаг за шагом!</p>
        </div>
    )
}