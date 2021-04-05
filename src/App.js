import Router from './router'
import './App.css';
import { AuthProvider } from './providers/AuthContext';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Router/>
      </div>
    </AuthProvider>
    );
}

export default App;
