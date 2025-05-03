const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8081; // Usar un puerto diferente (8081) o el definido en variables de entorno

const MIME_TYPES = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.md': 'text/markdown',
    '.ttf': 'font/ttf',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.eot': 'application/vnd.ms-fontobject',
    '.otf': 'font/otf'
};

const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);

    // Extraer la ruta base sin parámetros de consulta
    const urlObj = new URL(req.url, `http://localhost:${PORT}`);
    const pathname = urlObj.pathname;

    // Manejar la ruta raíz y URLs con parámetros
    let filePath = pathname === '/'
        ? path.join(__dirname, 'index.html')
        : path.join(__dirname, pathname);

    // Obtener la extensión del archivo
    const extname = path.extname(filePath);
    let contentType = MIME_TYPES[extname] || 'application/octet-stream';

    // Leer el archivo
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // Archivo no encontrado
                console.error(`Archivo no encontrado: ${filePath}`);
                res.writeHead(404);
                res.end('Archivo no encontrado');
            } else {
                // Error del servidor
                console.error(`Error del servidor: ${err.code}`);
                res.writeHead(500);
                res.end(`Error del servidor: ${err.code}`);
            }
        } else {
            // Éxito
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
    console.log(`Presiona Ctrl+C para detener el servidor`);
});
