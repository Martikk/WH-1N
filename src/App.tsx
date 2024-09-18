import './App.css';
import { HW1 } from './HW/1/HW1';
import { HW2 } from './HW/2/HW2';
import { HW3 } from './HW/3/HW3';
import { HW4 } from './HW/4/HW4';
import {useState} from "react";

type FilterType='all' | 'Dollars' | 'RUBLS'



function App() {
    const [money, setMoney] = useState([
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ])

    const [filter, setFilter] = useState<FilterType>('all');
    let currentMoney = money;

    if (filter==='Dollars') {
        currentMoney=money.filter(filteredMoney =>filteredMoney.banknots==='Dollars');
    }
    if (filter==='RUBLS') {
        currentMoney=money.filter(filteredMoney => filteredMoney.banknots==='RUBLS');
    }
    const onClickHandler =(nameButton:FilterType) => {
        setFilter(nameButton);
    }


  return (
    <div className="App">
      <HW1 />
            <ul>
                {currentMoney.map((item, i) => {
                    return (
                        <li key={i}>
                            <span>{item.banknots}</span>
                            <span>{item.value}</span>
                            <span>{item.number}</span>
                        </li>
                    )
                })}
            </ul>
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <button onClick={() => onClickHandler('all')}>all</button>
            <button onClick={() => onClickHandler('RUBLS')}>RUBLS</button>
            <button onClick={() => onClickHandler('Dollars')}>Dollars</button>
        </div>
        {/*<HW2 />*/}
        {/*<HW3 />*/}
        {/*<HW4 />*/}
    </div>
  );
}

export default App;
