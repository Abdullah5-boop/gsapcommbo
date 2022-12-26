import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Homepage from './Homepage';
import { gsap, TweenMax } from "gsap";
import Nav from './Nav';
const Page2 = () => {
    const refvalue = useRef(null)
    useEffect(() => {
        TweenMax.from(refvalue.current, .8, { duration: 1,opacity:0, y: -200, ease: 'none' })

        TweenMax.to(refvalue.current, 1.5, { duration: 0.5,opacity:1, y: -20, ease: 'none' })
    }, [refvalue])
    return (
        <div>
          <Nav></Nav>
            <div>
                <span className='hello' ref={refvalue}>
                    <Homepage name='Shakib al hassan '></Homepage>
                
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolores quam illum eius assumenda, distinctio repudiandae quas vel quibusdam libero aliquam molestiae corporis quos dignissimos odio voluptates incidunt! Numquam, consectetur!</p>
                </span>
            </div>
        </div>
    );
};

export default Page2;