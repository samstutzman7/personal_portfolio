import {createRoot} from 'react-dom/client';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';



// 👇️ wrap App in Router

ReactDOM.render(
    <React.StrictMode>
      <browserrouter>
        <routes>
          <route path="/" element={ <app /> }>
          </route>
        </routes>
      </browserrouter>
    </React.StrictMode>,
    document.getelementbyid('root')
  );