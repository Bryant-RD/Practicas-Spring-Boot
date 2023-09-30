package com.example.crudsimple.Controladores;

import com.example.crudsimple.Entidades.Estudiante;
import com.example.crudsimple.Repositorios.EstudianteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/estudiante")
public class EstudianteController {

    @Autowired
    private EstudianteRepository estudianteRepository;

    // Crear un estudiante
    @PostMapping("/new")
    public Estudiante crearEstudiante(@RequestBody Estudiante estudiante) {
        System.out.println("NEW USER" + estudiante.getMatricula());
        return estudianteRepository.save(estudiante);
    }

    // Leer todos los estudiantes
    @GetMapping("/")
    public List<Estudiante> obtenerEstudiantes() {
        System.out.println("ENTRE LISTAR TODOS");
        return (List<Estudiante>) estudianteRepository.findAll();
    }

    // Leer un estudiante por matrícula
    @GetMapping("/{matricula}")
    public Optional<Estudiante> obtenerEstudiantePorMatricula(@PathVariable int matricula) {
        return estudianteRepository.findById(matricula);
    }

    // Actualizar un estudiante
    @PutMapping("/{matricula}")
    public Estudiante actualizarEstudiante(@PathVariable int matricula, @RequestBody Estudiante estudianteActualizado) {
        estudianteActualizado.setMatricula(matricula);
        return estudianteRepository.save(estudianteActualizado);
    }

    // Eliminar un estudiante
    @DeleteMapping("/{matricula}")
    public void eliminarEstudiante(@PathVariable int matricula) {
        estudianteRepository.deleteById(matricula);
    }

}
