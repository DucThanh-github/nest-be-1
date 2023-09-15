import { Module } from "@nestjs/common";
import { UserController } from './users/users.controller'
import { UserModule } from "./users/users.module";
import { ProductsController } from "./products/products.controller";
import { ProductsModule } from "./products/products.module";


@Module({
    imports: [UserModule, ProductsModule],
    controllers: [UserController,ProductsController],
})
export class AppModule { }