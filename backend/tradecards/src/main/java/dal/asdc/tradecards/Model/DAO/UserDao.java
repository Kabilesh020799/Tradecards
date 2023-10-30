package dal.asdc.tradecards.Model.DAO;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Date;

@Entity
@Getter
@Setter
@Table(name="user")
public class UserDao {
    @Id
    @Column(name="userid")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userid;

    @Column(name = "email_id")
    private String emailID;

    @Column(name = "password")
    private String password;

    @Column(name="is_deleted")
    private Integer is_deleted = 0;

    @Column(name="is_verified")
    private Integer is_verified = 0;

    @Column(name = "updated_at")
    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    private Date updated_at;

    @Column(name = "first_name")
    private String FirstName;

    @Column(name = "last_name")
    private String LastName;

    public UserDao() {
    }

    public UserDao(String FirstName, String LastName, String emailID, String password) {
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.emailID = emailID;
        this.password = password;
    }
}

