const {
    crearArrayVacio,
    crearArrayConElementos,
    crearArrayMixto,
    crearArrayConstructor,
    crearSecuenciaNumerica,
    crearArrayRepetido,
    crearArrayDesdeCadena,
    combinarArrays,
    crearArrayUnico,
    generarArrayDinamico
  } = require('../parte1');
  
  describe('Parte 1: Introducción a los arrays', () => {
    test('crearArrayVacio debe retornar un array vacío', () => {
      expect(crearArrayVacio()).toEqual([]);
    });
  
    test('crearArrayConElementos debe crear un array con los elementos proporcionados', () => {
      expect(crearArrayConElementos(1, 'dos', true)).toEqual([1, 'dos', true]);
    });
  
    test('crearArrayMixto debe crear un array con diferentes tipos de datos', () => {
      const resultado = crearArrayMixto();
      expect(resultado).toHaveLength(4);
      expect(resultado).toEqual(expect.arrayContaining([expect.any(Number), expect.any(String), expect.any(Boolean), expect.any(Object)]));
    });
  
    test('crearArrayConstructor debe crear un array con la longitud especificada', () => {
      expect(crearArrayConstructor(5)).toHaveLength(5);
    });
  
    test('crearSecuenciaNumerica debe crear un array con la secuencia especificada', () => {
      expect(crearSecuenciaNumerica(1, 5)).toEqual([1, 2, 3, 4, 5]);
    });
  
    test('crearArrayRepetido debe crear un array con el valor repetido', () => {
      expect(crearArrayRepetido('a', 3)).toEqual(['a', 'a', 'a']);
    });
  
    test('crearArrayDesdeCadena debe crear un array a partir de una cadena', () => {
      expect(crearArrayDesdeCadena('a,b,c', ',')).toEqual(['a', 'b', 'c']);
    });
  
    test('combinarArrays debe combinar dos arrays', () => {
      expect(combinarArrays([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
    });
  
    test('crearArrayUnico debe crear un array con valores únicos', () => {
      expect(crearArrayUnico([1, 2, 2, 3, 3, 4])).toEqual([1, 2, 3, 4]);
    });
  
    test('generarArrayDinamico debe crear un array con valores generados dinámicamente', () => {
      const resultado = generarArrayDinamico(5, (index) => index * 2);
      expect(resultado).toEqual([0, 2, 4, 6, 8]);
    });
  });