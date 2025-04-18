import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './component/Header'
import Footer from './component/Footer';

function App() {
  return (
    <div className="w-full h-screen bg-white relative">
      <Header />
      <main>
        <Outlet />        
      </main>

      <Footer/>
    </div>
  );
}

export default App;