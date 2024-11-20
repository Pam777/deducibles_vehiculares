export default {
  obtenerDeducibles: {
    request: {
      texto:
        'AUSENCIA DE CONTROL EN TALLERES JAPAN AUTOS, 22% del DEL MONTO DEL SINIESTRO, Mínimo de US$500.00. AUSENCIA DE CONTROL',
    },
    response: {
      payload: [
        {
          deducible: '22',
          copago: '500',
          moneda: 'USD',
          tipo: 'NO TIPO',
          marca: 'NO MARCA',
          taller: 'JAPAN AUTOS',
        },
      ],
    },
  },
  obtenerDeduciblesClausula: {
    request: {
      texto: `*Los siniestros, serán atendidos únicamente en la relación de talleres especiales descritos en la cláusula  VEHA07
20% del monto indemnizable, mínimo US$ 200 
20% del monto indemnizable para pérdida total`,
    },
    response: {
      payload: [
        {
          deducible: '20',
          copago: '200',
          moneda: 'USD',
          tipo: 'NO TIPO',
          marca: 'NO MARCA',
          taller: 'NO TALLER',
        },
      ],
    },
  },
  obtenerDeduciblesTaller: {
    request: {
      texto: `10% del monto del siniestro, minimo US$ 500.00 en Talleres Nissan Maquinarias	
10% del monto del siniestro, minimo US$ 700.00 en Otros Talleres 	
En caso de discrepancia prevalece el mayor. No incluye I.G.V.`,
    },
    response: {
      payload: [
        {
          deducible: '10',
          copago: '500',
          moneda: 'USD',
          tipo: 'NO TIPO',
          marca: 'NO MARCA',
          taller: 'Nissan Maquinarias',
        },
        {
          deducible: '10',
          copago: '700',
          moneda: 'USD',
          tipo: 'NO TIPO',
          marca: 'NO MARCA',
          taller: '',
        },
      ],
    },
  },
};
