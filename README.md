# Backend API for UniGuide  

The Backend API for UniGuide powers the campus navigation platform, providing essential functionalities such as:  
- **Dynamic Marker Management**: Add, update, and delete location markers seamlessly.  
- **Data Handling**: Manage geocode, building types, photos, and descriptions efficiently.  
- **Form Submissions**: Support for user inputs with robust validation.  
- **Image Uploads**: Validate image size and format for a streamlined user experience.  

Designed with a focus on scalability and performance, the API ensures secure data transactions and smooth integration with the frontend, delivering a seamless navigation experience for users.  

### **Technologies Used**  
- **Backend Framework**: Node.js, Express  
- **Database**: MongoDB  
- **Other Services**: Cloudinary for image uploads  

### **Live Platform**  
[Visit UniGuide](https://uniguideng.com)

### **Postman Documentation**  
[Documentation Link](https://www.postman.com/tymer007/uniguideflip/documentation/wc2srki/uniguide?workspaceId=7b934335-f6f3-4b96-b64e-1dac3c871185)  

---

## **Environment Variables**  

To run this project, you will need to add the following environment variables to your `.env` file:  

| Variable Name            | Description                                   | Example Value                  |  
|---------------------------|-----------------------------------------------|--------------------------------|  
| `MONGO_URI`               | MongoDB URI with cluster name                | `mongodb+srv://...`           |  
| `PORT`                    | Port number for the server                   | `1234`                         |  
| `CLIENT_URL`              | Client application URL for testing           | `http://localhost:3000`       |  
| `CLOUDINARY_CLOUD_NAME`   | Cloudinary account name                      | `my-cloud-name`               |  
| `CLOUDINARY_API_KEY`      | Cloudinary API key                           | `1234567890`                  |  
| `CLOUDINARY_API_SECRET`   | Cloudinary API secret                        | `abcdef123456`                |  
| `JWT_SECRET`              | Secret key for JWT token generation          | `mysecretkey`                 |  
| `NODE_ENV`                | testing locally ? "development":"production" | `development` or `production` |  
| `GMAIL_USER`              | Gmail email with 2-step verification enabled | `example@gmail.com`           |  
| `GMAIL_PASS`              | Gmail App password                           | `app-password`                |  

---

## **How to Run**  

1. Clone the repository:  
   ```bash  
   git clone https://github.com/tymer007/UniGuideFlip.git  
   cd UniGuideFlip  
   ```  

2. Install dependencies:  
   ```bash  
   npm install  
   ```  

3. Add the `.env` file with the required variables.  

4. Start the server:  
   ```bash  
   npm run dev  
   ```  

5. Access the API at your configured `PORT`.  

---

Enjoy seamless campus navigation with UniGuide! 🌟