import { useState } from 'react';
import Modal from 'react-modal';

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

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
    <>
      <Header onOpenNewTransactionModal={handeOpenNewTransactionModal}/>
      <Dashboard/>
      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handeCloseNewTransactionModal}
      >
        <h2>Cadastrar transação</h2>
      </Modal>
      <GlobalStyle/>
    </>
  );
};