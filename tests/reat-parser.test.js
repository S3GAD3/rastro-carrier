'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

const html = fs.readFileSync(new URL('../index.html', `file://${__filename}`), 'utf8');
const start = html.indexOf('function parseReat(t){');
const end = html.indexOf('/* ---------- Eventos ---------- */', start);
assert.notEqual(start, -1, 'No se encontró parseReat en index.html');
assert.notEqual(end, -1, 'No se encontró el final de la zona del parser');
const parserSource = html.slice(start, end) + '\nthis.parseReat = parseReat;';
const context = {};
vm.runInNewContext(parserSource, context);

const cases = [
  {
    name: 'etiquetas y valores en línea',
    input: 'Titular: Transportes Ejemplo SL\nNIF: B12345674\nAutorización: MDP 123456',
    expected: { titular: 'Transportes Ejemplo SL', nif: 'B12345674', aut: 'MDP123456' }
  },
  {
    name: 'etiquetas y valores separados',
    input: 'Titular de la autorización\nTransportes Norte S.L.\nNIF\nA12345674\nAutorización\nVTC\n98765',
    expected: { titular: 'Transportes Norte S.L.', nif: 'A12345674', aut: 'VTC98765' }
  },
  {
    name: 'tabla copiada con tabuladores',
    input: 'Titular\tLogística del Sur S.A.\nNIF\tB12345674\nTipo autorización\tMDL\nNúmero\t4321',
    expected: { titular: 'Logística del Sur S.A.', nif: 'B12345674', aut: 'MDL4321' }
  },
  {
    name: 'etiquetas sin tilde y CIF con espacios',
    input: 'Razon social: Empresa Prueba S.L.\nCIF: B 1 2 3 4 5 6 7 4\nLicencia MDP-12345',
    expected: { titular: 'Empresa Prueba S.L.', nif: 'B12345674', aut: 'MDP12345' }
  },
  {
    name: 'NIE y autorización VTC',
    input: 'Titular\nPersona de Prueba\nIdentificación fiscal: X 1234567 L\nN.º de autorización: VTC 7654321',
    expected: { titular: 'Persona de Prueba', nif: 'X1234567L', aut: 'VTC7654321' }
  },
  {
    name: 'texto sin datos reconocibles',
    input: 'Consulta realizada sin resultados',
    expected: { titular: '', nif: '', aut: '' }
  }
];

for (const test of cases) {
  assert.deepEqual(JSON.parse(JSON.stringify(context.parseReat(test.input))), test.expected, test.name);
  console.log(`OK · ${test.name}`);
}
console.log(`\n${cases.length} pruebas correctas.`);
