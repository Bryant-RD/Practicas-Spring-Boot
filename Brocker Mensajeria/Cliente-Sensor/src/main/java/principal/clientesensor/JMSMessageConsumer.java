//package principal.clientesensor;
//
//import javax.jms.ConnectionFactory;
//import javax.jms.JMSException;
//import javax.jms.Message;
//import javax.jms.MessageConsumer;
//import javax.jms.Queue;
//import javax.jms.Session;
//
//import org.springframework.jms.core.JmsTemplate;
//
//
//public class JMSMessageConsumer {
//
//    private JmsTemplate jmsTemplate;
//    private Queue queue;
//
//    public JMSMessageConsumer(JmsTemplate jmsTemplate, Queue queue) {
//        this.jmsTemplate = jmsTemplate;
//        this.queue = queue;
//    }
//
//    public void receiveAndProcessMessages() {
//        Message message = jmsTemplate.receive(queue);
//        // Procesa el mensaje y muestra los datos
//        if (message != null) {
//            // Aquí puedes extraer y mostrar los datos del mensaje JSON
//        }
//    }
//}
