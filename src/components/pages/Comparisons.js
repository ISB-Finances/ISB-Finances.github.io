import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import './Comparisons.css';
import Table from 'react-bootstrap/Table';

export default function Comparisons() {
    const creditCards = [
        { bank: 'CIBC', cardName: 'Dividend Visa Card for Students', rewardRate: 'Earn 2% cash back on grocery purchases, 1% cash back on recurring payments, 0.5% cash back on all other purchases', annualFee: '$0', rates: '19.99% for purchases, 22.99% for cash advances', welcomeOffer: '$30 cash back after first purchase' },
        { bank: 'RBC', cardName: 'Cash Back Mastercard', rewardRate: 'Earn 2% cash back on grocery purchases, up to 1% cash back on all other qualifying purchases and pre-authorized payments', annualFee: '$0', rates: '19.99% for purchases, 22.99% for cash advances', welcomeOffer: 'N/A' },
        { bank: 'RBC', cardName: 'Rewards+ Visa', rewardRate: 'Earn 1 RBC Rewards point for every $1 spent on gas, grocery and drug store purchases, earn 1 RBC Rewards point for every $2 spent on all other purchases', annualFee: '$0', rates: '19.99% for purchases, 22.99% for cash advances', welcomeOffer: 'N/A' },
        { bank: 'RBC', cardName: 'Signature RBC Rewards Visa', rewardRate: 'Earn 1 RBC Rewards point for every $1 you spend on qualifying purchases, plus earn bonus points through purchases at selected retailers using your RBC Rewards credit card', annualFee: '$39', rates: '19.99% for purchases, 22.99% for cash advances', welcomeOffer: 'N/A' },
        { bank: 'BMO', cardName: 'Cash Back Mastercard', rewardRate: 'Earn 3% cash back on grocery purchases, 1% cash back on recurring bill payments and 0.5% unlimited cash back on all other purchases', annualFee: '$0', rates: '19.99% for purchases, 22.99% for cash advances', welcomeOffer: '5% cash back for the first 3 months' },
        { bank: 'BMO', cardName: 'Air Miles Mastercard', rewardRate: 'Earn 1 mile for every $25 spent', annualFee: '$0', rates: '19.99% for purchases, 22.99% for cash advances', welcomeOffer: '800 bonus miles' },
        { bank: 'TD', cardName: 'Cash Back Visa', rewardRate: 'Earn 3% cash back on grocery purchases, 1% cash back on recurring bill payments and 0.5% unlimited cash back on all other purchases', annualFee: '$0', rates: '19.99% for purchases, 22.99% for cash advances', welcomeOffer: 'N/A' },
        { bank: 'Scotiabank', cardName: 'Learn Visa Card', rewardRate: 'Get up to a 1% Moneyback reward', annualFee: '$0', rates: '19.99% for purchases, 22.99% for cash advances', welcomeOffer: 'N/A' },
        { bank: 'Scotiabank', cardName: 'Scene Visa Card - Student', rewardRate: 'Earn 1 SCENE point for every $1 you spend on your everyday credit card purchases, earn 5x the points for every $1 spent at Cineplex and at cineplex.com', annualFee: '$0', rates: '19.99% for purchases, 22.99% for cash advances', welcomeOffer: 'N/A' }
    ]

    const renderCards = (card, index) => {
        return (
            <tr key={index}>
                <td className='bank'>{card.bank}</td>
                <td className='cardName'>{card.cardName}</td>
                <td className='rewardRate'>{card.rewardRate}</td>
                <td className='annualFee'>{card.annualFee}</td>
                <td className='rates'>{card.rates}</td>
                <td className='welcomeOffer'>{card.welcomeOffer}</td>
            </tr>
        );
    }

    return (
        <>
            <h1 className='comparisons'>Comparisons</h1>;
            <h3 className='description'>Compare different student credit cards!</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th className='bank'>BANK</th>
                        <th className='cardName'>CARD NAME</th>
                        <th className='rewardRate'>REWARD RATE</th>
                        <th className='annualFee'>ANNUAL FEE</th>
                        <th className='rates'>RATES</th>
                        <th className='welcomeOffer'>WELCOME OFFER</th>
                    </tr>
                </thead>
                <tbody>
                    {creditCards.map(renderCards)}
                </tbody>
            </Table>
            <Footer />
        </>
    );
}
