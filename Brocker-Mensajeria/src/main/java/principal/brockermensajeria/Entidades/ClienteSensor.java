package principal.brockermensajeria.Entidades;

import org.springframework.jms.core.JmsTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class ClienteSensor {

    @Autowired
    private JmsTemplate jmsTemplate;

    @Scheduled(fixedRate = 60000) // Simular lectura cada minuto
    public void enviarDatosSensor() {
        // Generar datos aleatorios de temperatura y humedad
        double temperatura = Math.random() * 100;
        double humedad = Math.random() * 100;

        // Crear trama JSON
        String tramaJSON = "{\"fechaGeneracion\": \"" + obtenerFechaActual() + "\", \"IdDispositivo\": 1, \"temperatura\": " + temperatura + ", \"humedad\": " + humedad + "}";

        // Enviar trama a la cola
        jmsTemplate.convertAndSend("notificacion_sensores", tramaJSON);
    }

    private String obtenerFechaActual() {
        // Lógica para obtener la fecha actual en el formato requerido
        return "DD/MM/YYYY HH:mm:ss";
    }
}
