package principal.clientesensor;

import org.springframework.jms.annotation.JmsListener;
import org.springframework.stereotype.Component;

@Component
public class SensorDataConsumer {

    @JmsListener(destination = "notificacion_sensores")
    public void receiveSensorData(String message) {
        System.out.println("Received sensor data: " + message);
    }
}
