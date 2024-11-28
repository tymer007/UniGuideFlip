Backend API for UniGuide, a campus navigation platform. The API powers features like dynamic marker management, and data handling for geocode, building types, photos, and descriptions. Built with a focus on scalability and performance on form submissions, and image uploads with validation for size and format. Ensured secure data transactions and seamless integration for frontend to provide a smooth user experience. The backend was developed using Node.js, Express, and MongoDB, delivering robust support for the platform's functionalities.
Website Link: https://uniguideng.com
Github Link: https://github.com/tymer007/UniGuideFlip
ENV Variables:
MONGO_URI => MongoDB Uri with Cluster Name
PORT => Port Number E.g. 1234
CLIENT_URL => Testing URL e.g. http://localhost:1234
CLOUDINARY_CLOUD_NAME => Cloudianary account name
CLOUDINARY_API_KEY => Cloudinary Api Key
CLOUDINARY_API_SECRET => Cloudinary Api Secret
JWT_SECRET => Jwt Secret for token generation
NODE_ENV => testing locally ? "development" : "production"
GMAIL_USER => Gmail Email with 2 Step Verification enabled to create App Password
GMAIL_PASS => Email App Password
