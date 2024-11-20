import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import mocks from './Utils/mocks';
describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return ObtenerDatosDeducibles', async () => {
      const { texto } = mocks.obtenerDeducibles.request;
      const resultado = mocks.obtenerDeducibles.response;
      const ejecucion = await appController.ObtenerDatosDeducibles(texto);
      expect(ejecucion).toEqual(resultado);
    });
    it('should return ObtenerDatosDeducibles con Clausula', async () => {
      const { texto } = mocks.obtenerDeduciblesClausula.request;
      const resultado = mocks.obtenerDeduciblesClausula.response;
      const ejecucion = await appController.ObtenerDatosDeducibles(texto);
      expect(ejecucion).toEqual(resultado);
    });
    it('should return ObtenerDatosDeducibles con Nombre de taller', async () => {
      const { texto } = mocks.obtenerDeduciblesTaller.request;
      const resultado = mocks.obtenerDeduciblesTaller.response;
      const ejecucion = await appController.ObtenerDatosDeducibles(texto);
      expect(ejecucion).toEqual(resultado);
    });
  });
});
