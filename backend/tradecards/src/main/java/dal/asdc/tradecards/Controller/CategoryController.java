package dal.asdc.tradecards.Controller;

import dal.asdc.tradecards.Model.DAO.CategoryDao;
import dal.asdc.tradecards.Service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins={"http://localhost:3000/", "http://localhost:8080/", "http://csci5308vm13.research.cs.dal.ca:8080/", "http://csci5308vm13.research.cs.dal.ca:3000/", "http://csci5308vm13.research.cs.dal.ca/", "http://localhost/", "http://172.17.3.148:8080/", "http://172.17.3.148:3000/", "http://172.17.3.148/"})
@RequestMapping("/api")
public class CategoryController {
    @Autowired
    CategoryService categoryService;

    @GetMapping("/categories")
    public List<CategoryDao> getAllCategories(){
        return categoryService.getAllCategories();
    }

}
