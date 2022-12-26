import React, { useEffect, useRef } from 'react';
import Nav from './Nav';
import img1 from '../img/blooming vibes 🌸.jpeg'
import img2 from '../img/TORTUOSA POESÍA.jpeg';
import { TweenMax, TimelineLite, Power3 } from 'gsap/gsap-core';
import './Page3.css'
const Page3 = () => {
    let apps = useRef(null)
    let imgs = useRef(null)
    let fristcontent = useRef(null);
    let secondcontent = useRef(null);
    let paragraph = useRef(null);
    const tl = new TimelineLite();
    useEffect(() => {

        let imgboy1 = imgs.current.children[0];
        let imgboy2 = imgs.current.children[1];

        TweenMax.to(apps.current, 0, { css: { visibility: 'visible' } })
        tl.from([imgboy1.firstElementChild, imgboy2.firstElementChild], 0.8, { y: 1280, ease: Power3.easeOut }, 'Start')
            .from([imgboy1.firstElementChild, imgboy2.firstElementChild], 2, { scale: 1.6, ease: Power3.easeOut }, .2)
            .to([imgboy1.firstElementChild, imgboy2.firstElementChild], 1.2, { y: 0, scale: 0.9, ease: Power3.easeOut })
        tl.staggerFrom([fristcontent.current,secondcontent.current,paragraph.current], 1, {
            y: 44,
            ease: Power3.easeOut,
            delay: .8
        }, .5,.7)
        tl.staggerTo([fristcontent.current,secondcontent.current,paragraph.current], 1, {
            y: 0,
            ease: Power3.easeOut,
            delay: .8
        }, .5)




    }, [tl])
    return (
        <div ref={apps}>
            <Nav></Nav>
            <div className="containers">
                <div className="hero">
                    <div className="herocontent">
                        <h1>
                            <div className='name'>
                                <div className='name-inner'ref={fristcontent} >Abdullah Al Mahmood</div></div>
                            <div className='name'>
                                <div className='name-inner'ref={secondcontent} >I am live in Dhaka</div></div>
                           
                        </h1>
                        <div className='name'>
                        <p ref={paragraph}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis deleniti nemo provident ducimus! Tenetur velit architecto facilis fugiat consequatur odio. Esse quidem facere doloribus voluptatem alias eos incidunt vitae blanditiis!

                        </p>
                        </div>

                    </div>
                    <div className="imgcontent">
                        <div className="img-inner" ref={imgs}>
                            <div className="boy1">
                                <img src={img1} alt="" />
                            </div>
                            <div className="boy2">
                                <img src={img2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page3;