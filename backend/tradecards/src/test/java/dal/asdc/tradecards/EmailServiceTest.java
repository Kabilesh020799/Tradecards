package dal.asdc.tradecards;

import dal.asdc.tradecards.Service.EmailService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

import static org.mockito.Mockito.*;

class EmailServiceTest {

    @Mock
    private JavaMailSender javaMailSender;

    @InjectMocks
    private EmailService emailService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testSendEmail() {
        String to = "recipient@example.com";
        String subject = "Test Subject";
        String text = "Test Message";

        emailService.sendEmail(to, subject, text);

        verify(javaMailSender, times(1)).send(any(SimpleMailMessage.class));
    }

    @Test
    void testSendEmailNullRecipient() {
        String to = null;
        String subject = "Test Subject";
        String text = "Test Message";

        emailService.sendEmail(to, subject, text);

        verify(javaMailSender, never()).send(any(SimpleMailMessage.class));
    }
}
