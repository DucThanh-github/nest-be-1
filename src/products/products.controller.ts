import { Controller, Get, HttpException, HttpStatus } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { ModuleRef } from "@nestjs/core/injector/module-ref";
// import { ModuleRef } from "@nestjs/core";

@Controller('products')
export class ProductsController {
    
    constructor (private mdref: ModuleRef) {
    }

    @Get()
    listProducts() {
        
       const productService: ProductsService = this.mdref.get('PRODUCTS_SERVICE', {strict:false})
        
       return productService.getAll()
    }
}
