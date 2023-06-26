import React from 'react'
import { Button, Col, Row } from 'antd'
import BankImage from './img/scale_1200 1.png'
import BrandedText from '../../../components/ui/BrandedText/BrandedText'
import BigText from '../../../components/ui/BigText/BigText'

interface ClientProps {}

function Client(props: ClientProps) {
  return (
    <Row
      style={{ margin: '0 auto', alignItems: 'center' }}
      className="betweenBlocks"
    >
      <Col span={14}>
        <BigText style={{ marginTop: 40 }}>
          Становитесь <br /> нашим <BrandedText>клиентом</BrandedText>{' '}
        </BigText>
        <Button
          type="ghost"
          shape="round"
          size="large"
          className="bgBranded"
          style={{ marginTop: 20 }}
        >
          Дебетовые карты
        </Button>
        <Button
          type="ghost"
          shape="round"
          size="large"
          className="bgBranded"
          style={{ marginLeft: 40 }}
        >
          {' '}
          Авторизация
        </Button>
      </Col>
      <Col span={10}>
        <img
          src={BankImage}
          style={{ objectFit: 'cover', width: '100%' }}
          alt=""
        />
      </Col>
    </Row>
  )
}

export default Client
