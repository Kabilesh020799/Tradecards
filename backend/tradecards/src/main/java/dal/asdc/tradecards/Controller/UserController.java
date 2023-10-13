package dal.asdc.tradecards.Controller;

import java.util.List;

import dal.asdc.tradecards.Model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dal.asdc.tradecards.Service.UserService;

@RestController
@RequestMapping("/api")
public class UserController {
	@Autowired
    UserService userService;

    @GetMapping("/")
    public String index(){
        return "Hello World";
    }

    @PostMapping("/signup")
    public User saveUser(@RequestBody User user){
        return userService.create(user);
    }

    @GetMapping("/users")
    public List<User> getUsers(){
        return userService.getAllUsers();
    }

    @GetMapping("/users/{id}")
    public User getUser(@PathVariable String id){
        return userService.getUserById(id);
    }
}
