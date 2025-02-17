export async function shareFileFromOPFS(filename: string) {
  try {
    const root = await navigator.storage.getDirectory();
    const fileHandle = await root.getFileHandle(filename);
    const file = await fileHandle.getFile();

    if (file && navigator.share && navigator.canShare()) {
      await navigator.share({
        title: "Файл из OPFS",
        text: "Вот файл, которымnavigator.share я хочу поделиться:",
        files: [file],
      });
      console.log("Файл успешно отправлен.");
    } else {
      console.error(
        "Web Share API не поддерживается или файл нельзя отправить."
      );
    }
  } catch (error) {
    console.error("Ошибка при отправки файла:", error);
    return null;
  }
}
