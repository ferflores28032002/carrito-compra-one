import styles from '../css/MostrarElementos.module.css';

export const CarritoElmentItems = ({element, aumentar, disminuir}) => {
  return (
    <div key={element.id} className="card shadow-lg" id={styles.card}>
      <img
        src={element.image}
        id={styles.img}
        className="card-img-top"
        alt={element.title}
      />
      <div className="card-body">
        <h6 className="card-title">{element.title}</h6>
        <div className="d-flex justify-content-between mt-4">
          <h5 className="card-text">${element.price}.00 x {element.cantidad} = ${element.price * element.cantidad}.00</h5>
          <button onClick={()=>aumentar(element)} className='btn btn-primary fw-bold'>+</button>
          <button onClick={()=>disminuir(element)} className='btn btn-danger fw-bold'>-</button>
        </div>
      </div>
    </div>
  );
};
