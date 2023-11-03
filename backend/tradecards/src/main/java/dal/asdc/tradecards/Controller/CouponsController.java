package dal.asdc.tradecards.Controller;

import dal.asdc.tradecards.Model.DAO.CouponsDao;
import dal.asdc.tradecards.Model.DTO.CouponsDTO;

import dal.asdc.tradecards.Service.CouponsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class CouponsController {

    @Autowired
    CouponsService couponsService;

    @PostMapping("/create-coupons")
    public ResponseEntity<String> createCoupon(@RequestBody CouponsDTO couponsDTO) {
        try {
            CouponsDao createdCoupon = couponsService.createCoupons(couponsDTO);
            if (createdCoupon != null) {
                return new ResponseEntity<>("Coupon created successfully", HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Failed to create the coupon", HttpStatus.INTERNAL_SERVER_ERROR);
            }
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to create the coupon", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
