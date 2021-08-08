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
            <h1 className='learning-guides'>Resources</h1>
            <h3 className='description'> As someone new to the financial world, getting started can be difficult. 
                To help you take that first step towards expanding your financial literacy, we’ve prepared a list of Canadian YouTubers, useful articles, and helpful websites that cover a variety of financial topics. 
                Whether you are a beginner or an expert, these channels, articles, and websites will be sure to teach you a thing or two related to investing, saving, and budgeting.
            </h3>
            <Slider slides={SliderData}/>
            <h3>YouTubers</h3>
            <h5 className='my-title'><a href="https://www.youtube.com/channel/UC_vOw_uMG0TBad8PxOD-R2w">Steph and Den</a></h5>
            <p className='info'>
                Steph Gordon and Dennis Mathu, a Toronto-based couple, started their channel in 2018. 
                They cover a wide range of topics, from taxes to different savings accounts, and post videos on a weekly basis.
            </p>
            <h5 className='my-title'><a href="https://www.youtube.com/user/rollercoastercanuck">Griffin Milks</a></h5>
            <p className='info'>
                Griffin Milks started his channel in 2011 and mainly posts videos related to investing and the stock market.
                His ultimate goal is to help his audience find their investing potential and learn to navigate the stock market.
            </p>
            <h5 className='my-title'><a href="https://www.youtube.com/channel/UCoYDuEolAYsjQzzqe2dh1sg">Brandon Beavis</a></h5>
            <p className='info'>
                Brandon Beavis started his channel in 2012 and focuses specifically on long-term investing.
                In addition to his videos, he also offers courses to allow his audience to fast track their learning experience and get investing as soon as possible.
            </p>
            <h3>Articles</h3>
            <h5 className='my-title'><a href="https://www.canada.ca/en/services/finance/savings.html">Savings and Investment</a></h5>
            <p className='info'>Government of Canada's official guide on savings, investment types, financial goals, and financial advisors.</p>
            <h5 className='my-title'><a href="https://www.canada.ca/en/financial-consumer-agency/programs/financial-literacy.html">Financial Literacy in Canada</a></h5>
            <p className='info'>Government of Canada's compilation of resources, initiatives, news, and publicatoins related to financial literacy.</p>
            <h5 className='my-title'><a href="https://www.canada.ca/en/financial-consumer-agency/programs/financial-literacy.html">Financial Literacy Programs</a></h5>
            <p className='info'>Government of Canada's compilation of educational materials, such as toolkits and e-learning videos, to help students and adults increase their financial knowledge and skills</p>
            <h3>Websites</h3>
            <h5 className='my-title'><a href="https://www.bmo.com/main/personal/investments/learning-centre/">BMO Learning Centre</a></h5>
            <p className='info'>Access BMO's online repository of information for new investors.</p>
            <h5 className='my-title'><a href="https://www.investorsedge.cibc.com/en/learn.html">CIBC Learning Centre</a></h5>
            <p className='info'>Access CIBC's online repository of information for new investors.</p>
            <h5 className='my-title'><a href="https://discover.rbcroyalbank.com/">RBC Learning Centre</a></h5>
            <p className='info'>Access CIBC's online repository of educational materials covering a varierty of financial topics.</p>
            <h5 className='my-title'><a href="https://www.scotiabank.com/ca/en/personal/investing/investing-basics/learning-centre.html">Scotia Bank Learning Centre</a></h5>
            <p className='info'>Access Scotia Bank's online repository of educational materials covering a varierty of financial topics.</p>
            <h5 className='my-title'><a href="https://www.td.com/us/en/personal-banking/learning/">TD Learning Centre</a></h5>
            <p className='info'>Access TD's online repository of educational materials covering a varierty of financial topics.</p>
            <Footer />
            <GoToTop />
        </>
    );
}