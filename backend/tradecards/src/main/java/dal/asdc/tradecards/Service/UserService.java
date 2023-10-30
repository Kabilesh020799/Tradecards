package dal.asdc.tradecards.Service;

import java.util.HashMap;
import java.util.List;
import dal.asdc.tradecards.Model.DAO.UserDao;
import dal.asdc.tradecards.Model.DTO.ForgetPasswordDTO;
import dal.asdc.tradecards.Model.DTO.UserLoginDTO;
import dal.asdc.tradecards.Model.DTO.UserSignUpDTO;
import dal.asdc.tradecards.Model.DTO.VerifyAccountDTO;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public interface UserService extends UserDetailsService {

    public HashMap<String, Object> create(UserSignUpDTO userSignUpDTO) throws Exception;

    public Object getUserByUsername(String username);

    public Object login(UserLoginDTO userLoginDTO) throws Exception;


    public HashMap<String, Object> forgetPasswordRequest(ForgetPasswordDTO forgetPasswordDTO) throws Exception;;

    public HashMap<String, Object> forgetPasswordVerification(String bearerToken, ForgetPasswordDTO forgetPasswordDTO) throws Exception;

    public Object verifyAccount(String bearerToken, VerifyAccountDTO verifyAccountDTO) throws Exception;

    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException;

    public List<UserDao> getAllUsers();
}
