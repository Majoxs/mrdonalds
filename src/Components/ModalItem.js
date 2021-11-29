import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  z-index: 20;
`;

const Modal = styled.div`
  background-color: #fff;
  width: 600px;
  height: 600px;
  position: relative;
`;

const Banner = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
  margin-bottom: 20px;
`;

const ModalInner = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ModalTitle = styled.h2`
  font-weight: 400;
  display: inline-block;
  margin-left: 37px;
`;

const ModalPrice = styled.p`
  font-family: Pacifico;
  font-size: 30px;
  display: inline-block;
  margin-right: 53px;
`;

const Add = styled.button`
  min-width: 250px;
  padding: 20px 0;
  background-color: #299b01;
  color: white;
  font-size: 21px;
  border: transparent;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 63px;
`;

export const ModalItem = ({ openItem, setOpenItem }) => {

  function closeModal(e) {
    if (e.target.id === 'overlay') {
      setOpenItem(null);
    }
  }

  if (!openItem) return null;

  return (
    <Overlay id="overlay" onClick={closeModal}>
      <Modal>
        <Banner img={openItem.img} />
        <ModalInner>
          <ModalTitle>{openItem.name}</ModalTitle>
          <ModalPrice>{openItem.price.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 })}</ModalPrice>
        </ModalInner>
        <Add>Добавить</Add>
      </Modal>
    </Overlay>
  )
};