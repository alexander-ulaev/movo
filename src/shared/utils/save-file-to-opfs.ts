export async function saveFileToOPFS(filename: string, content: string) {
  try {
    // Получаем доступ к корневой директории OPFS
    const root = await navigator.storage.getDirectory();

    // Создаем или открываем файл
    const fileHandle = await root.getFileHandle(filename, { create: true });

    // Получаем доступ к записи в файл
    const writable = await fileHandle.createWritable();

    // Записываем содержимое в файл
    await writable.write(content);

    // Закрываем файл
    await writable.close();

    console.log(`Файл "${filename}" успешно сохранен в OPFS.`);
  } catch (error) {
    console.error("Ошибка при сохранении файла:", error);
  }
}
