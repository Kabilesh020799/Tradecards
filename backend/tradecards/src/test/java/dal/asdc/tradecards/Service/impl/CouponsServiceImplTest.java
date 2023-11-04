package dal.asdc.tradecards.Service.impl;

import dal.asdc.tradecards.Controller.CouponsController;
import dal.asdc.tradecards.Service.CouponsService; // Import the correct CouponsService interface or class
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class CouponsServiceImplTest {
    @Mock
    private CouponsService couponsService; // Use the CouponsService interface or class

    private CouponsController couponsController;

    @BeforeEach
    public void setup() {
        couponsController = new CouponsController(couponsService); // Inject the mock service
    }

    @Test
    public void testDeleteCouponById() {
        int couponIdToDelete = 34; // Replace with a valid coupon ID.
        when(couponsService.deleteCouponById(couponIdToDelete)).thenReturn(true);

        ResponseEntity<String> response = couponsController.deleteCoupon(couponIdToDelete);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("Coupon with ID " + couponIdToDelete + " deleted successfully.", response.getBody());
    }

    @Test
    public void testDeleteCouponByIdNotFound() {
        int couponIdToDelete = 901290; // Replace with a non-existing coupon ID.
        when(couponsService.deleteCouponById(couponIdToDelete)).thenReturn(false);

        ResponseEntity<String> response = couponsController.deleteCoupon(couponIdToDelete);

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
    }
}
