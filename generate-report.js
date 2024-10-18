const fs = require('fs');

// Leer el archivo de resultados de las pruebas
let testResults;
try {
  testResults = JSON.parse(fs.readFileSync('test-results.json', 'utf8'));
} catch (error) {
  console.error('Error al leer o parsear test-results.json:', error);
  process.exit(1);
}

// Inicializar contadores y arrays para almacenar resultados
let passingTests = 0;
let failingTests = 0;
const passedExercises = [];
const failedExercises = [];

// Función para procesar los resultados de manera segura
function processResults(results) {
  if (Array.isArray(results)) {
    results.forEach(result => {
      if (result.assertionResults) {
        result.assertionResults.forEach(assertionResult => {
          const exerciseName = assertionResult.title.split(':')[1]?.trim() || assertionResult.title;
          if (assertionResult.status === 'passed') {
            passingTests++;
            passedExercises.push(exerciseName);
          } else {
            failingTests++;
            failedExercises.push(exerciseName);
          }
        });
      }
    });
  } else if (testResults.numPassedTests !== undefined) {
    passingTests = testResults.numPassedTests;
    failingTests = testResults.numFailedTests;
    // En este caso, no podemos obtener los nombres de los ejercicios específicos
  }
}

// Procesar los resultados
if (testResults.testResults) {
  processResults(testResults.testResults);
} else {
  processResults([testResults]);
}

// Generar el reporte en formato Markdown
const report = `# Reporte de Ejercicios de Arrays

## Resumen
- Total de ejercicios: ${passingTests + failingTests}
- Ejercicios correctos: ${passingTests}
- Ejercicios incorrectos: ${failingTests}

${passedExercises.length > 0 ? `## Ejercicios Correctos
${passedExercises.map(exercise => `- ${exercise}`).join('\n')}` : ''}

${failedExercises.length > 0 ? `## Ejercicios Incorrectos
${failedExercises.map(exercise => `- ${exercise}`).join('\n')}` : ''}

${failingTests > 0 ? '### Revisa los ejercicios incorrectos y vuelve a intentarlo. ¡Tú puedes!' : '¡Excelente trabajo! Has completado todos los ejercicios correctamente.'}
`;

// Guardar el reporte
fs.writeFileSync('test-report.md', report);

console.log('Reporte generado: test-report.md');