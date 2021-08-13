import React from 'react';
import './DropZone.css';
// import { useEffect } from 'react';
import { useState, useRef } from 'react';
import Dropzone from 'react-dropzone-uploader';

const DropZone = () => {

    const [selectedFiles, setSelectedFiles] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    // const [effect, setEffect] = useEffect('');
    const [validFiles, setValidFiles] = useState([]);


    const dragOver = (e) => {
        e.preventDefault();
    }

    const dragEnter = (e) => {
        e.preventDefault();
    }

    const dragLeave = (e) => {
        e.preventDefault();
    }

    const fileDrop = (e) => {
        e.preventDefault();
        console.log('chưa vào');
        const files = e.dataTransfer.files;
        if (files.length) {
            console.log('đã vào');
            handleFiles(files);

        }
    }

    const handleFiles = (files) => {

        for (let i = 0; i < files.length; i++) {
            if (validateFile(files[i])) {
                // add to an array so we can display the name of file
                // add to the same array so we can display the name of the file
                setSelectedFiles(prevArray => [...prevArray, files[i]]);
            } else {
                // add a new property called invalid
                setErrorMessage('File không đúng định dạng!');
                files[i]['invalid'] = true;
                setSelectedFiles(prevArray => [...prevArray, files[i]]);
                alert(errorMessage);
                console.log('ok file sai')

                // set error message




            }
        }
    }

    const fileType = (fileName) => {
        return fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length) || fileName;
    }

    const fileSize = (size) => {
        if (size === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(size) / Math.log(k));
        return parseFloat((size / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    const validateFile = (file) => {
        const validTypes = ['application/xml', 'text/xml'];
        if (validTypes.indexOf(file.type) === -1) {
            return false;
        }
        
        console.log('ok file đúng');
        return true;
    }


    // setEffect(() => {

    //     let filteredArray = selectedFiles.reduce((file, current) => {
    //         const x = file.find(item => item.name === current.name);
    //         if (!x) {
    //             return file.concat([current]);
    //         } else {
    //             return file;
    //         }
    //     }, []);
    //     setValidFiles([...filteredArray]);

    // }, [selectedFiles]);

    const removeFile = (name,e) => {
   
        // find the index of the item
        // remove the item from array
        e.preventDefault();
        e.stopPropagation();
        const validFileIndex = validFiles.findIndex(e => e.name === name);
        validFiles.splice(validFileIndex, 1);
        // update validFiles array
        setValidFiles([...validFiles]);
        const selectedFileIndex = selectedFiles.findIndex(e => e.name === name);
        selectedFiles.splice(selectedFileIndex, 1);
        // update selectedFiles array
        setSelectedFiles([...selectedFiles]);
    }

    const fileInputRef = useRef();

    const fileInputClicked = () => {
        fileInputRef.current.click();
    }

    const filesSelected = () => {
        if (fileInputRef.current.files.length) {
            handleFiles(fileInputRef.current.files);
        }
    }


    return (
        <div className="container">
            <div className="drop-container" onClick={fileInputClicked} onDragOver={dragOver} onDragEnter={dragEnter} onDragLeave={dragLeave} onDrop={fileDrop}>
                <div className={`file-display-container ${selectedFiles.length ? '' : 'hidden-message'}`}>
                    {

                        // validFiles.map((data, i) => {
                        selectedFiles.map((data, i) =>
                            <div className="file-status-bar" key={i}>
                                <div>
                                    <div className="file-type-logo"></div>
                                    <div className="file-type">{fileType(data.name)}</div>
                                    <span className={`file-name ${data.invalid ? 'file-error' : ''}`}>{data.name}</span>
                                    <span className="file-size">({fileSize(data.size)})</span> {data.invalid && <span className='file-error-message'>({errorMessage})</span>}
                                </div>
                                <div className="file-remove" onClick={(e) => removeFile(data.name,e)}>X</div>
                            </div>
                        )
                        //  }
                        // )
                    }
                </div>
                <div className={selectedFiles.length ? 'drop-message hidden-message' : 'drop-message'}>
                    <div className="upload-icon"></div>
                    Drag & Drop files here or click to check
                </div>
                <input ref={fileInputRef} className="file-input" type="file" multiple onChange={filesSelected}/>
            </div>
        </div>
    );
}

export default DropZone;