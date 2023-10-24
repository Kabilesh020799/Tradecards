package dal.asdc.tradecards.Service.impl;

import dal.asdc.tradecards.Model.DAO.CategoryDao;
import dal.asdc.tradecards.Model.DTO.CategoryDTO;
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

    public CategoryDao createCategory(CategoryDTO categoryDTO){
        CategoryDao category = new CategoryDao();
        category.setCategoryName(categoryDTO.getCategoryName());
        try {
            CategoryDao savedCategory = categoryRepository.save(category);
            return savedCategory;
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
    }
}
