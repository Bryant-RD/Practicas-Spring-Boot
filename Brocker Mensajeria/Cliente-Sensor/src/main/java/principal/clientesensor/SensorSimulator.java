package principal.clientesensor;

import org.springframework.jms.core.JmsTemplate;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;
import java.util.Timer;
import java.util.TimerTask;

@Component
public class SensorSimulator {

    private final JmsTemplate jmsTemplate;
    private final long interval;

    public SensorSimulator(JmsTemplate jmsTemplate) {
        this.jmsTemplate = jmsTemplate;
        this.interval = 60000; // 1 minuto (60,000 milisegundos)
    }

    public void startSendingSensorData() {
        Timer timer = new Timer();
        timer.scheduleAtFixedRate(new TimerTask() {
            @Override
            public void run() {
                sendSensorData();
            }
        }, 0, interval);
    }

    private void sendSensorData() {
        double temperatura = Math.random() * 30 + 10; // Valores aleatorios entre 10 y 40
        double humedad = Math.random() * 50 + 30; // Valores aleatorios entre 30 y 80

        int idDispositivo = new Random().nextInt(10) + 1;
        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
        String fechaGeneracion = now.format(formatter);


        // Crear una trama JSON con los datos generados
        Map<String, Object> sensorData = new HashMap<>();
        sensorData.put("fechaGeneracion", fechaGeneracion);
        sensorData.put("IdDispositivo", idDispositivo);
        sensorData.put("temperatura", temperatura);
        sensorData.put("humedad", humedad);

        // Enviar la trama JSON a la cola de distribución
        jmsTemplate.convertAndSend("notificacion_sensores", sensorData);

        System.out.println("Datos Generados:");
        System.out.println("Fecha Generación: " + fechaGeneracion);
        System.out.println("ID Dispositivo: " + idDispositivo);
        System.out.println("Temperatura: " + temperatura);
        System.out.println("Humedad: " + humedad);
        System.out.println();
    }
}
