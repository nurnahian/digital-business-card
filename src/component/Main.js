import React from "react"
import Linkedin from '../images/icons/vector.png';
import Icon from '../images/icons/icon.png';

export default function Main() {
    return (
        <>
            <div className='main-content'>
                <h3 className='name-title'>Nur Nahian</h3>
                <h4 className='sub-name'>CSE Student</h4>
                <div className='bt'>
                    <button href="#" className="btn btn-email">
                        <img src={Icon} alt="" />
                    </button>
                    <a href="https://www.linkedin.com" target="__blank" >
                        <button className="btn btn-linkedin">
                            <img src={Linkedin} alt="" />
                        </button>
                    </a>
                </div>
                <div className='main-main'>
                    <div className='about'>
                        <h3>About</h3>
                        <div className='info'>
                            I have been working with javascript over a year.
                            I developing web application with React js , Express js, Node js and mongodb.
                        </div>
                    </div>
                    <div className='about'>
                        <h3>Skills</h3>
                        <div className='info'>
                            Frontend Web Developer || MERN Stack Web Developer.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
