package dal.asdc.tradecards.Service;

import dal.asdc.tradecards.Model.DAO.CategoryDao;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public interface CategoryService {
    public List<CategoryDao> getAllCategories();
}