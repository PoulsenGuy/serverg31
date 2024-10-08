// Llamada a la bd

const getAllContacts = async(req, res) => {
    try {
        // Funcion que accede a la BD

        res.status(200).send({
            status: "OK",
            message: "Obtenido correctamente",
            data: [
                {"nombre":"Jose", "numero": 99999993039},
                {"nombre":"Juan", "numero": 99999993032},
                {"nombre":"tumtum", "numero": 99999993029}
            ]
        })
    }   catch (error) {
        console.log(error)
        req.status(400).send({
            status: "NO SE OBTUVIERON CONTACTOS",
            message : "HUBO UN PROBLEMA PARA CONSEGUIR CONTACTOS",
            error:error
        })
        }

}

const createContact = async (req, res) => {
    try {
        console.log(req.body)
        //destructuracion
        const {nombre, numero} = req.body
        console.log(nombre,numero)

        res.status(201).send({
            status: "se creo correctamente",
            message: "Contacto creado correctamente"
    })
    } catch (error) {
        console.log(error)
        res.status(400).send({
            status: "No se creo el contacto",
            message: "Contacto no creado",
            error: error
        })
    }
}

const getContact = async(req, res) => {
    try {
        // EJECUTA ALGUNA FUNCION
        console.log(req.params)
        // Destructuracion
        const {id} = req.params
        console.log(id)

        res.status(200).send({
            status: "OBTENIDO CORRECTAMENTE",
            message: "CONTACTO RECIBIDO",
            data: { "nombre": "Jose", "numero": 9989898938 }
        })
    } catch (error) {
        console.log(error)
        res.status(400).send({
            status: "NO EXISTE EL CONTACTO",
            message: "Contacto inexistente",
            error: error
        })
    }
}

const findContact = async(req, res) => {
    try {
        // Funcion que conecta a la BD
        console.log(req.query)
        res.status(200).send({
            status: "Contactos encontrados",
            message: "todos los contacto han sido encontrados",
            data:[
                {"nombre": "Piolin","numero": 9090909090},
                {"nombre": "pirulin","numero": 9090919090},
                {"nombre": "Piter","numero": 9190909090},
            ]
        })
    } catch (error) {
        console.log(error)
        res.status(400).send({
            status: "NO SE ENCONTRO NINGUN CONTACO",
            message: "NO SE ENCONTRARON CONTACTOS",
            error: error
        })
    }
}

module.exports = {
    createContact,
    getContact,
    findContact,
    getAllContacts
}