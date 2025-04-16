import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";

export default function SorteioBotPainel() {
  const [centenas, setCentenas] = useState([]);
  const [novaCentena, setNovaCentena] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [showUpgrade, setShowUpgrade] = useState(false);

  function adicionarCentena() {
    if (!whatsapp.match(/^\d{10,13}$/)) {
      alert("Informe um número de WhatsApp válido.");
      return;
    }
    if (novaCentena.match(/^\d{3}$/)) {
      if (centenas.length >= 1) {
        setShowUpgrade(true);
        return;
      }
      if (!centenas.includes(novaCentena)) {
        setCentenas([...centenas, novaCentena]);
        setNovaCentena("");
      }
    }
  }

  function removerCentena(index) {
    const novas = [...centenas];
    novas.splice(index, 1);
    setCentenas(novas);
    setShowUpgrade(false);
  }

  return (
    <div>
      <h1>SorteioBot Painel</h1>
      <input
        placeholder="Número WhatsApp"
        value={whatsapp}
        onChange={(e) => setWhatsapp(e.target.value)}
      />
      <br />
      <input
        placeholder="Centena"
        maxLength={3}
        value={novaCentena}
        onChange={(e) => setNovaCentena(e.target.value)}
      />
      <button onClick={adicionarCentena}><Plus size={18}/> Adicionar</button>
      {showUpgrade && <p>Upgrade necessário para mais centenas.</p>}
      <ul>
        {centenas.map((c, i) => (
          <li key={i}>
            {c} <button onClick={() => removerCentena(i)}><Trash2 size={14}/></button>
          </li>
        ))}
      </ul>
    </div>
  );
}
