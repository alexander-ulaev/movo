export async function deleteFileFromOPFS(filename: string) {
  try {
    const root = await navigator.storage.getDirectory();
    await root.removeEntry(filename);
    console.log(`Файл "${filename}" успешно удален из OPFS.`);
  } catch (error) {
    console.error("Ошибка при удалении файла:", error);
  }
}
