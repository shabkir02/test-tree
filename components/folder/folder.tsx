import { useState } from "react";
import { IFolder } from "../../shared/types"

import styles from './folder.module.sass';

interface Props { 
  folderData: IFolder
}

export const Folder = ({ folderData }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleFolderClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <button key={folderData.id} onClick={handleFolderClick} type="button" className={styles.folder}>
        <img src="/arrow.svg" alt="arrow" style={{ transform: isOpen ? '' : 'rotate(-90deg)' }} />
        <img src="/folder.svg" alt="arrow" className={styles.folder_img} />
        <span className={styles.folder_title}>{folderData.folder_name}</span>
      </button>
      {isOpen && (
        <div className={styles.folder_wrapper}>
          {folderData.Nested_folders.map((folder) => (
            <Folder key={folder.id} folderData={folder} />
          ))}
          {folderData.files.map((file) => (
            <button key={file.id} type="button" className={styles.file}>
              <img src="/file.svg" alt="arrow" />
              <span className={styles.folder_title} >{file.file_name}</span>
            </button>
          ))}
        </div>
      )}
    </>
  )
}