import {
  Body,
  Controller,
  Delete,
  FileTypeValidator,
  Get,
  Headers,
  HttpCode,
  HttpException,
  MaxFileSizeValidator,
  NotFoundException,
  Param,
  ParseFilePipe,
  ParseUUIDPipe,
  Post,
  Put,
  Query,
  Req,
  Res,
  UploadedFile,
  UseGuards,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Request, Response } from 'express';
import { User } from './interfaces/user.interface';
import { AuthGuard } from '../guards/auth.guard';
//* import { DateAdderInterceptor } from 'src/interceptors/date-adder.interceptor'; // RUTA RELATIVA
import { DateAdderInterceptor } from '../interceptors/date-adder.interceptor'; //* RUTA ABSOLUTA
import { UsersDbService } from './users-db.service';
import { UsersBodyDto, UsersSignInDto } from './users.dto';
import { CloudinaryService } from './cloudinary.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { MinSizeValidatorPipe } from './minSizeValidator';
import { AuthService } from './auth.service';
import { Roles } from '../decorators/roles.decorator';
import { Role } from '../role.enum';
import { RolesGuard } from '../guards/roles.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

// http://localhost:3000/users
@ApiTags('users')
@Controller('users')
// @UseGuards(AuthGuard)
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly usersDbService: UsersDbService,
    private readonly cloudinaryService: CloudinaryService,
    private readonly authService: AuthService,
  ) {}

  // GET http://localhost:3000/users/?name=Lisa
  @Get()
  //* query = { name: 'Lisa' }
  getUsers(@Query('name') name: string) {
    if (name) return this.usersService.getUserByName(name);
    return this.usersService.getUsers();
  }

  // GET http://localhost:3000/users/profile
  @Get('profile')
  getProfile(@Headers('token') token: string) {
    if (!token) {
      return 'Se necesita un token para acceder a esta ruta';
    }
    if (token !== 'ValidToken') {
      return 'Token Inválido';
    }
    return 'Esta ruta devuelve el profile del usuario';
  }

  // GET http://localhost:3000/users/coffee
  @HttpCode(418)
  @Get('coffee')
  getCoffee() {
    return 'No hay café, soy una tetera!!!';
  }

  // GET http://localhost:3000/users/message
  @Get('message')
  getMessage(
    @Res() response: Response,
    @Req() request: Request & { now: string },
  ) {
    response.status(202).send(`Se aceptó la solicitud el día ${request.now}`);
  }

  // GET http://localhost:3000/users/request
  @Get('request')
  getRequest(@Req() request: Request) {
    console.log(request);
    return 'Esta ruta imprime el request en consola';
  }

  // GET http://localhost:3000/users/profile/name
  @Get('profile/name')
  getName() {
    return 'Esta ruta devuelve solo el nombre del usuario';
  }

  @ApiBearerAuth()
  @Get('profile/images')
  @UseGuards(AuthGuard)
  getProfilePics() {
    return 'Estas son las fotos del usuario';
  }

  @ApiBearerAuth()
  @Get('dashboard')
  @Roles(Role.Admin) //* 'admin'
  @UseGuards(AuthGuard, RolesGuard)
  getAdmin() {
    return 'Datos del Panel de Administrador'; 
  }

  // http://localhost:3000/users/:id
  @Get(':id')
  // param = { id: 3, name: 'Marge' }
  async getUserById(@Param('id', ParseUUIDPipe) id: string) {
    const foundUser = await this.usersDbService.getUserById(id);
    if (!foundUser)
      throw new NotFoundException(`Usuario con id ${id} no encontrado`);
    if (foundUser) return foundUser;
    return 'No se encontró al usuario';
  }


  @Post()
  @UseInterceptors(DateAdderInterceptor)
  createUser(
    @Body() user: UsersBodyDto,
    @Req() request: Request & { now: string },
  ) {
    const modifiedUser = { ...user, createdAt: request.now };
    //return this.usersService.createUser(modifiedUser);
    console.log('Body', request.body);
    console.log('User', user);
    return this.authService.signUp(modifiedUser);
  }

  @Post('signin')
  signIn(@Body() user: UsersSignInDto) {
    return this.authService.signIn(user.email, user.password);
  }

  @Post('profile/images')
  @UseInterceptors(FileInterceptor('image'))
  @UsePipes(MinSizeValidatorPipe)
  async uploadProfilePic(@UploadedFile(
    new ParseFilePipe({
      validators: [
        new FileTypeValidator({
          fileType: /(jpg|jpeg|png|webp|gif|svg)/,
        }),
        new MaxFileSizeValidator({
          maxSize: 100000,
          message: 'Archivo mayor a 100kb',
        })
      ]
    })
  ) file: Express.Multer.File) {
    return this.cloudinaryService.uploadImage(file);
  }

  @Put()
  updateUser() {
    return 'Esta ruta modifica un usuario';
  }

  @Delete()
  deleteUser() {
    throw new HttpException(
      {
        status: 501,
        error: 'Esta ruta aún no está implementada',
      },
      501,
    );
  }
}

//* Evalúa path y método HTTP
//* Desestructurar información
//* Ejecuta el servicio
//* Da respuesta al usuario
