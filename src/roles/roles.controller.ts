import { RolesService } from './roles.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role-dto';

@Controller('roles')
export class RolesController {
  constructor(private rolesService: RolesService) {}
  @Post()
  async create(@Body() rolesDto: CreateRoleDto) {
    return this.rolesService.createRole(rolesDto);
  }

  @Get('/:value')
  async getByValue(@Param('value') value: string) {
    return this.rolesService.getRoleByValue(value);
  }
}
