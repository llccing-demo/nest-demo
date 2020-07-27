import { Controller, Get, Req, Post, Header, Redirect, Param, Body, HttpException, HttpStatus } from '@nestjs/common';
import { Request, json } from "express";
import { get } from 'http';
import { CreateCatDto } from 'src/dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from 'src/interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) { }

  @Get()
  findAll() {
    return this.catsService.findAll()
  }

  @Get('findError')
  findError() {
    return new HttpException({ status: 403, error: 'this is custom error' }, HttpStatus.FORBIDDEN)
  }

  @Get(':id')
  // @Redirect('findAll', 301)
  findOne(@Param('id') id) {
    console.log(id)
    return `this aciton find one, and id = ${id}`
  }

  @Post()
  @Header('Catch-Control', 'none')
  create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto)
  }
}
