// lagi nyoba function untuk dipanggil di App.jsx nanti

function Profil({nama, keahlian}) {
    return (
        <div style={{border: '1px solid black', padding: '10px', marginTop: '10px'}}>
            <h2>Profil: {nama}</h2>
            <h2>Keahlian: {keahlian}</h2>
        </div>
    );
}

export default Profil;