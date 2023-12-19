import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Todos from './components/Todos';
import Form from './components/Form.js';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Belajar Redux</h3>
        <Todos></Todos>
        <Form></Form>
      </div>
    </Provider>
  );
}

export default App;
