import { useState } from 'react';
import Modal from 'react-modal';

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from "./styles/global";
import { TransactionsContext } from './TransactionContext';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
  function handeOpenNewTransactionModal(){
      setIsNewTransactionModalOpen(true);
  }
  function handeCloseNewTransactionModal(){
      setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsContext.Provider value={[]}>
      <Header onOpenNewTransactionModal={handeOpenNewTransactionModal}/>
      <Dashboard/>
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handeCloseNewTransactionModal}
      />
        
      <GlobalStyle/>
    </TransactionsContext.Provider>
  );
};