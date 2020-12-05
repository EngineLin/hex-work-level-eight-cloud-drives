
export enum FILE_TYPE {
  FOLDER,
  PICTURE,
  VIDEO,
  DOCUMENT
}

export const FILE_TYPE_TO_ICON_PATH_ADAPTER = {
  [FILE_TYPE.FOLDER]: 'assets/folder.svg',
  [FILE_TYPE.PICTURE]: 'assets/picture.svg',
  [FILE_TYPE.VIDEO]: 'assets/video.svg',
  [FILE_TYPE.DOCUMENT]: 'assets/doc.svg'
};

export const FILE_TYPE_TO_NAME = {
  [FILE_TYPE.FOLDER]: '資料夾',
  [FILE_TYPE.PICTURE]: 'JPG',
  [FILE_TYPE.VIDEO]: 'MP4',
  [FILE_TYPE.DOCUMENT]: '文件'
};
