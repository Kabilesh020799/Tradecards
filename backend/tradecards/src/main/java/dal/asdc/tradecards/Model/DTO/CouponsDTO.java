package dal.asdc.tradecards.Model.DTO;

import java.util.Date;

public class CouponsDTO {
    private Integer CouponID;
    private String CouponName;
    private String CouponDesc;
    private String CouponBrand;
    private Date ExpiryDate;
    private Integer CouponValue;
    private Integer CouponSellingPrice;
    private Boolean isSold;
    private Boolean isOnline;
    private String CouponCategory;
    private Date CouponListingDate;
    private Float CouponLocation;
    private Integer userid ;
    private Integer CategoryID;


    public Integer getCouponID() {
        return CouponID;
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

    public Integer getCouponValue() {
        return CouponValue;
    }

    public Integer getCouponSellingPrice() {
        return CouponSellingPrice;
    }

    public Boolean getSold() {
        return isSold;
    }

    public Boolean getOnline() {
        return isOnline;
    }

    public String getCouponCategory() {
        return CouponCategory;
    }

    public Date getCouponListingDate() {
        return CouponListingDate;
    }

    public Float getCouponLocation() {
        return CouponLocation;
    }

    public Integer getUserid() {
        return userid;
    }

    public Integer getCategoryID() {
        return CategoryID;
    }

    public void setCouponID(Integer couponID) {
        CouponID = couponID;
    }

    public void setCouponName(String couponName) {
        CouponName = couponName;
    }

    public void setCouponDesc(String couponDesc) {
        CouponDesc = couponDesc;
    }

    public void setCouponBrand(String couponBrand) {
        CouponBrand = couponBrand;
    }

    public void setExpiryDate(Date expiryDate) {
        ExpiryDate = expiryDate;
    }

    public void setCouponValue(Integer couponValue) {
        CouponValue = couponValue;
    }

    public void setCouponSellingPrice(Integer couponSellingPrice) {
        CouponSellingPrice = couponSellingPrice;
    }

    public void setSold(Boolean sold) {
        isSold = sold;
    }

    public void setOnline(Boolean online) {
        isOnline = online;
    }

    public void setCouponCategory(String couponCategory) {
        CouponCategory = couponCategory;
    }

    public void setCouponListingDate(Date couponListingDate) {
        CouponListingDate = couponListingDate;
    }

    public void setCouponLocation(Float couponLocation) {
        CouponLocation = couponLocation;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
    }

    public void setCategoryID(Integer categoryID) {
        CategoryID = categoryID;
    }
}
