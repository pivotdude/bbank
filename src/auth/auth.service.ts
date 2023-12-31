import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { SignInDto } from './dto/SignIn.dto';
import { CreateUserDto } from '../user/dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { Client } from '@prisma/client';
import { SignUpDto } from './dto/SignUp.dto';
import { AccountService } from '../account/account.service';
@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(signInDto: SignInDto) {
    const user: Client = await this.userService.findOneByEmail(signInDto.email);

    if (!user) throw new UnauthorizedException('User not found');

    const yes = await bcrypt.compare(signInDto.password, user.password);

    if (!yes) {
      throw new UnauthorizedException('Password is incorrect');
    }
    const AuthUser = await this.userService.findOne(user.id);
    const payload = { sub: user.id, username: user.email };
    return {
      // user: AuthUser,
      // status: true,
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async signUp(signUpDto: SignUpDto) {
    delete signUpDto.repeatPassword;
    // await this.accountService.create({ clientId: user.id })
    const user = this.userService.create(signUpDto);
    if (user) {
      return { status: true };
    } else {
      return { status: false };
    }
  }
}
