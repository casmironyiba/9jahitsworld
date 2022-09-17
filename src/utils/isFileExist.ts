export default function isFileExist(file: any, res: any) {
  if (!file || file.length === 0) {
    return res.status(404).json({
      err: "No file exists",
    });
  }
  if (file.contentType === "video/mpeg") {
    res.status(200).json(file);
  }
}
