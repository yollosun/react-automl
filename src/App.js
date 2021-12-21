// import Header from "./components/Header";
import { ContextProvider } from './UseContext'
import Main from "./Main";

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
