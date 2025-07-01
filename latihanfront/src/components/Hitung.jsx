// belajar pakai useState

import { useState } from "react";

function Hitung() {
    const [angka, setAngka] = useState(0);

    function klik() {
        setAngka(angka+1);
        console.log('nilai sekarang:', {angka});
    }

    return (
        <div>
            <p>angka saat ini: {angka}</p>
            <button onClick={klik}>
                klik bang
            </button>
        </div>
    )
}

export default Hitung;