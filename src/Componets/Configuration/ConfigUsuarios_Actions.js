import Axios from 'axios';

const format = require('../JSON_Scripts/JSON_Formats');
const port = 'http://localhost:3001'

export const handleUsuariosChange  = async (id, data, flag) =>{
    if (flag === 'add' ){
        console.log("usuario:", data.usuario);
        console.log("password: ", data.contraseña);
        await Axios.post(port + '/api/usuarios', format.USUARIO_POST(data.usuario, data.contraseña))
        .then(res => res.json)
        .catch(error => console.error('Error: ', error))
        .then(response => console.log('Succes: ', response))

    }else if (flag === 'update'){
        console.log("nombre usuario:", id)
        await Axios.put(port + '/api/usuarios/'+id, format.USUARIO_PUT(data.usario, data.contraseña))
        .then(res => res.json)
        .catch(error => console.error('Error: ', error))
        .then(response => console.log(': ', response))

    }else if (flag === 'delete' ){
        console.log("nombre usuario:", id)
        await Axios.delete(port + '/api/usuarios/'+id)
        .then(res => res.json)
        .catch(error => console.error('Error: ', error))
        .then(response => console.log('Succes: ', response))
    }
    
}
