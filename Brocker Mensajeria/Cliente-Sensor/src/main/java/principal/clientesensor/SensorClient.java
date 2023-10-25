package principal.clientesensor;

import org.springframework.jms.core.JmsTemplate;
import org.springframework.stereotype.Component;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;

@Component
public class SensorClient {

    private final JmsTemplate jmsTemplate;

    public SensorClient(JmsTemplate jmsTemplate) {
        this.jmsTemplate = jmsTemplate;
    }

    public void simulateSensorData() {
        Random random = new Random();
        SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");

        while (true) {
            int deviceId = random.nextInt(10) + 1;
            double temperature = 20 + (random.nextDouble() * 15);
            double humidity = 30 + (random.nextDouble() * 40);
            String date = dateFormat.format(new Date());

            String json = "{\"fechaGeneración\":\"" + date + "\", \"IdDispositivo\":" + deviceId + ", \"temperatura\":" + temperature + ", \"humedad\":" + humidity + "}";

            jmsTemplate.convertAndSend("notificacion_sensores", json);

            try {
                Thread.sleep(60000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}
