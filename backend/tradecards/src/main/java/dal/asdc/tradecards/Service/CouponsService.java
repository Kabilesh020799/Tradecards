package dal.asdc.tradecards.Service;
import dal.asdc.tradecards.Model.DAO.CouponsDao;
import dal.asdc.tradecards.Model.DTO.CouponsDTO;
import org.springframework.stereotype.Service;

@Service
public interface CouponsService {
    public CouponsDao createCoupons(CouponsDTO couponsDTO) ;
}
