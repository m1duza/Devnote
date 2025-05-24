import './slider-article-footer-style.css'

export default function SliderArticleFooter() {
    return(
        <footer className="slider-article-footer-container">
            <div className="left-side-footer">
                <p className='slider-article-footer-text'>Сделано с любовью к начинающим Фронтендерам ❤️</p>
                <p className='slider-article-footer-text'>© 2025 Dev Notes. Все права защищены.</p>
            </div>
            <div className="right-side-footer">
                <div className="footer-text-with-icon">
                <p className='slider-article-footer-text'>
                    Если вы дизайнер, фронтендер или просто вам понравился сайт,<br /> вы можете оставить отзыв или предложить изменения в дизайн сайта<br /> или код слайдера. Мне будет очень приятно! Спасибо!
                    <a href="https://t.me/yourtelegram" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '6px', }}>
                    dsds
                    </a>
                </p>

                </div>
            </div>

            
        </footer>
    )
}