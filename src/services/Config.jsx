import axios from "axios";
import { userLocalStorage } from "./LocalService";

export const https = axios.create(
    {
        baseURL: 'https://elearningnew.cybersoft.edu.vn',
        headers:{
            tokenCybersoft: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0NCIsIkhldEhhblN0cmluZyI6IjIzLzEyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTcwMzI4OTYwMDAwMCIsIm5iZiI6MTY3MjQxOTYwMCwiZXhwIjoxNzAzNDM3MjAwfQ.sBEpBy6NEqrSq0edQmAlMTJtoOz9ZG_Dam5-tGYZG5M',
            Authorization: "Bearer " + userLocalStorage.get()?.accessToken, 
        }
    }
)