package dal.asdc.tradecards.Controller;

import java.util.List;

import dal.asdc.tradecards.Model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import dal.asdc.tradecards.Utility.JWTTokenUtil;


import dal.asdc.tradecards.Service.UserService;

@RestController
@RequestMapping("/api")
public class UserController {
    @Autowired
    UserService userService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JWTTokenUtil jwtUtil;

    @PostMapping("/signup")
    public UserDao saveUser(@RequestBody UserDao user){
        return userService.create(user);
    }

    @GetMapping("/users")
    public List<UserDao> getUsers(){
        return userService.getAllUsers();
    }

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public ResponseEntity<?> createAuthenticationToken(@RequestBody UserLoginDTO authenticationRequest) throws Exception {
        authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());
        final UserDetails userDetails = userService.loadUserByUsername(authenticationRequest.getUsername());
        String jwtToken = jwtUtil.generateToken(userDetails.getUsername());
        return ResponseEntity.ok(new UserLoginResponse(userDetails.getUsername(), jwtToken));
    }

    @GetMapping("/categories")
    public List<CategoryDao> getAllCategories(){
        return userService.getAllCategories();
    }

    @PostMapping("/create-category")
    public CategoryDao categoryDao(@RequestBody CategoryDTO categoryDTO){
        return userService.createCategory(categoryDTO);
    }

    private void authenticate(String username, String password) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }
    }

}
