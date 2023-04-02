import css from './App.module.css';
import Sidebar from './components/Sidebar';
import NavbarSimple from './components/NavBarSimple';

function App() {
  return (
    <div className={css.App}>
      {<Sidebar/>}
      <NavbarSimple/>
    </div>
  );
}

export default App;