package dal.asdc.tradecards.Service;

import java.util.List;

import dal.asdc.tradecards.Model.UserDao;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

@Service
public interface UserService extends UserDetailsService {

    UserDao create(UserDao user);

    public List<UserDao> getAllUsers();

    public UserDao getUserById(String id, String password);
}
