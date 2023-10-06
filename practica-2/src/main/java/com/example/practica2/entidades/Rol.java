package com.example.practica2.entidades;

import jakarta.persistence.*;
import java.util.Set;

@Entity
public class Rol {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;

    @ManyToMany(mappedBy = "roles")
    private Set<User> usuarios;

    // Getters y setters
}
