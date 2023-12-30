package backend.pixel_picture.Entidades;

import org.simplejavamail.api.mailer.Mailer;
import org.simplejavamail.mailer.MailerBuilder;
import org.simplejavamail.api.mailer.config.TransportStrategy;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class EmailConfig {

    @Bean
    public Mailer mailer() {
        return MailerBuilder
                .withSMTPServer("in-v3.mailjet.com", 587, "tu-usuario", "tu-contraseña")
                .withTransportStrategy(TransportStrategy.SMTP_TLS)
                .withSessionTimeout(10 * 1000)
                .clearEmailAddressCriteria()
                .withDebugLogging(true)
                .buildMailer();
    }
}
