const {
    obtenerLongitud,
    agregarAlFinal,
    eliminarUltimo,
    agregarAlPrincipio,
    eliminarPrimero,
    obtenerPorcion,
    convertirAString,
    obtenerUltimos,
    eliminarSinModificar,
    agregarMultiplesAlPrincipio
  } = require('../parte2');
  
  describe('Parte 2: Métodos básicos de arrays', () => {
    test('obtenerLongitud debe retornar la longitud del array', () => {
      expect(obtenerLongitud([1, 2, 3])).toBe(3);
    });
  
    test('agregarAlFinal debe agregar elementos al final del array', () => {
      const arr = [1, 2];
      expect(agregarAlFinal(arr, 3, 4)).toBe(4);
      expect(arr).toEqual([1, 2, 3, 4]);
    });
  
    test('eliminarUltimo debe eliminar y retornar el último elemento', () => {
      const arr = [1, 2, 3];
      expect(eliminarUltimo(arr)).toBe(3);
      expect(arr).toEqual([1, 2]);
    });
  
    test('agregarAlPrincipio debe agregar elementos al principio del array', () => {
      const arr = [3, 4];
      expect(agregarAlPrincipio(arr, 1, 2)).toBe(4);
      expect(arr).toEqual([1, 2, 3, 4]);
    });
  
    test('eliminarPrimero debe eliminar y retornar el primer elemento', () => {
      const arr = [1, 2, 3];
      expect(eliminarPrimero(arr)).toBe(1);
      expect(arr).toEqual([2, 3]);
    });
  
    test('obtenerPorcion debe retornar una porción del array', () => {
      expect(obtenerPorcion([1, 2, 3, 4, 5], 1, 4)).toEqual([2, 3, 4]);
    });
  
    test('convertirAString debe convertir el array a un string', () => {
      expect(convertirAString([1, 2, 3], '-')).toBe('1-2-3');
    });
  
    test('obtenerUltimos debe retornar los últimos n elementos', () => {
      expect(obtenerUltimos([1, 2, 3, 4, 5], 3)).toEqual([3, 4, 5]);
    });
  
    test('eliminarSinModificar debe retornar una copia del array con elementos eliminados', () => {
      const arr = [1, 2, 3, 4, 5];
      expect(eliminarSinModificar(arr, 1, 2)).toEqual([1, 4, 5]);
      expect(arr).toEqual([1, 2, 3, 4, 5]);
    });
  
    test('agregarMultiplesAlPrincipio debe agregar múltiples elementos al principio', () => {
      const arr = [3, 4];
      expect(agregarMultiplesAlPrincipio(arr, 1, 2)).toBe(4);
      expect(arr).toEqual([1, 2, 3, 4]);
    });
  });