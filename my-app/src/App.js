import css from './App.module.css';
import Sidebar from './components/Sidebar';
import NavbarSimple from './components/NavBarSimple';
import NavBarForm from './components/NavBarForm';
import Content from './components/Content';

function App() {
  return (
    <div className={css.App}>
      <NavBarForm />
      <Sidebar />
      <Content/>
      {/* <NavbarSimple/> */}
    </div>
  );
}

export default App;