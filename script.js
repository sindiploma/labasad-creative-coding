const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { execSync } = require('child_process');

// Definir las lecciones y sus nombres
const lessons = [
    'p5 y creative coding',
    'dibujo e interactividad',
    'bitmaps',
    'librerías y visualización de sonido',
    'simulaciones',
    '3d y webgl'
];

// Función para normalizar los nombres de las lecciones
const normalizeName = (name) => {
    // Eliminar acentos y reemplazar espacios por guiones bajos
    const normalized = name.normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '_');
    return normalized;
};

// Crear una interfaz para leer entradas
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para pedir el nombre del estudiante
const askForName = () => {
    return new Promise((resolve) => {
        rl.question("Por favor, introduce tu nombre completo: ", (name) => {
            resolve(name);
        });
    });
};

// Función para preguntar si se desea sobrescribir
const askForOverwriteConfirmation = () => {
    return new Promise((resolve) => {
        rl.question("Ya existe una carpeta con el mismo nombre. ¿Deseas sobrescribirla? (sí/no): ", (answer) => {
            resolve(answer.toLowerCase() === 'sí');
        });
    });
};

// Función para copiar p5.js en la carpeta js de la lección
const copyP5ToJsFolder = (lessonFolder) => {
    const p5SourcePath = path.join(lessonFolder, '..', 'node_modules', 'p5', 'lib', 'p5.js'); // Ruta de p5.js
    const p5DestinationPath = path.join(lessonFolder, 'js', 'p5.js'); // Ruta de destino
    fs.copyFileSync(p5SourcePath, p5DestinationPath);
};

// Función principal para crear la estructura del proyecto
const createProjectStructure = async () => {
    const projectName = 'p5_project';

    // Comprobar si ya existe el directorio del proyecto
    if (fs.existsSync(projectName)) {
        const overwrite = await askForOverwriteConfirmation();
        if (!overwrite) {
            console.log("Proceso cancelado. No se realizaron cambios.");
            rl.close();
            return;
        }
        // Si se sobrescribe, eliminar el directorio existente
        fs.rmSync(projectName, { recursive: true, force: true });
    }

    // Pedir el nombre del estudiante después de confirmar sobrescritura
    const studentName = await askForName();

    // Crear el directorio principal del proyecto
    fs.mkdirSync(projectName, { recursive: true });

    // Inicializar un nuevo proyecto npm sin salida
    execSync('npm init -y', { cwd: projectName, stdio: 'ignore' });

    // Instalar la biblioteca p5 como una dependencia local sin salida
    execSync('npm install p5', { cwd: projectName, stdio: 'ignore' });

    // Crear carpetas y archivos para cada lección
    lessons.forEach((lesson, index) => {
        const orderNumber = index + 1; // Número de orden de la lección
        const normalizedLessonName = normalizeName(lesson);
        const lessonFolderName = `${orderNumber}_${normalizedLessonName}`; // Crear nombre de carpeta con número de orden
        const lessonFolder = path.join(projectName, lessonFolderName);
        
        fs.mkdirSync(lessonFolder, { recursive: true });

        // Crear una carpeta js dentro de la carpeta de la lección
        const jsFolder = path.join(lessonFolder, 'js');
        fs.mkdirSync(jsFolder, { recursive: true });

        // Crear el archivo HTML para la lección
        const htmlContent = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${studentName} - ${orderNumber} ${lesson}</title>
    <link rel="stylesheet" href="style.css">
    <script src="js/p5.js"></script>
    <script src="js/sketch.js"></script>
</head>
<body>
</body>
</html>
`;

        fs.writeFileSync(path.join(lessonFolder, 'index.html'), htmlContent);

        // Crear un archivo sketch.js vacío en la carpeta js
        fs.writeFileSync(path.join(jsFolder, 'sketch.js'), '// Tu código p5.js va aquí\n');

        // Crear un archivo style.css en la carpeta de la lección
        const cssContent = '/* Agrega tus estilos aquí */\n';
        fs.writeFileSync(path.join(lessonFolder, 'style.css'), cssContent);

        // Copiar la biblioteca p5.js en la carpeta js de la lección
        copyP5ToJsFolder(lessonFolder);
    });

    console.log(`Estructura del proyecto creada en el directorio '${projectName}' con lecciones.`);
    rl.close();
};

// Ejecutar la función principal
createProjectStructure().catch(err => {
    console.error(err);
    rl.close();
});
