import { Injectable } from '@nestjs/common';
import { PaginationDto } from './dto/pagination.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private readonly catRepository: Repository<Cat>,
  ) {}
  async query(paginationDto: PaginationDto) {
    const { page, size } = paginationDto;
    const [records, total] = await this.catRepository.findAndCount({
      skip: (page - 1) * size,
      take: size,
      order: { id: 'ASC' },
    });

    return { records, page, size: size, total };
  }
}
