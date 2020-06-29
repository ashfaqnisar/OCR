<h1 align="center">
  <br>
  <a href="https://github.com/ashfaqnisar/ESOCR.git"><img src="https://i.imgur.com/tJ4s0sJ.png" alt="ESOCR"></a>
</h1>

<h3 align="center">Exact Sciences Optical Character Recognition</h4>

<p align="center">
    <a href="https://github.com/ashfaqnisar/ESOCR/commits/master">
    <img src="https://img.shields.io/github/last-commit/ashfaqnisar/ESOCR?style=flat-square&logo=github&logoColor=white"
         alt="GitHub last commit">
    <a href="https://github.com/ashfaqnisar/ESOCR/issues">
    <img src="https://img.shields.io/github/issues/ashfaqnisar/ESOCR?style=flat-square&logo=github&logoColor=white"
         alt="GitHub issues">
      <a href="https://github.com/ashfaqnisar/ESOCR/issues?q=is%3Aissue+is%3Aclosed">
    <img src="https://img.shields.io/github/issues-closed/ashfaqnisar/esocr?style=flat-square&logo=github&logoColor=white"
         alt="GitHub issues">
    <a href="https://github.com/ashfaqnisar/ESOCR/pulls">
    <img src="https://img.shields.io/github/issues-pr/ashfaqnisar/ESOCR?style=flat-square&logo=github&logoColor=white"
         alt="GitHub pull requests">
      <a href="https://github.com/ashfaqnisar/ESOCR/pulls?q=is%3Apr+is%3Aclosed">
    <img src="https://img.shields.io/github/issues-pr-closed/ashfaqnisar/ESOCR?style=flat-square&logo=github&logoColor=white"
         alt="GitHub pull requests">
   
</p>


<p align="center"> 
  <a href="#demo">Demo</a> •
    <a href="#demo">Problem Statement</a> •
  <a href="#objectives">Objectives</a> •
  <a href="#solution">Solution</a> •
  <a href="#features">Features</a> •
  <a href="#milestones">Milestones</a> •
  <a href="#installation">Installation</a> •
  <a href="#stack">Stack</a> 

</p>

---
## Demo
### <a href="https://esocr" target="_blank">ESOCR Frontend Demo</a> • <a href="https://github.com/ashfaqnisar/esocr-api" target="_blank">ESOCR API Repo</a> • <a href="https://github.com/ashfaqnisar/ESOCR-DATASET-GENERATOR" target="_blank">ESOCR Dataset Generator Repo</a>

## Problem Statement: 
Building a **highly accurate OCR solution** that will take **manually filled form** as an **input** and provide the **data in the digital form**. 

As the exact sciences company process thousands of the forms every week received from the fax. The data received in the form should be digitalized.  But, manually digitalizing the form would contain human error & time-consuming.  So, they would like to automate this process by placing the OCR system. The exact sciences company already has an OCR system in place but is somewhat less accurate and takes more time.


## Objectives
####  • Building an OCR system, which would be faster and accurate compared to the already present OCR system.
####  • Developing the API  in a manner that it can be easily be customized and scaled according to the requirements.
 
####  • The OCR system should also be able to handle handwritten form provided by the user.
  
####  • Ability to handle different types of file format such as the images, PDF & TIFF.

####  • The response received from the API should be displayed in a digital form.

####  • The whole project should meet the industrial coding standards.

#### • Staying in Budget, while utilizing the COTS OCR solutions.

## Solution: 

As Exact Sciences company already has an OCR system in place, we had to build a system which would be more accurate and less time consuming than the present OCR  system.  Most of the forms received by the company are in handwritten by the user. So, we had to take that constraint in mind too. We were allowed to use the COTS(Commercially Off the Shelf  ) OCR solution but we had to stay in the budget and not go overboard.

After making extensive research and chatting with different COTS OCR solutions, we were impressed with the Nanonets OCR Solution. As it was very simple and straightforward and they were using the CRNN(Convolutional Recurrent Neural Network) &  DRAM (Deep Recurrent Attention Model)  and many more to create an OCR detection model. Coming to the pricing, we would be charged by the number of API calls made to the model.

