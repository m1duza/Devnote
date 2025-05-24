"use client"
import { useState} from 'react';
import './aside-accordion.css';

export default function AsideAccordion() {
  const [isOpen, setIsOpen] = useState(false);
  function handleScrollHtml() {
    window.scrollTo({
      top: 670,
      behavior: 'smooth'
    })
  }
  function handleScrollCss() {
    window.scrollTo({
      top: 1480,
      behavior: 'smooth'
    })
  }
  function handleScrollJs() {
    window.scrollTo({
      top: 2470,
      behavior: 'smooth'
    })
  }
  function hanldeScrollDraggableJs() {
    window.scrollTo({
      top: 5350,
      behavior: 'smooth'
    })
  }
  return (
    <div className="main-li-container">
      <div className="accordion">
        <div className="accordion-item">
          <div
            className="accordion-header"
            onClick={() => setIsOpen(!isOpen)}
            style={{ cursor: 'pointer' }}
          >
            

            <p className="title-article">
              
              How make{' '}<span className="title-article-span">{' '}Slider</span>
            </p>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease',
                cursor: 'pointer'
              }}
              className='aside-accordion-svg'
            >
              <path
                d="M6 15L12 9L18 15"
                stroke="#B0ADA8" 
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>



          </div>
          <div
            className="accordion-content"
            style={{
              maxHeight: isOpen ? '300px' : '0',
              overflow: 'hidden',
              transition: 'max-height 0.3s ease',
              borderBottom: isOpen ? '1px solid var(--main-color)' : ''
            }}
          >
            <div className='accordion-item2'>
              <a onClick={handleScrollHtml}><span className="tag">HTML</span> code</a>
              <a onClick={handleScrollCss}><span className="blue-color">CSS</span> code</a>
              <a onClick={handleScrollJs} ><span className="yellow">JS</span> code</a>
              <a onClick={hanldeScrollDraggableJs} ><span className="green">Draggable</span> slider</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
