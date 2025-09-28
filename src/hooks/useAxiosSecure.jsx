// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import useAuth from "./useAuth";

//  const axiosSecure =axios.create({
//     baseURL:'http://localhost:5001'
// })

// const useAxiosSecure = () => {
//     const navigate = useNavigate();
//     const {logOut} = useAuth();
//     axiosSecure.interceptors.request.use(function(config){
//         const token = localStorage.getItem('access-token')
//         // console.log('request stoped by interceptors' ,token)
//         config.headers.authorization = `Bearer ${token}`;
//         return config
//     }, function (error){
//         return Promise.reject(error);
//     });

//     axiosSecure.interceptors.response.use(function(response){
//        return response;
//     } ,async (error) =>{
//         const status =  error.response.status;
//         console.log('status code error' , status);
//         if(status === 401 || status === 403){ 
//             await logOut();
//             navigate('/login')
//         }
//         return Promise.reject(error);
//     })

//     return axiosSecure;
// };

// export default useAxiosSecure;


import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5001'
});

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOut } = useAuth();

    axiosSecure.interceptors.request.use(
        (config) => {
            const token = localStorage.getItem('access-token');
            config.headers.authorization = `Bearer ${token}`;
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    axiosSecure.interceptors.response.use(
        (response) => {
            return response;
        },
        async (error) => {
            if (error.response) {
                const status = error.response.status;
                console.log('status code error', status);
                if (status === 401 || status === 403) { 
                    await logOut();
                    navigate('/login');
                }
            } else {
                console.error("Error without a response:", error);
            }
            return Promise.reject(error);
        }
    );

    return axiosSecure;
};

export default useAxiosSecure;
