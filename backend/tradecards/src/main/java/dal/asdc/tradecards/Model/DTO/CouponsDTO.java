package dal.asdc.tradecards.Model.DTO;

import java.util.Date;

public class CouponsDTO {
    private String couponName;
    private String couponDesc;
    private String couponBrand;
    private Date expiryDate;
    private int couponValue;
    private int couponSellingPrice;
    private boolean sold;
    private boolean online;
    private String couponCategory;
    private Date couponListingDate;
    private float couponLocation;
    private int userid ;
    private int categoryID;

    public String getCouponName() {
        return couponName;
    }

    public String getCouponDesc() {
        return couponDesc;
    }

    public String getCouponBrand() {
        return couponBrand;
    }

    public Date getExpiryDate() {return expiryDate;}

    public int getCouponValue() {
        return couponValue;
    }

    public int getCouponSellingPrice() {
        return couponSellingPrice;
    }

    public boolean getSold() {
        return sold;
    }

    public boolean getOnline() {
        return online;
    }

    public String getCouponCategory() {
        return couponCategory;
    }

    public Date getCouponListingDate() {
        return couponListingDate;
    }

    public float getCouponLocation() {
        return couponLocation;
    }

    public int getUserid() {
        return userid;
    }

    public int getCategoryID() {
        return categoryID;
    }
}
