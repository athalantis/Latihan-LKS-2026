import Profil from "./components/profil" // nah ini kita ambil dari components biar functionnya keambil
import Hitung from "./components/Hitung"
import Kartu from "./components/Kartu"

function App() {

  return (
    <div>
      <h1>Daftar peserta LKS</h1>
      <Profil nama="aris" keahlian="frontend"/> 
      <Profil nama="putra" keahlian="fullstack"/>
      <Profil nama="yuri" keahlian="backend"/>
      
      <Hitung/>

      <Kartu barang="boneka"/>
    </div>
  )
}

export default App;
