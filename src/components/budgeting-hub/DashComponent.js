    import React, {useState} from 'react'
    import {Card, Button, Alert} from 'react-bootstrap'
    import {Link, useHistory} from 'react-router-dom'
    import {useAuth} from '../UserAuth/AuthContext'
    import {PieGraph, LineGraph, Pie} from './Graph';
    import DashChart from './DashChart'
    import './Graph.css';


    export default function DashComponent() {
      const [error, setError] = useState("")
      const {currentUser, logout} = useAuth()
      const history = useHistory()
      async function handleLogout() {
        setError('')
        try {
            await logout()
            history.pushState('/budgeting-hub/login')
        } catch {
            setError('Failed to log out')
        }

    }
        const expenses = [
            { name: "Rent", value: 400 },
            { name: "Grocery", value: 300 },
            { name: "Bills", value: 300 },
            { name: "Netflix", value: 200 },
            { name: "Parking", value: 200 },

          ];

          const expenseType = [
            { name: "Needs", value: 400 },
            { name: "Wants", value: 300 },
            { name: "Goals", value: 300 }
          ];

          const incomes = [
            { name: "Cashier", value: 400 },
            { name: "Art sale", value: 300 },
          ];

          const savings = [
            { name: "Fund", value: 400 },
            { name: "House", value: 300 },
            { name: "Other", value: 300 },


          ];

        
        return (
            <div>

                <div className="Test">
                    <div className="Test1">
                    <LineGraph title="Cash Flow"></LineGraph>

                    </div>
                    <div className="Test2">
                        <DashChart chartData={expenses}></DashChart>
                        <DashChart chartData={expenseType}></DashChart>

                    </div>
                    <div className="Test3">
                    <DashChart chartData={incomes}></DashChart>
                    <DashChart chartData={savings}></DashChart>

                    </div>
                </div>         
        
            
                <br></br>
                <br></br>
                <br></br>
                <Link to="/budgeting-hub/account" className="btn btn--primary w-100 mt-3" >
Account Details                </Link>
                
<div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>Log out</Button>
      </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

               

        </div>
        )
    }