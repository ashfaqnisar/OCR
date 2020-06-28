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
  <a href="#about">About</a> •
  <a href="#milestones">Milestones</a> •
  <a href="#installation">Installation</a> •
  <a href="#objective">Objectives</a> •
  <a href="#features">Features</a> •
  <a href="#stack">Stack</a> 

</p>

---
## Demo
### <a href="https://esocr" target="_blank">ESOCR Frontend Demo</a> • <a href="https://github.com/ashfaqnisar/esocr-api" target="_blank">ESOCR API Repo</a> • <a href="https://github.com/ashfaqnisar/ESOCR-DATASET-GENERATOR" target="_blank">ESOCR Dataset Generator Repo</a>

## About
### Problem Statement: 
Building a **highly accurate OCR solution** that will take **manually filled form** as an **input** and provide the **data in the digital form**. 

As the exact sciences company process thousands of the forms every week recieved from the fax. The  data recieved in the form should be digitalized.  But, manually digitalizing the form would contain human error & time consuming.  So, they would like to automate this process by placing ocr system. The exact sciences already has an ocr system in place but is some what less accurate and takes more time.

### Solution: 
As exact sciences already has an OCR system in place, we had to build an system which would be more accurate  and less time consuming  than the present OCR  system.  Mostly of the forms received by the company are in handwritten by the user. So, we had to take that constraint in mind too. We were allowed to use the COTS(Commercially Off the Shelf  ) OCR solution but we had to stay in the budget and not go overboard : ).

After making extensive research and chatting with different COTS OCR solutions, we were impressed with the Nanonets OCR Solution. As, it was very simple and straightforward and they were using the CRNN(Convolutional Recurrent Neural Network) &  DRAM (Deep Recurrent Attention Model)  and many more to create an OCR detection model. Coming to the pricing, we would be charged by the number of API calls made to the model.

We created an model in the nanonets,  but inorder to train the model. We required a dataset of images and we were provided with two files(Sample Form  & Blank form). To process the model, we needed over 150  files and manually filling these forms would have been a very time effective process. 

We built <a href="https://github.com/ashfaqnisar/ESOCR-DATASET-GENERATOR" target="_blank">ESOCR Dataset Generator Repo</a>,  which would contain a script which would take data from the fake JSON and place the data over PSD and save the final output file. In this manner, we were easily able to generate around 150 images for the dataset.

Once, we uploaded the images to the nanonets, we started annotating the images one by one manually in nanonets. We then started training the model, once the model was trained. We were able to predict the text from the uploaded image.

We built an <a href="https://github.com/ashfaqnisar/ESOCR-API" target="_blank">API </a>to interact with the Nanonets API. So, if we were to send an file to the API, the file will be processed by the model & provide us the response. The API would then beautify and store the response in firebase and upload the file to the Google Cloud. 
> Note: API  can easily be configured to upload the data to any cloud.

As, provided in problem statement the data recieved from the OCR should be sent to a digital form. So, we started working on building the frontend for the project 
>**Note**: Later on in the call with exact sciences, was verified that they just need an pure API. But, until then, we had already built the frontend!

Coming to the front-end, we created a dashboard from which the user can upload the scanned files to the API which would then be processed and results will be provided to the user  in a digital form. The user can also update the data from the digital form. In the dashboard, the users can also see the different statistics about the number of forms which are processed.


## Milestones
