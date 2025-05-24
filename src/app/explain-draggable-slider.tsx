import CopyButton from './copy-button'
import './style-draggable-slider.css'
export default function ExplainDraggableSlider() {
    const draggableJsCodeToCopy = `const sliderContainer = document.getElementById('slider-container');
const sliderTrack = document.getElementById('slider-track');
let isDragging = false;
let startX;
let initialPosition;
let position = 0;
function startDrag(e) {
    isDragging = true;
    startX = e.type === 'touchstart' ? e.touches[0].pageX : e.pageX;
    initialPosition = position;
}
function endDrag() {
    isDragging = false;
};
function moveDrag(e) {;
    const containerWidth = sliderContainer.offsetWidth
    const trackWidth = sliderTrack.scrollWidth;
    let minPosition = containerWidth - trackWidth;
    let maxPosition = 0;
    if (isDragging === false) return;
    const x = e.type === 'touchmove' ? e.touches[0].pageX : e.pageX;
    const walk = x - startX;
    position = initialPosition + walk;
    position = Math.max(minPosition, Math.min(position, maxPosition));
    sliderTrack.style.transform = \`translateX(\${position}px)\`;
};
sliderTrack.addEventListener('mousedown', startDrag);
document.addEventListener('mouseup', endDrag);
document.addEventListener('mousemove', moveDrag);
sliderTrack.addEventListener('touchstart', startDrag);
document.addEventListener('touchend', endDrag);
document.addEventListener('touchmove', moveDrag);`
    return(
        <section className='explain-draggable-slider-container'>
            
            <div className="common-block-for-code">
                    <div className="out-upper-block">
                    <p className="title-for-block-of-code">Код слайдера:</p>
                        <CopyButton text={draggableJsCodeToCopy} label='html'></CopyButton>
                    </div>
            <code className="draggable-block-js">
                <p className="code-line">
                    <span className="violet-color">const</span>
                    <span className="yellow"> sliderContainer</span>
                    <span className="blue-color"> = </span>
                    <span className="tag">document</span>
                    <span className="gray">.</span>
                    <span className="blue-color">getElementById</span>
                    <span className="yellow">{'('}</span>
                    <span className="green">&apos;slider-container&apos;</span>
                    <span className="yellow">{')'}</span>
                    <span className="gray">;</span>
                </p>
                <p className="code-line">
                    <span className="violet-color">const</span>
                    <span className="yellow"> sliderTrack</span>
                    <span className="blue-color"> = </span>
                    <span className="tag">document</span>
                    <span className="gray">.</span>
                    <span className="blue-color">getElementById</span>
                    <span className="yellow">{'('}</span>
                    <span className="green">&apos;slider-track&apos;</span>
                    <span className="yellow">{')'}</span>
                    <span className="gray">;</span>
                </p>
                <p className="code-line">
                    <span className="violet-color">let</span>
                    <span className="tag"> isDragging</span>
                    <span className="blue-color"> = </span>
                    <span className="orange-color"> false</span>
                    <span className="gray">;</span>
                </p>
                <p className="code-line">
                    <span className="violet-color">let</span>
                    <span className="tag"> startX</span>
                    <span className="gray">;</span>
                </p>
                <p className="code-line">
                    <span className="violet-color">let</span>
                    <span className="tag"> initialPosition</span>
                    <span className="gray">;</span>
                </p>
                <p className="code-line">
                    <span className="violet-color">let</span>
                    <span className="tag"> position</span>
                    <span className="blue-color"> = </span>
                    <span className="orange-color"> 0</span>
                    <span className="gray">;</span>
                </p>
                <p className="code-line">
                    <span className="violet-color">function</span>
                    <span className="blue-color"> startDrag</span>
                    <span className="yellow">{'('}</span>
                    <span className="tag">e</span>
                    <span className="yellow">{')'}</span>
                </p>
                <p className="code-line2">
                    <span className="tag">isDragging</span>
                    <span className="blue-color"> = </span>
                    <span className="orange-color">true</span>
                    <span className="gray">;</span>
                </p>
                <p className="code-line2">
                    <span className="tag">startX</span>
                    <span className="blue-color"> = </span>
                    <span className="tag">e</span>
                    <span className="gray">.</span>
                    <span className="tag">type</span>
                    <span className="blue-color"> === </span>
                    <span className="green">&apos;touchstart&apos;</span>
                    <span className="violet-color"> ? </span>
                    <span className="tag">e</span>
                    <span className="gray">.</span>
                    <span className="tag">touches</span>
                    <span className="violet-color">{'['}</span>
                    <span className="orange-color">0</span>
                    <span className="violet-color">{']'}</span>
                    <span className="gray">.</span>
                    <span className="tag">pageX</span>
                    <span className="gray"> : </span>
                    <span className="tag">e</span>
                    <span className="gray">.</span>
                    <span className="tag">pageX</span>
                    <span className="gray">;</span>
                </p>
                <p className="code-line2">
                    <span className="tag">initialPosition</span>
                    <span className="blue-color"> = </span>
                    <span className="tag">position</span>
                    <span className="gray">;</span>
                </p>
                <p className="code-line">
                    <span className="yellow">{'}'}</span>
                    <span className="gray">;</span>
                </p>
                <p className="code-line">
                    <span className="violet-color">function</span>
                    <span className="blue-color"> endDrag</span>
                    <span className="yellow">{'() {'}</span>
                </p>
                <p className="code-line2">
                    <span className="tag">isDragging</span>
                    <span className="blue-color"> = </span>
                    <span className="orange-color">false</span>
                    <span className="gray">;</span>
                </p>
                <p className="code-line">
                    <span className="yellow">{'}'}</span>
                </p>
                <p className="code-line">
                    <span className="violet-color">function</span>
                    <span className="blue-color"> moveDrag</span>
                    <span className="yellow">{'('}</span>
                    <span className="tag">e</span>
                    <span className="yellow">{') {'}</span>
                </p>
                <p className="code-line2">
                    <span className="violet-color">const </span>
                    <span className="yellow">containerWidth</span>
                    <span className="blue-color"> = </span>
                    <span className="tag">sliderContainer</span>
                    <span className="gray">.</span>
                    <span className="tag">offsetWidth</span>
                    <span className="gray">;</span>
                </p>
                <p className="code-line2">
                    <span className="violet-color">const </span>
                    <span className="yellow">trackWidth</span>
                    <span className="blue-color"> = </span>
                    <span className="tag">sliderTrack</span>
                    <span className="gray">.</span>
                    <span className="tag">scrollWidth</span>
                    <span className="gray">;</span>
                </p>
                <p className="code-line2">
                    <span className="violet-color">let</span>
                    <span className="tag"> minPosition</span>
                    <span className="blue-color"> = </span>
                    <span className="tag">containerWidth</span>
                    <span className="gray"> - </span>
                    <span className="tag">trackWidth</span>
                    <span className="gray">;</span>
                </p>
                <p className="code-line2">
                    <span className="violet-color">let</span>
                    <span className="tag"> minPosition</span>
                    <span className="blue-color"> = </span>
                    <span className="orange-color">0</span>
                    <span className="gray">;</span>
                </p>
                <p className="code-line2">
                    <span className="violet-color">if {'('}</span>
                    <span className="tag">isDragging</span>
                    <span className="blue-color"> === </span>
                    <span className="orange-color">false</span>
                    <span className="violet-color">{') return'}</span>
                    <span className="gray">;</span>
                </p>
                <p className="code-line2">
                    <span className="violet-color">const</span>
                    <span className="yellow"> x</span>
                    <span className="blue-color"> = </span>
                    <span className="tag">e</span>
                    <span className="gray">.</span>
                    <span className="tag">type</span>
                    <span className="blue-color"> === </span>
                    <span className="green">&apos;touchmove&apos;</span>
                    <span className="violet-color"> ? </span>
                    <span className="tag">e</span>
                    <span className="gray">.</span>
                    <span className="tag">touches</span>
                    <span className="violet-color">{'['}</span>
                    <span className="orange-color">0</span>
                    <span className="violet-color">{']'}</span>
                    <span className="gray">.</span>
                    <span className="tag">pageX</span>
                    <span className="gray"> : </span>
                    <span className="tag">e</span>
                    <span className="gray">.</span>
                    <span className="tag">pageX</span>
                    <span className="gray">;</span>
                </p>
                <p className="code-line2">
                    <span className="violet-color">const</span>
                    <span className="yellow">walk</span>
                    <span className="blue-color"> = </span>
                    <span className="tag">x</span>
                    <span className="blue-color"> - </span>
                    <span className="tag">startX</span>
                    <span className="gray">;</span>
                </p>
                <p className="code-line2">
                    <span className="tag">position</span>
                    <span className="blue-color"> = </span>
                    <span className="tag">initialPosition</span>
                    <span className="blue-color"> + </span>
                    <span className="tag">walk</span>
                    <span className="gray">;</span>
                </p>
                <p className="code-line2">
                    <span className="tag">position</span>
                    <span className="blue-color"> = </span>
                    <span className="tag">Math</span>
                    <span className="gray">.</span>
                    <span className="blue-color">max</span>
                    <span className="violet-color">{'('}</span>
                    <span className="tag">minPosition</span>
                    <span className="gray">, </span>
                    <span className="tag">Math</span>
                    <span className="gray">.</span>
                    <span className="blue-color">min{'('}</span>
                    <span className="tag">position</span>
                    <span className="gray">,</span>
                    <span className="tag"> maxPosition</span>
                    <span className="blue-color">{')'}</span>
                    <span className="violet-color">{')'}</span>
                    <span className="gray">;</span>
                </p>
                <p className="code-line2">
                    <span className="tag">sliderTrack</span>
                    <span className="gray">.</span>
                    <span className="tag">style</span>
                    <span className="gray">.</span>
                    <span className="tag">transform</span>
                    <span className="blue-color"> = </span>
                    <span className="green">&#96;translateX{'('}</span>
                    <span className="violet-color">${'{'}</span>
                    <span className="tag">position</span>
                    <span className="violet-color">{'}'}</span>
                    <span className="green">px{')'}&#96;</span>
                    <span className="gray">;</span>
                </p>
                <p className="code-line">
                    <span className="yellow">{'}'}</span>
                    <span className="gray">;</span>
                </p>
                <p className="code-line">
                    <span className="tag">sliderTrack</span>
                    <span className="gray">.</span>
                    <span className="blue-color">addEventListener</span>
                    <span className="yellow">{'('}</span>
                    <span className="green">&apos;mousedown&apos;</span>
                    <span className="gray">, </span>
                    <span className="tag">startDrag</span>
                    <span className="yellow">{')'}</span>
                    <span className="gray">;</span>
                </p>
                <p className="code-line">
                    <span className="tag">document</span>
                    <span className="gray">.</span>
                    <span className="blue-color">addEventListener</span>
                    <span className="yellow">{'('}</span>
                    <span className="green">&apos;mouseup&apos;</span>
                    <span className="gray">, </span>
                    <span className="tag">endDrag</span>
                    <span className="yellow">{')'}</span>
                    <span className="gray">;</span>
                </p>
                <p className="code-line">
                    <span className="tag">document</span>
                    <span className="gray">.</span>
                    <span className="blue-color">addEventListener</span>
                    <span className="yellow">{'('}</span>
                    <span className="green">&apos;mousemove&apos;</span>
                    <span className="gray">, </span>
                    <span className="tag">moveDrag</span>
                    <span className="yellow">{')'}</span>
                    <span className="gray">;</span>
                </p>
                <p className="code-line">
                    <span className="tag">sliderTrack</span>
                    <span className="gray">.</span>
                    <span className="blue-color">addEventListener</span>
                    <span className="yellow">{'('}</span>
                    <span className="green">&apos;touchstart&apos;</span>
                    <span className="gray">, </span>
                    <span className="tag">startDrag</span>
                    <span className="yellow">{')'}</span>
                    <span className="gray">;</span>
                </p>
                <p className="code-line">
                    <span className="tag">document</span>
                    <span className="gray">.</span>
                    <span className="blue-color">addEventListener</span>
                    <span className="yellow">{'('}</span>
                    <span className="green">&apos;touchend&apos;</span>
                    <span className="gray">, </span>
                    <span className="tag">endDrag</span>
                    <span className="yellow">{')'}</span>
                    <span className="gray">;</span>
                </p>
                <p className="code-line">
                    <span className="tag">document</span>
                    <span className="gray">.</span>
                    <span className="blue-color">addEventListener</span>
                    <span className="yellow">{'('}</span>
                    <span className="green">&apos;touchmove&apos;</span>
                    <span className="gray">, </span>
                    <span className="tag">moveDrag</span>
                    <span className="yellow">{')'}</span>
                    <span className="gray">;</span>
                </p>
                
                
            </code>
            </div>
            <div className="html-line"></div>
            <nav>
                <ol>
                    <li>Инициализация элементов</li>
                </ol>
                <code className='draggable-block-js-explain'>
                    <p className="code-line">
                        <span className="violet-color">const</span>
                        <span className="yellow"> sliderContainer</span>
                        <span className="blue-color"> = </span>
                        <span className="tag">document</span>
                        <span className="gray">.</span>
                        <span className="blue-color">getElementById</span>
                        <span className="yellow">{'('}</span>
                        <span className="green">&apos;slider-container&apos;</span>
                        <span className="yellow">{')'}</span>
                        <span className="gray">;</span>
                    </p>
                    <p className="code-line">
                        <span className="violet-color">const</span>
                        <span className="yellow"> sliderTrack</span>
                        <span className="blue-color"> = </span>
                        <span className="tag">document</span>
                        <span className="gray">.</span>
                        <span className="blue-color">getElementById</span>
                        <span className="yellow">{'('}</span>
                        <span className="green">&apos;slider-track&apos;</span>
                        <span className="yellow">{')'}</span>
                        <span className="gray">;</span>
                    </p>
                    <p className="code-line">
                        <span className="violet-color">let</span>
                        <span className="tag"> isDragging</span>
                        <span className="blue-color"> = </span>
                        <span className="orange-color"> false</span>
                        <span className="gray">;</span>
                    </p>
                    <p className="code-line">
                        <span className="violet-color">let</span>
                        <span className="tag"> startX</span>
                        <span className="gray">;</span>
                    </p>
                    <p className="code-line">
                        <span className="violet-color">let</span>
                        <span className="tag"> initialPosition</span>
                        <span className="gray">;</span>
                    </p>
                    <p className="code-line">
                        <span className="violet-color">let</span>
                        <span className="tag"> position</span>
                        <span className="blue-color"> = </span>
                        <span className="orange-color"> 0</span>
                        <span className="gray">;</span>
                    </p>
                </code>
                <ul>
                    <li> Получаем элементы контейнера и нашего слайдера, который будем двигать.</li>
                    <li>Переменая <span className="line-of-code">isDragging</span> отслеживает, нажата ли кнопка мыши на слайдер.</li>
                    <li><span className="line-of-code">startX</span> отслеживает начальную позицию мыши.</li>
                    <li><span className="line-of-code">initialPosition</span> фиксирует текущую позицию слайдера перед началом движения.</li>
                    <li>position текущая позиция слайдера // <span className="line-of-code">position = initialPosition + walk; {'(`translateX(${position}px)`);'}</span>.</li>
                </ul>
                <div className="html-line"></div>
                <ol start={2}>
                    <li>Начало перетаскивания</li>
                </ol>
                <code className="draggable-block-js-explain">
                    <p className="code-line">
                        <span className="violet-color">function</span>
                        <span className="blue-color"> startDrag</span>
                        <span className="yellow">{'('}</span>
                        <span className="tag">e</span>
                        <span className="yellow">{')'}</span>
                    </p>
                    <p className="code-line2">
                        <span className="tag">isDragging</span>
                        <span className="blue-color"> = </span>
                        <span className="orange-color">true</span>
                        <span className="gray">;</span>
                    </p>
                    <p className="code-line2">
                        <span className="tag">startX</span>
                        <span className="blue-color"> = </span>
                        <span className="tag">e</span>
                        <span className="gray">.</span>
                        <span className="tag">type</span>
                        <span className="blue-color"> === </span>
                        <span className="green">&apos;touchstart&apos;</span>
                        <span className="violet-color"> ? </span>
                        <span className="tag">e</span>
                        <span className="gray">.</span>
                        <span className="tag">touches</span>
                        <span className="violet-color">{'['}</span>
                        <span className="orange-color">0</span>
                        <span className="violet-color">{']'}</span>
                        <span className="gray">.</span>
                        <span className="tag">pageX</span>
                        <span className="gray"> : </span>
                        <span className="tag">e</span>
                        <span className="gray">.</span>
                        <span className="tag">pageX</span>
                        <span className="gray">;</span>
                    </p>
                    <p className="code-line2">
                        <span className="tag">initialPosition</span>
                        <span className="blue-color"> = </span>
                        <span className="tag">position</span>
                        <span className="gray">;</span>
                    </p>
                    <p className="code-line">
                        <span className="yellow">{'}'}</span>
                        <span className="gray">;</span>
                    </p>
                </code>
                <ul>
                    <li>Устанавливаем <span className="line-of-code">isDragging = true</span>, что означает, что пользователь начал перетаскивание.</li>
                    <li>Определяем начальную точку касания/клика:</li>
                    <li>Если это касание <span className="line-of-code">(touchstart)</span>, берем <span className="line-of-code">e.touches[0].pageX.</span></li>
                    <li>Если это мышь <span className="line-of-code">(mousedown)</span>, берем <span className="line-of-code">e.pageX</span>.</li>
                    <li>Запоминаем начальную позицию слайдера.</li>
                </ul>
                <div className="html-line"></div>
                <ol start={3}>
                    <li>Окончание перетаскивания</li>
                </ol>
                <code className='draggable-block-js-explain'>
                    <p className="code-line">
                        <span className="violet-color">function</span>
                        <span className="blue-color"> endDrag</span>
                        <span className="yellow">{'() {'}</span>
                    </p>
                    <p className="code-line2">
                        <span className="tag">isDragging</span>
                        <span className="blue-color"> = </span>
                        <span className="orange-color">false</span>
                        <span className="gray">;</span>
                    </p>
                    <p className="code-line">
                        <span className="yellow">{'}'}</span>
                    </p>
                </code>
                <ul>
                    <li> Когда пользователь отпускает кнопку мыши или убирает палец с экрана, выключаем <span className="line-of-code">isDragging</span>, чтобы остановить движение.</li>
                </ul>
                <div className="html-line"></div>
                <ol start={4}>
                    <li>Движение слайдера</li>
                </ol>
                <code className='draggable-block-js-explain'>
                    <p className="code-line">
                        <span className="violet-color">function</span>
                        <span className="blue-color"> moveDrag</span>
                        <span className="yellow">{'('}</span>
                        <span className="tag">e</span>
                        <span className="yellow">{') {'}</span>
                    </p>
                    <p className="code-line2">
                        <span className="violet-color">const </span>
                        <span className="yellow">containerWidth</span>
                        <span className="blue-color"> = </span>
                        <span className="tag">sliderContainer</span>
                        <span className="gray">.</span>
                        <span className="tag">offsetWidth</span>
                        <span className="gray">;</span>
                    </p>
                    <p className="code-line2">
                        <span className="violet-color">const </span>
                        <span className="yellow">trackWidth</span>
                        <span className="blue-color"> = </span>
                        <span className="tag">sliderTrack</span>
                        <span className="gray">.</span>
                        <span className="tag">scrollWidth</span>
                        <span className="gray">;</span>
                    </p>
                    <p className="code-line2">
                        <span className="violet-color">let</span>
                        <span className="tag"> minPosition</span>
                        <span className="blue-color"> = </span>
                        <span className="tag">containerWidth</span>
                        <span className="gray"> - </span>
                        <span className="tag">trackWidth</span>
                        <span className="gray">;</span>
                    </p>
                    <p className="code-line2">
                        <span className="violet-color">let</span>
                        <span className="tag"> minPosition</span>
                        <span className="blue-color"> = </span>
                        <span className="orange-color">0</span>
                        <span className="gray">;</span>
                    </p>
                    <p className="code-line2">
                        <span className="violet-color">if {'('}</span>
                        <span className="tag">isDragging</span>
                        <span className="blue-color"> === </span>
                        <span className="orange-color">false</span>
                        <span className="violet-color">{') return'}</span>
                        <span className="gray">;</span>
                    </p>
                    <p className="code-line2">
                        <span className="violet-color">const</span>
                        <span className="yellow"> x</span>
                        <span className="blue-color"> = </span>
                        <span className="tag">e</span>
                        <span className="gray">.</span>
                        <span className="tag">type</span>
                        <span className="blue-color"> === </span>
                        <span className="green">&apos;touchmove&apos;</span>
                        <span className="violet-color"> ? </span>
                        <span className="tag">e</span>
                        <span className="gray">.</span>
                        <span className="tag">touches</span>
                        <span className="violet-color">{'['}</span>
                        <span className="orange-color">0</span>
                        <span className="violet-color">{']'}</span>
                        <span className="gray">.</span>
                        <span className="tag">pageX</span>
                        <span className="gray"> : </span>
                        <span className="tag">e</span>
                        <span className="gray">.</span>
                        <span className="tag">pageX</span>
                        <span className="gray">;</span>
                    </p>
                    <p className="code-line2">
                        <span className="violet-color">const</span>
                        <span className="yellow"> walk</span>
                        <span className="blue-color"> = </span>
                        <span className="tag">x</span>
                        <span className="blue-color"> - </span>
                        <span className="tag">startX</span>
                        <span className="gray">;</span>
                    </p>
                    <p className="code-line2">
                        <span className="tag">position</span>
                        <span className="blue-color"> = </span>
                        <span className="tag">initialPosition</span>
                        <span className="blue-color"> + </span>
                        <span className="tag">walk</span>
                        <span className="gray">;</span>
                    </p>
                    <p className="code-line2">
                        <span className="tag">position</span>
                        <span className="blue-color"> = </span>
                        <span className="tag">Math</span>
                        <span className="gray">.</span>
                        <span className="blue-color">max</span>
                        <span className="violet-color">{'('}</span>
                        <span className="tag">minPosition</span>
                        <span className="gray">, </span>
                        <span className="tag">Math</span>
                        <span className="gray">.</span>
                        <span className="blue-color">min{'('}</span>
                        <span className="tag">position</span>
                        <span className="gray">,</span>
                        <span className="tag"> maxPosition</span>
                        <span className="blue-color">{')'}</span>
                        <span className="violet-color">{')'}</span>
                        <span className="gray">;</span>
                    </p>
                    <p className="code-line2">
                        <span className="tag">sliderTrack</span>
                        <span className="gray">.</span>
                        <span className="tag">style</span>
                        <span className="gray">.</span>
                        <span className="tag">transform</span>
                        <span className="blue-color"> = </span>
                        <span className="green">&#96;translateX{'('}</span>
                        <span className="violet-color">${'{'}</span>
                        <span className="tag">position</span>
                        <span className="violet-color">{'}'}</span>
                        <span className="green">px{')'}&#96;</span>
                        <span className="gray">;</span>
                    </p>
                    <p className="code-line">
                        <span className="yellow">{'}'}</span>
                        <span className="gray">;</span>
                    </p> 
                </code>
                <ol>
                    <li>Получаем размеры:</li>
                </ol>
                <ul>
                    <li className='a-tag-ul'><span className="line-of-code">containerWidth</span> — ширина видимой области слайдера.</li>
                    <li className='a-tag-ul'><span className="line-of-code">trackWidth</span> — полная ширина трека.</li>
                    <li className='a-tag-ul'><span className="line-of-code">minPosition = containerWidth - trackWidth</span> — минимальная граница, докуда можно двигать слайдер</li>
                    <li className='a-tag-ul'><span className="line-of-code">maxPosition = 0</span> — максимальная позиция (крайний правый конец трека, начальная точка).</li>
                </ul>
                <ol start={2}>
                    <li>Проверяем:</li>
                </ol>
                <ul>
                    <li className='a-tag-ul'>Если <span className="line-of-code">isDragging == false</span>, значит пользователь не двигает слайдер, и функция ничего не делает.</li>
                    
                </ul>
                <ol start={3}>
                    <li>Определяем текущее положение курсора или пальца:</li>
                </ol>
                <code className='draggable-block-js-explain'>
                    <p className="code-line">
                            <span className="violet-color">const</span>
                            <span className="yellow"> x</span>
                            <span className="blue-color"> = </span>
                            <span className="tag">e</span>
                            <span className="gray">.</span>
                            <span className="tag">type</span>
                            <span className="blue-color"> === </span>
                            <span className="green">&apos;touchmove&apos;</span>
                            <span className="violet-color"> ? </span>
                            <span className="tag">e</span>
                            <span className="gray">.</span>
                            <span className="tag">touches</span>
                            <span className="violet-color">{'['}</span>
                            <span className="orange-color">0</span>
                            <span className="violet-color">{']'}</span>
                            <span className="gray">.</span>
                            <span className="tag">pageX</span>
                            <span className="gray"> : </span>
                            <span className="tag">e</span>
                            <span className="gray">.</span>
                            <span className="tag">pageX</span>
                            <span className="gray">;</span>
                        </p>
                </code>
                <ul>
                    <li className='a-tag-ul'>Если касание <span className="line-of-code">(touchmove)</span>, берем <span className="line-of-code">e.touches[0].pageX.</span></li>
                    <li className='a-tag-ul'>Если мышь <span className="line-of-code">(mousemove)</span>, берем <span className="line-of-code">e.pageX.</span></li>
                </ul>
                <ol start={4}>
                    <li>Вычисляем сдвиг (walk):</li>
                </ol>
                <code className='draggable-block-js-explain'>
                    <p className="code-line">
                        <span className="violet-color">const</span>
                        <span className="yellow"> walk</span>
                        <span className="blue-color"> = </span>
                        <span className="tag">x</span>
                        <span className="blue-color"> - </span>
                        <span className="tag">startX</span>
                        <span className="gray">;</span>
                    </p>
                </code>
                <ul>
                    <li className='a-tag-ul'>Разница между текущей позицией курсора/пальца и его стартовой позицией.</li>
                    
                </ul>
                <ol start={5}>
                    <li>Обновляем position:</li>
                </ol>
                
                <ul>
                    <li className='a-tag-ul'>Новая позиция слайдера — это его начальная позиция + смещение.</li>
                    
                </ul>
                <ol start={6}>
                    <li>Ограничиваем движение слайдера в пределах границ:</li>
                </ol>
                <code className='draggable-block-js-explain'>
                    <p className="code-line">
                            <span className="tag">position</span>
                            <span className="blue-color"> = </span>
                            <span className="tag">Math</span>
                            <span className="gray">.</span>
                            <span className="blue-color">max</span>
                            <span className="violet-color">{'('}</span>
                            <span className="tag">minPosition</span>
                            <span className="gray">, </span>
                            <span className="tag">Math</span>
                            <span className="gray">.</span>
                            <span className="blue-color">min{'('}</span>
                            <span className="tag">position</span>
                            <span className="gray">,</span>
                            <span className="tag"> maxPosition</span>
                            <span className="blue-color">{')'}</span>
                            <span className="violet-color">{')'}</span>
                            <span className="gray">;</span>
                        </p>
                </code>
                <ul>
                    <li className='a-tag-ul'><span className="line-of-code">Math.min(position, maxPosition)</span> — гарантирует, что <span className="line-of-code">position</span> не превысит правую границу <span className="line-of-code">(maxPosition)</span>.</li>
                    <li className='a-tag-ul'><span className="line-of-code">Math.max(minPosition, ...)</span> — гарантирует, что <span className="line-of-code">position</span> не выйдет за левую границу <span className="line-of-code">(minPosition)</span>.</li>
                </ul>
                <ol start={7}>
                    <li>Применяем сдвиг:</li>
                </ol>
                <code className='draggable-block-js-explain'>
                    <p className="code-line">
                        <span className="tag">sliderTrack</span>
                        <span className="gray">.</span>
                        <span className="tag">style</span>
                        <span className="gray">.</span>
                        <span className="tag">transform</span>
                        <span className="blue-color"> = </span>
                        <span className="green">&#96;translateX{'('}</span>
                        <span className="violet-color">${'{'}</span>
                        <span className="tag">position</span>
                        <span className="violet-color">{'}'}</span>
                        <span className="green">px{')'}&#96;</span>
                        <span className="gray">;</span>
                    </p>
                </code>
                <div className="rememinder-block">
                    <p className="css-reminder-text">Можно еще добавить transition к трансформ для плавного перехода:<br></br>
                    <span className="line-of-code">sliderTrack.style.transition = {"'transform 0.3s ease-in-out'"}</span></p>
                    
                </div>
                <div className="html-line"></div>
                <ol start={5}>
                    <li>Назначение обработчиков событий:</li>
                </ol>
                <code className='draggable-block-js-explain'>
                <p className="code-line">
                    <span className="tag">sliderTrack</span>
                    <span className="gray">.</span>
                    <span className="blue-color">addEventListener</span>
                    <span className="yellow">{'('}</span>
                    <span className="green">&apos;mousedown&apos;</span>
                    <span className="gray">, </span>
                    <span className="tag">startDrag</span>
                    <span className="yellow">{')'}</span>
                    <span className="gray">;</span>
                </p>
                <p className="code-line">
                    <span className="tag">document</span>
                    <span className="gray">.</span>
                    <span className="blue-color">addEventListener</span>
                    <span className="yellow">{'('}</span>
                    <span className="green">&apos;mouseup&apos;</span>
                    <span className="gray">, </span>
                    <span className="tag">endDrag</span>
                    <span className="yellow">{')'}</span>
                    <span className="gray">;</span>
                </p>
                <p className="code-line">
                    <span className="tag">document</span>
                    <span className="gray">.</span>
                    <span className="blue-color">addEventListener</span>
                    <span className="yellow">{'('}</span>
                    <span className="green">&apos;mousemove&apos;</span>
                    <span className="gray">, </span>
                    <span className="tag">moveDrag</span>
                    <span className="yellow">{')'}</span>
                    <span className="gray">;</span>
                </p>
                <p className="code-line">
                    <span className="tag">sliderTrack</span>
                    <span className="gray">.</span>
                    <span className="blue-color">addEventListener</span>
                    <span className="yellow">{'('}</span>
                    <span className="green">&apos;touchstart&apos;</span>
                    <span className="gray">, </span>
                    <span className="tag">startDrag</span>
                    <span className="yellow">{')'}</span>
                    <span className="gray">;</span>
                </p>
                <p className="code-line">
                    <span className="tag">document</span>
                    <span className="gray">.</span>
                    <span className="blue-color">addEventListener</span>
                    <span className="yellow">{'('}</span>
                    <span className="green">&apos;touchend&apos;</span>
                    <span className="gray">, </span>
                    <span className="tag">endDrag</span>
                    <span className="yellow">{')'}</span>
                    <span className="gray">;</span>
                </p>
                <p className="code-line">
                    <span className="tag">document</span>
                    <span className="gray">.</span>
                    <span className="blue-color">addEventListener</span>
                    <span className="yellow">{'('}</span>
                    <span className="green">&apos;touchmove&apos;</span>
                    <span className="gray">, </span>
                    <span className="tag">moveDrag</span>
                    <span className="yellow">{')'}</span>
                    <span className="gray">;</span>
                </p>
                </code>
            </nav>
            <div className="html-line"></div>
            <h4>Итог</h4>
            <p className='result'>В этой статье мы разобрали, как создать удобный и универсальный слайдер для фронтенд-разработки. Мы начали с базового варианта, управляемого кнопками, а затем добавили возможность перетаскивания с помощью мыши и касания.

                <br /><br />Надеюсь, этот материал помог тебе лучше разобраться в работе слайдера.
                </p>
        </section>
    )
}