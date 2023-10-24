package dal.asdc.tradecards.Controller;

import java.util.List;
import dal.asdc.tradecards.Model.DAO.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dal.asdc.tradecards.Service.UserService;

@RestController
@RequestMapping("/api")
public class UserController {
    @Autowired
    UserService userService;

    @GetMapping("/users")
    public List<UserDao> getUsers(){
        return userService.getAllUsers();
    }
}
