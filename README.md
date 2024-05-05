# React Image Filter App Documentation

**Overview**  
This documentation provides an overview of a React image filter app developed using useState and useEffect hooks. The app utilizes the Instagram API to apply direct filters to images along with five custom filters.

**Features**  
- Allows users to upload images.  
- Applies Instagram-like filters to the uploaded images.  
- Provides five custom filters for image enhancement.  
- Simple and intuitive user interface.

**Technologies Used**  
- React: Frontend framework for building user interfaces.  
- useState Hook: To manage state within functional components.  
- useEffect Hook: To perform side effects in functional components.  
- Instagram API: For applying direct filters to images.  
- Custom CSS: For styling the user interface.

**Components**  
1. **App Component**  
   - Main component rendering the entire application.  
   - Manages state for uploaded images and selected filters.  
   - Utilizes useEffect hook to fetch Instagram filters on component mount.
   
2. **ImageUpload Component**  
   - Responsible for uploading images from the user's device.  
   - Utilizes useState hook to manage the state of uploaded images.
   
3. **FilterGallery Component**  
   - Displays a gallery of available filters fetched from the Instagram API.  
   - Allows users to select filters for applying to uploaded images.
   
4. **ImageDisplay Component**  
   - Renders the uploaded image with selected filters applied.  
   - Utilizes CSS filters for applying custom filters.  
   - Updates the displayed image based on user-selected filters.

**Installation and Setup**  
1. Clone the repository from GitHub.  
2. Navigate to the project directory.  
3. Run `npm install` to install dependencies.  
4. Run `npm start` to start the development server.  
5. Access the application in your browser at [http://localhost:3000](http://localhost:3000).

**Usage**  
1. Upload an image using the provided upload button.  
2. Select a filter from the filter gallery.  
3. View the uploaded image with the selected filter applied.  
4. Optionally, apply custom filters for further image enhancement.

**Development**  
- The application can be extended by adding more custom filters or integrating additional image manipulation features.  
- Improve the user interface by adding animations or transitions.  
- Enhance error handling and user feedback for a smoother experience.

**Conclusion**  
The React image filter app provides a simple yet powerful tool for applying Instagram-like filters and custom enhancements to uploaded images. Leveraging useState and useEffect hooks along with the Instagram API, the app delivers an intuitive user experience for image editing and enhancement.
