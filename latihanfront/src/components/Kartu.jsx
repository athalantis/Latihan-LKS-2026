
function Kartu({barang}) {
    const beliBarang = () => {
        alert(`anda berhasil membeli ${barang}`);
    }

    return (
        <div>
            <h3>{barang}</h3>
            <button onClick={beliBarang}>
                beli
            </button>
        </div>
    )
}

export default Kartu;