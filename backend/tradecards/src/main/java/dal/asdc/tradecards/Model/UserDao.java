package dal.asdc.tradecards.Model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name="user")
public class UserDao {
    @Id
    @Column(name="user_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userId;

    @Column(name = "email_id")
    private String emailID;

    @Column(name = "password")
    private String password;

    @Column(name = "first_name")
    private String FirstName;

    @Column(name = "last_name")
    private String LastName;
}

