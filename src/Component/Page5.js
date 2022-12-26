import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import React, { useEffect, useRef } from 'react';
import { TweenMax, TimelineLite, Power3 } from 'gsap/gsap-core';
import './page5.css'
import { useNavigate } from "react-router-dom";
const Page5 = () => {
    const navigate = useNavigate();
    let userefvalue = useRef(null)
    gsap.registerPlugin(CSSRulePlugin)
    let value = false;
    const tl = gsap.timeline();

    var rule = CSSRulePlugin.getRule(".box1-1::before");
    var rules = CSSRulePlugin.getRule(".container::before");
    // gsap.to(rule, {duration: 3, cssRule: {color: "hsl(140, 97%, 52%)"}}); 

    const Clickbtn = () => {
        value = (value === true ? false : true)
        console.log(value);
        if (value) {

            // gsap.from(rules, { duration: .5, cssRule: { width: '0' } });
            
             var tem=   gsap.to(rules, {duration: 0.5, cssRule: { width: '100%' } });


            setTimeout(() => {
                navigate('/page2');
                tem.reverse();
            },2000)

        }
        else {
            tl.to('.innerdiv', 1, { css: { color: 'black' } })
        }

    }


    return (
        <>
            <div>

                <div className="container">
                    <div className='innerdiv'>
                        <h1>Hello world</h1>
                        <div >
                            <button onClick={Clickbtn}>Transfrom</button>
                        </div>
                    </div>

                </div>


                {/* <div className="box1-1" ref={userefvalue}>
                    <h1>Hello world</h1>
                </div> */}

            </div>
        </>

    );
};

export default Page5;