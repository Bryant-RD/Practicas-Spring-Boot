package backend.pixel_picture;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import backend.pixel_picture.Entidades.Usuario;
import backend.pixel_picture.Repositorios.UserRepository;

@Component
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;

    @Override
    public void run(String... args) throws Exception {
        // Verificar si el usuario administrador ya existe
        if (!userRepository.existsById((long) 0)) {
            // Crear el usuario administrador si no existe
            Usuario adminUser = new Usuario(0, "admin", "admin", "admin123", null, "ADMIN");
            userRepository.save(adminUser);
            System.out.println("Usuario administrador creado con éxito.");
        } else {
            System.out.println("El usuario administrador ya existe.");
        }

        // Verificar si el usuario empleado ya existe
        if (!userRepository.existsById((long) 1)) {
            // Crear el usuario empleado si no existe
            Usuario empleadoUser = new Usuario(1, "Juan Pérez", "juan", "employ123", "robarop622@vasteron.com", "EMPLEADO");
            userRepository.save(empleadoUser);
            System.out.println("Usuario empleado creado con éxito.");
        } else {
            System.out.println("El usuario empleado ya existe.");
        }
    }
}
