package backend.pixel_picture.Controllers;

import java.util.List;
import java.util.Optional;

import backend.pixel_picture.Entidades.Usuario;
import backend.pixel_picture.Repositorios.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    // Crear un Usuario
    @PostMapping("/new")
    public Usuario crearUsuario(@RequestBody Usuario usuario) {
        System.out.println("NEW USER" + usuario.getId());
        return userRepository.save(usuario);
    }

    // Leer todos los estudiantes
    @GetMapping("/")
    public List<Usuario> obtenerUsuario() {
        System.out.println("ENTRE LISTAR TODOS");
        return (List<Usuario>) userRepository.findAll();
    }

    // Leer un estudiante por matrícula
    @GetMapping("/{id}")
    public Optional<Usuario> obtenerUsuarioPorId(@PathVariable int code) {
        return userRepository.findById(code);
    }

    // Actualizar un estudiante
    @PutMapping("/{id}")
    public Usuario actualizarEstudiante(@PathVariable int code, @RequestBody Usuario usuarioActualizado) {
        usuarioActualizado.setId(code);
        return userRepository.save(usuarioActualizado);
    }

    // Eliminar un estudiante
    @DeleteMapping("/{id}")
    public void eliminarEstudiante(@PathVariable int code) {
        userRepository.deleteById(code);
    }

}