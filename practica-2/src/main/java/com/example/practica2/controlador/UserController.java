package com.example.practica2.controlador;

import com.example.practica2.entidades.User;
import com.example.practica2.servicios.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/estudiante")
public class UserController {

    private final UsuarioService usuarioService;

    @Autowired
    public UserController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    @PostMapping("/registro")
    public ResponseEntity<String> registrarUsuario(@RequestBody User usuario) {
        try {
            usuarioService.registrarUsuario(usuario);
            return ResponseEntity.status(HttpStatus.CREATED).body("Usuario registrado con éxito.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error al registrar al usuario: " + e.getMessage());
        }
    }
}
