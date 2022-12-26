import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import Homepage from './Homepage';
import Nav from './Nav';

const Page1 = () => {
    const [value, setvalue] = useState(false)
    const refvalue=useRef(null)
    useEffect(()=>{
        console.log(refvalue.current)
    },[refvalue])
    return (
        <div>
        <Nav></Nav>
            <div className='page1'>
                <span ref={refvalue}>
                    <Homepage name='Abdullah Al Mahmood '></Homepage>
                </span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nemo facilis doloremque corporis in? Nemo nihil error amet laudantium mollitia similique deleniti, adipisci, reprehenderit sunt sit aperiam voluptas eius perspiciatis.</p>
            </div>

        </div>
    );
};

export default Page1;