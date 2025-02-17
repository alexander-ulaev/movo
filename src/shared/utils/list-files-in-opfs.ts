export async function listFilesInOPFS() {
  try {
    // Получаем доступ к корневой директории OPFS
    const root = await navigator.storage.getDirectory();

    console.log("root", root);

    // Массив для хранения списка файлов
    const files = [];

    // Перебираем все записи в корневой директории
    for await (const entry of (root as any).values()) {
      if (entry.kind === "file") {
        files.push(entry.name); // Добавляем имя файла в массив
      }
    }

    console.log("Список файлов в OPFS:", files);
    return files;
  } catch (error) {
    console.error("Ошибка при получении списка файлов:", error);
    return [];
  }
}
