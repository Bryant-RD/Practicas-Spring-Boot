package principal.brockermensajeria.Controladores;

import org.springframework.jms.core.JmsTemplate;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;
import java.util.Random;

@Component
public class SensorSimulator {

    private final JmsTemplate jmsTemplate;

    public SensorSimulator(JmsTemplate jmsTemplate) {
        this.jmsTemplate = jmsTemplate;
    }

    public void sendSensorData() {
        double temperatura = Math.random() * 30 + 10; // Valores aleatorios entre 10 y 40
        double humedad = Math.random() * 50 + 30; // Valores aleatorios entre 30 y 80

        int idDispositivo = new Random().nextInt(10) + 1;

        // Crear una trama JSON con los datos generados
        Map<String, Object> sensorData = new HashMap<>();
        sensorData.put("fechaGeneracion", "DD/MM/YYYY HH:mm:ss");
        sensorData.put("IdDispositivo", idDispositivo);
        sensorData.put("temperatura", temperatura);
        sensorData.put("humedad", humedad);

        // Enviar la trama JSON a la cola de distribución
        jmsTemplate.convertAndSend("notificacion_sensores", sensorData);
    }
}
