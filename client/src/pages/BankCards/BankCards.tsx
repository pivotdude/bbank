import React from 'react'
import Card from '../../components/ui/Card/Card'

import CreditCardImage from './img/credit-card-universal-bystrobank.png'
import DebetImage from './img/debet.png'
import AirlineCardImage from './img/airlne.png'


function BankCards() {
  return (
    <>
      <Card
        img={DebetImage}
        card={{
          name: 'Банковская карта',
          description:
            'Карта для платежей на сайте по банковской карте и платежи на сайте',
          dops: [
            {
              title: 'До 60 тыс Р',
              description: 'Крдитный лимит',
            },
            {
              title: 'До 10 % кэшбек',
              description: 'За траты на путешествия',
            },
            {
              title: '1500 Р в год',
              description: 'Стоимость обслуживания',
            },
          ],
        }}
      />
      <Card
        img={AirlineCardImage}
        card={{
          name: 'Дебетовая карта airline',
          description: 'Карта для дальних полётов с лучшим кэшбеком',
          dops: [
            {
              title: 'До 60 тыс Р',
              description: 'Крдитный лимит',
            },
            {
              title: 'До 20 % кэшбек',
              description: 'За траты на путешествия',
            },
            {
              title: '2000 Р в год',
              description: 'Стоимость обслуживания',
            },
          ],
        }}
      />
      <Card
        img={CreditCardImage}
        card={{
          name: 'Кредитка НЕКРЕДИТ',
          description: 'Лучшая кредитная карта в мире!',
          dops: [
            {
              title: 'До 0 тыс Р',
              description: 'Крдитный лимит',
            },
            {
              title: 'До 10 % кэшбек',
              description: 'За траты на путешествия',
            },
            {
              title: '1500 Р в год',
              description: 'Стоимость обслуживания',
            },
          ],
        }}
      />
    </>
  )
}

export default BankCards
