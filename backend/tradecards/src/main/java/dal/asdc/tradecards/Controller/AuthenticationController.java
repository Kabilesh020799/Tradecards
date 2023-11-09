package dal.asdc.tradecards.Controller;

import java.util.HashMap;

import dal.asdc.tradecards.Model.DTO.VerifyAccountDTO;
import dal.asdc.tradecards.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import dal.asdc.tradecards.Exception.DuplicateEntryException;
import dal.asdc.tradecards.Exception.InvalidAccountCredentialsException;
import dal.asdc.tradecards.Model.DTO.ForgetPasswordDTO;
import dal.asdc.tradecards.Model.DTO.UserLoginDTO;
import dal.asdc.tradecards.Model.DTO.UserSignUpDTO;
import dal.asdc.tradecards.Service.EmailService;

@RestController
@CrossOrigin(origins = {"http://localhost:3000/", "http://csci5308vm13.research.cs.dal.ca:3000/", "http://csci5308vm13.research.cs.dal.ca:8080/"})
@RequestMapping("/api")
public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserService userService;

    @Autowired
    private EmailService emailService;

    @PostMapping("/signup")
    public ResponseEntity<?> doSignup(@RequestBody UserSignUpDTO userSignUpDTO) throws Exception {
        try {
            HashMap<String, Object> claims = userService.create(userSignUpDTO);
            emailService.sendEmail((String) claims.get("email"), "Trade Cards Team - Verify your account", "Your OTP for account verification is: " + claims.get("otp"));
            return ResponseEntity.status(HttpStatus.CREATED).body(claims);
        } catch(DuplicateEntryException error) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(error);
        } catch(Exception error) {
            return ResponseEntity.internalServerError().body(error);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> doLogin(@RequestBody UserLoginDTO userLoginDTO) throws Exception {
        try {
            authenticate(userLoginDTO.getEmailId(), userLoginDTO.getPassword());
            return ResponseEntity.ok(userService.login(userLoginDTO));
        } catch (InvalidAccountCredentialsException error) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(error);
        } catch(Exception error) {
            return ResponseEntity.internalServerError().body(error);
        }
    }

    @PostMapping("/verify-account")
    public ResponseEntity<?> verifyAccount(@RequestHeader("Authorization") String bearerToken, @RequestBody VerifyAccountDTO verifyAccountDTO) throws Exception {
        try {
            return ResponseEntity.ok(userService.verifyAccount(bearerToken, verifyAccountDTO));
        } catch(Exception error) {
            return ResponseEntity.internalServerError().body(error);
        }
    }

//    @PostMapping("/forget-password-request")
//    public ResponseEntity<?> forgetPasswordRequest(@RequestBody ForgetPasswordDTO forgetPasswordDTO) throws Exception {
//        try {
//            HashMap<String, Object> tokenClaims = userService.forgetPasswordRequest(forgetPasswordDTO);
//            emailService.sendEmail((String) tokenClaims.get("emailID"), "TradeCards - Forget Password Request", "Your OTP for forget password is: " + tokenClaims.get("otp"));
//            HashMap<String, Object> responseClaims = new HashMap<String, Object>();
//            responseClaims.put("token", tokenClaims.get("token"));
//            responseClaims.put("email", tokenClaims.get("emailID"));
//            return ResponseEntity.ok(responseClaims);
//        } catch(Exception error) {
//            return ResponseEntity.internalServerError().body(error);
//        }
//    }

//    @PostMapping("/forget-password-verification")
//    public ResponseEntity<?> forgetPasswordVerification(@RequestHeader("Authorization") String bearerToken, @RequestBody ForgetPasswordDTO forgetPasswordDTO) throws Exception {
//        try {
//            return ResponseEntity.ok(userService.forgetPasswordVerification(bearerToken, forgetPasswordDTO));
//        } catch(Exception error) {
//            return ResponseEntity.internalServerError().body(error);
//        }
//    }

    private void authenticate(String username, String password) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (DisabledException e) {
            throw new Exception("User is disabled", e);
        } catch (BadCredentialsException e) {
            throw new InvalidAccountCredentialsException("Invalid Credentials", e);
        }
    }
}
