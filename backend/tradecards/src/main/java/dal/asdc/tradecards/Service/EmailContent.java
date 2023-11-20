package dal.asdc.tradecards.Service;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EmailContent {

    private String to;
    private String subject;
    private String text;

    public EmailContent() {
        // Default constructor
    }

    public EmailContent(String to, String subject, String text) {
        this.to = to;
        this.subject = subject;
        this.text = text;
    }
}
