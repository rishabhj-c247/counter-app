import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-height: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
  background: #004761;
  height: 100vh;
  width: 100%;
`;
export const Button = styled.button`
  font-size: 24px;
  width: 150px;
  background: white;
  border: none;
  border-radius: 15px;
  border: none;
  cursor: pointer;
  padding: 15px;
  font-weight: bold;
`;
export const CounterValue = styled.div`
  font-size: 4rem;
  color: #8cd6bd;
  font-weight: bold;
`;
