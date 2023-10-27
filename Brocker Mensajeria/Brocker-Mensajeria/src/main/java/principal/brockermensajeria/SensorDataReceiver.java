package principal.brockermensajeria;

import org.springframework.jms.annotation.JmsListener;
import org.springframework.stereotype.Component;
import org.springframework.messaging.handler.annotation.Payload;

@Component
public class SensorDataReceiver {

    @JmsListener(destination = "notificacion_sensores", containerFactory = "jmsListenerContainerFactory")
    public void receiveSensorData(@Payload SensorData sensorData) {
        System.out.println("Received sensor data: " + sensorData);
        processSensorData(sensorData);
    }

    private void processSensorData(SensorData sensorData) {

        double temperatura = sensorData.getTemperatura();
        double humedad = sensorData.getHumedad();
        int deviceId = sensorData.getIdDispositivo();

        // Realiza la lógica de procesamiento según tus necesidades
        if (temperatura > 25.0) {
            // Realiza una acción cuando la temperatura es alta
            System.out.println("Temperatura alta detectada en el dispositivo " + deviceId);
            // Puedes enviar una notificación, registrar en la base de datos, etc.
        } else {
            // Realiza otra acción si la temperatura no es alta
            System.out.println("Temperatura normal en el dispositivo " + deviceId);
        }
    }
}
