export interface IFile {
  id: number,
  file_name: string
}

export interface IFolder {
  id: number,
  folder_name: string,
  files: IFile[],
  Nested_folders: IFolder[]
}