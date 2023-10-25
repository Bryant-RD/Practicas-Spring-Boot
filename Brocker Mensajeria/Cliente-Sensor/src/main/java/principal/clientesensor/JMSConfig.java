package principal.clientesensor;

import jakarta.jms.ConnectionFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.jms.connection.CachingConnectionFactory;


@Configuration
public class JMSConfig {

    @Bean
    public ConnectionFactory connectionFactory() {
        CachingConnectionFactory factory = new CachingConnectionFactory();
        // Configura tu conexión JMS aquí
        // Ejemplo:
        // factory.setTargetConnectionFactory(yourActualConnectionFactory());
        return (ConnectionFactory) factory;
    }

    @Bean
    public JmsTemplate jmsTemplate(ConnectionFactory connectionFactory) {
        return new JmsTemplate((javax.jms.ConnectionFactory) connectionFactory);
    }
}
