import './App.css';
import MainContent from './components/Main Content';
import Primary from './components/Primary';
import SubMenu from './components/Sub Menu';

function App() {
  return (
    <div class="flex flex-row h-screen bg-gray-100">
      <Primary />
      <SubMenu />
      <MainContent />
    </div>
  );
}

export default App;
