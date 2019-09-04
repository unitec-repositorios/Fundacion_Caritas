const format = require('../JSON_Scripts/JSON_Formats');
const port = 'http://localhost:3001'

export const handleMunicipiosChange  = (id, data, flag) =>{
    if (flag === 'add'){
        console.log('data: ', data.nombre)
        fetch(port + '/api/municipio', {
            method: 'POST',
            body: JSON.stringify(format.MUNICIPIO_POST_Y_PUT(data.nombre)),
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
             },
           
        }).then(res => res.json)
        .catch(error => console.error('Error: ', error))
        .then(response => console.log('Succes: ', response))

    }else if (flag === 'update'){

        console.log('data:', data.nombre);
        console.log('id: ', id);
        fetch(port + '/api/municipio/'+id, {
            method: 'PUT',
            body: JSON.stringify(format.MUNICIPIO_POST_Y_PUT(data.nombre)),
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json' 
            },
        
        }).then(res => res.json)
        .catch(error => console.error('Error: ', error))
        .then(response => console.log(': ', response))

    }else if (flag === 'delete' ){
        console.log('id delete: ', id);
        fetch(port + '/api/municipio/'+id, {
            method: 'DELETE',
            headers:{
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json' 
             },
        }).then(res => res.json)
        .catch(error => console.error('Error: ', error))
        .then(response => console.log('Succes: ', response))
    }
    
}

export const handleChangeOcupacion = (id, data, flag) => {
    if (flag === 'add'){
        console.log('data: ', data.tipo)
        fetch(port + '/api/estadoocupacion', {
            method: 'POST',
            body: JSON.stringify(format.ESTADO_OCUPACION_POST_Y_PUT(data.tipo)),
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
             },
           
        }).then(res => res.json)
        .catch(error => console.error('Error: ', error))
        .then(response => console.log('Succes: ', response))

    }else if (flag === 'update'){

        console.log('data:', data.tipo);
        console.log('id: ', id);
        fetch(port + '/api/estadoocupacion/' +id, {
            method: 'PUT',
            body: JSON.stringify(format.ESTADO_OCUPACION_POST_Y_PUT(data.tipo)),
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json' 
            },
        
        }).then(res => res.json)
        .catch(error => console.error('Error: ', error))
        .then(response => console.log(': ', response))

    }else if (flag === 'delete' ){

        fetch(port + '/api/estadoocupacion/' +id, {
            method: 'DELETE',
            headers:{
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json' 
             },
        }).then(res => res.json)
        .catch(error => console.error('Error: ', error))
        .then(response => console.log('Succes: ', response))
    }
};

export const handleChangeEducacion = (id, data, flag) => {
    if (flag === 'add'){
        console.log('data: ', data.tipo)
        fetch(port + '/api/educacion', {
            method: 'POST',
            body: JSON.stringify(format.EDUCACION_POST_Y_PUT(data.tipo)),
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
             },
           
        }).then(res => res.json)
        .catch(error => console.error('Error: ', error))
        .then(response => console.log('Succes: ', response))

    }else if (flag === 'update'){

        console.log('data:', data.tipo);
        console.log('id: ', id);
        fetch(port + '/api/educacion/' +id, {
            method: 'PUT',
            body: JSON.stringify(format.EDUCACION_POST_Y_PUT(data.tipo)),
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json' 
            },
        
        }).then(res => res.json)
        .catch(error => console.error('Error: ', error))
        .then(response => console.log(': ', response))

    }else if (flag === 'delete' ){

        fetch(port + '/api/educacion/' +id, {
            method: 'DELETE',
            headers:{
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json' 
             },
        }).then(res => res.json)
        .catch(error => console.error('Error: ', error))
        .then(response => console.log('Succes: ', response))
    }
};
