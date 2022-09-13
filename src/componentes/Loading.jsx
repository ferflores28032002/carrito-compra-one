import { CgSpinner } from "react-icons/cg";
import styles from '../css/loading.module.css';

export const Loading = () => {
  return (
    <div className={styles.loading} >
      <CgSpinner className={styles.icono} size={55} />
    </div>
  );
};
