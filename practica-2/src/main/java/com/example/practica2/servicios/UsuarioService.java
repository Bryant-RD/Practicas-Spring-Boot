package com.example.practica2.servicios;

import com.example.practica2.entidades.User;
import com.example.practica2.repo.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService {

    private final UsuarioRepository usuarioRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UsuarioService(UsuarioRepository usuarioRepository, PasswordEncoder passwordEncoder) {
        this.usuarioRepository = usuarioRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public void registrarUsuario(User usuario) {
        // Verificar si el usuario ya existe por su nombre de usuario
        if (usuarioRepository.findByUsuario(usuario.getUsuario()).isPresent()) {
            throw new IllegalArgumentException("El nombre de usuario ya está en uso.");
        }
        // Hashear la contraseña antes de almacenarla
        String contrasenaHasheada = passwordEncoder.encode(usuario.getContrasena());
        usuario.setContrasena(contrasenaHasheada);

        // Puedes realizar otras configuraciones o validaciones antes de guardar el usuario
        usuarioRepository.save(usuario);
    }

    public void modificarUsuario(User usuario) {
        // Verificar si el usuario existe por su ID
        if (!usuarioRepository.existsById(usuario.getId())) {
            throw new IllegalArgumentException("El usuario no existe.");
        }
        // Hashear la nueva contraseña antes de almacenarla
        String contrasenaHasheada = passwordEncoder.encode(usuario.getContrasena());
        usuario.setContrasena(contrasenaHasheada);

        // Puedes realizar otras configuraciones o validaciones antes de guardar los cambios
        usuarioRepository.save(usuario);
    }

    public void eliminarUsuario(Long id) {
        // Verificar si el usuario existe por su ID
        if (!usuarioRepository.existsById(id)) {
            throw new IllegalArgumentException("El usuario no existe.");
        }
        // Si existe, eliminar al usuario por su ID
        usuarioRepository.deleteById(id);
    }
}

