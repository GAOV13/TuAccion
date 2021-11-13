import React, { useState } from "react";
import Modal from "./glosario";
import '../../assets/css/extra.css';

export default function Extra() {
  const [show, setShow] = useState(false);

  return (
    <div className="Extra">
      <button className="BotonAbrir" onClick={() => setShow(true) }>Glosario</button>
      <Modal title="My Modal" onClose={() => setShow(false)} show={show}>
        <p>Utiliza el glosario para mejorar tu entendimiento</p>
      </Modal>
    </div>
  );
}