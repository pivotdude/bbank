import React from 'react'
import { Col, Row, Space } from 'antd'
import styled from 'styled-components'
import FooterImage from './Footer.png'
import facebookImage from './img/facebook.svg'
import instagramImage from './img/instagram.svg'
import twitterImage from './img/twitter.svg'
import youtubeImage from './img/youtube.svg'

interface FooterProps {}

const Header = styled.p`
  font-weight: 600;
  font-size: 1.375rem;
  line-height: 2.06rem;
  color: #dacbcb;
`
const Text = styled(Header)`
  margin-top: 20px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`

function Footer(props: FooterProps) {
  return (
    <div
      style={{
        height: '478px',
        width: '100%',
        backgroundImage: `url(${FooterImage})`,
        marginTop: '100px',
      }}
    >
      <Row
        style={{
          paddingTop: '40px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Col span={5}>
          <Header>About us</Header>
          <Text>Мы банк</Text>
          <Text>Все права защищены</Text>
        </Col>
        <Col span={5}>
          <Header>Our services</Header>
          <Text>Internet banking</Text>
          <Text>Mobile banking</Text>
        </Col>
        <Col span={5}>
          <Space size={16}>
            <img src={youtubeImage} alt="youtube" />
            <img src={facebookImage} alt="facebook" />
            <img src={instagramImage} alt="instagram" />
            <img src={twitterImage} alt="twitter" />
          </Space>
        </Col>
      </Row>
    </div>
  )
}

export default Footer
