import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Query,
  Param,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto, ListAllEntities, UpdateCatDto } from './dto';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private CatsService: CatsService) {}

  @Get()
  async getAll(@Query() query: ListAllEntities): Promise<Cat[]> {
    return this.CatsService.findAll();
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.CatsService.create(createCatDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCatDto: UpdateCatDto,
  ): Promise<string> {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<string> {
    return `This action deletes a #${id} cat`;
  }
}
