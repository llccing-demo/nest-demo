import { Controller, Get, Req, Post, Header, Redirect, Param } from '@nestjs/common';
import { Request, json } from "express";
import { get } from 'http';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Req() request: Request): Object {
    const obj = {
      a: 'zhangsan',
      b: 123,
      c: {
        d: 'this ia nested value'
      },
      e: request.rawHeaders,
    }
    const str = 'this action returns all cats'
    return obj
  }

  @Get(':id')
  // @Redirect('findAll', 301)
  findOne(@Param('id') id) {
    console.log(id)
    return `this aciton find one, and id = ${id}`
  }

  @Post()
  @Header('Catch-Control', 'none')
  create(): string{
    return 'this action add a new cat'
  }
}
