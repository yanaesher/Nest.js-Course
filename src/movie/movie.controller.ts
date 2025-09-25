import { Body, Controller, Get, Post } from '@nestjs/common';
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

  @Post()
  async create(@Body() dto: CreateMovieDto) {
    return this.movieService.create(dto);
  }
}
