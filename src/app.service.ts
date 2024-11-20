import { Injectable } from '@nestjs/common';
import constants from './Utils/constants';

@Injectable()
export class AppService {
  ObtenerDeducible(texto: string): string {
    const exp = /(\d+(\.\d+)?)%/g;
    const deducibles = texto.match(exp);
    const deducible = deducibles
      ? deducibles[0].replace('.00', '').replace('%', '')
      : '';
    return deducible;
  }

  ObtenerCopago(texto: string, moneda: string): string {
    const exp = moneda === 'USD' ? /US\$\s*(\d+)/g : /S\/\.\s*(\d+)/g;
    const copagos = texto.toUpperCase().match(exp);
    let copago = copagos ? copagos[0] : '';
    copago = copago.replace('US$', '').replace('S/.', '');
    return copago.trim();
  }

  ObtenerMoneda(texto: string): string {
    const isDolar = texto.toUpperCase().includes('US$');
    const moneda = isDolar ? 'USD' : 'PEN';
    return moneda;
  }

  ObtenerTipo(texto: string): string {
    const isMulti = texto.toUpperCase().includes('MULTIMARCA');
    const Tipo = isMulti ? 'Multimarca' : 'NO TIPO';
    return Tipo;
  }

  ObtenerMarca(texto: string): string {
    texto = texto.toUpperCase();
    console.log(texto);
    const exp = /MARCA\s([A-Za-z\s,]+)(?=:)/g;
    const existeMarca = texto.match(exp);
    console.log(existeMarca);
    const marca = existeMarca
      ? existeMarca[0].replace('MARCA ', '')
      : 'NO MARCA';
    return marca;
  }

  ObtenerTaller(texto: string): string {
    const existeAfiliada = constants.noTalleres.some((noTaller) =>
      texto.toUpperCase().includes(noTaller),
    );
    let taller: string;
    if (!existeAfiliada) {
      const exp = /talleres\s([A-Za-z\s]+)/i;
      const talleres = texto.match(exp);
      taller = talleres
        ? talleres[0]
            .replace('Talleres ', '')
            .replace('TALLERES ', '')
            .replace('talleres', '')
            .trim()
        : 'NO TALLER';
    } else {
      taller = 'NO TALLER';
    }
    return taller;
  }

  ObtenerDatosDeducible(linea: string, datos: any[]): any[] {
    console.log('Deducible');
    console.log(linea);
    const deducible = this.ObtenerDeducible(linea);
    const moneda = this.ObtenerMoneda(linea);
    const copago = this.ObtenerCopago(linea, moneda);
    const tipo = this.ObtenerTipo(linea);
    const marca = this.ObtenerMarca(linea);
    const taller = this.ObtenerTaller(linea);
    datos.push({ deducible, copago, moneda, tipo, marca, taller });
    return datos;
  }

  ObtenerDatosDeducibles(texto: string): any[] {
    console.log('ObtenerDeducibles');
    console.log(texto);
    const lineas = texto.split('\n');
    const clausula = 'VEH';
    const datos = [];
    if (texto.includes(clausula)) {
      this.ObtenerDatosDeducible(lineas[1], datos);
    } else {
      const linDeducibles = lineas.filter((lin) =>
        lin.toUpperCase().includes('TALLERES'),
      );
      console.log(linDeducibles);
      for (const linea of linDeducibles) {
        this.ObtenerDatosDeducible(linea, datos);
      }
    }
    return datos;
  }
}
