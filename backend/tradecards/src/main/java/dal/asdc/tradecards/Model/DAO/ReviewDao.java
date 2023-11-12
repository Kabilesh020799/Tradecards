package dal.asdc.tradecards.Model.DAO;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Entity
@Getter
@Setter
@Table(name = "review")
public class ReviewDao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ReviewID")
    private Long reviewId;

    @Column(name = "Rating")
    private Float rating;

    @Column(name = "Content", length = 200)
    private String content;

    @Column(name = "ReviewDate")
    @Temporal(TemporalType.TIMESTAMP)
    private Date reviewDate;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "reviewer_user_id", referencedColumnName = "userid")
    private UserDao reviewerUser;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "reviewed_user_id", referencedColumnName = "userid")
    private UserDao reviewedUser;
}