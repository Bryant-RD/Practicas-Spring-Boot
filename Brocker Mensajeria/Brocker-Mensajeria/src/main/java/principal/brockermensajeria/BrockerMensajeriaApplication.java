package principal.brockermensajeria;

import org.apache.activemq.broker.BrokerService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BrockerMensajeriaApplication {

    public static void main(String[] args) {
        // Inicializa el servidor JMS embebido
        startEmbeddedActiveMQBroker();

        // Inicia la aplicación Spring Boot
        SpringApplication.run(BrockerMensajeriaApplication.class, args);
        System.out.println("SERVIDOR ARRIBA");
    }

    private static void startEmbeddedActiveMQBroker() {
        try {
            BrokerService broker = new BrokerService();
            broker.addConnector("tcp://localhost:61616"); // Puerto en el que escuchará
            broker.start();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
