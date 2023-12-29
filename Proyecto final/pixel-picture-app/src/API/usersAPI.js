import { setToken } from "./auth";

const url = process.env.REACT_APP_API_URL;
// import { getToken } from "./auth";

const getToken = localStorage.getItem('JWT');
export const loginUser = async (usuario, contrasena) => {

    let obj = {
        userName: usuario,
        password: contrasena
    }
    console.log(obj);
    try {
        const response = await fetch(`${url}/auth/`, {
            method: "POST",
            body: JSON.stringify(obj),
            headers: {
                'Content-type': 'application/json',
            }
        });

        if (response.ok) {
            const data = await response.json();
            setToken(data.token);
            switchView(await getUserByUsername(obj.userName))
            return data;
        } else {
            throw new Error('Error en la solicitud');
        }


    } catch (error) {
        console.log(error);
    }
}

export const getUsers = async () => {
    try {  
      const response = await fetch(url + '/user/', {
        headers: {
          'Authorization': `Bearer ${getToken}`,
          'Content-Type': 'application/json',
        },
      });
  
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

export const getUserById = async (id) => {
    try {
        const response = await fetch(`${url}/user/${id}`)
        const data = await response.json();
        return data

    } catch (error) {
        console.log(error);
    }
}

export const getUserByUsername = async (id) => {
    try {
        const response = await fetch(`${url}/user/hola/${id}`)
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


const switchView = (obj) => {

    console.log(obj.rol);

    switch (obj.rol) {
        case 'ADMIN':
            console.log("el rol ad admin");
            window.location.href = "/homeAdmin"
            break;

        case 'client':
            window.location.href = "/homeClient"
            break;
        
        case 'employeer':
            window.location.href = "/EmployeeDashboard"
            break;
    
        default:
            break;
    }
}