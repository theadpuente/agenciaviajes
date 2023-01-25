const getClients = () => {

    return db.query('SELECT * FROM clientes')

}


const getClientsbyId = (clientId) => {

    return db.query('select * from clientes where id = ?', [clientId]);
}


const createClients = ({ nombre, apellidos, direccion, telefono, fecha_nacimiento, email, dni }) => {

    return db.query('insert into clientes (nombre, apellidos, direccion, telefono, fecha_nacimiento, email, dni) values (?, ?, ?, ?, ?, ?, ?)', [nombre, apellidos, direccion, telefono, fecha_nacimiento, email, dni])

};


const updateClientsbyId = (clientId, { nombre, apellidos, direccion, telefono, fecha_nacimiento, email, dni }) => {

    return db.query(' update clientes set nombre = ?, apellidos = ?, direccion = ?, telefono = ?, fecha_nacimiento = ?, email = ?, dni = ? where id = ?', [nombre, apellidos, direccion, telefono, fecha_nacimiento, email, dni, clientId])

}

const deleteClientbyId = (clientId) => {

    return db.query('DELETE FROM clientes WHERE id = ?', [clientId])

}





module.exports = {

    getClients, getClientsbyId, createClients, updateClientsbyId, deleteClientbyId
}