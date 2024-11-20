import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  /*@Get('deducibles')
  async obtenerDeducibles(@Query('texto') texto: string) {
    return this.appService.ObtenerDatosDeducibles(texto);
  }*/
  @Post()
  async ObtenerDatosDeducibles(@Body() datos) {
    const resultado = await this.appService.ObtenerDatosDeducibles(datos);
    return { payload: resultado };
  }
}
