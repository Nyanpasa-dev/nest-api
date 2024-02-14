import { RolesService } from './roles.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role-dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Roles } from './roles.model';

@ApiTags('Роли')
@Controller('roles')
export class RolesController {
  constructor(private rolesService: RolesService) {}

  @ApiOperation({ summary: 'Создание роли' })
  @ApiResponse({ status: 201, type: Roles })
  @Post()
  async create(@Body() rolesDto: CreateRoleDto) {
    return this.rolesService.createRole(rolesDto);
  }

  @ApiOperation({ summary: 'Получение роли по значению' })
  @ApiResponse({ status: 200, type: [Roles] })
  @Get('/:value')
  async getByValue(@Param('value') value: string) {
    return this.rolesService.getRoleByValue(value);
  }
}
