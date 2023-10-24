package dal.asdc.tradecards.Model.DAO;

import jakarta.persistence.*;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "category")
public class CategoryDao {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CategoryID")
    private int CategoryID;

    @Column(name = "CategoryName")
    private String CategoryName;
}

