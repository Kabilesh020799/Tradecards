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
    @Column(name = "CategoryID")
    private int categoryId;

    @Column(name = "CategoryName")  //need to recheck
    private String categoryName;
}
