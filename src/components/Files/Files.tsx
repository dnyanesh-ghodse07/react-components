import React from "react";

interface FileProps {
  id: number;
  name: string;
  children?: FileProps[];
}

const data = [
  {
    id: 1,
    name: "File1",
    children: [
      {
        id: 4,
        name: "file-c1",
        children: [
          {
            id: 6,
            name: "file-c1-c1",
            children: [
              {
                id: 7,
                name: "file-c1-c1-c1",
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "File2",
  },
  {
    id: 3,
    name: "File3",
    children: [
      {
        id: 5,
        name: "file-c3",
        children: [],
      },
    ],
  },
];

const File = ({ file }: { file: FileProps }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <div className="pl-2 border-l-2 border-gray-300">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 cursor-pointer"
        >
          <span>{file.name}</span>
          {file.children && (
            <span>{isOpen ? "-" : "+"}</span>
          )}
        </div>
        {file.children &&
          isOpen &&
          file.children.map((child) => (
            <File
              key={child.id}
              file={child}
            />
          ))}
      </div>
    </div>
  );
};

const Files = () => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <h2>Files </h2>
        
      </div>
      <div>
        {data.map((file) => (
          <File
            key={file.id}
            file={file}
          />
        ))}
      </div>
    </div>
  );
};

export default Files;
