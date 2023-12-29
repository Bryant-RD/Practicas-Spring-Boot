package backend.pixel_picture.Controllers;

import backend.pixel_picture.Entidades.EncargoFotografia;
import backend.pixel_picture.Repositorios.EncargoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/servicio")
public class EncargoController {

    @Autowired
    private EncargoRepository encargoRepository;

    // Crear un Usuario
    @PostMapping("/new")
    public EncargoFotografia crearEncargo(@RequestBody EncargoFotografia encargo) {
        System.out.println("NEW Encargo" + encargo.getId());
        return encargoRepository.save(encargo);
    }

    // Leer todos los estudiantes
    @GetMapping("/")
    public List<EncargoFotografia> obtenerEncargos() {
        System.out.println("ENTRE LISTAR TODOS");
        return (List<EncargoFotografia>) encargoRepository.findAll();
    }

    // Leer un estudiante por matrícula
    @GetMapping("/{id}")
    public Optional<EncargoFotografia> obtenerEncargoPorId(@PathVariable int code) {
        return encargoRepository.findById(code);
    }

    // Actualizar un estudiante
    @PutMapping("/{id}")
    public EncargoFotografia actualizarEncargo(@PathVariable int code, @RequestBody EncargoFotografia encargoActualizado) {
        encargoActualizado.setId(code);
        return encargoRepository.save(encargoActualizado);
    }

    // Eliminar un estudiante
    @DeleteMapping("/{id}")
    public void eliminarEncargo(@PathVariable int code) {
        encargoRepository.deleteById(code);
    }
}
