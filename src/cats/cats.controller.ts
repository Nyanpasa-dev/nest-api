import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Query,
  Param,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

import { CreateCatDto, ListAllEntities, UpdateCatDto } from './dto';
@Controller('cats')
export class CatsController {
  @Get()
  async getAll(@Query() query: ListAllEntities): Promise<string> {
    try {
      return `This action returns all cats (limit: ${query.limit} items)`;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'This is a custom message',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }
  @Post()
  async create(@Body() createCatDto: CreateCatDto): Promise<CreateCatDto> {
    return createCatDto;
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
