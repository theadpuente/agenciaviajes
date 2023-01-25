const getHotels = () => {

    return db.query('SELECT * FROM hoteles')

}


const getHotelsbyId = (hotelId) => {

    return db.query('select * from hoteles where id = ?', [hotelId]);
}


const createHotel = ({ nombre, direccion, ciudad, estrellas, descripcion, tarifa }) => {

    return db.query('insert into hoteles (nombre, direccion, ciudad, estrellas, descripcion, tarifa) values (?, ?, ?, ?, ?, ?)', [nombre, direccion, ciudad, estrellas, descripcion, tarifa])

};


const updateHotelsbyId = (hotelId, { nombre, direccion, ciudad, estrellas, descripcion, tarifa }) => {

    return db.query(' update hoteles set nombre = ?, direccion = ?, ciudad = ?, estrellas = ?, descripcion = ?, tarifa = ? where id = ? ', [nombre, direccion, ciudad, estrellas, descripcion, tarifa, hotelId])

}

const deleteHotelsbyId = (hotelId) => {

    return db.query('DELETE FROM hoteles WHERE id = ?', [hotelId])

}





module.exports = {

    getHotels, getHotelsbyId, createHotel, updateHotelsbyId, deleteHotelsbyId

}