package dal.asdc.tradecards.Controller;

import dal.asdc.tradecards.Model.DAO.CategoryDao;
import dal.asdc.tradecards.Service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE, RequestMethod.OPTIONS})
@RequestMapping("/api")
public class CategoryController {
    @Autowired
    CategoryService categoryService;

    @GetMapping("/categories")
    public List<CategoryDao> getAllCategories(){
        return categoryService.getAllCategories();
    }

}
