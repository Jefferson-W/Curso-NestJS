import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";

@Controller('users')
export class UserController {

    @Post()
    async create(@Body() body) {
        return body;
    }

    @Get()
    async list() {
        return { users: [] }
    }

    @Get(':id')
    async show(@Param() params) {
        return { users: {}, params }
    }

    @Put(':id')
    async update(@Body() body, @Param() params) {
        return {
            ...body,
            method: 'PUT',
            params
        };
    }

    @Patch(':id')
    async updatePartial(@Body() body, @Param() params) {
        return {
            ...body,
            method: 'PATCH',
            params
        };
    }

    @Delete(':id')
    async remove(@Param() params) {
        return { method: 'DELETE', params };
    }
}