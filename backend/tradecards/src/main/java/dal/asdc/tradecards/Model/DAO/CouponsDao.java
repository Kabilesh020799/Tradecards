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
    private int CouponID;

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
    private int CouponValue;

    @Column(name = "CouponSellingPrice")
    private int CouponSellingPrice;

    @Column(name = "isSold")
    private boolean isSold;

    @Column(name = "isOnline")
    private boolean isOnline;

    @Column(name = "CouponCategory")
    private String CouponCategory;

    @Column(name = "CouponListingDate")
    @Temporal(TemporalType.TIMESTAMP)
    private Date CouponListingDate;

    @Column(name = "CouponLocation")
    private float CouponLocation;

    @Column(name = "userid")
    private int userid;

    @Column(name = "CategoryID")
    private int CategoryID;

    @Column(name = "CouponImage")
    @Lob
    private byte[] CouponImage;

    public CouponsDao() {
    }
}
