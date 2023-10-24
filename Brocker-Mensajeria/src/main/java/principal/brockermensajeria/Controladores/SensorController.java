package principal.brockermensajeria.Controladores;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import principal.brockermensajeria.servicio.SensorData;

@Controller
public class SensorController {

    @MessageMapping("/sensores")
    @SendTo("/topic/actualizacionSensores")
    public SensorData actualizarSensores(SensorData data) {
        // Procesa los datos y guárdalos si es necesario
        return data;
    }
}