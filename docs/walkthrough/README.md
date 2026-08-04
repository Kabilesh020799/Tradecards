# TradeCards two-minute walkthrough

This walkthrough presents the original TradeCards interface and summarizes the
main engineering flows implemented in the project.

The homepage combines text search, category navigation, location filtering, and
recommended listings. Selecting a coupon opens a detailed marketplace view with
the original price, selling price, description, seller identity, reputation, and
actions to review or contact the seller.

Authenticated users can create listings by supplying the coupon details, price,
category, location, description, and image. They can then manage posted coupons
and account details through the user-profile experience. Review integration lets
buyers rate sellers, giving future buyers additional context before arranging an
exchange.

The messaging workflow connects buyers and sellers from a coupon page. Firebase
Authentication establishes chat identity, while Cloud Firestore stores and
synchronizes conversations in real time. The dedicated messages view keeps active
seller conversations accessible inside the application.

Behind the interface, the React client exchanges REST and JSON requests with
Spring Boot controllers. Controllers delegate business behavior to services,
which use Spring Data repositories and JPA/Hibernate to persist application data
in MySQL. JWTs secure backend sessions, and an external SMTP service supports
account verification and password recovery.

The repository also contains automated backend tests, a GitLab CI pipeline, and
before-and-after Designite reports used to assess architecture, design, and
implementation smells during refactoring.

> The video uses authentic screenshots preserved with the project. No public demo
> credentials or active hosted environment are currently available.
