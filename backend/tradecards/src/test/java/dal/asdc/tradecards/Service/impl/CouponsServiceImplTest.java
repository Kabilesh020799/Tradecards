package dal.asdc.tradecards.Service.impl;

import dal.asdc.tradecards.Controller.CouponsController;
import dal.asdc.tradecards.Model.DAO.CouponsDao;
import dal.asdc.tradecards.Model.DTO.CouponsDTO;
import dal.asdc.tradecards.Repository.CouponsRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;

import java.util.Date;

import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class CouponsServiceImplTest {
    @Mock
    private CouponsImpl couponsService;
    private CouponsController couponsController;

    @BeforeEach
    public void setup() {
        couponsController = new CouponsController(couponsService);
    }

    @Test
    @DisplayName("testing delete coupon by ID")
    public void testDeleteCouponById() {
        int couponIdToDelete = 34;
        when(couponsService.deleteCouponById(couponIdToDelete)).thenReturn(true);

        ResponseEntity<String> response = couponsController.deleteCoupon(couponIdToDelete);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("Coupon with ID " + couponIdToDelete + " deleted successfully.", response.getBody());
    }

    @Test
    @DisplayName("testing delete coupon by providing non-existent ID")
    public void testDeleteCouponByIdNotFound() {
        int couponIdToDelete = 901290;
        when(couponsService.deleteCouponById(couponIdToDelete)).thenReturn(false);

        ResponseEntity<String> response = couponsController.deleteCoupon(couponIdToDelete);

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
    }

    @Test
    @DisplayName("testing coupon create")
    public void testCreateCoupon() {
        CouponsDTO sampleCouponDTO = new CouponsDTO();
        String sampleImageBase64 = "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";

        sampleCouponDTO.setCouponName("Test Coupon");
        sampleCouponDTO.setCouponDesc("This is a test coupon");
        sampleCouponDTO.setCouponBrand("Test Brand");
        sampleCouponDTO.setExpiryDate(new Date());
        sampleCouponDTO.setCouponValue(100);
        sampleCouponDTO.setCouponSellingPrice(500);
        sampleCouponDTO.setSold(false);
        sampleCouponDTO.setOnline(true);
        sampleCouponDTO.setCouponCategory("Test Category");
        sampleCouponDTO.setCouponListingDate(new Date());
        sampleCouponDTO.setCouponLocation(123.456F);
        sampleCouponDTO.setUserid(123);
        sampleCouponDTO.setCategoryID(456);
        sampleCouponDTO.setCouponImage(sampleImageBase64);

        when(couponsService.createCoupon(any(CouponsDTO.class))).thenReturn(new CouponsDao());

        ResponseEntity<String> response = couponsController.createCoupon(sampleCouponDTO);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertNotNull(response.getBody());
    }

    @Test
    @DisplayName("testing get coupon by ID")
    public void testGetCouponById() {
        CouponsRepository couponsRepository = Mockito.mock(CouponsRepository.class);

        CouponsDao sampleCoupon = new CouponsDao();
        sampleCoupon.setCouponID(1); // Coupon with ID 1
        sampleCoupon.setCouponName("Sample Coupon");

        Mockito.when(couponsRepository.findById(1)).thenReturn(java.util.Optional.of(sampleCoupon));

        CouponsImpl couponsService = new CouponsImpl(couponsRepository);

        CouponsDao retrievedCoupon = couponsService.getCouponById(1);

        assertNotNull(retrievedCoupon);
        assertEquals(1, retrievedCoupon.getCouponID());
        assertEquals("Sample Coupon", retrievedCoupon.getCouponName());
    }

    @Test
    @DisplayName("testing get coupon by providing non existent ID")
    public void testGetCouponById_NullResponse() {
        CouponsRepository couponsRepository = Mockito.mock(CouponsRepository.class);

        Mockito.when(couponsRepository.findById(1)).thenReturn(java.util.Optional.empty());

        CouponsImpl couponsService = new CouponsImpl(couponsRepository);

        CouponsDao result = couponsService.getCouponById(1);

        assertNull(result);
    }

    @Test
    @DisplayName("testing update coupon")
    public void testUpdateCoupon() {
        CouponsRepository couponsRepository = Mockito.mock(CouponsRepository.class);

        CouponsDao sampleCoupon = new CouponsDao();
        sampleCoupon.setCouponID(1); // Coupon with ID 1

        CouponsDao updatedCoupon = new CouponsDao();
        updatedCoupon.setCouponID(1);
        updatedCoupon.setCouponName("Updated Coupon");
        updatedCoupon.setCouponDesc("Updated Description");

        Mockito.when(couponsRepository.findById(1)).thenReturn(java.util.Optional.of(sampleCoupon));

        Mockito.when(couponsRepository.save(Mockito.any(CouponsDao.class))).thenReturn(updatedCoupon);

        CouponsImpl couponsService = new CouponsImpl(couponsRepository);

        CouponsDao result = couponsService.updateCoupon(1, updatedCoupon);

        assertNotNull(result);
        assertEquals(1, result.getCouponID());

        assertEquals("Updated Coupon", result.getCouponName());
        assertEquals("Updated Description", result.getCouponDesc());

        Mockito.verify(couponsRepository, Mockito.times(1)).save(Mockito.any(CouponsDao.class));
    }

    @Test
    @DisplayName("testing update coupon by providing non existent ID")
    public void testUpdateCoupon_NonExistentId() {
        CouponsRepository couponsRepository = Mockito.mock(CouponsRepository.class);

        Mockito.when(couponsRepository.findById(1)).thenReturn(java.util.Optional.empty());

        CouponsImpl couponsService = new CouponsImpl(couponsRepository);

        CouponsDao updatedCoupon = new CouponsDao();
        updatedCoupon.setCouponName("Updated Coupon");
        updatedCoupon.setCouponDesc("Updated Description");

        CouponsDao result = couponsService.updateCoupon(1, updatedCoupon);

        assertNull(result);
    }
}
