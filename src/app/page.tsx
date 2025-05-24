"use client"
import './page.css';
import './globals.css';

import React, { useState } from 'react';
import Image from 'next/image';

import SliderArticle from './slider-article';
import ExplainBaseSlider from './explain-base-slider';
import ExplainDraggableSlider from './explain-draggable-slider';
import DraggableSlider from './draggable-slider';
import AsideAccordion from './aside-accordion';
import SliderArticleFooter from './slider-article-footer';

export default function Home() {
  const [openAside, setOpenAside] = useState(false)
  return (
    <main className="main">
      <button onClick={() => setOpenAside(prev => !prev)} className="aside-burger-button-open">
        <div className="aside-line"></div>
        <div className="aside-line"></div>
        <div className="aside-line"></div>
      </button>
      <aside className={`aside ${openAside ? 'open' : 'closed'}`}>
        <div className="logo-container">
          
        <img className='aside-logo' width={85} height={55} src="/logo.png" alt="Dev Notes Logo" style={{ pointerEvents: 'none', userSelect: 'none' }}  />

          <button onClick={() => setOpenAside(prev => !prev)}  className="aside-burger-button">
            <div className="aside-to-close-line"></div>
            <div className="aside-to-close-line2"></div>
          </button>
        </div>

        <div className="aside-main-content-wrapper">
          <nav className="main-article-container">
            <div className="title-the-article-container">
              <div className="wrapper-image-article">
                <Image
                  src="/Page.png"
                  alt="Article Icon"
                  width={30}
                  height={30}
                  className='aside-article-icon'
                  style={{ pointerEvents: 'none', userSelect: 'none' }} 
                />
                
              </div>
              <p className="title-the-article">Article</p>
            </div>
            
            <AsideAccordion />
          </nav>

          

          <section className="aside-footer-block">
            <p className='aside-footer-text'>Contacts</p>
            <div className="aside-container-icons-contact">
              <div  className='aside-footer-telegram-link'>
              <p className='aside-footer-contacts'>Telegram: </p>
                <a
                  href="https://t.me/yourtelegram"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginLeft: '6px', display: 'inline-block' }}
                
                >
                 
                  <Image
                    src="/icons8-телеграм-48.png"
                    width={20}
                    height={20}
                    className='aside-footer-img'
                    alt="Telegram"
                  />
                </a>
                
              </div>
              
            </div>
          </section>
        </div>
      </aside>

      <section className="main-slider-container">
        <div className="main-wrapper-content">
          <section className="slider-article-container">
            <SliderArticle />
          </section>
          <section className="explain-base-slider">
            <ExplainBaseSlider />
          </section>
          <section className="draggable-slider">
            <DraggableSlider />
          </section>
          <section className="explain-draggable-slider">
            <ExplainDraggableSlider />
          </section>
        </div>
        <SliderArticleFooter />
      </section>
    </main>
  );
}
