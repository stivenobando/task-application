import axios from "axios";

const instance = axios.create({
  baseURL: "https://localhost:5001",
});

instance.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJTdGl2ZW4iLCJqdGkiOiI3MWQ2ZTMwNy1iN2RlLTQ3ZTQtYTRmZC1kNzg4ZDg5ZmRiMjgiLCJleHAiOjE1OTMwMzQ2NzMsImlzcyI6InN0aXZlbm9iYW5kby5jb20iLCJhdWQiOiJzdGl2ZW5vYmFuZG8uY29tIn0.SJNjweJId60UpMz2_EDwlyAHuZdF8n7j2ot42cws-RQ";

instance.interceptors.request.use(
  (req) => {
    console.log(req);
    return req;
  },
  (error) => {
    console.log("error rq-> " + error);
    return Promise.reject(error);
  }
);

export default instance;
