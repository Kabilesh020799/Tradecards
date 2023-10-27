package dal.asdc.tradecards.Service.impl;

import dal.asdc.tradecards.Model.DAO.CategoryDao;
import dal.asdc.tradecards.Repository.CategoryRepository;
import dal.asdc.tradecards.Service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {
    @Autowired
    CategoryRepository categoryRepository;
    @Override
    public List<CategoryDao> getAllCategories(){
        return (List<CategoryDao>)categoryRepository.findAll();
    }
}
