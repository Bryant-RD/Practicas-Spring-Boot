package backend.pixel_picture.Repositorios;

import backend.pixel_picture.Entidades.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<Usuario, Integer> {
    Usuario findByUserName(String userName);
}
