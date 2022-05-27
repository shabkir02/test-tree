import { IFolder } from "./types";

export const data: IFolder[] = [
  {
    id: 1,
    folder_name: "folder 1",
    files: [
      {
        id: 1,
        file_name: "file 1"
      },
      {
        id: 2,
        file_name: "file 2"
      }
    ],
    Nested_folders: [
      {
        id: 2,
        folder_name: "folder 2",
        files: [
          {
            id: 3,
            file_name: "file 3"
          }
        ],
        Nested_folders: [
          {
            id: 4,
            folder_name: "folder 32",
            files: [
              {
                id: 6,
                file_name: "file 313"
              }
            ],
            Nested_folders: []
          }
        ]
      }
    ]
  },
  {
    id: 8,
    folder_name: "folder 1",
    files: [
      {
        id: 9,
        file_name: "file 1"
      },
      {
        id: 10,
        file_name: "file 2"
      }
    ],
    Nested_folders: [
      {
        id: 11,
        folder_name: "folder 2",
        files: [
          {
            id: 12,
            file_name: "file 3"
          }
        ],
        Nested_folders: [
          {
            id: 13,
            folder_name: "folder 3",
            files: [],
            Nested_folders: []
          }
        ]
      }
    ]
  }
]