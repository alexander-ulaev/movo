export async function readFileFromOPFS(filename: string) {
  try {
    const root = await navigator.storage.getDirectory();
    const fileHandle = await root.getFileHandle(filename);
    const file = await fileHandle.getFile();
    const content = await file.text();
    return content;
  } catch (error) {
    console.error("Ошибка при чтении файла:", error);
    return null;
  }
}
