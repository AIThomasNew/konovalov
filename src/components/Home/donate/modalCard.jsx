import React, { useState } from 'react'

const ModalCard = ({ visible, children }) => {
  const [showModal, setShowModal] = useState(visible)

  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackGround}></View>
    </Modal>
  )
}

export default ModalCard
