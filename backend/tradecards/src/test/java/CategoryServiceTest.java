import dal.asdc.tradecards.Model.DAO.CategoryDao;
import dal.asdc.tradecards.Model.DTO.CategoryDTO;
import dal.asdc.tradecards.Repository.CategoryRepository;
import dal.asdc.tradecards.Service.CategoryService;
import dal.asdc.tradecards.Service.impl.CategoryServiceImpl;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@ExtendWith(SpringExtension.class)
@SpringBootTest(classes = CategoryService.class)
public class CategoryServiceTest {

    @Mock
    private CategoryRepository categoryRepository;

    @InjectMocks
    private CategoryServiceImpl categoryService;

    @Test
    public void testGetAllCategories() {
        List<CategoryDao> categoryList = new ArrayList<>();
        CategoryDao categoryDao1 = new CategoryDao();
        categoryDao1.setCategoryID(1);
        categoryDao1.setCategoryName("Shoes");
        CategoryDao categoryDao2 = new CategoryDao();
        categoryDao2.setCategoryID(2);
        categoryDao2.setCategoryName("Suits");
        categoryList.add(categoryDao1);
        categoryList.add(categoryDao2);

        Mockito.when(categoryService.getAllCategories()).thenReturn(categoryList);

        List<CategoryDao> result = categoryService.getAllCategories();

        assertEquals(2, result.size());
    }
}
