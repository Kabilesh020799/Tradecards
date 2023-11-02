package dal.asdc.tradecards.Model.DTO;

import java.util.Date;

public class CouponsDTO {
    private int couponID;
    private String CouponName;
    private String CouponDesc;
    private String CouponBrand;
    private Date ExpiryDate;
    private int CouponValue;
    private int CouponSellingPrice;
    private boolean isSold;
    private boolean isOnline;
    private String CouponCategory;
    private Date CouponListingDate;
    private float CouponLocation;
    private int userid ;
    private int CategoryID;


    public int getCouponID() {
        return couponID;
    }

    public String getCouponName() {
        return CouponName;
    }

    public String getCouponDesc() {
        return CouponDesc;
    }

    public String getCouponBrand() {
        return CouponBrand;
    }

    public Date getExpiryDate() {
        return ExpiryDate;
    }

    public int getCouponValue() {
        return CouponValue;
    }

    public int getCouponSellingPrice() {
        return CouponSellingPrice;
    }

    public boolean getSold() {
        return isSold;
    }

    public boolean getOnline() {
        return isOnline;
    }

    public String getCouponCategory() {
        return CouponCategory;
    }

    public Date getCouponListingDate() {
        return CouponListingDate;
    }

    public float getCouponLocation() {
        return CouponLocation;
    }

    public int getUserid() {
        return userid;
    }

    public int getCategoryID() {
        return CategoryID;
    }

    public void setCouponID(int couponID) {
        this.couponID = couponID;
    }

    public void setCouponName(String couponName) {
        this.CouponName = couponName;
    }

    public void setCouponDesc(String couponDesc) {
        this.CouponDesc = couponDesc;
    }

    public void setCouponBrand(String couponBrand) {
        this.CouponBrand = couponBrand;
    }

    public void setExpiryDate(Date expiryDate) {
        this.ExpiryDate = expiryDate;
    }

    public void setCouponValue(int couponValue) {
        this.CouponValue = couponValue;
    }

    public void setCouponSellingPrice(int couponSellingPrice) {
        this.CouponSellingPrice = couponSellingPrice;
    }

    public void setSold(boolean sold) {
        this.isSold = sold;
    }

    public void setOnline(boolean online) {
        this.isOnline = online;
    }

    public void setCouponCategory(String couponCategory) {
        this.CouponCategory = couponCategory;
    }

    public void setCouponListingDate(Date couponListingDate) {
        this.CouponListingDate = couponListingDate;
    }

    public void setCouponLocation(float couponLocation) {
        this.CouponLocation = couponLocation;
    }

    public void setUserid(int userid) {
        this.userid = userid;
    }

    public void setCategoryID(int categoryID) {
        this.CategoryID = categoryID;
    }
}
