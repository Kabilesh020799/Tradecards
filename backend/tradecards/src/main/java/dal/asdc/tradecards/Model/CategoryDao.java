package dal.asdc.tradecards.Model;

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
    @Column(name = "categoryId")    //need to recheck
    private int categoryId;

    @Column(name = "categoryName")  //need to recheck
    private String categoryName;
}
