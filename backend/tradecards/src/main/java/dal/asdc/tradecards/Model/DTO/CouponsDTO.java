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
    private String couponImage;

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

    public String getCouponImage() {
        return couponImage;
    }

    public void setCouponName(String couponName) {
        this.couponName = couponName;
    }

    public void setCouponDesc(String couponDesc) {
        this.couponDesc = couponDesc;
    }

    public void setCouponBrand(String couponBrand) {
        this.couponBrand = couponBrand;
    }

    public void setExpiryDate(Date expiryDate) {
        this.expiryDate = expiryDate;
    }

    public void setCouponValue(int couponValue) {
        this.couponValue = couponValue;
    }

    public void setCouponSellingPrice(int couponSellingPrice) {
        this.couponSellingPrice = couponSellingPrice;
    }

    public void setSold(boolean sold) {
        this.sold = sold;
    }

    public void setOnline(boolean online) {
        this.online = online;
    }

    public void setCouponCategory(String couponCategory) {
        this.couponCategory = couponCategory;
    }

    public void setCouponListingDate(Date couponListingDate) {
        this.couponListingDate = couponListingDate;
    }

    public void setCouponLocation(float couponLocation) {
        this.couponLocation = couponLocation;
    }

    public void setUserid(int userid) {
        this.userid = userid;
    }

    public void setCategoryID(int categoryID) {
        this.categoryID = categoryID;
    }

    public void setCouponImage(String couponImage) {
        this.couponImage = couponImage;
    }
}
