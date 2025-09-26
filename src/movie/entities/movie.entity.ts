import { ReviewEntity } from 'src/review/entity/review.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum Genre {
  ACTION = 'action',
  HORROR = 'horror',
  COMEDY = 'comedy',
}

@Entity({ name: 'movies' })
export class MovieEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 128,
  })
  title: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  description: string;

  @Column({
    name: 'release_year',
    type: 'int',
    unsigned: true,
  })
  releaseYear: number;

  @Column({
    type: 'decimal',
    precision: 2,
    scale: 1,
    default: 0.0,
  })
  rating: number;

  @Column({ type: 'boolean', default: false })
  isPublic: boolean;

  @OneToMany(() => ReviewEntity, (review) => review.movie)
  reviews: ReviewEntity[];

  @Column({
    type: 'enum',
    enum: Genre,
  })
  genre: Genre;

  @CreateDateColumn({
    name: 'created_at',
  })
  createAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
  })
  updateAt: Date;
}
