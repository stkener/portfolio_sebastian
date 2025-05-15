const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'build', '.nojekyll');

try {
  fs.writeFileSync(filePath, '');
  console.log('Archivo .nojekyll creado en build/');
} catch (err) {
  console.error('Error creando .nojekyll:', err);
}
