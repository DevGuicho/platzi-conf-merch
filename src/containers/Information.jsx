import React from 'react';
import '../styles/components/Information.css';

const Information = () => {
  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Indormación de contacto:</h2>
        </div>
        <div className="Information-form">
          <form action="">
            <input type="text" name="name" placeholder="Nombre completo" />
            <input type="email" name="email" placeholder="Correo Electronico" />
            <input type="text" name="address" placeholder="Dirección" />
            <input type="text" name="apto" placeholder="apto" />
            <input type="text" name="city" placeholder="Ciudad" />
            <input type="text" name="state" placeholder="Estado" />
            <input type="text" name="cp" placeholder="Código Postal" />
            <input type="text" name="phone" placeholder="Telefono" />
          </form>
        </div>
        <div className="Information-button">
          <div className="Information-back">Regresar</div>
          <div className="Information-next">pagar</div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        <div className="Information-element">
          <h4>ITEM Name</h4>
          <span>$10</span>
        </div>
      </div>
    </div>
  );
};

export default Information;