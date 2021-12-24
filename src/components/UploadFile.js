import React from 'react'
import { useState } from 'react'
import api from '../api';

function UploadFile() {
    const [file, setFile] = useState()

    function sendFile(event) {
        event.preventDefault()
        const data = new FormData();
        let token = localStorage.JWT
        file && data.append('file', file[0])
        api
            .post("/app/upload/", data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `JWT ${token}`
                }
            })
            .then((res) => {
                console.log("file uploaded")
            })
            .catch((e) => console.log(e));

    };
    return (
        <div>
            <form >
                <input type="file" name='myFile' onChange={(e) => { setFile(e.target.files) }} />
                <input type="submit" name='submit' onClick={sendFile} value="Загрузить файл" />
            </form>
        </div>
    )
}

export default UploadFile
