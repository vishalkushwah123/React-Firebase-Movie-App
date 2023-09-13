import Header from "./component/Header";
import Card from "./component/Card";
import { Routes, Route } from 'react-router-dom';
import AddMovie from "./component/AddMovie"
import Detail from "./component/Detail";
function App() {
  return (
    <div className="App relative">
      <Header />
      <Routes>
        <Route path='/' element={<Card />} />
        <Route path='/addmovie' element={<AddMovie />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>

    </div>

  );
}

export default App;
