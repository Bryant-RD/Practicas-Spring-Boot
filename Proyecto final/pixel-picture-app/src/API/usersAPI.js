const url = process.env.REACT_APP_API_URL;

export const loginUser = async (usuario, contrasena) => {

    try {
        const response = await fetch(`http://localhost:8080/api/estudiante/login?usuario=${usuario}&contrasena=${contrasena}`)
        return response;
    } catch (error) {
        console.error(error)
    }
}

export const getUsers = async () => {
    try {
        const response = await fetch(url + '/user/');
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export const getUserById = async (id) => {
    try {
        const response = await fetch(`${url}/user/${id}`)
        const data = await response.json();
        return data

    } catch (error) {
        console.log(error);
    }
}

export const createUser = async (user) => {

    try {
        const response = await fetch(`${url}/user/new`, {
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

export const deleteUserById = async (id) => {
    try {
        const response = await fetch(`${url}/user/${id}`, {
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

export const updateUserById = async (obj) => {

    try {
        const response = await fetch(`${url}/user/`, {
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