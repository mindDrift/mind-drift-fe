import React from 'react';
import PropTypes from 'prop-types';
import styles from './WrapUp.css';
import Modal from 'react-bootstrap/Modal';

const WrapUp = ({ handleClose }) => {
  return (
    <section>
      <Modal
        show={true}
        onHide={() => {}}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <h4 className={styles.WrapUpBody}>Session Complete!</h4>
        <div className={styles.WrapUpFooter} >
          <button onClick={handleClose}>Close</button>
        </div>
      </Modal>
    </section>
  );
};

WrapUp.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default WrapUp;
