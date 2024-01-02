package backend.pixel_picture.entidades;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Compra implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    private String factura;
    private String transaccion;
    private String estatusPago;

    private BigDecimal montoCompra;
    private BigDecimal montoFee;
    private BigDecimal montoEnvio;
    private BigDecimal montoManejo;

    private String compradorId;
    private String emailComprador;
    private Date fechaCompra;
    private String vendedor;

    private String direccion;
    private String zip;
    private String estado;
    private String ciudad;
}
