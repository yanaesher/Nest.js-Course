import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MovieDto } from './dto/movie.dto';
import { MovieEntity } from './entities/movie.entity';
import { MovieService } from './movie.service';

@Controller({ path: 'movies' })
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  async findAll(): Promise<MovieEntity[]> {
    return this.movieService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<MovieEntity> {
    return this.movieService.findById(id);
  }

  @Post()
  async create(@Body() dto: MovieDto) {
    return this.movieService.create(dto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: MovieDto,
  ): Promise<boolean> {
    return this.movieService.update(id, dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<boolean> {
    return this.movieService.delete(id);
  }
}
