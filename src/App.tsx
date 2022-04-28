import styled from 'styled-components'

const Title = styled.h1`
  font-size:64px;
  color: #b257e6;
`

export function App() {
  return (
    <div className="App">
      <Title>Hello!</Title>
      <button>Salvar</button>
    </div>
  );
};