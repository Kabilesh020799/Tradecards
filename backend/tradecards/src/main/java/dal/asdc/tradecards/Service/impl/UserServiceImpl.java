package dal.asdc.tradecards.Service.impl;

import java.util.List;

import dal.asdc.tradecards.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import dal.asdc.tradecards.Model.UserDao;
import dal.asdc.tradecards.Repository.UserRepository;


@Service
@Primary
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;

    @Override
    public UserDao create(UserDao user){
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    @Override
    public List<UserDao> getAllUsers() {
        return (List<UserDao>)userRepository.findAll();
    }

    @Override
    public UserDao getUserById(String user_id, String password) {
        try {
            UserDao userObj = userRepository.findById(user_id).get();
            if(userObj.getPassword().equals(password)){
                return userRepository.findById(user_id).get();
            };
        } catch (Exception e) {
            //e.printStackTrace();
        }
        return null;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserDao user = userRepository.findById(username).get();
        if (user == null) {
            throw new UsernameNotFoundException("User not found with username: " + username);
        }
        return org.springframework.security.core.userdetails.User.builder()
                .username((String.valueOf(user.getUserid())))
                .password(user.getPassword())
                .build();
    }
}
