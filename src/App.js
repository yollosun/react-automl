// import Header from "./components/Header";
import { ContextProvider } from './UseContext'
import Main from "./Main";
import { useEffect } from 'react'

function App() {

  return (
    <ContextProvider >
      <div className="App">
        {/* <Header /> */}
        <Main />
      </div>
    </ContextProvider>
  );
}

export default App;
