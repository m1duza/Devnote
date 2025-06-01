"use client";
import './explain-base-slider.css'

import CopyButton from './copy-button'
import { useRef } from 'react'
export default function ExplainBaseSlider () {
    const toHtmlCode = useRef<HTMLDivElement>(null)
    const javaScriptTextToCopy = `const buttonToRight = document.getElementById('slider-button-right');
const buttonToLeft = document.getElementById('slider-button-left');
const sliderContainer = document.getElementById('slider-container');
const sliderTrack = document.getElementById('slider-track');
let position = 0;
const step = 200;
function toRight() {
    position -= step;
    sliderTrack.style.transform = \`translateX(\${position}px)\`;
    sliderTrack.style.transition = 'transform 0.5s ease-in-out';
    updateButtons();
};
function toLeft() {
    position += step;
    sliderTrack.style.transform = \`translateX(\${position}px)\`;
    sliderTrack.style.transition = 'transform 0.5s ease-in-out';
    updateButtons();
};
buttonToRight.addEventListener('click', toRight);
buttonToLeft.addEventListener('click', toLeft);
function updateButtons() {
    const trackWidth = sliderTrack.scrollWidth;
    const containerWidth = sliderContainer.offsetWidth;
    buttonToLeft.disabled = position >= 0;
    buttonToRight.disabled = Math.abs(position) + containerWidth >= trackWidth;
};
updateButtons();`
const htmlTextToCopy = `<section class="slider-container" id="slider-container">
<div class="slider-track" id="slider-track">
       <div class="slider-item">
              <p class="slider-content">1</p>
       </div>
       <div class="slider-item">
              <p class="slider-content">2</p>
        </div>
        <div class="slider-item">
               <p class="slider-content">3</p>
        </div>
        <div class="slider-item">
               <p class="slider-content">4</p>
        </div>
        <div class="slider-item">
               <p class="slider-content">5</p>
        </div>
        <div class="slider-item">
               <p class="slider-content">6</p>
        </div>
</div>
</section>
<button class="slider-button" id="slider-button-left">Left</button>
<button class="slider-button" id="slider-button-right">Right</button>`
    const cssTextToCopy = `.slider-container{
    width: 780px;
    height: 150px;
    overflow: hidden;
}
.slider-item{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 180px;
    height: 150px;
    background-color: #B3B1AD;
    flex-shrink: 0;
    border-radius: 15px;
}
.slider-track{
    display: flex; // распологаем контент в track
    gap: 20px;
    width: max-content; // расширяем наш трек по размеру контента 
}
.slider-button{
    width: 70px;
    height: 35px;
    border-radius: 10px;
    border: none;
    background-color: #FEFAE0;
    cursor: pointer;
}
`
    
    return(
        <div>
            <p className="explain-introducing">Начнем с основ: чтобы сделать слайдер, нам нужен контейнер, внутри которого будет трек с нашими слайдами. Давайте разберем, как это выглядит в HTML.</p>
            <div className="html-code-block">
                
                <div className="common-block-for-code">
                    <div className="out-upper-block">
                        <p ref={toHtmlCode} className='html-code-title'>HTML</p>
                        <CopyButton text={htmlTextToCopy} label='html'></CopyButton>
                    </div>
                    <code className='html-code'>
                        
                        <p className='code-line'>
                            <span className="gray">&lt;</span>
                            <span className='tag'>section </span>
                            <span className="orange-color">class</span>
                            <span className="gray">=</span>
                            <span className="green">&quot;slider-container&quot; id=&quot;slider-container&quot;</span>
                            <span className="gray">&gt;</span>
                        </p>
                        <p className='code-line2'>
                            <span className="gray">&lt;</span>
                            <span className='tag'>div </span>
                            <span className="orange-color">class</span>
                            <span className="gray">=</span>
                            <span className="green">&quot;slider-track&quot; id=&quot;slider-track&quot;</span>
                            <span className="gray">&gt;</span>
                        </p>
                        <p className='code-line3'>
                            <span className="gray">&lt;</span>
                            <span className='tag'>div </span>
                            <span className="orange-color">class</span>
                            <span className="gray">=</span>
                            <span className="green">&quot;slider-item&quot;</span>
                            <span className="gray">&gt;</span>
                        </p>
                        <p className='code-line4'>
                            <span className="gray">&lt;</span>
                            <span className='tag'>p </span>
                            <span className="orange-color">class</span>
                            <span className="gray">=</span>
                            <span className="green">&quot;slider-item&quot;</span>
                            <span className="gray">&gt;</span>
                            <span className="gray">1</span>
                            <span className="gray">&lt;</span>
                            <span className='tag'>/p</span>
                            <span className="gray">&gt;</span>
                        </p>
                        <p className='code-line3'>
                            <span className="gray">&lt;</span>
                            <span className='tag'>/div</span>
                            <span className="gray">&gt;</span>
                        </p>
                        <p className='code-line3'>
                            <span className="gray">&lt;</span>
                            <span className='tag'>div </span>
                            <span className="orange-color">class</span>
                            <span className="gray">=</span>
                            <span className="green">&quot;slider-item&quot;</span>
                            <span className="gray">&gt;</span>
                        </p>
                        <p className='code-line4'>
                            <span className="gray">&lt;</span>
                            <span className='tag'>p </span>
                            <span className="orange-color">class</span>
                            <span className="gray">=</span>
                            <span className="green">&quot;slider-item&quot;</span>
                            <span className="gray">&gt;</span>
                            <span className="gray">2</span>
                            <span className="gray">&lt;</span>
                            <span className='tag'>/p</span>
                            <span className="gray">&gt;</span>
                        </p>
                        <p className='code-line3'>
                            <span className="gray">&lt;</span>
                            <span className='tag'>/div</span>
                            <span className="gray">&gt;</span>
                        </p>
                        <p className='code-line3'>
                            <span className="gray">&lt;</span>
                            <span className='tag'>div </span>
                            <span className="orange-color">class</span>
                            <span className="gray">=</span>
                            <span className="green">&quot;slider-item&quot;</span>
                            <span className="gray">&gt;</span>
                        </p>
                        <p className='code-line4'>
                            <span className="gray">&lt;</span>
                            <span className='tag'>p </span>
                            <span className="orange-color">class</span>
                            <span className="gray">=</span>
                            <span className="green">&quot;slider-item&quot;</span>
                            <span className="gray">&gt;</span>
                            <span className="gray">3</span>
                            <span className="gray">&lt;</span>
                            <span className='tag'>/p</span>
                            <span className="gray">&gt;</span>
                        </p>
                        <p className='code-line3'>
                            <span className="gray">&lt;</span>
                            <span className='tag'>/div</span>
                            <span className="gray">&gt;</span>
                        </p>
                        <p className='code-line3'>
                            <span className="gray">&lt;</span>
                            <span className='tag'>div </span>
                            <span className="orange-color">class</span>
                            <span className="gray">=</span>
                            <span className="green">&quot;slider-item&quot;</span>
                            <span className="gray">&gt;</span>
                        </p>
                        <p className='code-line4'>
                            <span className="gray">&lt;</span>
                            <span className='tag'>p </span>
                            <span className="orange-color">class</span>
                            <span className="gray">=</span>
                            <span className="green">&quot;slider-item&quot;</span>
                            <span className="gray">&gt;</span>
                            <span className="gray">4</span>
                            <span className="gray">&lt;</span>
                            <span className='tag'>/p</span>
                            <span className="gray">&gt;</span>
                        </p>
                        <p className='code-line3'>
                            <span className="gray">&lt;</span>
                            <span className='tag'>/div</span>
                            <span className="gray">&gt;</span>
                        </p>
                        <p className='code-line3'>
                            <span className="gray">&lt;</span>
                            <span className='tag'>div </span>
                            <span className="orange-color">class</span>
                            <span className="gray">=</span>
                            <span className="green">&quot;slider-item&quot;</span>
                            <span className="gray">&gt;</span>
                        </p>
                        <p className='code-line4'>
                            <span className="gray">&lt;</span>
                            <span className='tag'>p </span>
                            <span className="orange-color">class</span>
                            <span className="gray">=</span>
                            <span className="green">&quot;slider-item&quot;</span>
                            <span className="gray">&gt;</span>
                            <span className="gray">5</span>
                            <span className="gray">&lt;</span>
                            <span className='tag'>/p</span>
                            <span className="gray">&gt;</span>
                        </p>
                        <p className='code-line3'>
                            <span className="gray">&lt;</span>
                            <span className='tag'>/div</span>
                            <span className="gray">&gt;</span>
                        </p>
                        <p className='code-line3'>
                            <span className="gray">&lt;</span>
                            <span className='tag'>div </span>
                            <span className="orange-color">class</span>
                            <span className="gray">=</span>
                            <span className="green">&quot;slider-item&quot;</span>
                            <span className="gray">&gt;</span>
                        </p>
                        <p className='code-line4'>
                            <span className="gray">&lt;</span>
                            <span className='tag'>p </span>
                            <span className="orange-color">class</span>
                            <span className="gray">=</span>
                            <span className="green">&quot;slider-item&quot;</span>
                            <span className="gray">&gt;</span>
                            <span className="gray">6</span>
                            <span className="gray">&lt;</span>
                            <span className='tag'>/p</span>
                            <span className="gray">&gt;</span>
                        </p>
                        <p className='code-line3'>
                            <span className="gray">&lt;</span>
                            <span className='tag'>/div</span>
                            <span className="gray">&gt;</span>
                        </p>
                        <p className='code-line'>
                            <span className="gray">&lt;</span>
                            <span className='tag'>/section</span>
                            <span className="gray">&gt;</span>
                        </p>
                        <p className='code-line'>
                            <span className="gray">&lt;</span>
                            <span className='tag'>button</span>
                            <span className="orange-color"> class</span>
                            <span className="gray">=</span>
                            <span className="green">&quot;slider-button&quot;</span>
                            <span className="orange-color"> id</span>
                            <span className="gray">=</span>
                            <span className="green">&quot;slider-button-left&quot;</span>
                            <span className="gray">&gt;</span>
                            <span className="gray">Left&lt;/</span>
                            <span className='tag'>button</span>
                            <span className="gray">&gt;</span>
                        </p>
                        <p className='code-line'>
                            <span className="gray">&lt;</span>
                            <span className='tag'>button</span>
                            <span className="orange-color"> class</span>
                            <span className="gray">=</span>
                            <span className="green">&quot;slider-button&quot;</span>
                            <span className="orange-color"> id</span>
                            <span className="gray">=</span>
                            <span className="green">&quot;slider-button-left&quot;</span>
                            <span className="gray">&gt;</span>
                            <span className="gray">Right&lt;/</span>
                            <span className='tag'>button</span>
                            <span className="gray">&gt;</span>
                        </p>
                    </code>
                </div>
                    <nav>
                        <ol className="css-ol">
                            <li>
                                Тег &lt;section&gt; с классом &quot;slider-container&quot; оборачивает весь слайдер и скрывает лишние элементы с помощью overflow: hidden.
                            </li>
                            <li>
                                &lt;div class=&quot;slider-track&quot;&gt; — это движущаяся часть слайдера, внутри которой находятся слайды. Именно этот элемент мы будем двигать с помощью CSS и JavaScript.
                            </li>
                            <li>
                                Кнопки &lt;button id=slider-button-left&quot;&gt; и &lt;button id=&quot;slider-button-right&quot;&gt; позволяют управлять слайдером, перемещая его влево и вправо.
                            </li>
                        </ol>
                    </nav>
                <div className="html-line"></div>
            </div>
            <div className="css-code-block">
                <p className="css-preface">Теперь добавим стили: настроим размеры слайдера и правильно расположим слайды внутри трека.</p>
                
                <div className="common-block-for-code">
                    <div className="out-upper-block">
                    <p className="css-code-title">CSS</p>
                        <CopyButton text={cssTextToCopy} label='html'></CopyButton>
                    </div>
                <code className='css-code'>
                <p className="code-line">
                    <span className='orange-color'>.slider-container</span>
                    <span className="yellow">{"{"}</span>
                </p>
                <p className="code-line2">
                    <span className="gray">width:</span>
                    <span className="orange-color"> 780</span>
                    <span className="tag">px</span>
                    <span className="gray">;</span>
                </p>
                <p className="code-line2">
                    <span className="gray">height:</span>
                    <span className="orange-color"> 150</span>
                    <span className="tag">px</span>
                    <span className="gray">;</span>
                </p>
                <p className="code-line2">
                    <span className="gray">overflow:</span>
                    <span className="orange-color"> hidden</span>
                    <span className="gray">;</span>
                </p>
                <p className="code-line">
                    <span className='orange-color'>{"}"}</span>
                </p>
                <p className="code-line">
                    <span className='orange-color'>.slider-item</span>
                    <span className="yellow">{"{"}</span>
                </p>
                <p className="code-line2">
                    <span className="gray">display:</span>
                    <span className="orange-color"> flex</span>
                    <span className="gray">;</span>
                </p>
                <p className="code-line2">
                    <span className="gray">align-items:</span>
                    <span className="orange-color"> center</span>
                    <span className="gray">;</span>
                </p>
                <p className="code-line2">
                    <span className="gray">justify-content:</span>
                    <span className="orange-color"> center</span>
                    <span className="gray">;</span>
                </p>
                <p className="code-line2">
                    <span className="gray">width:</span>
                    <span className="orange-color"> 180</span>
                    <span className="tag">px</span>
                    <span className="gray">;</span>
                </p>
                <p className="code-line2">
                    <span className="gray">height:</span>
                    <span className="orange-color"> 150</span>
                    <span className="tag">px</span>
                    <span className="gray">;</span>
                </p>
                <p className="code-line2">
                    <span className="gray">background-color:</span>
                    <span className="orange-color"> #B3B1AD</span>
                    <span className="gray">;</span>
                </p>
                <p className="code-line2">
                    <span className="gray">flex-shrink:</span>
                    <span className="orange-color"> 0</span>
                    <span className="gray">;</span>
                </p>
                <p className="code-line2">
                    <span className="gray">border-radius:</span>
                    <span className="orange-color"> 15</span>
                    <span className="tag">px</span>
                    <span className="gray">;</span>
                </p>
                <p className="code-line">
                    <span className='orange-color'>{"}"}</span>
                </p>
                <p className="code-line">
                    <span className='orange-color'>.slider-item</span>
                    <span className="yellow">{"{"}</span>
                </p>
                <p className="code-line2">
                    <span className="gray">display:</span>
                    <span className="orange-color"> flex</span>
                    <span className="gray">;</span>
                    <span className="gray">{'  //  распологаем контент в track'}</span>
                </p>
                <p className="code-line2">
                    <span className="gray">gap:</span>
                    <span className="orange-color"> 20</span>
                    <span className="tag">px</span>
                    <span className="gray">;</span>
                </p>
                <p className="code-line2">
                    <span className="gray">width:</span>
                    <span className="gray"> max-content</span>
                    <span className="gray">;</span>
                    <span className="gray">{'  //  расширяем наш трек по размеру контента'}</span>
                </p>
                <p className="code-line">
                    <span className='orange-color'>{"}"}</span>
                </p>
                <p className="code-line">
                    <span className='orange-color'>.slider-button</span>
                    <span className="yellow">{"{"}</span>
                </p>
                <p className="code-line2">
                    <span className="gray">width:</span>
                    <span className="orange-color"> 70</span>
                    <span className="tag">px</span>
                    <span className="gray">;</span>
                </p>
                <p className="code-line2">
                    <span className="gray">height:</span>
                    <span className="orange-color"> 35</span>
                    <span className="tag">px</span>
                    <span className="gray">;</span>
                </p>
                <p className="code-line2">
                    <span className="gray">border-radius:</span>
                    <span className="orange-color"> 10</span>
                    <span className="tag">px</span>
                    <span className="gray">;</span>
                </p>
                <p className="code-line2">
                    <span className="gray">border: none</span>
                    <span className="gray">;</span>
                </p>
                <p className="code-line2">
                    <span className="gray">background-color:</span>
                    <span className="orange-color"> #FEFAE0</span>
                    <span className="gray">;</span>
                </p>
                <p className="code-line2">
                    <span className="gray">cursor:</span>
                    <span className="orange-color"> pointer</span>
                    <span className="gray">;</span>
                </p>
                <p className="code-line">
                    <span className='orange-color'>{"}"}</span>
                </p>
                </code>
                </div>
                <nav>
                    <ol className='css-ol'>
                        <li>overflow: hidden скрывает элементы, выходящие за границы .slider-container, создавая область видимости для слайдов.</li>
                        <li>flex-shrink: 0 предотвращает уменьшение .slider-item при нехватке места, сохраняя его заданную ширину (180px).</li>
                    </ol>
                </nav>
                <div className="rememinder-block">
                    <p className="css-reminder-text">
                    Важно использовать width: max-content, а не width: 100%, так как при создании draggable slider ширина трека должна подстраиваться под его содержимое. Если использовать width: 100%, трек займет всю доступную ширину контейнера, и мы не сможем правильно вычислить его реальную ширину для корректного перетаскивания.
                    </p>
                </div>
                <div className="html-line"></div>
            </div>
            <section className='java-script-code-block'>
                <p className="js-preface">Теперь добавим логику: сделаем кнопки рабочими и заставим слайды двигаться.</p>
                <div className="common-block-for-code">
                    <div className="out-upper-block">
                        <p className="js-code-title">JS</p>
                        <CopyButton text={javaScriptTextToCopy} label='html'></CopyButton>
                    </div>
                
                <code className="js-code">
                    <p className="code-line">
                        <span className="violet-color">const</span>
                        <span className="yellow"> buttonToRigh</span>
                        <span className="blue-color"> = </span>
                        <span className="tag">document</span>
                        <span className="gray">.</span>
                        <span className="blue-color">getElementById</span>
                        <span className="yellow">{'('}</span>
                        <span className="green">&apos;slider-button-right&apos;</span>
                        <span className="yellow">{')'}</span>
                        <span className="gray">;</span>
                    </p>
                    <p className="code-line">
                        <span className="violet-color">const</span>
                        <span className="yellow"> buttonToLeft</span>
                        <span className="blue-color"> = </span>
                        <span className="tag">document</span>
                        <span className="gray">.</span>
                        <span className="blue-color">getElementById</span>
                        <span className="yellow">{'('}</span>
                        <span className="green">&apos;slider-button-left&apos;</span>
                        <span className="yellow">{')'}</span>
                        <span className="gray">;</span>
                    </p>
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
                        <span className="tag"> position</span>
                        <span className="blue-color"> = </span>
                        <span className="orange-color">0</span>
                        <span className="gray">;</span>
                        
                    </p>
                    <p className="code-line">
                        <span className="violet-color">let</span>
                        <span className="yellow"> step</span>
                        <span className="blue-color"> = </span>
                        <span className="orange-color">0</span>
                        <span className="gray">;</span>
                    </p>
                    <p className="code-line">
                        <span className="violet-color">function</span>
                        <span className="blue-color"> toRight</span>
                        <span className="yellow">{'() {'}</span>
                    </p>
                    <p className="code-line2">
                        <span className="tag">position</span>
                        <span className="violet-color"> -= </span>
                        <span className="tag">step</span>
                        <span className="gray">; {'//' }position = position - step(200px)</span>  
                    </p>
                    <p className="code-line2">
                        <span className="tag">sliderTrack</span>
                        <span className="gray">.</span>
                        <span className="tag">style</span>
                        <span className="gray">.</span>
                        <span className="tag">transform</span>
                        <span className="blue-color"> = </span>
                        <span className="green">&#96;translateX{'('}</span>
                        <span className="blue-color">${'{'}</span>
                        <span className="tag">position</span>
                        <span className="blue-color">${'}'}</span>
                        <span className="green">px{')'}&#96;</span>
                        <span className="gray">; {'//' }перемещаем наш Track по шагу</span>  
                    </p>
                    <p className="code-line2">
                        <span className="tag">sliderTrack</span>
                        <span className="gray">.</span>
                        <span className="tag">style</span>
                        <span className="gray">.</span>
                        <span className="tag">transition</span>
                        <span className="blue-color"> = </span>
                        <span className="green">&#96;transform 0.5s ease-in-out&#96;</span>
                        <span className="gray">; {'//' }Анимируем прокрут</span>  
                    </p>
                    <p className="code-line2">
                        <span className="blue-color">updateButtons</span>
                        <span className="violet-color">{'()'}</span>
                        <span className="gray">; {'//'} Запускаем нашу функцию при клике на кнопку</span>
                    </p>
                    <p className="code-line">
                        <span className="yellow">{'}'}</span>
                        <span className="gray">;</span>
                    </p>
                    <p className="code-line">
                        <span className="violet-color">function</span>
                        <span className="blue-color"> toLeft</span>
                        <span className="yellow">{'() {'}</span>
                    </p>
                    <p className="code-line2">
                        <span className="tag">position</span>
                        <span className="violet-color"> += </span>
                        <span className="tag">step</span>
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
                        <span className="blue-color">${'{'}</span>
                        <span className="tag">position</span>
                        <span className="blue-color">${'}'}</span>
                        <span className="green">px{')'}&#96;</span>
                        <span className="gray">;</span>  
                    </p>
                    <p className="code-line2">
                        <span className="tag">sliderTrack</span>
                        <span className="gray">.</span>
                        <span className="tag">style</span>
                        <span className="gray">.</span>
                        <span className="tag">transition</span>
                        <span className="blue-color"> = </span>
                        <span className="green">&#96;transform 0.5s ease-in-out&#96;</span>
                        <span className="gray">;</span>  
                    </p>
                    <p className="code-line2">
                        <span className="blue-color">updateButtons</span>
                        <span className="violet-color">{'()'}</span>
                        <span className="gray">;</span>
                    </p>
                    <p className="code-line">
                        <span className="yellow">{'}'}</span>
                        <span className="gray">;</span>
                    </p>
                    <p className="code-line">
                        <span className="tag">buttonToRight</span>
                        <span className="gray">.</span>
                        <span className="blue-color">addEventListener</span>
                        <span className="yellow">{'('}</span>
                        <span className="green">&#96;click&#96;</span>
                        <span className="tag"> toRight</span>
                        <span className="yellow">{')'}</span>
                        <span className="gray">;</span>
                    </p>
                    <p className="code-line">
                        <span className="tag">buttonToLeft</span>
                        <span className="gray">.</span>
                        <span className="blue-color">addEventListener</span>
                        <span className="yellow">{'('}</span>
                        <span className="green">&#96;click&#96;</span>
                        <span className="tag"> toLeft</span>
                        <span className="yellow">{')'}</span>
                        <span className="gray">;</span>
                    </p>
                    <p className="code-line">
                        <span className="violet-color">function</span>
                        <span className="blue-color"> updateButtons</span>
                        <span className="yellow">{'() {'}</span>
                    </p>
                    <p className="code-line2">
                        <span className="violet-color">const</span>
                        <span className="yellow"> trackWidth</span>
                        <span className="blue-color"> = </span>
                        <span className="tag">sliderTrack</span>
                        <span className="gray">.</span>
                        <span className="tag">scrollWidth</span>
                        <span className="gray">;</span>
                    </p>
                    <p className="code-line2">
                        <span className="violet-color">const</span>
                        <span className="yellow"> containerWidth</span>
                        <span className="blue-color"> = </span>
                        <span className="tag">sliderContainer</span>
                        <span className="gray">.</span>
                        <span className="tag">offsetWidth</span>
                        <span className="gray">;</span>
                    </p>
                    <p className="code-line2">
                        <span className="tag">buttonToLeft</span>
                        <span className="gray">.</span>
                        <span className="tag">disabled</span>
                        <span className="blue-color"> = </span>
                        <span className="tag">position</span>
                        <span className="blue-color"> &gt;= </span>
                        <span className="tag">0</span>
                        <span className="gray">;</span>

                    </p>
                    <p className="code-line2">
                        <span className="tag">buttonToRight</span>
                        <span className="gray">.</span>
                        <span className="tag">disabled</span>
                        <span className="blue-color"> = </span>
                        <span className="tag">Math</span>
                        <span className="gray">.</span>
                        <span className="blue-color">abs</span>
                        <span className="violet-color">{'('}</span>
                        <span className="tag">position</span>
                        <span className="violet-color">{')'}</span>
                        <span className="blue-color"> + </span>
                        <span className="tag">containerWidth</span>
                        <span className="blue-color"> &gt;= </span>
                        <span className="tag">trackWidth</span>
                        <span className="gray">;</span>
                    </p>
                    <p className="code-line">
                        <span className="yellow">{'}'}</span>
                        <span className="gray">;</span>
                    </p>
                    <p className="code-line">
                        <span className="blue-color">updateButtons</span>
                        <span className="yellow">{'()'}</span>
                        <span className="gray">; {'//'}Запускаем функцию сразу при загрузке страницы</span>
                    </p>
                </code>
                </div>
                <nav>
                    <ol className='explain-js-semi-title'>
                        <li>Инициализация элементов</li>
                    </ol>
                    <code className="js-code-explain">
                        <p className="code-line">
                            <span className="violet-color">const</span>
                            <span className="yellow"> buttonToRigh</span>
                            <span className="blue-color"> = </span>
                            <span className="tag">document</span>
                            <span className="gray">.</span>
                            <span className="blue-color">getElementById</span>
                            <span className="yellow">{'('}</span>
                            <span className="green">&apos;slider-button-right&apos;</span>
                            <span className="yellow">{')'}</span>
                            <span className="gray">;</span>
                        </p>
                        <p className="code-line">
                            <span className="violet-color">const</span>
                            <span className="yellow"> buttonToLeft</span>
                            <span className="blue-color"> = </span>
                            <span className="tag">document</span>
                            <span className="gray">.</span>
                            <span className="blue-color">getElementById</span>
                            <span className="yellow">{'('}</span>
                            <span className="green">&apos;slider-button-left&apos;</span>
                            <span className="yellow">{')'}</span>
                            <span className="gray">;</span>
                        </p>
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
                    </code>
                    <ul >
                        <li ><span className='line-of-code'>buttonToRight</span> и <span className="line-of-code">buttonToLeft</span> кнопки для управления слайдером.</li>
                        <li ><span className="line-of-code">sliderContainer</span> – контейнер, в котором находится слайдер (ограничивает его видимую область).</li>
                        <li ><span className="line-of-code">sliderTrack</span> – сама лента слайдов, которую мы будем двигать.</li>
                    </ul>
                    <div className="html-line"></div>
                    <ol className='explain-js-semi-title' start={2}>
                        <li>Объявление переменных</li>
                    </ol>
                    <code className="js-code-explain">
                        <p className="code-line">
                            <span className="violet-color">let</span>
                            <span className="tag"> position</span>
                            <span className="blue-color"> = </span>
                            <span className="orange-color">0</span>
                            <span className="gray">;</span>
                            
                        </p>
                        <p className="code-line">
                            <span className="violet-color">let</span>
                            <span className="yellow"> step</span>
                            <span className="blue-color"> = </span>
                            <span className="orange-color">0</span>
                            <span className="gray">;</span>
                        </p>
                    </code>
                    <ul>
                        <li><span className="line-of-code">position</span> – текущая позиция слайдера</li>
                        <li><span className="line-of-code">step = 200</span> – шаг сдвига нашего слайдера</li>
                    </ul>
                    <div className="html-line"></div>
                    <ol className='explain-js-semi-title' start={3}>
                        <li>Функция перемещения вправо</li>
                    </ol>
                    <code className="js-code-explain">
                        <p className="code-line">
                            <span className="violet-color">function</span>
                            <span className="blue-color"> toRight</span>
                            <span className="yellow">{'() {'}</span>
                        </p>
                        <p className="code-line2">
                            <span className="tag">position</span>
                            <span className="violet-color"> -= </span>
                            <span className="tag">step</span>
                            <span className="gray">; {'//' }position = position - step(200px)</span>  
                        </p>
                        <p className="code-line2">
                            <span className="tag">sliderTrack</span>
                            <span className="gray">.</span>
                            <span className="tag">style</span>
                            <span className="gray">.</span>
                            <span className="tag">transform</span>
                            <span className="blue-color"> = </span>
                            <span className="green">&#96;translateX{'('}</span>
                            <span className="blue-color">${'{'}</span>
                            <span className="tag">position</span>
                            <span className="blue-color">${'}'}</span>
                            <span className="green">px{')'}&#96;</span>
                            <span className="gray">; {'//' }перемещаем наш Track по шагу</span>  
                        </p>
                        <p className="code-line2">
                            <span className="tag">sliderTrack</span>
                            <span className="gray">.</span>
                            <span className="tag">style</span>
                            <span className="gray">.</span>
                            <span className="tag">transition</span>
                            <span className="blue-color"> = </span>
                            <span className="green">&#96;transform 0.5s ease-in-out&#96;</span>
                            <span className="gray">; {'//' }Анимируем прокрут</span>  
                        </p>
                        <p className="code-line2">
                            <span className="blue-color">updateButtons</span>
                            <span className="violet-color">{'()'}</span>
                            <span className="gray">; {'//'} Запускаем нашу функцию при клике на кнопку</span>
                        </p>
                        <p className="code-line">
                            <span className="yellow">{'}'}</span>
                            <span className="gray">;</span>
                        </p>
                    </code>
                    <ul>
                        <li><span className="line-of-code">position -= step</span> – уменьшаем position, сдвигая слайдер влево.</li>
                        <li><span className="line-of-code">sliderTrack.style.transform = translateX(${'{'}position{'}'}px)</span> – перемещаем ленту слайдов.</li>
                        <li><span className="line-of-code">sliderTrack.style.transition = &#96;transform 0.5s ease-in-out&#96;</span> – добавляем плавную анимацию.</li>
                        <li><span className="line-of-code">updateButtons()</span> – обновляем состояние кнопок (если достигнут край, блокируем кнопку).</li>
                    </ul>
                    <div className="html-line"></div>
                    <ol className='explain-js-semi-title' start={4}>
                        <li>Функция перемещения влево</li>
                    </ol>
                    <code className="js-code-explain">
                        <p className="code-line">
                            <span className="violet-color">function</span>
                            <span className="blue-color"> toLeft</span>
                            <span className="yellow">{'() {'}</span>
                        </p>
                        <p className="code-line2">
                            <span className="tag">position</span>
                            <span className="violet-color"> += </span>
                            <span className="tag">step</span>
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
                            <span className="blue-color">${'{'}</span>
                            <span className="tag">position</span>
                            <span className="blue-color">${'}'}</span>
                            <span className="green">px{')'}&#96;</span>
                            <span className="gray">;</span>  
                        </p>
                        <p className="code-line2">
                            <span className="tag">sliderTrack</span>
                            <span className="gray">.</span>
                            <span className="tag">style</span>
                            <span className="gray">.</span>
                            <span className="tag">transition</span>
                            <span className="blue-color"> = </span>
                            <span className="green">&#96;transform 0.5s ease-in-out&#96;</span>
                            <span className="gray">;</span>  
                        </p>
                        <p className="code-line2">
                            <span className="blue-color">updateButtons</span>
                            <span className="violet-color">{'()'}</span>
                            <span className="gray">;</span>
                        </p>
                        <p className="code-line">
                            <span className="yellow">{'}'}</span>
                            <span className="gray">;</span>
                        </p>
                    </code>
                    <ul>
                        <li><span className="line-of-code">position += step</span> – увеличиваем position, сдвигая слайдер вправо.</li>
                        <li>Дальше всё аналогично функции toRight().</li>
                    </ul>
                    <div className="html-line"></div>
                    <ol className='explain-js-semi-title' start={5}>
                        <li>Назначение обработчиков событий</li>
                    </ol>
                    <code className="js-code-explain">
                    <p className="code-line">
                        <span className="tag">buttonToRight</span>
                        <span className="gray">.</span>
                        <span className="blue-color">addEventListener</span>
                        <span className="yellow">{'('}</span>
                        <span className="green">&#96;click&#96;</span>
                        <span className="tag"> toRight</span>
                        <span className="yellow">{')'}</span>
                        <span className="gray">;</span>
                    </p>
                    <p className="code-line">
                        <span className="tag">buttonToLeft</span>
                        <span className="gray">.</span>
                        <span className="blue-color">addEventListener</span>
                        <span className="yellow">{'('}</span>
                        <span className="green">&#96;click&#96;</span>
                        <span className="tag"> toLeft</span>
                        <span className="yellow">{')'}</span>
                        <span className="gray">;</span>
                    </p>
                    </code>
                    <ul>
                        <li>По клику на кнопку вправо вызываем <span className='line-of-code'>toRight()</span>.</li>
                        <li>По клику на кнопку влево вызываем <span className='line-of-code'>toLeft()</span>.</li>
                    </ul>
                    <div className="html-line"></div>
                    <ol className='explain-js-semi-title' start={6}>
                        <li>Функция обновления кнопок</li>
                    </ol>
                    <code className="js-code-explain">
                    <p className="code-line">
                        <span className="violet-color">function</span>
                        <span className="blue-color"> updateButtons</span>
                        <span className="yellow">{'() {'}</span>
                    </p>
                    <p className="code-line2">
                        <span className="violet-color">const</span>
                        <span className="yellow"> trackWidth</span>
                        <span className="blue-color"> = </span>
                        <span className="tag">sliderTrack</span>
                        <span className="gray">.</span>
                        <span className="tag">scrollWidth</span>
                        <span className="gray">;</span>
                    </p>
                    <p className="code-line2">
                        <span className="violet-color">const</span>
                        <span className="yellow"> containerWidth</span>
                        <span className="blue-color"> = </span>
                        <span className="tag">sliderContainer</span>
                        <span className="gray">.</span>
                        <span className="tag">offsetWidth</span>
                        <span className="gray">;</span>
                    </p>
                    <p className="code-line2">
                        <span className="tag">buttonToLeft</span>
                        <span className="gray">.</span>
                        <span className="tag">disabled</span>
                        <span className="blue-color"> = </span>
                        <span className="tag">position</span>
                        <span className="blue-color"> &gt;= </span>
                        <span className="tag">0</span>
                        <span className="gray">;</span>

                    </p>
                    <p className="code-line2">
                        <span className="tag">buttonToRight</span>
                        <span className="gray">.</span>
                        <span className="tag">disabled</span>
                        <span className="blue-color"> = </span>
                        <span className="tag">Math</span>
                        <span className="gray">.</span>
                        <span className="blue-color">abs</span>
                        <span className="violet-color">{'('}</span>
                        <span className="tag">position</span>
                        <span className="violet-color">{')'}</span>
                        <span className="blue-color"> + </span>
                        <span className="tag">containerWidth</span>
                        <span className="blue-color"> &gt;= </span>
                        <span className="tag">trackWidth</span>
                        <span className="gray">;</span>
                    </p>
                    <p className="code-line">
                        <span className="yellow">{'}'}</span>
                        <span className="gray">;</span>
                    </p>
                    </code>
                    <ul>
                        <li><span className="line-of-code">trackWidth = sliderTrack.scrollWidth</span> – получаем полную ширину слайдера.</li>
                        <li><span className="line-of-code">containerWidth = sliderContainer.offsetWidth</span> – получаем ширину видимой области.</li>
                        <li><span className="line-of-code">buttonToLeft.disabled = position &gt;= 0 – если position &gt;= 0</span>, значит мы на крайнем левом краю, и кнопку влево надо отключить.</li>
                        <li><span className="line-of-code">buttonToRight.disabled = Math.abs(position) + containerWidth &gt;= trackWidth</span> – если текущая позиция + видимая ширина больше или равна полной ширине слайдера, значит мы на крайнем правом краю, отключаем кнопку вправо.</li>
                    </ul>
                    <div className="html-line"></div>
                    <ol className='explain-js-semi-title' start={7}>
                        <li>Запуск функции обновления при загрузке</li>
                    </ol>
                    <code className="js-code-explain">
                        <p className="code-line">
                            <span className="blue-color">updateButtons</span>
                            <span className="yellow">{'()'}</span>
                            <span className="gray">; {'//'}Запускаем функцию сразу при загрузке страницы</span>
                        </p>
                    </code>
                    <ul>
                        <li>Когда страница загружается, сразу проверяем, условия функции.</li>
                        
                    </ul>
                    <div className="html-line"></div>
                </nav>
            </section>
            
        </div>
    )
}