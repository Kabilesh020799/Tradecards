package dal.asdc.tradecards.Model.DTO;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ForgetPasswordDTO {
    private String emailID;
    private String otp;
    private String password;
}

