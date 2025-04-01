import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdatePutUserDTO } from "./dto/update-put-user.dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user.dto";

@Controller('users')
export class UserController {

    @Post()
    async create(@Body() { email, name, password }: CreateUserDTO) {
        return { email, name, password };
    }

    @Get()
    async list() {
        return { users: [] }
    }

    @Get(':id')
    async show(@Param('id', ParseIntPipe) id) {
        return {
            users: {},
            id
        }
    }

    @Put(':id')
    async update(@Body() body: UpdatePutUserDTO, @Param('id', ParseIntPipe) id) {
        return {
            ...body,
            method: 'PUT',
            id
        };
    }

    @Patch(':id')
    async updatePartial(@Body() body: UpdatePatchUserDTO, @Param('id', ParseIntPipe) id) {
        return {
            ...body,
            method: 'PATCH',
            id
        };
    }

    @Delete(':id')
    async remove(@Param('id', ParseIntPipe) id) {
        return {
            method: 'DELETE',
            id
        };
    }
}