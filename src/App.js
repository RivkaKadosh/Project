import React,{useState,useEffect} from 'react';
import './App.css';
import LoginPage from './pages/login-page'
import SalaryPage from './pages/salary-page'
import SummaryPage from './pages/summary-page'

function App() {

  const [googleObj, setGoogleObj] = useState({});
  const  [summary , setSummary] =  useState({}); 
  useEffect(()=>{


  },[googleObj])

  return (
    <div className="App">
      <LoginPage googleHandler={setGoogleObj} />
      <SalaryPage summaryHandler={setSummary} googleObj={googleObj} />
      <SummaryPage summary={summary}/>
    </div>
 
  );
}

export default App;
