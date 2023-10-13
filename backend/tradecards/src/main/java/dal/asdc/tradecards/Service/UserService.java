package dal.asdc.tradecards.Service;

import java.util.List;

import dal.asdc.tradecards.Model.User;
import org.springframework.stereotype.Service;

@Service
public interface UserService {
	public User create(User user);

    public List<User> getAllUsers();

    public User getUserById(String id);
}
