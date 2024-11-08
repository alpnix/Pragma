import React from 'react';

const UpArrowIcon = () => {
    return (
        <svg width="33" height="33" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg" className='transition duration-500 hover:scale-110 hover:outline-none focus:outline-none'>
            <g filter="url(#filter0_d_16_98)">
                <circle cx="24.5" cy="20.5" r="20.5" fill="#724578"/>
            </g>
            <path d="M24.5 28.6317V12.3683M24.5 12.3683L16.3683 20.5M24.5 12.3683L32.6316 20.5" stroke="white"
                  strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            {/* <defs>
                <filter id="filter0_d_16_98" x="0" y="0" width="49" height="49" filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16_98"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16_98" result="shape"/>
                </filter>
            </defs> */}
        </svg>
    );
};

export default UpArrowIcon;
