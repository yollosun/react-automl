import React, { useState, useEffect, useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import api from '../api';
import chart from '../media/img/chart.png'
import '../styles/charts.css'
import { Context } from '../UseContext'
import ScrGraph from './ScrGraph';




function Charts() {
    const [columns, setColumns] = useState()
    const [fileGraph, setFileGraph] = useState()
    const [typeG, setTypeG] = useState('scatter');
    const [x, setX] = useState()
    const [y, setY] = useState()
    const [dataFrame, setDataFrame] = useState()
    const context = useContext(Context)
    const navigate = useNavigate();
    let token = localStorage.JWT

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

    async function buildGraph(event) {
        event.preventDefault()
        const data = {
            name: fileGraph,
            x: x,
            y: y,
            type: typeG
        }
        try {
            await api.post("/app/graph/", data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `JWT ${token}`
                }
            })

            let df = await api.get("/app/graph/", {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `JWT ${token}`
                }
            })
            console.log(df.data)
            setDataFrame(df.data)

        } catch (error) {
            console.log(error)
        }
    }

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
        <div className="charts-wrapper">
            <div className='wrapper'>
                <div className="charts">
                    <div className='charts-text'>
                        <h1>Create a chart</h1>
                        <img src={chart} alt="chart" />
                    </div>
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
                            <h3>Выберите x</h3>
                            <select name="x" id="x" onChange={(e) => { setX(e.target.value) }}>

                                {columns && columns.map(el => {
                                    return (
                                        <option key={el}>{el}</option>)
                                })}
                            </select>
                            <h3>Выберите y</h3>
                            <select name="y" id="y" onChange={(e) => { setY(e.target.value) }}>
                                {columns && columns.map(el => {
                                    return (
                                        <option key={el}>{el}</option>)
                                })}
                            </select>
                        </div>
                    }

                    <h2>Choose type of chart</h2>
                    <select name="typeOfChart"
                        id="typeOfChart"
                        onChange={(e) => { setTypeG(e.target.value) }}>
                        <option>dot_plot</option>
                        <option>scatter</option>
                        <option>line</option>
                        <option>log_plot</option>
                        <option>bar</option>
                    </select>
                    <button onClick={buildGraph}>Построить график</button>
                </div>


                {dataFrame && <ScrGraph data={dataFrame} />}
                {/* 
                {dataFrame &&
                    <div dangerouslySetInnerHTML={{ __html: dataFrame }}></div>} */}

            </div>
        </div>
    )
}

export default Charts


// async function buildGraph(event) {
    //     event.preventDefault()
    //     const data = {
    //         name: fileGraph,
    //         x: x,
    //         y: y,
    //         type: typeG
    //     }
    //     await api
    //         .post("/app/graph/", data, {
    //             headers: {
    //                 "Content-Type": "multipart/form-data",
    //                 "Authorization": `JWT ${token}`
    //             }
    //         })
    //         .then((res) => {
    //             console.log("alright")
    //             // GetIframe()
    //         })
    //         .catch((e) => console.log(e));
    //     api
    //         .get("/app/graph/", {
    //             headers: {
    //                 "Content-Type": "multipart/form-data",
    //                 "Authorization": `JWT ${token}`
    //             }
    //         })
    //         .then((res) => {
    //             console.log(res)
    //             setDataFrame(res.data)
    //             // GetIframe()
    //         })
    //         .catch((e) => console.log(e));

    // }
