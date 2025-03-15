import React from "react";
import { VscNewFile } from "react-icons/vsc";
import { VscNewFolder } from "react-icons/vsc";

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
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "File2",
    children: [],
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

const File = ({ file, selectedId, setSelectedId, setAddFile, addFile }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleSelect = (id) => {
    setSelectedId((prev) => (prev === id ? null : id));
  };

  const handleFileSave = (e) => {
    console.log(e.target.value);
    // save file
    
    if(selectedId === null){
      data.push({
        id: Math.floor(Math.random() * 1000),
        name: e.target.value,
        children: []
      })
    }else{
      if(e.target.value){
        data.map((item) => {
          if(item.id === selectedId){
            item.children.push({
              id: Math.floor(Math.random() * 1000),
              name: e.target.value,
              children: []
            })
          }
        })
        setAddFile(false);
      }
    }
    // setAddFile(false);
  }

  return (
    <div>
      <div
        className={`flex items-center gap-2 ${
          selectedId === file.id ? "bg-gray-200" : ""
        }`}
        onClick={() => handleSelect(file.id)}
      >
        <h2>{file.name}</h2>
        {file.children.length > 0 && (
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "-" : "+"}
          </button>
        )}
      </div>
      <div className="pl-2 border-l-2 border-gray-300">
      {selectedId === file.id && addFile && <input className="border p-1 text-xs" placeholder="File name" onBlur={handleFileSave}/>}
        {file.children &&
          isOpen &&
          file.children.map((child) => (
            <File
              key={child.id}
              file={child}
              selectedId={selectedId}
              setSelectedId={setSelectedId}
              addFile={addFile}
              setAddFile={setAddFile}
            />
          ))}
      </div>
    </div>
  );
};

const Files = () => {
  const [selectedId, setSelectedId] = React.useState(null);
  const [addFile, setAddFile] = React.useState(false);
  return (
    <div>
      <div className="flex items-center gap-2">
        <h2>Files </h2>
        <button onClick={() => setAddFile(prev => !prev)}>
          <VscNewFile />
        </button>
        <button>
          <VscNewFolder />
        </button>
      </div>
      <div>
        {data.map((file) => (
          <File
            key={file.id}
            file={file}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            setAddFile={setAddFile}
            addFile={addFile}
          />
        ))}
      {!selectedId && addFile && <input className="border p-1 text-xs" placeholder="File name" />}
      </div>
    </div>
  );
};

export default Files;
