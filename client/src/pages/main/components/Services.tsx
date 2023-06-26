import React from 'react'
import BrandedText from '../../../components/ui/BrandedText/BrandedText'
import BigText from '../../../components/ui/BigText/BigText'
import { Col, Divider, Layout, Row } from 'antd'
import styled from 'styled-components'
import creditPayImage from './img/creditPay.svg'
import mobileBankImage from './img/mobileBank.svg'
import creditImage from './img/credit.svg'
import exchangeImage from './img/exchange.svg'
import creditHandImage from './img/creditHand.svg'
import onlineBusinessImage from './img/onlineBusiness.svg'

const Box = styled.div`
  background: #dacbcb;
  box-shadow: 4px 4px 24px 1px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 320px;
`
const Title = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  margin-top: 28px;
`
const Description = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #6d6d6d;
  margin-top: 28px;
  text-align: center;
  max-width: 70%;
`
function Services() {
  return (
    <div className="betweenBlocks">
      <BigText style={{ textAlign: 'center' }}>
        Наши <BrandedText>сервисы</BrandedText>{' '}
      </BigText>
      <Row gutter={64}>
        <Col span={8}>
          <Box>
            <img src={creditPayImage} alt="Оплата кредита" />
            <Title>Оплата кредита</Title>
            <Description>
              Получите доступ к своим средствам с помощью функции мобильного
              банкинга.
            </Description>
          </Box>
        </Col>
        <Col span={8}>
          <Box>
            <img src={mobileBankImage} alt="Мобильны банк" />
            <Title>Мобильный банк</Title>
            <Description>
              Получите быстрый доступ к своим средствам с помощью функции
              мобильного банкинга.
            </Description>
          </Box>
        </Col>
        <Col span={8}>
          <Box>
            <img src={creditImage} alt="Кредит" />
            <Title>Кредиты</Title>
            <Description>
              Получайте простые и быстрые кредиты не выходя из дома.
            </Description>
          </Box>
        </Col>
      </Row>
      <Row gutter={64} style={{ marginTop: 40 }}>
        <Col span={8}>
          <Box>
            <img src={exchangeImage} alt="Обмен валюты" />
            <Title>Курсы валют</Title>
            <Description>Обменивайте валюту в любое время</Description>
          </Box>
        </Col>
        <Col span={8}>
          <Box>
            <img src={creditHandImage} alt="" />
            <Title>Кредитование</Title>
            <Description>
              Получите доступ к другим видам кредитов с интересными процентными
              ставками.
            </Description>
          </Box>
        </Col>
        <Col span={8}>
          <Box>
            <img src={onlineBusinessImage} alt="" />
            <Title>Онлайн бизнесс</Title>
            <Description>
              Мы оказываем широкий спектр онлайн-поддержки бизнесу.
            </Description>
          </Box>
        </Col>
      </Row>
    </div>
  )
}

export default Services
