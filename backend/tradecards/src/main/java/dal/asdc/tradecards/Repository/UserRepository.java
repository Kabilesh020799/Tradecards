package dal.asdc.tradecards.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import dal.asdc.tradecards.Model.User;

@Repository
public interface UserRepository  extends JpaRepository<User, String>{
    
}
