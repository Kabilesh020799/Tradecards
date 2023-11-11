package dal.asdc.tradecards.Service;

import dal.asdc.tradecards.Model.DAO.ReviewDao;
import dal.asdc.tradecards.Model.DTO.NewReviewDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ReviewService {
    public ReviewDao createReview(NewReviewDTO newReviewDTO);

    public List<ReviewDao> getReviewsByReviewedUserId(Long reviewedUserId);
}