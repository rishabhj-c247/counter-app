import Counter from './components/counter';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <GlobalStyle>
      <Counter />
    </GlobalStyle>
  </>
);

export default App;
