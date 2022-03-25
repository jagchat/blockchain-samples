import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Cards from './components/cards';
import Transactions from './components/transactions';

function App() {
  return (
    <>
      <Header />
      <Transactions />
      <Cards />
    </>

  );
}

export default App;
