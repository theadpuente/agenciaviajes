const getTrips = () => {

    return db.query(' SELECT v.id, v.fecha_salida, v.fecha_vuelta, v.ident_ida, v.ident_vuelta, h.nombre as "Hotel", c.nombre as "Cliente" from appviajes.viajes as v, appviajes.hoteles as h, appviajes.clientes as c, appviajes.clientes_has_viajes as chv where v.hoteles_id = h.id AND chv.clientes_id = c.id AND chv.viajes_id = v.id; ')

}


const getTripsbyId = (tripId) => {

    return db.query('select * from viajes where id = ?', [tripId]);
}


const createTrip = ({ fecha_salida, fecha_vuelta, ident_ida, ident_vuelta, hoteles_id }) => {

    return db.query(' insert into viajes (fecha_salida, fecha_vuelta, ident_ida, ident_vuelta, hoteles_id) values (?, ?, ?, ?, ?)', [fecha_salida, fecha_vuelta, ident_ida, ident_vuelta, hoteles_id])

};



const updateTripbyId = (tripId, { fecha_salida, fecha_vuelta, ident_ida, ident_vuelta, hoteles_id }) => {

    return db.query(' update viajes set fecha_salida = ?, fecha_vuelta = ?, ident_ida = ?, ident_vuelta = ?, hoteles_id = ? where id = ? ', [fecha_salida, fecha_vuelta, ident_ida, ident_vuelta, hoteles_id, tripId])

}

const deleteTripbyId = (tripId) => {

    return db.query('DELETE FROM viajes WHERE id = ?', [tripId])

}








module.exports = {

    getTrips, getTripsbyId, createTrip, updateTripbyId, deleteTripbyId

}

