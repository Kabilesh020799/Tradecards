package dal.asdc.tradecards.Model.DAO;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Entity
@Getter
@Setter
@Table(name = "coupon")
public class CouponsDao {
    @Id
    @Column(name = "CouponID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer CouponID;

    @Column(name = "CouponName")
    private String CouponName;

    @Column(name = "CouponDesc")
    private String CouponDesc;

    @Column(name = "CouponBrand")
    private String CouponBrand;

    @Column(name = "ExpiryDate")
    @Temporal(TemporalType.TIMESTAMP)
    private Date ExpiryDate;

    @Column(name = "CouponValue")
    private Integer CouponValue;

    @Column(name = "CouponSellingPrice")
    private Integer CouponSellingPrice;

    @Column(name = "isSold")
    private Boolean isSold;

    @Column(name = "isOnline")
    private Boolean isOnline;

    @Column(name = "CouponCategory")
    private String CouponCategory;

    @Column(name = "CouponListingDate")
    @Temporal(TemporalType.TIMESTAMP)
    private Date CouponListingDate;

    @Column(name = "CouponLocation")
    private Float CouponLocation;

    @Column(name = "userid")
    private Integer userid;

    @Column(name = "CategoryID")
    private Integer CategoryID;

    public CouponsDao() {
    }

    public CouponsDao(String CouponName, String CouponDesc, String CouponBrand, Date ExpiryDate, Integer CouponValue,
                     Integer CouponSellingPrice, Boolean isSold, Boolean isOnline, String CouponCategory,
                     Date CouponListingDate, Float CouponLocation, Integer userid, Integer CategoryID) {
        this.CouponName = CouponName;
        this.CouponDesc = CouponDesc;
        this.CouponBrand = CouponBrand;
        this.ExpiryDate = ExpiryDate;
        this.CouponValue = CouponValue;
        this.CouponSellingPrice = CouponSellingPrice;
        this.isSold = isSold;
        this.isOnline = isOnline;
        this.CouponCategory = CouponCategory;
        this.CouponListingDate = CouponListingDate;
        this.CouponLocation = CouponLocation;
        this.userid = userid;
        this.CategoryID = CategoryID;
    }
}
