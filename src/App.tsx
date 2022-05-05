import { Provider } from 'react-redux';
import Counter from './components/counter';
import GlobalStyle from './styles/global';
import store from './store';
const App: React.FC = () => (
  <>
    <Provider store={store}>
      <GlobalStyle>
        <Counter />
      </GlobalStyle>
    </Provider>
  </>
);

export default App;
