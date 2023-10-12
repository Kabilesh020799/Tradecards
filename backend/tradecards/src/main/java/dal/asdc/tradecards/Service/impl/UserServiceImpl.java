package dal.asdc.tradecards.Service.impl;

import java.util.List;

import dal.asdc.tradecards.Model.User;
import dal.asdc.tradecards.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dal.asdc.tradecards.Service.UserService;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
    UserRepository userRepository;

    @Override
    public User create(User user){
        return userRepository.save(user);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User getUserById(String id) {
        return userRepository.findById(id).get();
    }
}

