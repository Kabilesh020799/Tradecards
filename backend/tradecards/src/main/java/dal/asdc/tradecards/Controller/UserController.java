package dal.asdc.tradecards.Controller;

import java.util.List;
import dal.asdc.tradecards.Model.DAO.UserDao;
import dal.asdc.tradecards.Model.DTO.EditUserRequestDTO;
import dal.asdc.tradecards.Model.DTO.UserGetDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/users/email")
    public ResponseEntity<UserDao> getUserByEmailID(@RequestBody UserGetDTO emailRequest){
        String emailID = emailRequest.getEmailID();
        UserDao user = userService.loadUserByEmailID(emailID);

        if (user != null) {
            return new ResponseEntity<>(user, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/users/update-user")
    public ResponseEntity<UserDao> editUserDetails(@RequestBody EditUserRequestDTO editUserRequest) {
        try{
            String emailID = editUserRequest.getEmailID();

            // Check if the user with the provided email ID exists
            UserDao existingUser = userService.loadUserByEmailID(emailID);

            if (existingUser == null) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }

            // Update user details
            existingUser.setFirstName(editUserRequest.getFirstName());
            existingUser.setLastName(editUserRequest.getLastName());
            existingUser.setPassword(editUserRequest.getPassword());

            UserDao updatedUser = userService.updateUser(editUserRequest);

            return new ResponseEntity<>(updatedUser, HttpStatus.OK);
        }
        catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
