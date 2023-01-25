
 
 
 SELECT v.id, v.fecha_salida, v.fecha_vuelta, v.ident_ida, v.ident_vuelta, h.nombre, c.nombre 
 from appviajes.viajes as v, appviajes.hoteles as h, appviajes.clientes as c, appviajes.clientes_has_viajes as chv where v.hoteles_id = h.id AND chv.clientes_id = c.id AND chv.viajes_id = v.id; 