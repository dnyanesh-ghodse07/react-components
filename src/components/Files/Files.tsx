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
    name: "File3 asjdhfjahsfnkm  sahdfhsajkdf safjhsakj",
    children: [
      {
        id: 5,
        name: "file-c3sdjhfjashjdfhjsdhjfghajshgkhjgkfhj",
        children: [],
      },
    ],
  },
];

const File = ({ file }: { file: FileProps }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="max-w-[200px]">
      <div className="pl-2 border-l-2 border-gray-300">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="w-ful p-2 flex items-center justify-between my-1 border-gray-300 border-[0.1px] cursor-pointer hover:shadow-md transition-all duration-200 bg-white rounded-md"
        >
          <p>{file.name.length > 18 ? file.name.substring(0, 18) + ' ...' : file.name}</p>
          {file.children?.length as number > 0 && (
            <span className="border w-5 h-5 flex items-center justify-center ml-1 border-gray-200 rounded">{isOpen ? "-" : "+"}</span>
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
        <h2 className="font-semibold text-gray-500">Files </h2>
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
