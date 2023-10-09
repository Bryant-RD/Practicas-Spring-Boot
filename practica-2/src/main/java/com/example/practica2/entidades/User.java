package com.example.practica2.entidades;

import jakarta.persistence.*;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    private String apellido;
    private String usuario;
    private String contrasena;
    private boolean rol;

    // Constructores, getters y setters

    public User() {
        // Constructor vacío necesario para JPA
    }

    public User(Long id, String nombre, String apellido, String usuario, String contrasena, boolean rol) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.usuario = usuario;
        this.contrasena = contrasena;
        this.rol = rol;
    }

    public void setRol(boolean rol) {
        this.rol = rol;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public void setContrasena(String contrasena) {
        this.contrasena = contrasena;
    }

    public String getUsuario() {
        return usuario;
    }

    public String getContrasena() {
        return contrasena;
    }

    public Long getId() {
        return id;
    }
}
