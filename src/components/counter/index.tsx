import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../../store/counterSlice';
import { RootState } from '../../store';

import { Container, CounterValue, Button } from './styles';
const Counter = () => {
  const { count } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  return (
    <Container>
      <Button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -1
      </Button>
      <CounterValue>{count}</CounterValue>
      <Button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +1
      </Button>
    </Container>
  );
};
export default Counter;
