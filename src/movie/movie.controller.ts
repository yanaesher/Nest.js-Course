import { Body, Controller, Get, Post, Query } from '@nestjs/common';

@Controller({ path: 'movies' })
export class MovieController {
  @Get()
  findAll(@Query('genre') genre: any) {
    return genre ? `Films in genre ${genre}` : [{ title: 'fight club' }];
  }

  @Post()
  create(@Body() body: { title: string; genre: string }) {
    return `Movie "${body.title}" was added`;
  }
}
