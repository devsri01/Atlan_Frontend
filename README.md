
Calculated Page Load Time using Google Lighthouse Tool


![Screenshot (613)](https://github.com/devsri01/Atlan_Frontend/assets/77187663/cc4b7aae-ee24-4b4f-a957-e104020ed96f)




Technologies Used:
1. ReactJS:
   A JavaScript library for dynamic user interfaces, ReactJS efficiently updates and renders components in response to data changes, enabling the creation of interactive web applications.
2. Axios:
   Handling API calls is streamlined with the Axios package, simplifying the process of making HTTP requests and managing responses for smoother communication with external servers.
3. xlsx:
   The xlsx package is employed for extracting and saving table data as an Excel sheet. This library enhances tabular data manipulation, offering a convenient solution for data storage and analysis.
4. react-apexcharts:
   The react-apexcharts package transforms tabular data into visual charts, providing a graphical representation for comprehensive data analysis.
These technologies collectively contribute to a streamlined and efficient software solution, enhancing the overall user experience and enabling advanced data analysis capabilities.



Functionalities Implemented


Toggling function implementation for each word typed.

![image](https://github.com/devsri01/Atlan_Frontend/assets/77187663/1afb1dff-a300-4409-9d7c-d6723078608e)


Made an input box which would suggest query every-time user starts to type any word. Works in real time. User can also feed the query by clicking on the shown text

![image](https://github.com/devsri01/Atlan_Frontend/assets/77187663/d3a8e7fe-e999-404d-9b1f-dc2eda6e89b5)



Included total Dataset to help user select proper query if they get struck.
This Dataset can Include all the queries on SQL according to user’s requirements.




![image](https://github.com/devsri01/Atlan_Frontend/assets/77187663/b2bc8729-571f-4fdb-abe3-a39b4f90bfa9)




Facility to generate queries from normal statements, this box would convert the normal words of person to SQL queries as per their requirements. Code has been implemented but could not work due to unavailability of paid ChatGPT API key.


 ![image](https://github.com/devsri01/Atlan_Frontend/assets/77187663/6fdc4a34-a950-468d-afb2-dd286f3047fb)

 


 
Table selection after query has been selected.

![image](https://github.com/devsri01/Atlan_Frontend/assets/77187663/bfea6578-ea73-4605-88af-49c9ea188d80)


 
After selection, table data is shown and functionality has been implemented to export its data to Excel sheet.
Using xlsx Package.

![image](https://github.com/devsri01/Atlan_Frontend/assets/77187663/194dd0d2-d0a7-436c-94f4-12221643ec0d)



Chart is also implemented so as to show the data for visual analysis, the user can view the data analysis in 6 different formats – 
•	Bar

•	Line

•	Area

•	Radar

•	Scatter

•	Heatmap


![image](https://github.com/devsri01/Atlan_Frontend/assets/77187663/8a0d38f6-778a-4ae4-9c9b-b79a55193232)


Optimisations used
1.	Although the likelihood of mobile device usage for this application is low, the website remains highly responsive. Component styling utilizes window width and percentages to ensure adaptability.
2.	The website is hosted on Netlify, which is a leading cloud platform, offering easy deployment, global CDN, and automatic SSL for secure and performant hosting. With built-in continuous integration, serverless functions, and forms handling, Netlify streamlines the development workflow and scales seamlessly for web applications.
3.	The code structure has been meticulously maintained, employing minimal reusable code and adopting a structured folder-naming approach in the 'src' directory. This not only enhances code clarity but also facilitates ease of understanding for developers navigating through 'components,' 'Screens,' and 'datasets' directories.
4.	A new tab has been implemented for selecting and displaying table data, effectively reducing page load time. This enhancement optimizes user experience by compartmentalizing the data presentation, contributing to quicker loading and smoother navigation.
5.	The page was crafted with minimal dependencies.


Brownie Additions: An Export tab is provided, allowing the user to export the values of the entire table to an Excel sheet whenever the column count reaches a higher value.
