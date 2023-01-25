const getHotels = () => {

    return db.query('SELECT * FROM hoteles')

}


const getHotelsbyId = (hotelId) => {

    return db.query('select * from hoteles where id = ?', [hotelId]);
}


const createHotel = ({ nombre, apellidos, direccion, telefono, fecha_nacimiento, email, dni }) => {

    return db.query('insert into hoteles (nombre, apellidos, direccion, telefono, fecha_nacimiento, email, dni) values (?, ?, ?, ?, ?, ?, ?)', [nombre, apellidos, direccion, telefono, fecha_nacimiento, email, dni])

};


const updateHotelsbyId = (clientId, { nombre, apellidos, direccion, telefono, fecha_nacimiento, email, dni }) => {

    return db.query(' update clientes set nombre = ?, apellidos = ?, direccion = ?, telefono = ?, fecha_nacimiento = ?, email = ?, dni = ? where id = ?', [nombre, apellidos, direccion, telefono, fecha_nacimiento, email, dni, clientId])

}

const deleteHotelsbyId = (hotelId) => {

    return db.query('DELETE FROM hoteles WHERE id = ?', [hotelId])

}





module.exports = {

    getHotels, getHotelsbyId, createHotel, updateHotelsbyId, deleteHotelsbyId

}