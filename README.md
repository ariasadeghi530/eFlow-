# eFlow

## About this app
- This is a SERN stack application, allowing users to post electronics, apparel, and automotive items for sale, along with an image, and inquire other users about their items. Just create an account and you can browse all items currently listed, and even add some yourself!

## How to use this app

 ### Login/Sign Up
    - When going to the site, unless you were previously logged in, you will be asked to login and register.
    - Input the required information for registration and then sign in with your credentials.
    - If you forget your password, clicking on Forgot Account Info will allow you to enter the email address of your account, and it will send you your account name and a reset link to reset your password.

 ### Home/Sidenav
    - On the home page, you can see a few items recently listed, as well as hot items (items that have been inquired most).
    - In the navbar, you can search for items based on the name, or description, or open the sidebar to see account info and browse based on categories.
    - Under your account, you can view and then edit your profile and postings, see any messages you have, contact support, post a new listing, or logout.
    - Under browse you can see all items in all categories, or filter based on one of the three categories. 

### Profile
    - In your profile, you can update your account info, post a new listing, and view, edit, and delete any current listings.

### Categories
    - In any of the categories, there are cards containing all items that fall under that category, showing the name, asking price, and any image uploaded. 
    - Near the top of the items, there is a breadcrumb to take you back to the home page.

### Products
    Product page contains: 
    - A breadcrumb to take you back to the category of the item. 
    - Any image the user uploaded
    - Name of the item
    - Item conditiion
    - Asking price
    - Inquire button, so you can start a private message with the original poster
    - The county location of the item
    - A description
    - Any related products

### Messages
    - Any inquiries by other users, or any that you have done will appear here, including the other users username as well the name of the item inquired about.
    - Clicking on the chat at the top will load the chat were you can see old messages and send a new one. 


## Neat Features
- User authentication built out using md5 encryption.
- Password reset built out with token generator.
- Front end rendering done with Express-React-Views, being done server-side instead of client-sided.
- Private messaging built out with unique tokens for chat ids. 
- Image uploads saved on Firebase, indexed in our db.
- Front end design based on StockX. 