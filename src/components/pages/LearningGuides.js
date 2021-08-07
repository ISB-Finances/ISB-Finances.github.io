import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import Slider from '../Slider';
import { SliderData } from '../SliderData';
import './LearningGuides.css';
import GoToTop from '../GoToTop';

export default function LearningGuides() {
    return ( 
        <>
            <h1 className='learning-guides'>Learning Resources</h1>
            <h3 className='description'> As someone new to the financial world, getting started can be difficult. 
                To help you take that first step towards expanding your financial literacy, we’ve prepared a list of Canadian YouTubers that cover a variety of financial topics. 
                Whether you are a beginner or an expert, these channels will be sure to teach you a thing or two related to investing, saving, and budgeting.
            </h3>
            <Slider slides={SliderData}/>
            <h3 className='title'><a href="https://www.youtube.com/channel/UC_vOw_uMG0TBad8PxOD-R2w">Steph and Den</a></h3>
            <p className='info'>
                Steph Gordon and Dennis Mathu, a Toronto-based couple, started their channel in 2018. 
                They cover a wide range of topics, from taxes to different savings accounts, and post videos on a weekly basis.
            </p>
            <h3 className='title'><a href="https://www.youtube.com/user/rollercoastercanuck">Griffin Milks</a></h3>
            <p className='info'>
                Griffin Milks started his channel in 2011 and mainly posts videos related to investing and the stock market.
                His ultimate goal is to help his audience find their investing potential and learn to navigate the stock market.
            </p>
            <h3 className='title'><a href="https://www.youtube.com/channel/UCoYDuEolAYsjQzzqe2dh1sg">Brandon Beavis</a></h3>
            <p className='info'>
                Brandon Beavis started his channel in 2012 and focuses specifically on long-term investing.
                In addition to his videos, he also offers courses to allow his audience to fast track their learning experience and get investing as soon as possible.
            </p>
            <p className='other-info'>You can also learn more about savings and investing in Canada by checking the <a href="https://www.canada.ca/en/services/finance/savings.html">Government of Canada's website</a>.</p>
            <Footer />
            <GoToTop />
        </>
    );
}