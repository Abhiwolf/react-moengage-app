import Dashboard from './components/dashboard/Dashboard';
import './App.css';


function App() {
  return (
    <div>
      <header className="App-header">
        <h1 className="page-title">ABC College of engineering
          <a className="float-right btn btn-primary btn-lg" href=" " download="">Download
          Postman Collection</a>
        </h1>
      </header>
      <div>
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
