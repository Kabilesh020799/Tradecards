package dal.asdc.tradecards.Service.impl;

import java.util.HashMap;
import java.util.List;

import dal.asdc.tradecards.Exception.DuplicateEntryException;
import dal.asdc.tradecards.Exception.OTPVerificationFailed;
import dal.asdc.tradecards.Exception.OTPVerificationFailedException;
import dal.asdc.tradecards.Model.DTO.*;
import dal.asdc.tradecards.Service.UserService;
import dal.asdc.tradecards.Utility.JWTTokenUtil;
import dal.asdc.tradecards.Utility.UtilityFunctions;
import io.jsonwebtoken.Claims;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import dal.asdc.tradecards.Model.DAO.UserDao;
import dal.asdc.tradecards.Repository.UserRepository;


@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    JWTTokenUtil jwtTokenUtil;

    @Autowired
    private UtilityFunctions utilityFunctions;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UserServiceImpl () {}

    @Override
    public HashMap<String, Object> create(UserSignUpDTO userSignUpDTO) throws Exception {
        try {
            BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
            userSignUpDTO.setPassword(passwordEncoder.encode(userSignUpDTO.getPassword()));
            UserDao userDao = new UserDao(userSignUpDTO.getFirstName(), userSignUpDTO.getLastName(),
                    userSignUpDTO.getEmailID(), userSignUpDTO.getPassword());
            userRepository.save(userDao);
            HashMap<String, Object> claims = new HashMap<>();
            claims.put("emailID", userSignUpDTO.getEmailID());
            claims.put("first name", userSignUpDTO.getFirstName());
            claims.put("last name", userSignUpDTO.getLastName());
            int otp = (int) Math.floor(100000 + Math.random() * 900000);
            claims.put("otp", otp);
            String jwtToken = jwtTokenUtil.generateToken(claims);
            claims.put("token", jwtToken);
            return claims;
        } catch(DataIntegrityViolationException error) {
            throw new DuplicateEntryException("User with same email id already exists", new Exception(error.getMessage()));
        }
    }


    @Override
    public Object getUserByUsername(String emailID) {
        UserDao userDao = userRepository.findByEmailID(emailID);
        return userRepository.findById(userDao.getEmailID());
    }

    @Override
    public Object login(UserLoginDTO userLoginDTO) throws Exception {
        UserDao userDao = userRepository.findByEmailID(userLoginDTO.getEmailId());
        HashMap<String, Object> claims = new HashMap<>();
        claims.put("email", userDao.getEmailID());
        claims.put("firstName", userDao.getFirstName());
        String jwtToken = jwtTokenUtil.generateToken(claims);
        claims.put("token", jwtToken);
        return claims;
    }

    @Override
    public HashMap<String, Object> forgetPasswordRequest(ForgetPasswordDTO forgetPasswordDTO) throws Exception {
        UserDao userDao = userRepository.findByEmailID(forgetPasswordDTO.getEmailID());
        HashMap<String, Object> claims = new HashMap<>();
        claims.put("emailID", userDao.getEmailID());
        claims.put("otp", utilityFunctions.generateOTP());
        claims.put("first name", userDao.getFirstName());
        String jwtToken = jwtTokenUtil.generateFifteenMinuteExpiryToken(claims);
        claims.put("token", jwtToken);
        return claims;
    }

    @Override
    public HashMap<String, Object> forgetPasswordVerification(String token, ForgetPasswordDTO forgetPasswordDTO) throws Exception {
        Claims tokenClaims = jwtTokenUtil.getAllClaimsFromToken(token.substring(7));
        String otp = tokenClaims.get("otp").toString();
        if(otp.equalsIgnoreCase(forgetPasswordDTO.getOtp())) {
            BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
            userRepository.setPassword((String) tokenClaims.get("emailID"), passwordEncoder.encode(forgetPasswordDTO.getPassword()));
            HashMap<String, Object> claims = new HashMap<>();
            claims.put("message", "Password changed successfully");
            return claims;
        }
        else {
            throw new OTPVerificationFailedException("OTP does not match", new Exception("OTP does not match", null));
        }
    }

    @Override
    public Object verifyAccount(String token, VerifyAccountDTO verifyAccountDTO) throws Exception {
        Claims tokenClaims = jwtTokenUtil.getAllClaimsFromToken(token.substring(7));
        String otp = tokenClaims.get("otp").toString();
        if(otp.equalsIgnoreCase(verifyAccountDTO.getOtp())) {
            userRepository.setIsVerified((String) tokenClaims.get("username"));
            HashMap<String, Object> claims = new HashMap<>();
            String jwtToken = jwtTokenUtil.generateToken(tokenClaims);
            claims.put("message", "Account Successfully Verified");
            claims.put("token", jwtToken);
            return claims;
        }
        else {
            throw new OTPVerificationFailed("OTP does not match", new Exception("OTP does not match", null));
        }
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserDao userDao = userRepository.findByEmailID(username);
        if (userDao == null) {
            throw new UsernameNotFoundException("User not found with username: " + username);
        }
        return org.springframework.security.core.userdetails.User.builder()
                .username(userDao.getEmailID())
                .password(userDao.getPassword())
                .build();
    }

        @Override
        public UserDao loadUserByEmailID(String emailID) throws UsernameNotFoundException {
            UserDao userDao = userRepository.findByEmailID(emailID);
            if (userDao == null) {
                throw new UsernameNotFoundException("User not found with emailID: " + emailID);
            }
            return new UserDao(
                    userDao.getEmailID(),
                    userDao.getLastName(),
                    userDao.getFirstName()
            );
        }

    public UserDao updateUser(EditUserRequestDTO updatedUser){
        String emailID = updatedUser.getEmailID();
        UserDao existingUser = userRepository.findByEmailID(emailID);
        if (existingUser == null) {
            throw new UsernameNotFoundException("User not found with emailID: " + emailID);
        }
        existingUser.setFirstName(updatedUser.getFirstName());
        existingUser.setLastName(updatedUser.getLastName());

        // Hash the updated password and set it in user db
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String hashedPassword = passwordEncoder.encode(updatedUser.getPassword());
        existingUser.setPassword(hashedPassword);

        UserDao updatedUserFromDB = userRepository.save(existingUser);

        return updatedUserFromDB;
    }


    @Override
    public List<UserDao> getAllUsers() {
        return (List<UserDao>)userRepository.findAll();
    }
}
