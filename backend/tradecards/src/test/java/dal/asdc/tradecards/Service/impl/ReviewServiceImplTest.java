package dal.asdc.tradecards.Service.impl;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.*;

import dal.asdc.tradecards.Model.DAO.ReviewDao;
import dal.asdc.tradecards.Model.DAO.UserDao;
import dal.asdc.tradecards.Model.DTO.NewReviewDTO;
import dal.asdc.tradecards.Repository.ReviewRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.extension.ExtendWith;
import dal.asdc.tradecards.Service.UserService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Arrays;
import java.util.List;

@ExtendWith(MockitoExtension.class)
public class ReviewServiceImplTest {

    @Mock
    private ReviewRepository reviewRepository;

    @Mock
    private UserService userService;

    @InjectMocks
    private ReviewServiceImpl reviewService;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.openMocks(this); // Initialize mocks
        reviewService = new ReviewServiceImpl(reviewRepository, userService);
    }

    @Test
    @DisplayName("Testing create review")
    public void testCreateReview() {
        // Mock data
        NewReviewDTO newReviewDTO = new NewReviewDTO();
        newReviewDTO.setReviewerUserID(100);
        newReviewDTO.setReviewedUserID(101);
        newReviewDTO.setRating(4.50F);
        newReviewDTO.setContent("A great review!");

        UserDao mockReviewerUser = new UserDao();
        mockReviewerUser.setUserid(100);

        UserDao mockReviewedUser = new UserDao();
        mockReviewedUser.setUserid(101);

        ReviewDao mockReviewDao = new ReviewDao();

        when(userService.getUserByUserId(100)).thenReturn(mockReviewerUser);
        when(userService.getUserByUserId(101)).thenReturn(mockReviewedUser);

        // Mock the behavior of the reviewRepository
        when(reviewRepository.save(any(ReviewDao.class))).thenReturn(mockReviewDao);

        ReviewDao createdReview = reviewService.createReview(newReviewDTO);

        assertNotNull(createdReview);
        verify(userService, times(1)).getUserByUserId(100);
        verify(userService, times(1)).getUserByUserId(101);

        verify(reviewRepository, times(1)).save(any(ReviewDao.class));
    }


    @Test
    @DisplayName("Testing get reviews by user id")
    public void testGetReviewsByReviewedUserId() {
        Long reviewedUserId = 1L;
        ReviewDao review1 = new ReviewDao();
        ReviewDao review2 = new ReviewDao();
        List<ReviewDao> mockReviews = Arrays.asList(review1, review2);

        when(reviewRepository.findByReviewedUserUserid(reviewedUserId)).thenReturn(mockReviews);

        List<ReviewDao> result = reviewService.getReviewsByReviewedUserId(reviewedUserId);

        assertNotNull(result);
        assertEquals(2, result.size());
        assertEquals(review1, result.get(0));
        assertEquals(review2, result.get(1));

        verify(reviewRepository, times(1)).findByReviewedUserUserid(reviewedUserId);
    }
}