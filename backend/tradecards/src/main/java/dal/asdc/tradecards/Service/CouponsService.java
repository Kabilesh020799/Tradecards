package dal.asdc.tradecards.Service;
import dal.asdc.tradecards.Model.DAO.CouponsDao;
import dal.asdc.tradecards.Model.DTO.CouponsDTO;
import org.springframework.stereotype.Service;

@Service
public interface CouponsService {
    public CouponsDao createCoupon(CouponsDTO couponsDTO) ;

    public  boolean deleteCouponById(int id);

    public CouponsDao getCouponById(int couponId);
}
