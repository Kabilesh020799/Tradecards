package dal.asdc.tradecards.Controller;

import dal.asdc.tradecards.Model.DAO.CategoryDao;
import dal.asdc.tradecards.Service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:3000/", "http://csci5308vm13.research.cs.dal.ca:3000/", "http://csci5308vm13.research.cs.dal.ca:8080/"})
@RequestMapping("/api")
public class CategoryController {
    @Autowired
    CategoryService categoryService;

    @GetMapping("/categories")
    public List<CategoryDao> getAllCategories(){
        return categoryService.getAllCategories();
    }

}
