import React, { useState } from 'react'
import { Modal, Input, Button } from 'antd'

interface InputModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (value: string) => void
}

function InputModal({ isOpen, onClose, onSubmit }: InputModalProps) {
  const [inputValue, setInputValue] = useState('')
  const handleSubmit = () => {
    onSubmit(inputValue)
    setInputValue('')
    onClose()
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  return (
    <Modal
      title="Введеите имя новой карты"
      visible={isOpen}
      onCancel={onClose}
      footer={[
        <Button key="back" onClick={onClose}>
          Отмена
        </Button>,
        <Button key="submit" type="primary" onClick={handleSubmit}>
          Сохранить
        </Button>,
      ]}
    >
      <Input
        placeholder="Введите название  карты"
        value={inputValue}
        onChange={handleChange}
      />
    </Modal>
  )
}

export default InputModal
