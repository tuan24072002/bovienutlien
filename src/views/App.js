import './App.scss';
import { Routes, Route } from "react-router-dom";
import TrangChu from '../routes/TrangChu';
import SanPham from '../routes/SanPham';
import CauChuyen from '../routes/CauChuyen';
import ThongTin from '../routes/ThongTin';
import LienHe from '../routes/LienHe';
import messenger from '../assets/images/messenger.png';
function App() {
  return (

    <div className="App">
      <Routes>
        <Route path='/' element={<TrangChu />} />
        <Route path='/sanpham' element={<SanPham />} />
        <Route path='/thongtin' element={<ThongTin />} />
        <Route path='/cauchuyen' element={<CauChuyen />} />
        <Route path='/lienhe' element={<LienHe />} />
      </Routes>
      <div className='messenger'>
        <a href='https://www.facebook.com/IAm.TuanSeven.Info/'>
          <img src={messenger} alt='' />
        </a>
      </div>
    </div>

  );
}

export default App;
