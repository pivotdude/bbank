import React from 'react'
import Card from '../../components/ui/Card/Card'

import ChildImage from './img/child.webp'
import BuildImage from './img/build.jpg'
import RelaxImage from './img/relax.webp'
import EducationImage from './img/education.jpg'

interface CreditProps {}

function Credits(props: CreditProps) {
  return (
    <>
      <Card
        img={ChildImage}
        card={{
          name: 'Молодежный кредит',
          description:
            'Максимально выгодное предложение для молодых людей до 25 лет, которые хотят получить кредит на максимально выгодных условиях. Высокая доступность и низкий процент.',
          dops: [
            {
              title: 'До 10 тыс Р',
              description: 'Сумма кредита',
            },
            {
              title: 'До 3 лет',
              description: 'Срок',
            },
            {
              title: 'до 8%',
              description: 'Процентов годовых',
            },
          ],
        }}
      />
      <Card
        img={BuildImage}
        card={{
          name: 'Ремонт без проблем',
          description:
            'Карта для платежей на сайте по банковской карте и платежи на сайте',
          dops: [
            {
              title: 'До 10 тыс Р',
              description: 'Сумма кредита',
            },
            {
              title: 'До 3 лет',
              description: 'Срок',
            },
            {
              title: 'до 8%',
              description: 'Процентов годовых',
            },
          ],
        }}
      />
      <Card
        img={RelaxImage}
        card={{
          name: 'Лето в кредит',
          description:
            'Беззаботное лето близко! Получите кредит на любые виды отдыха без необходимости откладывать свои путешествия на неопределенное время.',
          dops: [
            {
              title: 'До 50 тыс Р',
              description: 'Сумма кредита',
            },
            {
              title: 'До 2 лет',
              description: 'Срок',
            },
            {
              title: 'до 10%',
              description: 'Процентов годовых',
            },
          ],
        }}
      />
      <Card
        img={EducationImage}
        card={{
          name: 'Кредит на образование',
          description:
            ' Получите высшее образование и реализуйте свои карьерные планы. Убедитесь в том, что нежелание откладывать свою карьеру из-за финансовых проблем не помешает вам добиться успеха!',
          dops: [
            {
              title: 'До 2 млн Р',
              description: 'Сумма кредита',
            },
            {
              title: 'До 10 лет',
              description: 'Срок',
            },
            {
              title: 'до 6%',
              description: 'Процентов годовых',
            },
          ],
        }}
      />
    </>
  )
}

export default Credits
