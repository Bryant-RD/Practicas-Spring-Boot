package principal.clientesensor;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class ClienteSensorApplication {

    public static void main(String[] args) {
        ConfigurableApplicationContext context = SpringApplication.run(ClienteSensorApplication.class, args);

        SensorClient sensorClient = context.getBean(SensorClient.class);
        sensorClient.simulateSensorData();
    }

}
