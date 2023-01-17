import { useContext } from "react";
import CartContext from "../../Context/CartContext";
import "./Form.css";

const Form = ({ createOrder }) => {
  const { buyer, setBuyer } = useContext(CartContext);
  const { firstName, lastName, address, phone, email } = buyer;

  const handleChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div className="div-container">
      <h2 className="h2-form">Finalizá tu compra</h2>

      <div></div>

      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <div className="single-box">
              <div className="label-box">
                <label>Nombre</label>
              </div>
              <input
                className="input-space"
                type="text"
                name="firstName"
                placeholder="Nombre"
                value={firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="single-box">
              <div className="label-box">
                <label>Apellido</label>
              </div>
              <input
                className="input-space"
                type="text"
                name="lastName"
                placeholder="Apellido"
                value={lastName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="single-box">
              <div className="label-box">
                <label>E-mail</label>
              </div>
              <input
                className="input-space"
                type="email"
                placeholder="E-mail"
                name="email"
                value={email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="single-box">
              <div className="label-box">
                <label>Dirección</label>
              </div>
              <input
                className="input-space"
                type="text"
                placeholder="Dirección"
                name="address"
                value={address}
                onChange={handleChange}
                required
              />
            </div>

            <div className="single-box">
              <div className="label-box">
                <label>Número de teléfono</label>
              </div>
              <input
                className="input-space"
                type="number"
                placeholder="Número de teléfono"
                name="phone"
                value={phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </form>
      </div>

      <div className="btn-div">
        {firstName && lastName && address && phone && email && (
          <button className="btn-agregar" onClick={() => createOrder()}>
            Generar Orden
          </button>
        )}
      </div>
    </div>
  );
};

export default Form;
