export async function shareFileFromOPFS(filename: string) {
  try {
    const root = await navigator.storage.getDirectory();
    const fileHandle = await root.getFileHandle(filename);
    const file = await fileHandle.getFile();

    const blob = new Blob([file]);
    const fileShare = new File([blob], file.name + '.txt', {type: 'text/plain'});

    console.log(fileShare);

    const shareData = {
      files: [fileShare],
    };

    if (file && navigator.share && navigator.canShare(shareData)) {
      await navigator.share(shareData);
      console.log("Файл успешно отправлен.");
    } else {
      console.error(
        "Web Share API не поддерживается или файл нельзя отправить."
      );
    }
  } catch (error) {
    alert(error)
    console.error("Ошибка при отправки файла:", error);
    return null;
  }
}
