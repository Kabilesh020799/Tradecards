package dal.asdc.tradecards.Service.impl;

import dal.asdc.tradecards.Model.DAO.UserDao;
import dal.asdc.tradecards.Repository.UserRepository;
import dal.asdc.tradecards.Service.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import dal.asdc.tradecards.Model.DTO.EditUserRequestDTO;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

public class UserServiceImplTest {
    @Mock
    private UserRepository userRepository;

    private UserService userService;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.openMocks(this);
        userService = new UserServiceImpl(userRepository);
    }

    @Test
    @DisplayName("Testing update user method")
    public void testUpdateUser() {
        EditUserRequestDTO updatedUser = new EditUserRequestDTO();
        updatedUser.setEmailID("test@example.com");
        updatedUser.setFirstName("John");
        updatedUser.setLastName("Doe");
        updatedUser.setPassword("newPassword");

        UserDao existingUser = new UserDao();
        existingUser.setEmailID("test@example.com");
        existingUser.setFirstName("OldFirstName");
        existingUser.setLastName("OldLastName");

        when(userRepository.findByEmailID("test@example.com")).thenReturn(existingUser);
        when(userRepository.save(existingUser)).thenReturn(existingUser);

        UserDao updatedUserFromDB = userService.updateUser(updatedUser);

        assertEquals("test@example.com", updatedUserFromDB.getEmailID());
        assertEquals("John", updatedUserFromDB.getFirstName());
        assertEquals("Doe", updatedUserFromDB.getLastName());
    }

    @Test
    @DisplayName("Testing update user method for non existent user")
    public void testUpdateUserNotFound() {
        EditUserRequestDTO updatedUser = new EditUserRequestDTO();
        updatedUser.setEmailID("nonexistent@example.com");

        when(userRepository.findByEmailID("nonexistent@example.com")).thenReturn(null);

        assertThrows(UsernameNotFoundException.class, () -> {
            userService.updateUser(updatedUser);
        });
    }

    @Test
    @DisplayName("Testing load user by their email id method")
    public void testLoadUserByEmailIDUserFound() {
        UserDao mockUser = new UserDao();
        mockUser.setEmailID("test@example.com");
        mockUser.setFirstName("John");
        mockUser.setLastName("Doe");

        when(userRepository.findByEmailID("test@example.com")).thenReturn(mockUser);

        UserDao loadedUser = userService.loadUserByEmailID("test@example.com");

        assertNotNull(loadedUser);
        assertEquals("test@example.com", loadedUser.getEmailID());
        assertEquals("Doe", loadedUser.getFirstName());
    }

    @Test
    @DisplayName("Testing load user by their email id method by providing non existent user")
    public void testLoadUserByEmailIDUserNotFound() {
        String emailID = "nonexistent@example.com";

        when(userRepository.findByEmailID(emailID)).thenReturn(null);

        assertThrows(UsernameNotFoundException.class, () -> {
            userService.loadUserByEmailID(emailID);
        });
    }

    @Test
    @DisplayName("Testing get user by userid method for valid user")
    public void testGetUserByUserIdUserFound() {
        int userid = 1;
        UserDao mockUser = new UserDao();
        mockUser.setUserid(userid);
        mockUser.setEmailID("harsh@harsh.com");
        mockUser.setFirstName("harshpreet");
        mockUser.setLastName("singh");

        when(userRepository.findById(String.valueOf(userid))).thenReturn(Optional.of(mockUser));

        UserDao loadedUser = userService.getUserByUserId(userid);

        assertNotNull(loadedUser);
        assertEquals(userid, loadedUser.getUserid());
        assertEquals("harsh@harsh.com", loadedUser.getEmailID());
        assertEquals("harshpreet", loadedUser.getFirstName());
    }


    @Test
    @DisplayName("Testing get user by userid method for non-existent user")
    public void testGetUserByUserIdUserNotFound() {
        int userid = 888;

        when(userRepository.findById(String.valueOf(userid))).thenReturn(Optional.empty());

        UserDao loadedUser = userService.getUserByUserId(userid);

        assertNull(loadedUser);
    }
}
