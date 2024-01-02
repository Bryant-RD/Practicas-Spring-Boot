package backend.pixel_picture.Controllers;

import backend.pixel_picture.entidades.Compra;
import backend.pixel_picture.Repositorios.CompraRepository;
import backend.pixel_picture.Repositorios.ParametroRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.logging.Logger;

@Controller
@RequestMapping(path = "/")
public class PagoController {

    private ParametroRepository parametroRepository;
    private CompraRepository compraRepository;
    private Logger logger = Logger.getLogger(PagoController.class.getName());

    public PagoController(ParametroRepository parametroRepository, CompraRepository compraRepository) {
        this.parametroRepository = parametroRepository;
        this.compraRepository = compraRepository;
    }

    // FALTAN LOS DETALLES DIAGASE(MONTO,DIRECCION, ETC...)
}
