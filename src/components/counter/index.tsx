import { Container, CounterValue, Button } from './styles';
const Counter = () => {
  return (
    <Container>
      <Button>-1</Button>
      <CounterValue>0</CounterValue>
      <Button>+1</Button>
    </Container>
  );
};
export default Counter;
