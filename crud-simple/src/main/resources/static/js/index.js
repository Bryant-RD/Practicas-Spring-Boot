document.addEventListener("DOMContentLoaded", function() {
    const crearEstudianteForm = document.getElementById("crearEstudianteForm");
    const listaEstudiantes = document.getElementById("listaEstudiantes");

    // Función para cargar la lista de estudiantes
    function cargarEstudiantes() {
        fetch("/estudiante/")
            .then(response => response.json())
            .then(estudiantes => {
                listaEstudiantes.innerHTML = "";
                estudiantes.forEach(estudiante => {
                    const li = document.createElement("li");
                    li.innerHTML = `

                        <p class="nombre"> ${estudiante.matricula} </p>
                        <p class="nombre">${estudiante.nombre} ${estudiante.apellido}</p>
                        <p class="nombre" >${estudiante.telefono}</p>
                        <a class="btnEditar" data-matricula="${estudiante.matricula}">Editar</a>
                        <a class="btnEliminar" data-matricula="${estudiante.matricula}">Eliminar</a>

                    `;
                    listaEstudiantes.appendChild(li);

                    const btnEditar = li.querySelector(".btnEditar");
                    const btnEliminar = li.querySelector(".btnEliminar");

                    btnEditar.addEventListener("click", () => editarEstudiante(estudiante));
                    btnEliminar.addEventListener("click", () => eliminarEstudiante(estudiante.matricula));
                });
            });
    }

    cargarEstudiantes();

    // Manejar el envío del formulario para crear un estudiante
    crearEstudianteForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const matricula = document.getElementById("matricula").value;
        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const telefono = document.getElementById("telefono").value;

        const nuevoEstudiante = {
            matricula: matricula,
            nombre: nombre,
            apellido: apellido,
            telefono: telefono
        };

        console.log(nuevoEstudiante)

        fetch("/estudiante/new", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(nuevoEstudiante)
        })
            .then(response => response.json())
            .then(() => {
                cargarEstudiantes();
                crearEstudianteForm.reset();
            });
    });


    function editarEstudiante(estudiante) {
        console.log(estudiante);
        const nuevoNombre = prompt("Nuevo nombre:", estudiante.nombre);
        const nuevoApellido = prompt("Nuevo apellido:", estudiante.apellido);
        const nuevoTelefono = prompt("Nuevo teléfono:", estudiante.telefono);

        if (nuevoNombre !== null && nuevoApellido !== null && nuevoTelefono !== null) {
            const estudianteActualizado = {
                matricula: estudiante.matricula,
                nombre: nuevoNombre,
                apellido: nuevoApellido,
                telefono: nuevoTelefono
            };

            fetch(`/estudiante/${estudiante.matricula}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(estudianteActualizado)
            })
            .then(() => {
                cargarEstudiantes();
            });
        }
    }

    // Función para eliminar un estudiante
    function eliminarEstudiante(matricula) {
        if (confirm("¿Estás seguro de que deseas eliminar este estudiante?")) {
            fetch(`/estudiante/${matricula}`, {
                method: "DELETE"
            })
            .then(() => {
                cargarEstudiantes();
            });
        }
    }
});
