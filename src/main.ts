import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import { RequestMethod } from "@nestjs/common"

async function bootstrap() {
  const server = await NestFactory.create(AppModule)
  server.setGlobalPrefix('api/v1')
  server.listen(3000,()=>{
    console.log("listening 3000")
  })
}

bootstrap()
