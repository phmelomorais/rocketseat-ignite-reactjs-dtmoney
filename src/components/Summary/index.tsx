import { useContext } from 'react';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { TransactionsContext } from '../../TransactionContext';

import { Container } from "./styles";

export function Summary(){
    const {transactions} = useContext(TransactionsContext);
    const totalDeposits = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            acc.deposit += transaction.amount;
            acc.total += transaction.amount;
        }
        else{
            acc.withdraw += transaction.amount;
            acc.total -= transaction.amount;
        }
        return acc;
    },{
        deposit: 0,
        withdraw: 0,
        total:0,
    });
    
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas"/>
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(totalDeposits.deposit)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Saídas"/>
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(totalDeposits.withdraw)}
                </strong>
            </div>
            <div className='green-background'>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total"/>
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(totalDeposits.total)}
                </strong>
            </div>
 
        </Container>    
    )
}