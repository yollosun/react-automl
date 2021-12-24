import React from 'react'
import { useEffect, useContext, useState } from "react"
import api from '../api';
import { Context } from '../UseContext'


function AutoMl() {
    const context = useContext(Context)
    let token = localStorage.JWT
    const [columns, setColumns] = useState()
    const [fileGraph, setFileGraph] = useState()
    const [targetValue, setTargetValue] = useState()
    useEffect(() => {
        api
            .get("/app/upload/", {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `JWT ${token}`
                }
            })
            .then((res) => {
                context.fileList.setFiles(res.data)
                // setFiles(res.data);
                // console.log(files)
            });
    }, [])
    function chooseFile(event) {
        event.preventDefault()
        const data = {
            name: fileGraph
        }
        api
            .post("/app/showfile/", data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `JWT ${token}`
                }
            })
            .then((res) => {
                setColumns(res.data)
            })
            .catch((e) => console.log(e));

    }
    return (
        <div>
            <div className='wrapper'>
                <div className='model_learn'>
                    <h1>Обучите модель</h1>
                    <h3>Выберите файл</h3>
                    <select name="chosen_file" id="chosen_file" onChange={(e) => { setFileGraph(e.target.value) }}>
                        {context.fileList.files && context.fileList.files.map((el) => {
                            return (
                                <option key={el.id}>{el.name}</option>)
                        })}
                    </select>
                    <button onClick={chooseFile}>Выбрать данный файл</button>
                    {
                        columns &&
                        <div>
                            <h3>Выберите целевую переменную</h3>
                            <select name="target_value" id="target_value" onChange={(e) => { setTargetValue(e.target.value) }}>

                                {columns && columns.map(el => {
                                    return (
                                        <option key={el}>{el}</option>)
                                })}
                            </select>
                        </div>
                    }
                </div>
                <div className='model_predict'>
                    <h1>Получите результаты - Predict</h1>
                </div>
            </div>
        </div>
    )
}

export default AutoMl
