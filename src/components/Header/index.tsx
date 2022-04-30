import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface HeaderProps {
    onOpenNewTransactionModal: () => void; //É uma função onde o retorno é void.
}

export function Header({onOpenNewTransactionModal} : HeaderProps) {
     return (
        <Container>
            <Content>
                <img src={logoImg} alt="Logo DT Money"/>
                <button type='button' onClick={onOpenNewTransactionModal}>
                    Nova transação
                </button>
            </Content>
        </Container>
    )
}