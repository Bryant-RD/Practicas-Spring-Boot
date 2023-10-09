export const getEndPoints = async () => {
    try {
        const response = await fetch('http://localhost:8080/api/endpoint/');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export const getEndPointById = async (id) => {
    try {
        const response = await fetch(`http://localhost:8080/api/endpoint/${id}`)
        const data = await response.json();
        return data

    } catch (error) {
        console.log(error);
    }
}

export const createEndPoint = async (user) => {

    try {
        const response = await fetch(`http://localhost:8080/api/endpoint/`, {
            method: "POST",
            body: JSON.stringify(user),
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

export const deleteEndPointById = async (id) => {
    try {
        const response = await fetch(`http://localhost:8080/api/endpoint/${id}`, {
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

export const updateEndPointById = async (obj) => {

    try {
        const response = await fetch(`http://localhost:8080/api/endpoint/`, {
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