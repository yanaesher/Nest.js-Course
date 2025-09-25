import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
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
    return this.movieService.findById(+id);
  }

  @Post()
  async create(@Body() dto: CreateMovieDto) {
    return this.movieService.create(dto);
  }
}
