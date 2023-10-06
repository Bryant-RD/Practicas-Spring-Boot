package com.example.practica2.repo;

import com.example.practica2.entidades.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsuarioRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsuario(String usuario);
}