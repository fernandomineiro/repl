import React, { useState, useEffect, useLayoutEffect, useReducer} from 'react';
var userDetailContext = React.createContext(null);

const App = () => {
  const [count, setCount] = useState(0);
  const [a, setA] = useState(0);
 



  useLayoutEffect(() => {
    setA(count + 1)
  });

  return (
    
    <div>
       <userDetailContext.Provider value={a}>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      {count}
      <App2></App2>
      </userDetailContext.Provider>
      <App3></App3>
      <App4></App4>
    </div>
  );
}


const App2 = () => {
  var contextData = React.useContext(userDetailContext);
  return (
    <div>
      esse viu -> {contextData}
       
    </div>
  )
}

const App3 = () => {
  const [randomNumber, setRandomNumber] = useState(0)
  const [effectLogs, setEffectLogs] = useState([])
  
  useLayoutEffect(
    () => {
      setEffectLogs(prevEffectLogs => [...prevEffectLogs, 'funcionouuuu'])
    },
    [randomNumber]
  )
  return (
    <div>
    <h1>{randomNumber}</h1>
    <button
      onClick={() => {
        setRandomNumber(Math.random())
      }}
    >
     Gerar númeroa aletatórios
    </button>
    <div>
      {effectLogs.map((effect, index) => (
        <div key={index}>{'1'.repeat(index) + effect}</div>
      ))}
    </div>
  </div>
  )
}

const App4 = () =>{
  const initialState = { width: 15 };

const reducer2 = (state, action) => {
  switch (action) {
    case 'plus':
      return { width: state.width + 15 }
    case 'minus':
      return { width: Math.max(state.width - 15, 2) }
    default:
      throw new Error("what's going on?" )
  }
}

// eslint-disable-next-line react-hooks/rules-of-hooks
const [state, dispatch] = useReducer(reducer2, initialState)

  return (
    <>
        <div style={{ background: 'teal', height: '30px', width: state.width }}></div>
    <div style={{marginTop: '3rem'}}>
        <button onClick={() => dispatch('plus')}>Aumenta barra</button>
        <button onClick={() => dispatch('minus')}>Diminui Barra</button>
    </div>

    </>
  )
}

export default App