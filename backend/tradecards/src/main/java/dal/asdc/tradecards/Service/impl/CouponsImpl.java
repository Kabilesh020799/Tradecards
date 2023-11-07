package dal.asdc.tradecards.Service.impl;
import dal.asdc.tradecards.Model.DAO.CategoryDao;
import dal.asdc.tradecards.Model.DAO.CouponsDao;
import dal.asdc.tradecards.Model.DTO.CouponsDTO;
import dal.asdc.tradecards.Repository.CouponsRepository;
import dal.asdc.tradecards.Service.CouponsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
public class CouponsImpl implements CouponsService {

    @Autowired
    CouponsRepository couponsRepository;

    @Override
    @Transactional
    public CouponsDao createCoupon(CouponsDTO couponsDTO) {
        CouponsDao couponsDao = new CouponsDao();

        couponsDao.setCouponName(couponsDTO.getCouponName());
        couponsDao.setCouponDesc(couponsDTO.getCouponDesc());
        couponsDao.setCouponBrand(couponsDTO.getCouponBrand());
        couponsDao.setExpiryDate(couponsDTO.getExpiryDate());
        couponsDao.setCouponValue(couponsDTO.getCouponValue());
        couponsDao.setCouponSellingPrice(couponsDTO.getCouponSellingPrice());
        couponsDao.setSold(couponsDTO.getSold());
        couponsDao.setOnline(couponsDTO.getOnline());
        couponsDao.setCouponCategory(couponsDTO.getCouponCategory());
        couponsDao.setCouponListingDate(couponsDTO.getCouponListingDate());
        couponsDao.setCouponLocation(couponsDTO.getCouponLocation());
        couponsDao.setUserid(couponsDTO.getUserid());
        couponsDao.setCategoryID(couponsDTO.getCategoryID());


        // Decoding and storing the image
        byte[] imageBytes = null;
        if (couponsDTO.getCouponImage() != null && !couponsDTO.getCouponImage().isEmpty()) {
            try {
                imageBytes = Base64.getDecoder().decode(couponsDTO.getCouponImage());
            } catch (IllegalArgumentException e) {
                e.printStackTrace();
            }
        }
        couponsDao.setCouponImage(imageBytes);


        couponsDao = couponsRepository.save(couponsDao);
        return couponsDao;
    }

    @Transactional
    public boolean deleteCouponById(int id){
        Optional<CouponsDao> coupon = couponsRepository.findById(id);
        if (coupon.isPresent()) {
            couponsRepository.delete(coupon.get());
            return true;
        } else {
            return false; // Coupon not found, deletion failed.
        }
    }

    @Transactional
    public List<CouponsDao> getAllCoupons(){
        return (List<CouponsDao>) couponsRepository.findAll();
    }
}
