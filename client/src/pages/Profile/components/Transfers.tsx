import React from 'react'
import TransactionImage from '../img/Transcation.png'
import styled from 'styled-components'

const Description = styled.p`
  font-size: 0.8rem;
`
const Element = styled.div`
  max-width: 80px;
  text-align: center;
`

function Transfers() {
  return (
    <div>
      <p style={{ fontWeight: 600 }}>Переводы</p>

      <div style={{ marginTop: '20px' }}>
        <Element>
          <img src={TransactionImage} alt="" />
          <Description>Между картами</Description>
        </Element>
      </div>
    </div>
  )
}

export default Transfers
