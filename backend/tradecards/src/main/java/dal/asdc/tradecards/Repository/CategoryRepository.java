package dal.asdc.tradecards.Repository;

import dal.asdc.tradecards.Model.CategoryDao;
import org.springframework.data.repository.CrudRepository;

public interface CategoryRepository extends CrudRepository<CategoryDao, String> {

}