We created a model in the nanonets but in order to train the model. We required a dataset of images and we were provided with two files(Sample Form  & Blank form). To process the model, we needed over 150  files and manually filling these forms would have been a very time-effective process. 

We built <a href="https://github.com/ashfaqnisar/ESOCR-DATASET-GENERATOR" target="_blank">ESOCR Dataset Generator Repo</a>,  which would contain a script which would take data from the fake JSON and place the data over PSD and save the final output file. In this manner, we were easily able to generate around 150 images for the dataset.

Once, we uploaded the images to the nanonets, we started annotating the images one by one manually in nanonets. We then started training the model, once the model was trained. We were able to predict the text from the uploaded image.

We built an <a href="https://github.com/ashfaqnisar/ESOCR-API" target="_blank">API </a>to interact with the Nanonets API. So, if we were to send a file to the API, the file will be processed by the model & provide us with the response. The API would then beautify and store the response in firebase and upload the file to the Google Cloud. 
> Note: API  can easily be configured to upload the data to any preferred cloud.

As provided in the problem statement the data received from the OCR should be sent to a digital form. So, we started working on building the frontend for the project 
>**Note**: Later on in the call with exact sciences, was verified that they just need a pure API. But, until then, we had already built the frontend!

Coming to the front-end, we created a dashboard from which the user can upload the scanned files to the API which would then be processed and results will be provided to the user in a digital form. The user can also update the data from the digital form. 



## Features
### Handling Handwritten Font: 
As one of the main objectives of our system was the ability to detect the handwritten fonts from the form. We are able to achieve that using our ESOCR system. 
Screenshots
In order to achieve this, we had to train our model with a different type of handwritten fonts.
### Quick response time:
Screenshots of the response time
Coming to response time, we were able to process the whole document under 22 sec for this file. Time may differ based on the quality of the file,  size of the file and the type of file.

### Process OCR even with the deviated alignment of the form:
Screenshot
Even, if the form or document is a little bit misaligned the system would be able to detect the fields from the form. 

### Process multiple forms at a time:
Screenshot of processing multiple forms
We can make multiple requests to the API to process multiple forms simultaneously and increase the overall performance of the app and decrease the time required for the processing of the multiple files. 

### Simple and pleasant user interface:
Screenshots
The front end of the Esocr is very simple and straight forward and easily can be customized according to our requirements.  All of the processed forms of the user are available in the ESOCR Web App. 

### Customizable Response:
Screenshot
We can easily customize the field and also add new fields in the nanonets easily. Let's suppose if we want to add a field called "email address" in the patient information.  We can add that field in nanonets by creating a field called "patient.emailAddress" 

### Cost-Efficient Solution:
At present to extract one text field from the form,  it is cost around $0.0099. If there are 100 fields in a form it would cost $0.0099x100=$0.99/Document. In order to process around 100 documents, it would cost around $99. This cost is for creating the model, training and providing the model as an API. 

If we are daily processing around 1000 documents per day, it would cost us a  huge amount of money. But, there is a solution to this issue.  We had a call with the Nanonets sales team and after telling them all of our requirements. They would be willing to provide us with the whole model & API as a docker container which can be hosted on any preferred cloud. By doing so we can avoid recurring payments to Nanonets



### Ability to process images/PDFs on the fly using Imgix:
### Ability to update the extracted data from the web application:
As all of the processed data is available in the firebase. We can update the data and fix any wrong predictions from the form available in the ESOCR Web App.


## Milestones

#### 1. We automatically generated and manually annotated over 150 images for training the model.
#### 2. We were able to predict the handwritten text in the sample form which was sent to the API for processing. 
#### 3. We built the API which would store responses as well as data in the firestore firebase and Google cloud respectively received from the model.
#### 4. We were successful in hosting the API at Heroku.
#### 5. We built thorough documentation of the API.
#### 6. Able to make the frontend talk with the firestore database using the API as the middleman
#### 7. For the frontend, we were able to format all the different file types into JPEG's on the fly without any file conversion of the input file using the imgix.


## Installation

## Stack 










