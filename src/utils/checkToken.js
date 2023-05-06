import jwtDecode from 'jwt-decode';
export default function checkToken(){
    const token = localStorage.getItem('access_token')
    if(!token){
        return '';
    }
    const decodeToken =  jwtDecode(token);
    // "и" базовая проверка на существование объекта и переменной в этом объекте
    if (new Date() > new Date(decodeToken && decodeToken.exp || '')){
        return token
    }
    return ''
}