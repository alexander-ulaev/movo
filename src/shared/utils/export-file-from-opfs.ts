export async function exportFileFromOPFS(filename: string) {
  try {
    const root = await navigator.storage.getDirectory();
    const fileHandle = await root.getFileHandle(filename);
    const file = await fileHandle.getFile();

    // Предлагаем пользователю сохранить файл
    const saveHandle = await (window as any).showSaveFilePicker({
      suggestedName: filename,
    });
    const writable = await saveHandle.createWritable();
    await writable.write(file);
    await writable.close();

    console.log(`Файл "${filename}" успешно экспортирован.`);
  } catch (error) {
    console.error("Ошибка при экспорте файла:", error);
  }
}
