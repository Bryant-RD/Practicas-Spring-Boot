const url = process.env.REACT_APP_API_URL;

export const getServices = async () => {
    try {  
      const response = await fetch(url + '/servicio/');
  
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

export const getServiceById = async (id) => {
    try {
        const response = await fetch(`${url}/servicio/${id}`)
        const data = await response.json();
        return data

    } catch (error) {
        console.log(error);
    }
}


export const createService = async (service) => {

    service.id = Date.now();

    try {
        const response = await fetch(`${url}/servicio/new`, {
            method: "POST",
            body: JSON.stringify(service),
            headers: {
                'Content-type': 'application/json'
            }
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            return data;
        } else {
            throw new Error('Error en la solicitud');
        }


    } catch (error) {
        console.log(error);
    }
}

export const deleteServiceById = async (code) => {
    try {
        const response = await fetch(`${url}/servicio/${code}`, {
            method: "DELETE",
            headers: {
                'Content-type': 'application/json'
            }
        });

        if (response.ok) {
            alert("usuario eliminado correctamente.");
        } else {
            console.log("HTTP request unsuccessful");
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }

}

export const updateServiceById = async (obj) => {

    try {
        const response = await fetch(`${url}/servicio/`, {
            method: "PUT",
            body: JSON.stringify(obj),
            headers: {
                'Content-type': 'application/json'
            }
        });

        if (response.ok) {
            alert("Articulo editado correctamente.");
        } else {
            console.log("HTTP request unsuccessful");
        }

        const data = await response.json();
        return data
    } catch (error) {
        console.log(error);
    }
}