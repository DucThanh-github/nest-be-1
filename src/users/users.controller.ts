import { Controller, Get , Post , Delete} from "@nestjs/common";

@Controller('users')
export class UserController {
    @Get()
    getUser() {
        return {
            
            list: ['giang', 'thanhe', 'toai']
        }
    }
    @Post()
    createUser () {
        return {
            name:'Thanh'
        }
    }

    @Delete()
    deleteById(){
        return {
            status:'success'
        }
    }

}