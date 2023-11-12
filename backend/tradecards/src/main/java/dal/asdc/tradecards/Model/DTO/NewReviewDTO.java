package dal.asdc.tradecards.Model.DTO;

public class NewReviewDTO {
    private Float rating;
    private String content;

    private int reviewerUserID;

    private int reviewedUserID;

    public int getReviewerUserID() {
        return reviewerUserID;
    }

    public void setReviewerUserID(int reviewerUserID) {
        this.reviewerUserID = reviewerUserID;
    }

    public int getReviewedUserID() {
        return reviewedUserID;
    }

    public void setReviewedUserID(int reviewedUserID) {
        this.reviewedUserID = reviewedUserID;
    }

    public NewReviewDTO() {
    }

    public NewReviewDTO(Float rating, String content) {
        this.rating = rating;
        this.content = content;
    }

    public Float getRating() {
        return rating;
    }

    public void setRating(Float rating) {
        this.rating = rating;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}