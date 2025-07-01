import Profil from "./components/profil" // nah ini kita ambil dari components biar functionnya keambil
import Hitung from "./components/Hitung"

function App() {

  return (
    <div>
      <h1>Daftar peserta LKS</h1>
      <Profil nama="aris" keahlian="frontend"/> 
      <Profil nama="putra" keahlian="fullstack"/>
      <Profil nama="yuri" keahlian="backend"/>
      
      <Hitung/>
    </div>
  )
}

export default App
