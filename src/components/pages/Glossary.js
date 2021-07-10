import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import './Glossary.css';
import Table from 'react-bootstrap/Table';
import {DemoButton}  from '../DemoButton';

export default function Glossary() {
    const words = [ 
        { word: 'Assets', meaning: 'Any personal possessions that have some value'},
        { word: 'Bonds', meaning: 'A contract in which an investor loans money to a company (lower risk, lower potential return)' },
        { word: 'Budget', meaning: 'A personal plan for money management that considers personal income and expenses'},
        { word: 'Canadian Deposit Insurance Corp (CDIC)', meaning: 'Protects up to $100,000 of a depositor’s assets in the event of a bankruptcy'},
        { word: 'Canadian Investor Protection Fund (CIPF)', meaning: 'Protects up to $1 million of an investor’s assets in the event of a bankruptcy' },
        { word: 'Credit Score', meaning: 'A measure of credit-worthiness based on user’s financial history and ability to pay debts'},
        { word: 'Debt', meaning: 'Money that you owe'},
        { word: 'Diversification', meaning: 'Investing in a variety of options (i.e. stocks, bonds, etc.) to avoid loss of money' },
        { word: 'Dividend Investing', meaning: 'Buying individual stocks from companies that pay investors in dividends (i.e. the after-tax profit)'},
        { word: 'Emergency Fund', meaning: 'Money saved up (typically for 3-6 months) in case of a financial surprise (e.g. loss of job)'},
        { word: 'Grace Period', meaning: 'Amount of time before interest accumulates on an unpaid payment'},
        { word: 'Guaranteed Investment Certificate (GIC)', meaning: 'A secure investment guaranteeing 100% of original investment in addition to interest'},
        { word: 'Interest', meaning: 'Money that you owe if borrowing money or money that you earn if lending money '},
        { word: 'Loan', meaning: 'Money that is borrowed'},
        { word: 'Mutual Funds', meaning: 'A company (such as a bank) collecting money from multiple investors and investing the collected money in a diversified set of securities (e.g. stocks, bonds, etc.)'},
        { word: 'Registered Retirement Savings Plan (RRSP)', meaning: 'A personal savings account offered by the Canadian government with special tax benefits (e.g. money put into account is tax-free/tax deductible) that aims to promote savings for retirement'},
        { word: 'Risk Tolerance', meaning: 'How willing an investor is to risk the potential of losing money on an investment for the possibility of getting very high returns'},
        { word: 'Stakeholder', meaning: 'A person involved in a business or company (e.g. employees, investors, owners)'},
        { word: 'Stocks', meaning: 'A contract in which an investor owns a portion of a company (higher risk, higher potential return)'},
        { word: 'Tax Free Savings Account (TFSA)', meaning: 'A saving account offered by the Canadian government that allows Canadians to save a certain amount with special tax benefits (e.g. money taken out of account is tax-free/tax-deductible)'},
        { word: 'Time Horizon', meaning: 'Amount of time investor expects to invest'}
        ]
    
    const renderWords = (wrd, index) => {
        return(
            <tr key={index}>
                <td className='word'>{wrd.word}</td>
                <td className='meaning'>{wrd.meaning}</td>
            </tr>
        );
    }

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    var shufflewords = words
    shuffleArray(shufflewords);
    console.log(shufflewords);
    let first = shufflewords[0];
    console.log(first);

    const refreshPage = ()=>{
        window.location.reload();
    }

    return( 
        <>
            <h1 className='glossary'>Glossary</h1>
            <h3 className='description'>Build your financial vocabulary by learning the definitions of popular financial terms.</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th className='word'>WORD</th>
                        <th className='meaning'>DEFINITION</th>
                    </tr>
                </thead>
                <tbody>
                    {words.map(renderWords)}
                </tbody>
                </Table>
            <h3 className='description'>Want to learn a new word? Try our World Shuffle below!</h3>
            <center><DemoButton
                className='btns'
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                onClick={refreshPage}
                >
            Click to Shuffle! 
            </DemoButton></center>
            <Table striped bordered hover>
            <tbody>
                    {shufflewords.map(renderWords)}
                </tbody>
            </Table>
            <Footer />
        </>       
    );
}