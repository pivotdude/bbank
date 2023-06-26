import { Injectable } from '@nestjs/common';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { PrismaService } from '../prisma/prisma.service';
import { UserService } from "../user/user.service";

@Injectable()
export class CardService {
  constructor(private readonly prismaService: PrismaService, private readonly userService: UserService) {}
  private readonly model = this.prismaService.card;
  async create(createCardDto: CreateCardDto, request) {
    // console.log(createCardDto);
    // const user = this.userService.findOneByEmail(this.user.email)
    // console.log(user);
    console.log('asd', )
    const client = await this.prismaService.client.findFirst({where: {
        email: request.user.email
    }})

    console.log('cli', client)
    console.log(client.id)

    const account = await this.prismaService.account.findFirst({
      where: {
        clientId: client.id,
      },
    });
    console.log('ac', account)

    const generateExpirationDate = () => {
      let year = new Date().getFullYear() + Math.floor(Math.random() * 3) + 2;
      let month: number = Math.floor(Math.random() * 12) + 1;
      if (month < 10) {
        month = month*10; // add a leading zero by multiplying by 10
      }
      return year.toString().substr(-2) + "/" + month;
    };
    const generateCardNumber = () => { let cardNumber = ""; for (let i = 0; i < 4; i++) { cardNumber += Math.floor(1000 + Math.random() * 9000); if (i !== 3) { cardNumber += " "; } } return cardNumber; };
    const generateCVV = () => { return Math.floor(100 + Math.random() * 900); };

    console.log(account);

    return this.model.create({
      data: {
        name: createCardDto.name,
        cardNumber: generateCardNumber(),
        expirationDate: generateExpirationDate(),
        cvv: generateCVV(),
        accountId: account.id,
        },
      })
  }

  async findAll(request: Request) {
    const account = await this.prismaService.account.findFirst({
      where: {
        clientId: request['user'].id,
      },
    });

    const cards = this.prismaService.card.findMany({where: {accountId: account.id}})
    return cards;
  }

  findOne(id: number) {
    return `This action returns a #${id} card`;
  }

  update(id: number, updateCardDto: UpdateCardDto) {
    return `This action updates a #${id} card`;
  }

  remove(id: number) {
    return `This action removes a #${id} card`;
  }
}
