import './App.module.css';
import styles from './App.module.css'
import {BrowserRouter, Link, Routes, Route} from "react-router-dom";
import Main from "./components/Main";
import People from "./components/People";

function App() {
  return (
    <div className="App">
        <div className={styles.main}>
            <BrowserRouter>
                <header className={styles.header}>
                    <Link to={'/'}>Main</Link>
                </header>

            <Routes>
                <Route path="/" element={<Main />}/>
                <Route path="/person/:uri" element={<People />} />
            </Routes>
            </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
