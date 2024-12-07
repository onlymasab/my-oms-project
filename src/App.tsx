
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav className="p-4 bg-blue-600 text-white">
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/admin">Admin</Link>
      </nav>
      <div className="p-4">
        <h1 className="text-2xl font-bold">Welcome to the Operations Management System</h1>
      </div>
    </div>
  );
}

export default App;