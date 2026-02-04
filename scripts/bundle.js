import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const OUTPUT_FILE = 'project-bundle.md';
const IGNORE_DIRS = ['node_modules', '.git', 'dist', '.astro', '.vscode'];
const IGNORE_FILES = ['package-lock.json', 'bun.lockb', 'yarn.lock', OUTPUT_FILE, 'bundle.js'];
const IGNORE_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.gif', '.ico', '.svg', '.mp4', '.webm', '.mp3', '.wav', '.pdf', '.exe', '.dll', '.so', '.dylib', '.zip', '.tar', '.gz'];

function isBinary(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    return IGNORE_EXTENSIONS.includes(ext);
}

function shouldIgnore(entryName, fullPath) {
    if (IGNORE_DIRS.includes(entryName)) return true;
    if (IGNORE_FILES.includes(entryName)) return true;
    return false;
}

function getFileContent(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const ext = path.extname(filePath).slice(1) || 'txt';
        return `\n# File: ${filePath}\n\`\`\`${ext}\n${content}\n\`\`\`\n`;
    } catch (error) {
        console.error(`Error reading file ${filePath}: ${error.message}`);
        return `\n# File: ${filePath}\n(Error reading file)\n`;
    }
}

function walkDir(currentPath, relativePath = '') {
    let result = '';
    const entries = fs.readdirSync(currentPath, { withFileTypes: true });

    for (const entry of entries) {
        const entryPath = path.join(currentPath, entry.name);
        const entryRelativePath = path.join(relativePath, entry.name);

        if (shouldIgnore(entry.name, entryPath)) {
            continue;
        }

        if (entry.isDirectory()) {
            result += walkDir(entryPath, entryRelativePath);
        } else if (entry.isFile()) {
            if (!isBinary(entryPath)) {
                console.log(`Adding: ${entryRelativePath}`);
                result += getFileContent(entryPath); // Use absolute path in header for clarity if preferred, or relative
                // Actually, let's use relative path in the header for readability
            }
        }
    }
    return result;
}

// Adjust getFileContent to use relative path in the header
function getFileContentRelative(absolutePath, relativePath) {
    try {
        const content = fs.readFileSync(absolutePath, 'utf8');
        const ext = path.extname(absolutePath).slice(1) || 'txt';
        // Normalize path separators to forward slashes for consistency
        const normalizedPath = relativePath.split(path.sep).join('/');
        return `\n# File: ${normalizedPath}\n\`\`\`${ext}\n${content}\n\`\`\`\n`;
    } catch (error) {
        console.error(`Error reading file ${absolutePath}: ${error.message}`);
        return `\n# File: ${relativePath}\n(Error reading file)\n`;
    }
}

// Redefine walkDir to use the correct logging and string building
function bundleProject(rootDir) {
    let bundleContent = `# Project Bundle\nGenerated on: ${new Date().toISOString()}\n\n`;
    
    function traverse(currentDir, currentRelativeDir) {
        const entries = fs.readdirSync(currentDir, { withFileTypes: true });
        
        // Sort entries to have a deterministic order (files then directories, or alphabetical)
        entries.sort((a, b) => a.name.localeCompare(b.name));

        for (const entry of entries) {
             const fullPath = path.join(currentDir, entry.name);
             const relPath = path.join(currentRelativeDir, entry.name);

             if (shouldIgnore(entry.name, fullPath)) continue;

             if (entry.isDirectory()) {
                 traverse(fullPath, relPath);
             } else if (entry.isFile()) {
                 if (!isBinary(fullPath)) {
                     console.log(`Bundling: ${relPath}`);
                     bundleContent += getFileContentRelative(fullPath, relPath);
                 }
             }
        }
    }

    traverse(rootDir, '');
    return bundleContent;
}

try {
    console.log('Starting bundle process...');
    const projectRoot = path.join(__dirname, '..');
    const content = bundleProject(projectRoot);
    fs.writeFileSync(path.join(projectRoot, OUTPUT_FILE), content, 'utf8');
    console.log(`\nSuccess! Bundle created at: ${OUTPUT_FILE}`);
    console.log(`Total size: ${(content.length / 1024).toFixed(2)} KB`);
} catch (error) {
    console.error('Bundling failed:', error);
}
