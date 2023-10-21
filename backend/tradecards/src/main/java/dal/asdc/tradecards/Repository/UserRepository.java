package dal.asdc.tradecards.Repository;

import dal.asdc.tradecards.Model.CategoryDao;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import dal.asdc.tradecards.Model.UserDao;

@Repository
public interface UserRepository  extends CrudRepository<UserDao, String> {

}

