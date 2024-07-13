// i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          // nav link
          'My app' : 'My app',
          'Switch Language': 'العربي',
          'Home' : 'Home',
          'Orders': 'My Orders',
          'noOrders': 'There is no orders yet!',
          'noAppointments': 'There is no appointments yet!',
          'Visits': 'Home visits',
          'Appointments': 'Appointments',
          'Services' : 'Services',
          'About' : 'About Us',
          'Results' : 'Results',
          'Contact Us' : 'Contact Us',
          'Reserve' : 'Reserve',
          'Login' : 'Login',
          'Create Account' : 'Create Account',
          'ApplyJob' :'Job Apply',
          'Apply' :'Apply',
          'chooseCv' :'Upload Your CV',
          'applyForJob' :'Apply for job',
          'recevidYourRequest' :'We have recieved your request successfully, will contact you',
          'uploaded' :'Uploaded',

          // login page
          'LoginPage' : 'Login',
          'help' : 'Help',
          'errorMsgLogin'  :'Wrong Password' ,
          'logOut' :'Log Out',
          'pls' :'please login first',

          // there is contact us in the navbar and here
          // 'Contact Us' : 'Contact Us',
          // 'Login' : 'تسجيل الدخول',

          'loginPara':'Get the best medical care with the Royal Medical Analysis Laboratory',
          'tasaphah' : 'Browse Now!',
          'hello'  : 'Hello',
          'password'  : 'Password',
          'EmailLogin'  : 'Email',
          'forgetPassword'  : 'Forget Password ?',
          'createNewAccount'  : 'Create New Account',

          // register page
          'registerPage' : 'Register',
          'createNewAccount' : 'Create New Account',
          'createAccount' : 'Create Account',
          'errorMsg' :'This Account Already Exists',
          'loading' : 'loading...',
          "errorMessageName": "Enter the first three names",
          "errorMessageNamemin": "Enter at least three names",
          "errorPhoneRequired": "Phone is required",
          "errorPasswordRequired": "Password is required",
          "errorPasswordMismatch": "Passwords do not match",
          "errorPasswordComplexity": "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character, and be at least 8 characters long",
          // there is contact us in the navbar and here
          // 'createNewAccount'  : 'Create New Account',
          // 'tasaphah' : 'Browse Now!',
          'name' : 'Name*',
          'phone' : 'Phone Number*',
          'address' : 'Address*',
          'Emailregister'  : 'Eamil*',
          'passwordRegister'  : 'Password*',
          'rePassword' : 'Password Confirm*',

          // profile page
          'Profile' : 'Personal Profile',
          'personalInfo' : 'Personal Info',
          'Address' : 'Address',
          'file' : 'File',
          'Name' : 'Name',
          'Phone' : 'Phone',
          'email1' :'Email',
          'age' :'Age',

          




          // services page
          'tahalilAndBaqat':'Tahalil And Baqat',
          'ElbahsAnTahalih' : 'Search for Tahalil',
          'UploadWasfa':'Upload a prescription',
          'Baqat' : 'Baqat',
          'SAR' : 'SAR',
          // will change according the card
          'Enzem':'Phosphokinase enzyme',
          'heartEnzem':'Heart enzymes - requested  when feeling chest pain',
          'price' : '250 SAR',
          'addToCar':'Add To Cart',
          'tahalilhLists' : 'Tahalil Lists',
          'services' : 'Services',
          'finish' : 'Finish',

          // home page 
          'welcome' : 'Welcome to Royal Diagnostic Laboratories',
          'welcome2' : 'Your service reflects our vision',
          'buttonHome' : 'Discover More !',
          'elafrad' : 'Individuals',
          'companies' :'Companies',
          'tahalilElgezaa' : 'Food analyses',
          'araClients' : 'Clients Opinion',
          'torki' : 'Torki abdelrahman',
          "yourMsg": "Message Content",
          'lorem' : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',

          'technical' : 'Basic Royal Packages',
          'technical2' : 'Royal specialty packages',
          'technical3' : 'Corporate and home care packages',

          

          'techLorem' : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          'waterAnalysis':'Water Analysis',
          'pharmaAnalysis' : 'Pharma Analysis',
          'recipeMedical' : 'Recipe Medical',
          'chooseFileRecipe' : 'Please Uploade file',
          'fileUploadedSuccessfully' : 'The prescription has been sent successfully. We will contact you',
          'bloodAnalysis' : 'Medical tests',
          'homeVisit':'Home Visit',
          'Branches':'Branches',
          'Insurances':'Insurances',
          'consultation':'Consultation',
          'Vaccinations':'Vaccinations',

            // Download the medical prescription
            'medicalPrescription' : 'Download the medical prescription',
            "imageLabel": "Upload Image",
            "notesLabel": "Notes",
            "chooseFile": "Choose File",
           "uploadBtn": "Upload",

           //  Services

           'servicesp1' : 'Services / Blood Analysis',
           'servicesp2' : 'Date : 2/8/2024',
           'servicesp3' : 'Service : Done',

           'updloadPdf' : 'Upload Pdf',

          //  Home visit
          'homeVisit' : 'Home visit',
          'visitNumber' : 'Search by visit number',
          'notFoundVisit' : 'No home visits found yet!' ,
          'reserverNow' : 'Reserver Now!',

          // about Page 
          'aboutUs' : 'About Royal Laboratories',
          // 'AboutRoyal' : 'About Royal Laboratories',
          'firstPara' : 'Royal Diagnostic Laboratories is one of the private medical laboratories in the Kingdom of Saudi Arabia, which provides diagnostic laboratory services and pathological tests to the medical community in the Kingdom of Saudi Arabia.',
          'readeBtn' :'Read More!',
          'ourVision' : 'Our Vision' ,
          'aboutUsHeading' : 'Royal Diagnostic Laboratories' ,
          'aboutUsParagraph1' : 'We strive to be graduates of medical laboratories that rely on the production of ions with modern development and technologies in the field of laboratory medical laboratories.',
          'docName' : 'Dr. Ahmed Mohamed Hegazy ',
          'doc1':'Assistant Professor of Hematology & Blood Transfusion at Prince Sattam bin Abdulaziz University.',
          'doc121':'Laboratory medicine consultant.',
          'doc2':'Associate clinical research fellow at King Abdullah International Medical Research Center - National Guard.',
          'doc3':'Founder & CEO of Royal Laboratories.   ',
          'doc4':'CEO of the Saudi Society for Coagulation Research.',
          'doc5':'He holds a master’s degree in blood, organ and stem cell transfusion medicine from the University of Bristol, Britain',
          'doc6':'Doctorate in Clinical Medicine (specializing in Hematology and Immunology) from Imperial College London, in cooperation under supervision with the University of Oxford - Britain.',
          'doc7':'Higher Education Fellowship - Britain.',
          'doc8':'He has more than 100 research papers published in highly rated, peer-reviewed journals internationally.',
          'doc9':'Editor in a number of international scientific journals.',
          'doc10':'An international Saudi speaker at many of the world’s leading conferences in the same specialty',





          'aboutUsParagraph2' : 'We strive to be graduates of medical laboratories that work on the final appearance of high-quality laboratory services that are in line with community requirements and keep up with the latest details.' ,
          'secPara' : 'Expanding the scope of our services throughout the Kingdom with high quality and improving services.',
          'after' : 'This vision is achieved through:' ,
          'firstLi' : 'The commitment of our leaders and employees to our mission and core values.',
          'secondLi' : 'Providing the ideal environment during the work environment.',
          'theThirdLi' : 'For innovative application of new technologies.',
          'ourMission' : 'Our Mission' ,
          'thirdPara' : 'Providing high-quality laboratory diagnostic information to help improve the health and well-being of the communities we serve',
          'firLi' : 'This vision is achieved through:',
          'secLi' : 'Providing high-quality medical laboratory services using the latest technologies.Emphasis on good treatment   and empathy with patients, in addition to professional expertise.',
          'thirdLi' : 'The relentless pursuit of accuracy in results, responsiveness to our customers’ needs, and speed of service',
          'fourthLi' : 'Acquire, disseminate and apply knowledge through the innovative use of technology.',
          'fifthLi' : 'Create and expand collaborative professional partnerships.',

          'ourMsg' : 'Our message' ,
          'ourMsg1' : 'Providing distinguished medical diagnostic laboratory services of high quality' ,
          
          'ourValue' : 'Our Value' ,
          'ourValue1' : 'Safety - High quality - Loyalty - Efficiency - Continuous development' ,

          'Ourgoals' : 'Our goals',
          'Ourgoals1' : 'Expanding patient access through innovation in Saudi Arabia',
          'Ourgoals2' : 'Obtaining local and international accreditations for all branches',
          'Ourgoals3' : 'Introducing innovative tests, services and sections',
          'Ourgoals4' : 'To develop process improvement projects',
          'Ourgoals5' : 'Improving the performance of the administrative, medical and technical team',

          // Royal Page
 
          'p1' : 'The company offers a range of more than 1,400 analyzes in the fields of immunology, hematology/coagulation, diagnostic blood chemistry, parasitology, microbiology/infectious diseases, toxicology, cytology, surgical pathology, flow cytometry, molecular biology and genetics. Cellular.',
          'p2' : 'The laboratory was established in 2024 by Professor Dr. Ahmed Mohamed Hegazy.',
          'p3' : 'Assistant Professor of Hematology & Blood Transfusion at Prince Sattam bin Abdulaziz University.',
          'p4' : 'In addition, we have the ability to draw samples and deliver the results to and from your location, and also provide your test results for free, on our website. We constantly strive to exceed your expectations and fulfill our promises because we truly care from the heart.',
          'p5' : 'Royal Laboratories represents the largest network in Saudi Arabia with more than 218 branches nationwide, and selection of the best cadres to work in laboratory laboratories is also taken into consideration, both at the administrative and technical levels. The laboratory laboratories are considered the first medical laboratory in Egypt to use “work cell” technology, which is the latest technology in medical laboratory technology, and thus human errors are reduced to a minimum.',
          'p6' : 'In addition to that, we have the ability to draw samples and deliver the results to and from your location, as well as provide your test results for free, on our website. We constantly strive to exceed your expectations and fulfill our promises because we truly care from the heart.',
          'readLess' : 'Read Less!',
 
           // Book appointment
           'bookAppointment' : 'Book an Appointment',

           'personalInfo' : 'Personal Info',

           'namePlaceholder' : 'Name : Sara Mohamed',
           'agePlaceholder' : 'Age : 25',
           'phonePlaceholder' : 'Phone : 012021615',
           'save' : 'Save',
           'update' : 'Update',

          'Date' : 'Date',

           'lableOptPlace' :  'Choose Branch',
           'opt1' : 'Eldamam/Flowers area',
          'opt2' : 'Mekka/Flowers area',
          'opt3' : 'Elmadina/Flowers area',

          'lableOptServe' :  'Service',

          'opt4' : 'Blood result',
          'opt5' : 'Food Result',
          'opt6' : 'Medicine Result',

         

          'serveBtnNow' : 'Book Now!',
          'servicePrice' : 'Service Price' ,
          'recipientName' : "Recipient's Name" ,
          'recipientPhone' : "Recipient's Phone" ,
          'recipientAddress' : "Recipient's Address" ,
          'orderDate' : "Order Date" ,
          'appointmentDate' : "Appointment Date" ,
          'appointmentStatus' : "Appointment Status" ,
          'branch' : "Branch" ,
          'appointmentDetails' : "Appointment Details" ,
          'orderStatus' : "Order Status" ,
          'under_review' : "Reviewing" ,
          'confirmed' : "Confirmed" ,
          'completed' : "Completed" ,
          'canceld' : "Canceled" ,

          // doctorConsultation
          'doctorConsultation' : 'Doctor Consultation',

          'doctorName' : 'Doctor Name' , 
          'nameDoctor1' : 'Dr / Ebrahim Ahmed' , 
          'nameDoctor2' : 'Dr / Khaled Mohamed' , 
          'nameDoctor3' : 'Dr / Ahmed Ali' , 
          'kind' : 'Online Consultation' ,

 
          // 'Date' : 'Date',
          'specialization' : 'Specialization',
          'opt1specialization' : 'Neurologists',
          'opt2specialization' : 'Analysis',
          'opt3specialization' : 'Cardiologist',
          'requestBtnNow' : 'Send Request',

          // Food analysis
          'foodAnalysis' : 'Food Analysis' ,

          'foodFisrtPara' : 'In the Laboratory Department for Food and Environmental Surveys, we conduct a wide range of tests and analyzes using our scientific and technological strength. Microbiological contamination is a major problem in many industries and legislation states that all food companies must ensure food safety and hygienic practices. All tests are available to restaurants, tourism establishments, and food manufacturers quickly, efficiently and certified throughout Egypt for all production, catering and export needs.',

          'foodSecondPara' : 'The laboratory is an accredited laboratory and holds a certificate. ISO / IEC 17025: 2017 and provides all tests, such as food microbiology to detect food-borne pathogens and food spoilage organisms, in addition to environmental swabs. Samples can be collected from your organization throughout Egypt by taking advantage of the laboratory’s widely spread network of branches and our fleet of specialized chemists.' , 

          'foodThirdPara' : 'The following services are provided for food, feed and environmental surveys:' , 
          
          'foodThirdParaLione' : 'Microbiological analysis of foods – includes raw meat, poultry, seafood, ready-to-eat meals, fresh fruits, vegetables, juices, milk, dairy products, grains, nuts, herbs, and additives.',
          
          'foodThirdParaLiTwo' : 'Food chemical analysis – covers foods and beverages to ensure safe consumption, product quality and product safety. Correct nutritional labeling must be used and consumers must be protected from adulteration and tampering with unsafe food and beverages. We do this using a combined approach of appropriate food legislation coupled with increased controls by food authorities. Specific analysis can be performed based on need including trace elements, heavy metals, mycotoxins, persistent organic pollutants (POPs), illegal food dyes, antibiotics and veterinary drug residues, food additives, and vitamins.',

          'foodThirdParaLiThree' : 'Food Chemical Analysis: Food chemical analysis is used to ensure safe consumption of food and beverages, product quality, and product safety. Correct food labels must be used, in addition to increased controls by food authorities. Specific analysis can be performed based on need, including trace elements, heavy metals, mycotoxins, persistent organic pollutants (POPs), illicit food dyes, residues of antibiotics and veterinary drugs, food additives, and vitamins.',

          'foodThirdParaLiFour' : 'Environmental scanning analysis: The cleanliness of a food processing area can be detected through environmental scanning, in addition to being used to alert food inspectors and business owners. Environmental scanning is the process of evaluating the presence of pathogens by microbiological examination of surfaces, tools and utensils used in food preparation to confirm whether cleaning and disinfection programs are effective (known as cleaning verification).',


          'Certificates' : 'Certificates' , 
          'firstCertificate' : 'CAP (American Association of Pathologists)',
          'secondCertificate' : 'EGAC (Egyptian Accreditation Council)',

          'foodForthPara' : 'Royal Lab is the heart of our operations and one of the most important pillars of our scientific and technological progress. Click on the link to take a video tour of our factory to see how we carry out our work with the highest levels of accuracy.',

          'name' : 'Name',
          'email' : 'Email',
          'subject' : 'Subject',
          'notes' : 'Notes (option)',
          'send' : 'Send',

          // water analysis
          'waterAnalysis' : 'Water Analysis' ,

          'waterFirstPara' : 'Microbiological contamination is a major problem in many industries, as it can lead to many diseases. The law also requires all food companies to ensure food safety and adopt healthy practices.',

          'waterSecondPara' : 'In the laboratory, our Water Analysis Department is an innovative extension of our trusted business and is a strong addition to the much needed food and water laboratory testing market to ensure the best hygienic practices for restaurants, tourism establishments and food manufacturers. We provide effective and certified tests throughout Egypt to meet the needs of all sectors.',

          'waterThirdPara' : 'The laboratory is an accredited laboratory and holds an ISO / IEC 17025: 2017 certificate in the microbiological range. We also provide complete microbiological and chemical tests for water to ensure that water from any source is within international and Egyptian standards. Our branch network covers all governorates, with full readiness to collect samples from anywhere.',

          'waterForthPara' : 'The laboratory provides the following water analyses:',
          'waterForthParaFirstLi' : 'Water Microbiological Analysis – We offer a full range of water tests including industrial, agricultural and potable.',
          'waterForthParaSecondLi' : ' Chemical analysis of water – examined parameters, physical and chemical parameters, undesirable substances, heavy metals, as well as other tests individually analyzed from the water sample.',

          'waterSixPara' :'Water tests are certified under EOS 190-01/2007.',
          'waterSevenPara' :'Royal Lab is the heart of our operations and one of the most important pillars of our scientific and technological progress. Click on the link to take a video tour of our factory to see how we carry out our work with the highest levels of accuracy.',
          
          'waterCertificate' : 'Certificates:' , 
          'waterfirstCertificate' : '3- CAP (American Association of Pathologists)',
          'watersecondCertificate' : '4- EGAC (Egyptian Accreditation Council)',

          'nameWater' : 'Name',
          'phoneWater' : 'Phone',
          'subjectWater' : 'Subject',
          'notesWater' : 'Notes',
          "Forget": "Forgot your password?",
          "getCode": "Get verification code",

          'sendWater' : 'Send',


          'secondLi' : 'Providing the ideal environment during the work environment.',
          'theThirdLi' : 'For innovative application of new technologies.',
          'ourMission' : 'Our Mission' ,
          'thirdPara' : 'Providing high-quality laboratory diagnostic information to help improve the health and well-being of the communities we serve',
          'firLi' : 'This vision is achieved through:',
          'secLi' : 'Providing high-quality medical laboratory services using the latest technologies.Emphasis on good treatment   and empathy with patients, in addition to professional expertise.',
          'thirdLi' : 'The relentless pursuit of accuracy in results, responsiveness to our customers’ needs, and speed of service',
          'fourthLi' : 'Acquire, disseminate and apply knowledge through the innovative use of technology.',
          'fifthLi' : 'Create and expand collaborative professional partnerships.',

           // Book appointment
           'bookAppointment' : 'Book an Appointment',

           'personalInfo' : 'Personal Info',

           'namePlaceholder' : 'Name : Sara Mohamed',
           'agePlaceholder' : 'Age : 25',
           'phoneP:laceholder' : 'Phone : 012021615',
           'save' : 'Save',
           'update' : 'Update',

          'Date' : 'Date',

           'lableOptPlace' :  'Choose Branch',
           'opt1' : 'Eldamam/Flowers area',
          'opt2' : 'Mekka/Flowers area',
          'opt3' : 'Elmadina/Flowers area',

          'lableOptServe' :  'Service',

          'opt4' : 'Blood result',
          'opt5' : 'Food Result',
          'opt6' : 'Medicine Result',
          'orderDetails' : 'Order Details' ,
          'service' : 'Service Name' ,
         

          'serveBtnNow' : 'Book Now!',
          "pleaseEnterName": "Please enter a name",
          "commentCantBeEmpty": "Comment can not be empty",
          "commentRecievedSuccessfuly": "We have recieved your comment successfuly",
          "pleaseEnterEmail": "Please enter an email",
          "pleaseEnterSubject": "Please enter message subject",
          "pleaseEnterAddress": "Please enter an address",
          "uploadYourCv": "Please upload your CV",
          "leavuscomment": "Leav Us a Comment",
          "requestReceived": "Your Request have recieved successfuly, we will contact you!",
          "pleaseEnterAge": "Please enter an age",
          "pleaseEnterPhone": "Please enter a phone number",
          "pleaseEnterDate": "Please enter a date",
          "pleaseSelectBranch": "Please select a branch",
          "pleaseSelectService": "Please select a service",
          "appointmentSentSuccussfuly": "Your appointment have sent successfuly, We will contact you!",
          "orderSuccess": "Order placed successfuly!",
          // doctorConsultation
          'doctorConsultation' : 'Doctor Consultation',
          // 'Date' : 'Date',
          'specialization' : 'Specialization',
          'opt1specialization' : 'Neurologists',
          'opt2specialization' : 'Analysis',
          'opt3specialization' : 'Cardiologist',
          'requestBtnNow' : 'Send Request',
          'consultationType' : 'consultation Type',

          // Food analysis
          'foodAnalysis' : 'Food Analysis' ,

          'foodFisrtPara' : 'In the Laboratory Department for Food and Environmental Surveys, we conduct a wide range of tests and analyzes using our scientific and technological strength. Microbiological contamination is a major problem in many industries and legislation states that all food companies must ensure food safety and hygienic practices. All tests are available to restaurants, tourism establishments, and food manufacturers quickly, efficiently and certified throughout Egypt for all production, catering and export needs.',

          'foodSecondPara' : 'The laboratory is an accredited laboratory and holds a certificate. ISO / IEC 17025: 2017 and provides all tests, such as food microbiology to detect food-borne pathogens and food spoilage organisms, in addition to environmental swabs. Samples can be collected from your organization throughout Egypt by taking advantage of the laboratory’s widely spread network of branches and our fleet of specialized chemists.' , 

          'foodThirdPara' : 'The following services are provided for food, feed and environmental surveys:' , 
          
          'foodThirdParaLione' : 'Microbiological analysis of foods – includes raw meat, poultry, seafood, ready-to-eat meals, fresh fruits, vegetables, juices, milk, dairy products, grains, nuts, herbs, and additives.',
          
          'foodThirdParaLiTwo' : 'Food chemical analysis – covers foods and beverages to ensure safe consumption, product quality and product safety. Correct nutritional labeling must be used and consumers must be protected from adulteration and tampering with unsafe food and beverages. We do this using a combined approach of appropriate food legislation coupled with increased controls by food authorities. Specific analysis can be performed based on need including trace elements, heavy metals, mycotoxins, persistent organic pollutants (POPs), illegal food dyes, antibiotics and veterinary drug residues, food additives, and vitamins.',

          'foodThirdParaLiThree' : 'Food Chemical Analysis: Food chemical analysis is used to ensure safe consumption of food and beverages, product quality, and product safety. Correct food labels must be used, in addition to increased controls by food authorities. Specific analysis can be performed based on need, including trace elements, heavy metals, mycotoxins, persistent organic pollutants (POPs), illicit food dyes, residues of antibiotics and veterinary drugs, food additives, and vitamins.',

          'foodThirdParaLiFour' : 'Environmental scanning analysis: The cleanliness of a food processing area can be detected through environmental scanning, in addition to being used to alert food inspectors and business owners. Environmental scanning is the process of evaluating the presence of pathogens by microbiological examination of surfaces, tools and utensils used in food preparation to confirm whether cleaning and disinfection programs are effective (known as cleaning verification).',


          'Certificates' : 'Certificates' , 
          'firstCertificate' : 'CAP (American Association of Pathologists)',
          'secondCertificate' : 'EGAC (Egyptian Accreditation Council)',

          'foodForthPara' : 'Royal Lab is the heart of our operations and one of the most important pillars of our scientific and technological progress. Click on the link to take a video tour of our factory to see how we carry out our work with the highest levels of accuracy.',

          'name' : 'Name',
          'email' : 'Email',
          'subject' : 'Subject',
          'notes' : 'Notes (option)',
          'send' : 'Send',
          'bookVisit' : 'Book a home visit',

          // water analysis
          'waterAnalysis' : 'Water Analysis' ,

          'waterFirstPara' : 'Microbiological contamination is a major problem in many industries, as it can lead to many diseases. The law also requires all food companies to ensure food safety and adopt healthy practices.',

          'waterSecondPara' : 'In the laboratory, our Water Analysis Department is an innovative extension of our trusted business and is a strong addition to the much needed food and water laboratory testing market to ensure the best hygienic practices for restaurants, tourism establishments and food manufacturers. We provide effective and certified tests throughout Egypt to meet the needs of all sectors.',

          'waterThirdPara' : 'The laboratory is an accredited laboratory and holds an ISO / IEC 17025: 2017 certificate in the microbiological range. We also provide complete microbiological and chemical tests for water to ensure that water from any source is within international and Egyptian standards. Our branch network covers all governorates, with full readiness to collect samples from anywhere.',

          'waterForthPara' : 'The laboratory provides the following water analyses:',
          'waterForthParaFirstLi' : 'Water Microbiological Analysis – We offer a full range of water tests including industrial, agricultural and potable.',
          'waterForthParaSecondLi' : ' Chemical analysis of water – examined parameters, physical and chemical parameters, undesirable substances, heavy metals, as well as other tests individually analyzed from the water sample.',

          'waterSixPara' :'Water tests are certified under EOS 190-01/2007.',
          'waterSevenPara' :'Royal Lab is the heart of our operations and one of the most important pillars of our scientific and technological progress. Click on the link to take a video tour of our factory to see how we carry out our work with the highest levels of accuracy.',
          
          'waterCertificate' : 'Certificates:' , 
          'waterfirstCertificate' : '3- CAP (American Association of Pathologists)',
          'watersecondCertificate' : '4- EGAC (Egyptian Accreditation Council)',

          'nameWater' : 'Name',
          'phoneWater' : 'Phone',
          'subjectWater' : 'Subject',
          'notesWater' : 'Notes',

          'sendWater' : 'Send',


          // Pharmaceutical analyses
          'pharmaceuticalAnalyses' : 'Pharmaceutical Analyses', 

          'PharmaceuticalFirstPara' : 'In our laboratories, we enhance our customers success by helping to provide patients with the best possible healthcare experience and supporting clinical trials with accurate, state-of-the-art medical analysis. The laboratory is your partner when it comes to ensuring the best healthcare experience and supporting clinical trials. With medical diagnostics for patient support programs, our lab results will help you keep your programs consistently on the market, with the right time to market and within your allocated budget. The laboratory is the only CAP-accredited medical laboratory in Egypt that has the latest technologies and competitive advantages.',

          'PharmaceuticalSecondPara' : 'Our services are tailored to meet the specific needs of businesses. We are flexible enough to meet any needs you may have.' ,

          'PharmaceuticalServices' : 'Our services:',
          'PharmaceuticalServices1' : 'Patient support analyzes (oncology, cardiology, dermatology...etc.)',
          'PharmaceuticalServices2' : 'Analyzes for research and clinical organizations.',

          'pharmacyCertificate'  : 'Certificates :',
          'pharmacyCertificate1' : 'Certificate of accreditation from the American International Society of Pathologists (CAP).',
          'pharmacyCertificate2' :'ISO',
          'pharmacyCertificate3' :'Accreditation by the General Authority for Health Accreditation and Control (GAHAR).',

          'namePharmacy' : 'Name',
          'phonePharmacy' : 'Phone',
          'subjectPharmacy' : 'Subject',
          'notesPharmacy' : 'Notes(optional)',
          "pleaseSelectDoctor": "Please select a doctor.",
          "pleaseSelectSpecialization": "Please select a specialization.",
          "pleaseSelectDate": "Please select a date.",
          "pleaseSelectConsultation": "Please select a consultation.",
          "appointmentSentSuccessfully": "Appointment sent successfully we will contact you.",
          "errorSubmittingAppointment": "Error submitting appointment.",


          'sendPharmacy' : 'Send',

          "showMore": "Show More",
          "showLess": "Show Less",

               // footer
               'TradeAssurance' : 'Trade Assurance',
               'TradeAssuranceli1' : 'Safe and easy payments',
               'TradeAssuranceli2' : 'Return Policy',
               'returnPlicy' : 'Return policy for Royal Diagnostic Laboratories ',
            'returnPoliy1':'Refunds will be made within 3 days from the date of the invoice, provided that the original invoice is presented.',

            'returnPoliy2':'Exchange policy',
            'returnPoliy3':'Replacement of services within one month from the date of the invoice.',
            'returnPoliy4':'Replacement policy.',
            'returnPoliy5':'1- Without prejudice to the contractual and statutory provisions of the warranty, the consumer has the right to replace the product provided to him by the store within the seven days following the date of receipt of the product, and he is not entitled to replace the product after the seven days have passed.',
            'returnPoliy6':'2- To replace a product, it is required that the product be in good condition and that the consumer has not used the product or obtained any benefit from it. The store has the right to inspect the product before exchanging it to ensure its safety. The consumer is responsible for paying the shipping cost if he wants to exchange the product. In international exchange, the consumer bears the full costs of shipping and delivering the product to the shipping company. In the event of defects or errors, the consumer will be compensated',
            'returnPoliy7':'The consumer does not have the right to replace the product in the following cases:',
            'returnPoliy8':'1- If the product was manufactured at the request of the consumer or according to specifications specified by him, this excludes products that have a defect or that violate the specifications specified by the consumer.',
            'returnPoliy9':'2- If the product is video tapes, CDs, CDs, or information programs that have been used.',
            'returnPoliy10':'3- If the product is newspapers, magazines, publications, books, or anything else considered literature.',
            'returnPoliy11':'4- If a defect appears in the product due to consumer misuse.',
            'returnPoliy12':'5- If the contract deals with providing accommodation, transportation, or feeding services.',
            'returnPoliy13':'6- If the contract deals with the purchase of software download products via the Internet.',
            'returnPoliy14':'Return Policy:',
            'returnPoliy15':'1- Without prejudice to the contractual and statutory provisions of the warranty, the consumer has the right to cancel the contract and return the product provided to him from the store within the seven days following the date of receipt of the product, and he has no right to that product after the seven days have passed.',
            'returnPoliy16':'2- To return a product, it is required that the product be in good condition and that the consumer has not used the product or obtained any benefit from it. The store has the right to inspect the product before returning it to ensure its safety.',
            'returnPoliy17':'3- he consumer bears the costs resulting from the return process. In the case of an international return, the consumer bears the full costs of shipping and delivering the product to the shipping company. In the event of defects or errors, the consumer will be compensated.',

            'returnPoliy188':'The consumer has no right to return the product in the following cases:',
            'returnPoliy19':'1- If the product was manufactured at the request of the consumer or according to specifications specified by him, this excludes products that have a defect or that violate the specifications specified by the consumer.',
            'returnPoliy20':'2- If the product is video tapes, CDs, CDs, or information programs that have been used.',
            'returnPoliy21':'3- If the product is newspapers, magazines, publications, books, or anything else considered literature.',
            'returnPoliy22':'4- If a defect appears in the product due to consumer misuse.',
            'returnPoliy18':'5- If the contract deals with providing accommodation, transportation, or feeding services.',
            'returnPoliy23':'6- If the contract deals with the purchase of software download products via the Internet.',
           
        
           





               'TradeAssuranceli3' : 'Arriving on time',
               'TradeAssuranceli4' : 'After-sales protections',
               'TradeAssuranceli5' : 'Product monitoring services',
               "enterCode": "Enter verfication code",
               "Code": "Enter Verfication Code",


               'knowus' : 'get to know us',
               'knowusl1' : 'get to know us',
               'knowusl2' : 'Pay Alibaba.com',
               'weveSendYOu' : 'We have sent you a verification code via your email',
               'knowusl3' : 'corporate responsibility',
               'knowusl4' : 'News Center',
               'knowusl4' : 'Jobs',
     
               'Getsupport' : 'Get Support',
               'Getsupportl1' : 'Help Center',
               'Getsupportl2' : 'live chat',
               'Getsupportl3' : 'Check order status',
               'Getsupport4' : 'Refunds',
               'Getsupport5' : 'Report abuse',

             'rightssave' : 'All rights reserved to Royal Diagnostic Laboratories',
             'rightssave1' : 'Terms and conditions apply',

            //  jobs 
            'jobs' : 'Jobs',
            'opportunities':'Job opportunities will be available soon through the jobs platform',


            // problem

            "nameProblem" :'Mention The Problem ',
            'commentProblem' : 'Comment',
            'sendproblem' : 'Send',
            'passwordNewConfir': "Password confirmation",
            'passwordNew': "New Password",
  
            

              //  Cart

              'shoppingCart' : 'Shopping Cart',
              'addMoreBaqat' : 'Add more Baqat / Tests',
              'theAll' : 'Total : ',
              'ourTeam' : 'Our Team',
              'servicesYPackages' : 'Services & Packages',
              'payBtn' : 'Checkout',
              'checkout' : 'Checkout',

                // medicalTests

                'Medicaltests' : 'Medical Tests ',

                // Insurances

                'Insurances' : 'Medical Insurance',
                'Insurances1' : 'To serve you better, we are contracting with medical insurance companies as soon as possible',

                // Vaccinations
                'Vaccinations' : 'Vaccinations',
                'Vaccinations1' :'Vaccines are one of the best ways to prevent diseases and prevent their spread. Thus, they provide a healthy lifestyle for the patient and reduce the financial and social burdens of diseases. Perhaps the Covid-19 vaccine has been the most prominent factor recently in emphasizing the importance of taking vaccinations to continue a healthy life free of any annoying diseases. In this article, we will learn about the concept of vaccines and vaccination. What are their benefits? What are the most important types? What diseases can be reduced through vaccination? Vaccines play a role in forming memory and antibodies to confront the disease if it is transmitted through infection again to the body.',
                'Vaccinations2' : 'What are vaccines?',
                'Vaccinations3' : 'Vaccines or immunizations are injections, liquids, pills, or nasal sprays that enter the body to enable the immune system to recognize the causes of the disease, and to form immune memory and immune antibodies against the disease in the event that it is transmitted through infection again to the body. Vaccines have contributed over time to reducing the incidence of diseases, to the extent that it can be said that they have eliminated their appearance except in very small proportions, especially those diseases that were killing humanity, as researchers were able to access vaccines that combat the causes of those diseases.',
                'Vaccinations4' : 'What is the mechanism of immune response?',
                'Vaccinations5' : 'The immune response is activated in the body when a foreign body or vaccine (any substance that stimulates an immune response in the body) enters according to the following steps:',
                'Vaccinations6' : '1. Foreign substances enter the body (pathogenic substances or vaccines), and the body detects them and realizes that they are foreign.',
                'Vaccinations7' : '2. The body’s immune system is activated to fight these substances.',
                'Vaccinations8' : '3. The immune system forms a memory against these substances, so that if they enter the body again, the immune system recognizes them and attacks them, and this is called immunity.',
                'Vaccinations9' : 'What are the benefits of the vaccine?',
                'Vaccinations10' : '1. Protects against serious diseases.',
                'Vaccinations11' : '2. Prevents the spread of epidemics in communities.',
                'Vaccinations12' : '3. It reduces the severity of the disease and its complications, if it does not prevent it from occurring at all.',
                'Vaccinations13' : '4. Providing the financial burden for treating infections and diseases.',
                'Vaccinations14' : 'It should be noted that in some vaccination programs, a supportive (booster) dose of this vaccine is given at the age of 12 years.',
                'Vaccinations15' : 'Are vaccines safe?',
                'Vaccinations16' : 'Yes, it is safe, as all vaccines undergo extensive safety testing and evaluation before they are approved for administration to humans.',
                'Vaccinations17' : 'What is the vaccination schedule?',
                'Vaccinations18' : 'World health institutions have been keen to set global vaccination schedules, which include the age groups that should receive vaccinations, in addition to the number of doses they need and when they should receive them. We emphasize here that it is necessary for both children and adults to obtain their vaccinations according to the specified timetable, as following the timetable contributes to obtaining protection from diseases as necessary.',
                'Vaccinations18' : 'World health institutions have been keen to set global vaccination schedules, which include the age groups that should receive vaccinations, in addition to the number of doses they need and when they should receive them. We emphasize here that it is necessary for both children and adults to obtain their vaccinations according to the specified timetable, as following the timetable contributes to obtaining protection from diseases as necessary.',
                'Vaccinations19' : 'What are the side effects of vaccines?',
                'Vaccinations20' : 'Most vaccinations are safe and do not cause serious side effects on the patient. However, in some cases, some patients may suffer from fever, rash, and diarrhea, which are conditions that can be easily treated after consulting a specialist doctor.',
                'Vaccinations21' : 'Are vaccines given to pregnant women?',
                'Vaccinations22' : 'There are some types of vaccine that must be given to pregnant women, such as diphtheria, tetanus, and whooping cough, while others are prohibited from being given during pregnancy, such as measles, German measles, and mumps. The influenza vaccine is also considered safe during pregnancy, and provides protection for the mother and her child, so a doctor must always be consulted in order for the pregnant woman to obtain the types of vaccine that are safe for her and to avoid danger to her and her fetus.',
                'Vaccinations23' : 'What is World Immunization Week?',
                'Vaccinations24' : 'Although immunization operations using various types of vaccines have been able to save millions of people around the world, according to the Saudi Ministry of Health, there are still more than 20 million children around the world who cannot take the vaccines they need. This has prompted international health organizations to designate the last week (24-30) of April each year, to raise awareness about immunizations and their importance in preventing serious diseases such as measles and polio. In this context, the Saudi Ministry of Health, represented by all its health facilities, contributes to raising health awareness on this topic',
                'set': "Set",
                

                
          








          // Add other English translations here
        },
      },
      ar: {
        translation: {
          // nav link
          'My app' : 'موقعي',
          'Switch Language': 'English',
          'Orders': 'طلباتي',
          'noOrders': 'لا يوجد طلبات حتى الان!',
          'noAppointments': 'لا يوجد حجوزات حتى الان!',
          'Appointments': 'المواعيد',
          'Visits': 'الزيارات',
          'Region': 'المنطقة',
          'ourTeam': 'فريقنا',
          'City': 'المدينة',
          'Home' : 'الرئيسية',
          'Services' : 'الخدمات',
          'Results' : 'النتائج',
          'Contact Us' : 'تواصل معنا',
          'Reserve' : 'احجز موعد',
          'About' : ' من نحن',
          'AboutRoyal' : ' عن رويال',
          'Login' : 'تسجيل الدخول',
          'Create Account' :'انشاء حساب',
          'ApplyJob' :'توظيف',
          'Apply' :'تقديم',
          'recevidYourRequest' :'تم استقبال طلبك بنجاح سيتم التواصل معك',
          'uploaded' :'تم التحميل',
          'chooseCv' :'ملف السيرة الذاتية',
          'applyForJob' :'التقديم علي العمل',
          'set': "تعين",
          'passwordNewConfir': "تاكيد كلمة المرور",
          'passwordNew': "كلمة المرور الجديدة",

          // login page
          'LoginPage' : 'تسجيل دخول',
          'help' : 'مساعدة',
          'errorMsgLogin'  :'كلمة مرور خاطئة' ,
          'logOut' : 'تسجيل خروج',
          'pls' :'سجل دخولك اولا',
          "Code": "ادخل رمز التحقق",
          'service' : 'اسم الخدمة' ,
          'servicePrice' : 'سعر الخدمة' ,
          'recipientName' : "اسم المستلم" ,
          'recipientPhone' : "هاتف المستلم" ,
          'appointmentDate' : "تاريخ الحجز" ,
          'servicesYPackages' : 'الخدمات والباقات',
          'appointmentStatus' : "حالة الحجز" ,
          'appointmentDetails' : "تفاصيل الحجز" ,
          "leavuscomment": "اترك لنا تعليقا",
          "yourMsg": "محتوي تعليقك",
          'recipientAddress' : "عنوان المستلم" ,
          'orderDate' : "تاريخ الطلب" ,
          'orderStatus' : "حالة الطلب" ,
          'branch' : "الفرع" ,
          'under_review' : "تحت المراجعة" ,
          'confirmed' : "تم التاكيد" ,
          'completed' : "اكتمل" ,
          "getCode": "احصل على رمز التحقق",
          "weveSendYOu": "تم ارسال رمز التحقق عبر البريد الالكتروني بنجاح",
          'canceld' : "فشل او الغي" ,

          // there is contact us in the navbar and here
          // 'Contact Us' : 'تواصل معنا',
          // 'Login' : 'تسجيل الدخول',
          
          'loginPara' :'احصل على افضل رعاية طبية مع معمل رويال للتحاليل الطبية',
          'tasaphah' : 'تصفح الان ! ',
          'hello'  : 'مرحبا',
          'EmailLogin'  : 'البريد الالكتروني',
          'password'  : 'كلمة المرور',
          'forgetPassword'  : 'هل نسيت كلمة المرور ؟',




          // register page
          'registerPage' : 'عمل حساب',
          'createAccount' : 'انشاء حساب',
          'createNewAccount' : 'انشاء حساب جديد',

          'errorMsg' :'هذا الحساب موجود بالفعل',
          'loading' : 'جاري التحميل ....',

          "errorNameRequired": "ادخل الاسم",
          "errorMessageNamemin": "ادخل الاسم ثلاثي",
          "errorPhoneRequired": "الهاتف مطلوب",
          "enterCode": "اكتب رمز التحقق المرسل عبر البريد",
          "errorPasswordRequired": "كلمة المرور مطلوبة",
          "errorPasswordMismatch": "كلمتا المرور غير متطابقتين",
          "errorPasswordComplexity": "يجب أن تحتوي كلمة المرور على حرف كبير وحرف صغير ورقم وحرف خاص، وأن تكون على الأقل ٨ أحرف",

          "errorMessagePassword": "يجب أن تكون كلمة المرور من 8 أحرف على الأقل",
          // there is contact us in the navbar and here
          // 'Create Account' :'انشاء حساب',
          // 'tasaphah' : 'تصفح الان ! ',
          'name' : 'الاسم*',
          'phone' : 'رقم الجوال*',
          'Emailregister'  : 'البريد الالكتروني*',
          'passwordRegister'  : 'كلمة المرور*',
          'rePassword'  : 'تأكيد كلمة المرور *' ,

          // profile page
          'Profile' : 'الملف الشخصي',

          'personalInfo' : 'المعلومات الشخصية',
          'Address' : 'العنوان',
          'file' : 'الملف',
          'Name' : 'الاسم',
          'age' : 'العمر',
          'Phone' : 'الجوال',
          'address' : 'العنوان*',
          'email1' :'البريد',




          // services page
          'tahalilAndBaqat':'التحاليل والباقات',
          'ElbahsAnTahalih' : 'البحث عن التحاليل',
          

          'UploadWasfa' : 'تحميل وصفة طبية',
          'Baqat' : 'باقات',
          'SAR' : 'ريال سعودي',
          // will change according the card
          'Enzem':'إنزيم فوسفو كينز',
          'heartEnzem':'انزيمات قلب - يتم طلبه عند الشعور بآلام بالصدر',
          'price' : '250.رس',
          'addToCar' : 'اضافة الي العربة',
          'tahalilhLists' : 'قائمة التحاليل',
          "pleaseSelectDoctor": "يرجى اختيار طبيب.",
          "pleaseSelectSpecialization": "يرجى اختيار تخصص.",
          "pleaseSelectDate": "يرجى اختيار تاريخ.",
          "pleaseSelectConsultation": "يرجى اختيار استشارة.",
          "appointmentSentSuccessfully": "تم إرسال الطلب بنجاح سيتم التواصل معك.",
          "errorSubmittingAppointment": "حدث خطأ أثناء إرسال الموعد.",

          // home page
          'welcome' : 'مرحبا بك في مختبرات رويال التشخيصية',
          'welcome2' : 'خدمتكم تعكس رؤيتنا',
          'buttonHome' : 'اكتشف المزيد !',
          'elafrad' : 'الافراد',
          'companies' :'الشركات',
          'tahalilElgezaa' : 'تحاليل الغذاء',
          'araClients' : 'اراء العملاء',
          'bookVisit' : 'احجز زيارة منزلية',
          'torki' : 'تركي عبد الرحمن',
          'lorem' :'لوريم إيبسوم دولور يجلس أميت لوريم إيبسوم دولور يجلس أميت كونسيكتور',
          'technical' : 'باقات رويال الأساسية  ',
          'technical2' : 'باقات رويال التخصصية',
          'technical3' : 'باقات الشركات و الرعاية المنزلية ',          'techLorem':'لوريم إيبسوم دولور يجلس أميت لوريم إيبسوم دولور يجلس أميت كونسيكتور.',
          'waterAnalysis':'تحليل المياة',
          'pharmaAnalysis':'التحاليل الصيدلانية',
          'recipeMedical' : 'الوصفة الطبية',
          "Forget": "هل نسيت كلمة السر؟",
          'chooseFileRecipe' : 'قم باختيار ملف الروشتة',
          'fileUploadedSuccessfully' : 'تم ارسال الروشتة بنجاح سوف نتواصل معك',
          'bloodAnalysis' : 'التحاليل الطبية ',
          'homeVisit':'زيارة منزلية',
          'Branches':'الفروع',
          'Insurances':'التامينات',
          'consultation':'استشارة',
          'Vaccinations':'التطعيمات',

          // Download the medical prescription
          'medicalPrescription' : 'تحميل الوصفة الطبية',
           "imageLabel": "تحميل الصورة",
           "notesLabel": "ملاحظات",
           "chooseFile": "اختار ملف",
           "uploadBtn": "رفع",

           //  Services

           'servicesp1' : 'الخدمة :  ',
           'servicesp2' : 'التاريخ : ',
           'servicesp3' : 'الخدمة : ',

           'updloadPdf' : 'تحميل pdf',

           //  Home visit
          'homeVisit' : 'الزيارة المنزلية',
          'visitNumber' : 'البحث عن طريق رقم الزيارة ',
          'notFoundVisit' : 'لم يتم العثور على زيارات منزلية بعد !',
          'reserverNow' : 'احجز الان!',

          // about Page
          'aboutUs' : 'عن مختبرات رويال',
          // 'aboutUsHeading' : 'مختبرات رويال التشخيصية' ,
          'aboutUsParagraph1' : 'تشمل الهيكل الادارى و الطبي  منهم د.احمد و انا و د. مصطفي داغستاني المدير الطبي  د. عبد الرحمن حجازى رئيس مجلس الادارة تم ارسال الصور مسبقا للجميع .',
          'aboutUsParagraph2' : 'نسعى مجاهدين إلى أن نكون خريجي المختبرات الطبية التي تعمل علي المظهر النهائي خدمات مخبرية عالية الجودة تتماشى مع متطلبات المجتمع ومواكبة آخر التفاصيل.' ,
          'docName' : 'د. أحمد محمد حجازي ',
          'doc1':'بروفيسور مساعد في طب علم الدم & نقل الدم في جامعة الأمير سطام بن عبدالعزيز.',
          'doc121':'استشاري الطب المخبري.',
          
          'doc2':'زميل أبحاث اكلينيكي مشارك في مركز الملك عبدالله العالمي للأبحاث الطبية- الحرس الوطني.',
          'doc3':'مؤسس & المدير التنفيذي لمختبرات رويال.',
          'doc4':'الرئيس التنفيذي للجمعية السعودية لأبحاث  علم التخثر الدموي.',
          'doc5':'حاصل على شهادة ماجستير في طب نقل الدم والأعضاء والخلايا الجذعية- جامعة بريستول بريطانيا',
          'doc6' : 'دكتوراة في الطب الإكلينيكي ( تخصص علم الدم والمناعة ) من جامعة امبريال كولدج لندن بالتعاون في الإشراف مع جامعة اكسفورد - بريطانيا ',
          'doc7' : 'زمالة التعليم العالي- بريطانيا.',
          
          'doc8' : 'لديه أكثر من ١٠٠ بحث منشور في مجلات ذات تصنيف عالي ومحكمة عالميا.',
          'doc9' : 'محرر في عدد من المجلات العلمية العالمية.',
          'doc10' : 'متحدث سعودي دولي في عدد كثير من المؤتمرات الرائدة عالمياً في ذات التخصص',
         

          'firstPara' : 'تعتبر مختبرات رويال التشخيصية هي واحدة من  المختبرات الطبية الخاصة في المملكة العربية السعودية ، التي توفر خدمات المختبرات التشخيصية والاختبارات الباثولوجية للأوساط الطبية في المملكة العربية السعودية.',
          'readeBtn' :'اقرأ المزيد !',
          
          'ourVision' : 'رؤيتنا' ,
          'secPara' : 'توسيع نطاق خدماتنا في جميع أنحاء المملكة بجودة عالية وتحسين الخدمات',
          // 'after' : 'تتحقق هذه الرؤية من خلال:' ,
          // 'firstLi' : 'التزام قادتنا وموظفينا بمهمتنا وقيمنا الأساسية.',
          // 'secondLi' : 'توفير البيئة المثالية خلال بيئة العمل.',
          // 'theThirdLi' : 'لتطبيق المبتكر للتقنيات الجديدة.',

          // 'ourMission' : 'مهمتنا' ,
          // 'thirdPara' : 'توفير معلومات تشخيصية معملية عالية الجودة للمساعدة في تحسين صحة ورفاهية المجتمعات التي نخدمها.',
          // 'firLi' : 'تقديم خدمات معملية طبية عالية الجودة باستخدام أحدث التقنيات.',
          // 'secLi' : 'التأكيد على حسن المعاملة، والتعاطف مع المرضى، بالإضافة إلى الخبرة المهنية.',
          // 'thirdLi' : 'السعي الحثيث لتحقيق الدقة في النتائج، والاستجابة لاحتياجات عملائنا، وسرعة الخدمة.',
          // 'fourthLi' : 'اكتساب ونشر وتطبيق المعرفة من خلال الاستخدام المبتكر للتكنولوجيا.',
          // 'fifthLi' : 'إنشاء وتوسيع الشراكات المهنية التعاونية.',


          'ourMsg' : 'رسالتنا' ,
          'ourMsg1' : 'تقديم خدمات المختبرات الطبية التشخيصية المتميزة بجودة عالية' ,
          
          'ourValue' : 'قيمنا' ,
          'ourValue1' : ' الأمان - الجودة العاليه - الولاء - الكفاء - التطوير المستمر' ,

          'Ourgoals' : 'أهدافنا',
          'Ourgoals1' : 'توسيع نطاق الوصول إلى المرضى من خلال الابتكار في المملكة العربية السعودية',
          'Ourgoals2' : 'الحصول على الاعتمادات المحلية والدولية لجميع الفروع',
          'Ourgoals3' : 'إدخال الاختبارات والخدمات والأقسام المبتكرة',
          'Ourgoals4' : 'لتطوير مشاريع تحسين العملية',
          'Ourgoals5' : 'تحسين أداء الفريق الإداري والطبي والفني',

           // Royal Page

           'p1' : 'تقدم الشركة مجموعة من أكثرمن 1400 تحليل في مجالات علم المناعة ، أمراض الدم / التخثر ، كيمياء الدم التشخيصية ، علم الطفيليات ، علم الأحياء الدقيقة / الأمراض المعدية ، علم السموم ، علم الخلايا ، علم الأمراض الجراحية ، قياس التدفق الخلوي ، علم البايولوجيا الجزيئية وعلم الوراثة الخلوي.',
           'p2' : 'تم تأسيس المختبر عام 2024  علي يد الاستاذ الدكتور د. أحمد محمد حجازي .',
           'p3' : 'بروفيسور مساعد في طب علم الدم & نقل الدم في جامعة الأمير سطام بن عبدالعزيز',
           'p4' : 'إضافة إلى ذلك لنا القدرة علي سحب العينات و تسليم النتائج من و الي مكان تواجدكم وأيضا توفير نتائج الاختبار الخاص بك مجانا، على موقعنا الالكتروني ونحن نسعى باستمرار لتجاوز توقعاتك والوفاء بوعودنا لأننا نهتم حقًا من القلب.',
           'p5' : 'تمثل معامل رويال أكبر شبكة في السعودية بأكثر من 218 فرعًا علي مستوي الجمهورية و أيضا يؤخذ في الاعتبار اختيار أفضل الكوادر للعمل في معامل المختبر سواءا على المستويات الإدارية والفنية. تعتبر معامل المختبر أول مختبر طبي في مصر يستخدم تكنولوجيا “خلية عمل” و هي التقنية الأحدث في تكنولوجيا المختبرات الطبية ، وبالتالي قلة الأخطاء البشرية الي الحد الأدني.',
           'p6' : 'إضافة إلى ذلكن القدرة علي سحب العينات و تسليم النتائج من و الي مكان تواجدكم وأيضا توفير نتائج الاختبار الخاص بك مجانا، على موقعنا الالكتروني ونحن نسعى باستمرار لتجاوز توقعاتك والوفاء بوعودنا لأننا نهتم حقًا من القلب.',
           'readLess' : 'اقرأ أقل !',

          // Book appointment
          'bookAppointment' : 'احجز موعد',
          'lableOptPlace' :  'اختر الفرع',
          'personalInfo' : 'المعلومات الشخصية',
          'namePlaceholder' : 'الاسم : سارة محمد',
          'agePlaceholder' : 'العمر : 25',
          'phonePlaceholder' : 'الفون : 010230361',
          'save' : 'حفظ',
          'update' : 'تعديل',

          'Date' : 'الموعد',
          'opt1' : 'الدمام/حي الزهور',
          'opt2' : 'مكة/حي الزهور',
          'opt3' : 'المدينة/حي الزهور',
          'lableOptServe' :  'الخدمة',

          'opt4' : 'تحليل الدم',
          'opt5' : 'تحليل الغذاء',
          'opt6' : 'تحليل الدواء',

          'serveBtnNow' : 'احجز الان!',
          "pleaseEnterName": "يرجى إدخال الاسم",
          "pleaseEnterEmail": "يرجي ادخال البريد الاكتروني",
          "pleaseEnterSubject": "يرجي ادخال محتوى الرسالة",
          "requestReceived": "تم استقبال طلبك بنجاح سوف يتم التواصل معك",
          "pleaseEnterAddress": "يرجى إدخال العنوان",
          "uploadYourCv": "قم بارفاق ملف السيرة الذاتية الخاص بك",
          "pleaseEnterAge": "يرجى إدخال العمر",
          "pleaseEnterPhone": "يرجى إدخال رقم الهاتف",
          "pleaseEnterDate": "يرجى إدخال التاريخ",
          "pleaseSelectBranch": "يرجى اختيار الفرع",
          "commentCantBeEmpty": "لا يمكن نشر تعليقا فارغا",
          "showMore": "عرض المزيد",
          "showLess": "عرض اقل",
          "commentRecievedSuccessfuly": "تم استقبال تعليقك بنجاح",
          "pleaseSelectService": "يرجى اختيار الخدمة",
          "appointmentSentSuccussfuly": "تم إرسال طلبك بنجاح، سوف نقوم بالتواصل معك!",
          "orderSuccess": "تم ارسال الطلب بنجاح !",

          // doctor consultation
          'doctorConsultation' : 'استشارة الطبيب',
          'doctorName' : 'اسم الدكتور' , 
          'nameDoctor1' : 'د / ابراهيم احمد' , 
          'nameDoctor2' : 'د / خالد محمد' , 
          'nameDoctor3' : 'د / أحمد علي' , 
          'kind' : 'استشارة عبر الانترنت' ,
          'orderDetails' : 'تفاصيل الطلب' ,
          // 'Date' : 'الموعد',
          'specialization' : 'التخصص',
          'opt1specialization' : 'مخ وأعصاب',
          'opt2specialization' : 'تحاليل',
          'opt3specialization' : 'امراض القلب',
          'requestBtnNow' : 'أرسل طلب',
          'consultationType' : 'نوع الاستشارة',

          // Food analysis
          'foodAnalysis' : 'تحليل الغذاء' ,

          'foodFisrtPara' : 'نجري في قسم المختبر للأغذية والمسحات البيئية ، مجموعة واسعة من الاختبارات والتحليلات باستخدام قوتنا العلمية والتكنولوجية. يعد التلوث الميكروبيولوجي مشكلة كبيرة في العديد من الصناعات والتشريعات تنص على أن جميع شركات الأغذية يجب أن تضمن سلامة الأغذية والممارسات الصحية.جميع الاختبارات متاحه للمطاعم، والمؤسسات السياحية، ومصنعي المواد الغذائية بسرعة وكفاءة ومعتمدة في جميع أنحاء مصر لجميع احتياجات الإنتاج والتموين والتصدير.',

          'foodSecondPara' : 'المختبر هو معمل معتمد و حاصل علي شهاده . ISO / IEC 17025: 2017  و يقدم جميع الاختبارات كالميكروبيولوجيا للأغذية للكشف عن مسببات الأمراض التي تنقلها الأغذية والكائنات المفسده للطعام بالإضافة إلى المسحات البيئيه و يمكن جمع العينات من مؤسستك في جميع أنحاء مصر بالاستفادة من شبكة فروع المختبر المنتشرة على نطاق واسع وأسطولنا من الكيميائيين المتخصصين.' , 

          'foodThirdPara' : 'يتم تقديم الخدمات الآتية للأغذية والأعلاف والمسحات البيئية:' , 
          
          'foodThirdParaLione' : 'التحليل الميكروبيولوجيي للأغذية – يشمل اللحوم النيئة، والدواجن، والمأكولات البحرية، والوجبات الجاهزة للأكل، والفواكه الطازجة، والخضروات، والعصائر، والحليب، ومنتجات الألبان، والحبوب، والمكسرات، والأعشاب، والمواد المضافة.',
          
          'foodThirdParaLiTwo' : 'التحليل الكيميائي للأغذية – يغطي الأطعمة والمشروبات لضمان الاستهلاك الآمن وجودة المنتج وسلامة المنتج. يجب استخدام الملصقات الغذائية الصحيحة وكذلك حماية المستهلكين من الغش والتلاعب بالأغذية والمشروبات غير الآمنة. نقوم بذلك  باستخدام نهج مشترك للتشريعات الغذائية المناسبة إلى جانب زيادة الضوابط من قبل السلطات الغذائية. يمكن إجراء تحليل محدد بناءً على الحاجة بما في ذلك العناصر النزرة ، والمعادن الثقيلة ، والسموم الفطرية ، والملوثات العضوية الثابتة (POPs) ، والأصباغ الغذائية غير القانونية ، والمضادات الحيوية ومخلفات الأدوية البيطرية ، والمضافات الغذائية ، والفيتامينات.',

          'foodThirdParaLiThree' : 'التحليل الكيميائي للأغذية :يستخدم التحليل الكيميائي للأغذية لضمان الاستهلاك الآمن للأغذية والمشروبات ، وجودة المنتج، وسلامة المنتج. كما يجب استخدام الملصقات الغذائية الصحيحة ،ذلك و بالإضافة إلى زيادة الضوابط من قبل السلطات الغذائية. يمكن إجراء تحليل محدد على أساس الحاجة ، بما في ذلك العناصر النادره ، والمعادن الثقيلة ، والسموم الفطرية ، والملوثات العضوية الثابتة (POPs)، الأصباغ الغذائية غير المشروعة ، ومتبقيات المضادات الحيوية و الأدوية البيطرية ، والاضافات الغذائية ، والفيتامينات',

          'foodThirdParaLiFour' : 'تحليل المسحات البيئية: يمكن الكشف عن نظافة منطقة تجهيز الأغذية من خلال المسح البيئي ، بالإضافة إلى استخدامها لتنبيه مفتشي الأغذية وأصحاب الأعمال. المسح البيئي هو عملية تقييم وجود مسببات الأمراض عن طريق الفحص الميكروبيولوجي للأسطح والأدوات والأواني  المستخدمة في تحضير الطعام للتاكيد ما إذا كانت برامج التنظيف والتطهير  فعالة (المعروفة باسم التحقق من التنظيف)',


          'Certificates' : 'الشهادات:' , 
          'firstCertificate' : '3- CAP (الsجمعية الأمريكية للباثولوجيين)',
          'secondCertificate' : '4- EGAC (مجلس الاعتماد المصري)',

          'foodForthPara' : 'الميجا لاب هو قلب عملياتنا واحد اهم الدعائم الاساسه لتقدمنا ​​العلمي والتكنولوجي. انقر  على الرابط للقيام بجولة عبر معملنا من خلال الفيديو لترى كيف ننفذ أعمالنا بأعلي مستوايات الدقه .',

          'name' : 'الاسم',
          'email' : 'البريد الالكتروني',
          'subject' : 'الموضوع',
          'notes' : 'ملاحظات (اختياري)',

          'send' : 'أرسل',
          

          // Water analysis
          'waterAnalysis' : 'تحليل المياه',

          'waterFirstPara' : 'يعد التلوث الميكروبيولوجي مشكلة كبيرة في العديد من الصناعات.، حيث يمكن أن يؤدي إلى كثيرمن الأمراض. كما يفرض القانون على جميع شركات الأغذية  أن تضمن سلامة الأغذية و تعتمد الممارسات الصحية.',

          'waterSecondPara' : 'في المختبر ، يعد قسم تحليل المياه التابع لنا امتدادًا مبتكرًا لأعمالنا الموثوق بها ، ويعد إضافة قويه لسوق الاختبارات المعملية للأغذية والمياه التي يزيد الحاجة إليها لضمان أفضل الممارسات الصحيه للمطاعم والمؤسسات السياحية ومصنعي المواد الغذائية. نقدم اختبارات فعالة ومعتمدة في جميع أنحاء مصر لتلبية احتياجات جميع القطاعات.',

          'waterThirdPara' : 'المختبر هو معمل معتمد و حاصل علي شهاده  ISO / IEC 17025: 2017 في النطاق الميكروبيولوجي كما نقدم اختبارات ميكروبيولوجية وكيميائية كاملة للمياه للتأكد من أن المياه من أي مصدر ضمن المعايير الدوليه و المصريه . تغطي شبكة فروعنا جميع المحافظات مع جاهزية كاملة لجمع العينات من أي مكان.',

          'waterForthPara' : 'المختبر يقدم  تحاليل المياه ا التالية:',
          'waterForthParaFirstLi' : 'تحليل ميكروبيولوجيا المياه – نقدم مجموعة كاملة من اختبارات المياه بما في ذلك الصناعية والزراعية والصالحة للشرب',
          'waterForthParaSecondLi' : 'التحليل الكيميائي للمياه – المعايير التي تم فحصها ، والمعايير الفيزيائية والكيميائية ، والمواد غير المرغوب فيها ، والمعادن الثقيلة ، بالإضافة إلى الاختبارات الأخرى التي تم تحليلها بشكل فردي من عينة الماء.',

          'waterSixPara' :'يتم اعتماد اختبارات المياه بموجب شهادة EOS 190-01 / 2007.',
          'waterSevenPara' :'الميجا لاب هو قلب عملياتنا وأحد اهم الدعائم الأساسية لتقدمنا ​​العلمي والتكنولوجي. انقر على الرابط  للقيام بجولة عبر معملنا من خلال الفيديو لترى كيف ننفذ أعمالنا بأعلي مستوايات الدقه .',
          'waterCertificate' : 'الشهادات:' , 
          'waterfirstCertificate' : 'CAP (الsجمعية الأمريكية للباثولوجيين)',
          'watersecondCertificate' : 'EGAC (مجلس الاعتماد المصري)',

          'nameWater' : 'الاسم',
          'phoneWater' : 'الفون',
          'subjectWater' : 'الموضوع',
          'notesWater' : 'ملاحظات (اختياري)',

          'sendWater' : 'أرسل',

          // Pharmaceutical analyses
          'pharmaceuticalAnalyses' : 'التحاليل الصيدلانية', 

          'PharmaceuticalFirstPara' : 'في مختبراتنا ، نعزز نجاح عملائنا من خلال المساعدة في تزويد المرضى بأفضل تجربة رعاية صحية ممكنة ودعم التجارب الاكلينيكيه  من خلال التحاليل الطبية الدقيقة والحديثة. المختبر هو شريكك عندما يتعلق الأمر بضمان أفضل تجربة رعاية صحية ودعم التجارب الاكلينيكيه. من خلال التشخيص الطبي لبرامج دعم المرضى ، ستساعدك نتائج المختبر لدينا على الحفاظ على برامجك في السوق باستمرار ، مع الوقت المناسب للتسويق وفي حدود ميزانيتك المخصصة. المختبر هو المعمل الطبي الوحيد المعتمد من CAP في مصر الذي يتمتع باحدث التقنيات ومزايا تنافسية..',

          'PharmaceuticalSecondPara' : 'تم تصميم خدماتنا خصيصا لتلبية الاحتياجات المحددة للشركات. نحن مرنون بما يكفي لتلبية أي احتياجات قد تكون لديك.' ,

          'PharmaceuticalServices' : 'خدماتنا :',
          'PharmaceuticalServices1' : 'تحاليل دعم المريض (الأورام ، أمراض القلب ، الأمراض الجلدية … إلخ)',
          'PharmaceuticalServices2' : 'تحاليل للمنظمات البحثيه و الاكلينكيه.',

          'pharmacyCertificate'  : 'الشهادات:',
          'pharmacyCertificate1' : 'شهاده اعتماد  الجمعيه الدوليه الأمريكية للباثولوجيين CAP',
          'pharmacyCertificate2' :'الايزو ISO',
          'pharmacyCertificate3' :'اعتماد الهيئة العامة للاعتماد والرقابة الصحية GAHAR',


          // Pharmaceutical analyses

          'namePharmacy' : 'الاسم',
          'phonePharmacy' : 'الفون',
          'subjectPharmacy' : 'الموضوع',
          'notesPharmacy' : 'ملاحظات(اختياري)',

          'sendPharmacy' : 'أرسل',


             // footer
             'TradeAssurance' : 'ضمان التجارة',
             'TradeAssuranceli1' : 'دفعات آمنة وسهلة',
             'TradeAssuranceli2' : 'سياسة الاسترجاع',

            'returnPlicy' : 'سياسة الاسترجاع لمختبرات رويال التشخيصية ',
            'returnPoliy1':'استرجاع المبالغ بعد 3 ايام من تاريخ الفاتورة مع إحضار اصل الفاتورة .',

            'returnPoliy2':'سياسة الإستبدال ',
            'returnPoliy3':'استبدال الخدمات خلال شهر من تاريخ الفاتورة .',
            'returnPoliy4':'سياسة الإستبدال .',
            'returnPoliy5':'1- مع عدم الإخلال بأحكام الضمان الاتفاقية والنظامية، يحق للمستهلك استبدال المنتج المقدّم إليه من المتجر خلال السبعة الأيام التالية لتاريخ استلام المنتج، ولا يحق له استبدال المنتج بعد مرور السبعة أيام.',
            'returnPoliy6':'2- يشترط لاستبدال المنتج أن يكون المنتج بحالة سليمة وألا يكون المستهلك قد استخدم المنتج أو حصل على منفعته، ويحق للمتجر معاينة المنتج قبل استبداله للتأكد من سلامته ويتحمل المستهلك دفع قيمة الشحن في حال أراد استبدال المنتج وفي الاستبدال الدولي يتحمل المستهلك كامل تكاليف الشحن وتسليم المنتج لشركة الشحن وفي حال وجود عيوب أو خطأ سيتم تعويض المستهلك',
            'returnPoliy7':'لا يحق للمستهلك استبدال المنتج في الحالات التالية:',
            'returnPoliy8':'1- إذا كان المنتج تم تصنيعه بناءً على طلب المستهلك أو وفقاً لمواصفات حدّدها، ويستثنى من ذلك المنتجات التي بها عيب أو التي خالفت المواصفات المحدّدة من قبل المستهلك.',
            'returnPoliy9':'2- إذا كان المنتج عبارة عن أشرطة فيديو أو أسطوانات أو أقراصاً مدمجة أو برامج معلوماتية تم استخدامها.',
            'returnPoliy10':'3- إذا كان المنتج عبارة صحف أو مجلّات أو منشورات أو كتب أو غير ذلك مما يُعَد من المؤلفات.',
            'returnPoliy11':'4- إذا ظهر عيب في المنتج بسبب سوء حيازة المستهلك.',
            'returnPoliy12':'5- إذا كان العقد يتناول تقديم خدمات إيواء أو نقل أو إطعام.',
            'returnPoliy13':'6- إذا كان العقد يتناول شراء منتجات تحميل البرامج عبر الانترنت.',
            'returnPoliy14':'سياسة الاسترجاع:',
            'returnPoliy15':'1- مع عدم الإخلال بأحكام الضمان الاتفاقية والنظامية، يحق للمستهلك فسخ العقد واسترجاع المنتج المقدّم إليه من المتجر خلال السبعة الأيام التالية لتاريخ استلام المنتج ، ولا يحق له ذلك المنتج بعد مرور السبعة أيام.',
            'returnPoliy16':'2- يشترط لاسترجاع المنتج أن يكون المنتج بحالة سليمة وألا يكون المستهلك قد استخدم المنتج أو حصل على منفعته، ويحق للمتجر معاينة المنتج قبل استرجاعه للتأكد من سلامته.',
            'returnPoliy17':'3- يتحمل المستهلك التكاليف المترتبة على عملية الاسترجاع وفي حالة الاسترجاع الدولي يتحمل المستهلك كامل تكاليف الشحن وتسليم المنتج لشركة الشحن وفي حال وجود عيوب أو خطأ سيتم تعويض المستهلك',
            'returnPoliy188':'لا يحق للمستهلك استرجاع المنتج في الحالات التالية:',
            'returnPoliy19':'1- إذا كان المنتج تم تصنيعه بناءً على طلب المستهلك أو وفقاً لمواصفات حدّدها، ويستثنى من ذلك المنتجات التي بها عيب أو التي خالفت المواصفات المحدّدة من قبل المستهلك.',
            'returnPoliy20':'2- إذا كان المنتج عبارة عن أشرطة فيديو أو أسطوانات أو أقراصاً مدمجة أو برامج معلوماتية تم استخدامها.',
            'returnPoliy21':'3- إذا كان المنتج عبارة صحف أو مجلّات أو منشورات أو كتب أو غير ذلك مما يُعَد من المؤلفات.',
            'returnPoliy22':'4- إذا ظهر عيب في المنتج بسبب سوء حيازة المستهلك.',
            'returnPoliy18':'5- إذا كان العقد يتناول تقديم خدمات إيواء أو نقل أو إطعام.',
            'returnPoliy23':'6- إذا كان العقد يتناول شراء منتجات تحميل البرامج عبر الانترنت.',
           






             'TradeAssuranceli3' : 'الشحن في الوقت المحدد',
             'TradeAssuranceli4' : 'وسائل حماية ما بعد البيع',
             'TradeAssuranceli5' : 'خدمات مراقبة المنتج',


             'knowus' : 'تعرف علينا',
             'knowusl1' : 'حول علي بابا.كوم',
             'knowusl2' : 'مسؤولية مشتركة',
             'knowusl3' : 'مركز الأخبار',
             'knowusl4' : 'وظائف',
   
             'Getsupport' : 'احصل على الدعم',
             'Getsupportl1' : 'مركز المساعدة',
             'Getsupportl2' : 'دردشة مباشرة',
             'Getsupportl3' : 'التحقق من حالة الطلب',
             'Getsupport4' : 'المبالغ المستردة',
             'Getsupport5' : 'بلغ عن سوء معاملة',
              
             'rightssave' : 'الحقوق محفوظة لمختبرات رويال التشخيصية',
             'rightssave1' : 'تطبق الشروط و الاحكام',


            //  jobs 
            'jobs' : 'وظائف',
            'opportunities':'سيتم اتاحة الفرص الوظيفية قريبا من خلال منصة الوظائف ',

            // problem

            "nameProblem" :'اذكر نوع المشكلة ',
            'commentProblem' : 'التعليق',
            'sendproblem' : 'ارسال',




            //  Cart
             'shoppingCart' : 'عربية التسوق',
              'addMoreBaqat' : 'اضف المزيد من الاختبارات / الباقات',
              'theAll' : 'المجموع : ',
              'payBtn' : 'اكمل الطلب',
              'checkout' : 'اكمال الطلب',
              'services' : 'الخدمات',
              'finish' : 'اطلب',

              // medicalTests

              'Medicaltests' : 'التحاليل الطبية ',

              // Insurances
              'Insurances' : 'التأمين الطبي ',
              'Insurances1' : 'لخدمتكم بشكل أفضل .. جارى التعاقد مع شركات دقيقة طبية باقرب وقت ممكن',

              // Vaccinations

              'Vaccinations' : 'التطعيمات ',
                'Vaccinations1' : 'تشكّل اللقاحات أحد أفضل طرق الوقاية من الأمراض ومنع انتشارها، وبهذا تؤمّن نمط حياة صحّيّ للمريض وتخفّف من أعباء الأمراض المادّيّة والاجتماعيّة. ولعل لقاح كوفيد 19 كان العامل الأبرز مؤخرا في التأكيد على أهمية أخذ التطعيمات للاستمرار في حياة صحية خالية من أي أمراض مزعجة. سنتعرّف في هذا المقال على مفهوم اللقاحات والتطعيم، ما هي فوائدها؟ وما هي أهمّ أنواعها؟ وما هي الأمراض التّي يمكن الحدّ منها عن طريق التطعيم؟اللقاحات تؤدي دورا في تشكيل ذاكرة وأضداد لمواجهة المرض في حال تمّ انتقاله عبر العدوى مرّة أخرى إلى الجسم',
                'Vaccinations2' : 'ما هي اللقاحات؟',
                'Vaccinations3' : 'اللقاحات أو المطاعيم، هي عبارة عن حقن أو سوائل أو حبوب أو بخّاخات أنف، تدخل الجسم لتمكن جهاز المناعة من التّعرّف على مسبّبات المرض، وتشكيل ذاكرة مناعية وأجسام مناعية مضادة للمرض في حال تمّ انتقاله عبر العدوى مرّة أخرى إلى الجسم. لقد ساهمت المطاعيم عبر الزمن في تقليل نسبة الإصابة بالأمراض، إلى الحدّ الذي يمكن القول بأنّها قضت على ظهورها إلا من نسب ضئيلة جداً، لاسيما تلك الأمراض التي كانت تفتك بالبشرية، حيث تمكن الباحثون من الوصول إلى مطاعيم تكافح مسببات تلك الأمراض .',
                'Vaccinations4' : 'ما هي آليّة الاستجابة المناعيّة؟',
                'Vaccinations5' : 'تتفعّل الاستجابة المناعيّة في الجسم عند دخول جسم غريب أو مطعوم (أيّ مادّة تحرّض استجابة مناعيّة في الجسم) وفق الخطوات التّالية:',
                'Vaccinations6' : '1.	دخول موادّ غريبة للجسم (موادّ ممرضة أو مطاعيم) فيكتشفها الجسم ويدرك أنّها غريبة.',
                'Vaccinations7' : '2.	يتفعّل جهاز المناعة في الجسم لمحاربة هذه الموادّ.',
                'Vaccinations8' : '3.	يشكّل جهاز المناعة ذاكرة ضدّ هذه الموادّ، حتّى إذا دخلت الجسم مرّة اخرى يتعرّف عليها جهاز المناعة ويهاجمها، وهذا ما يسمّى بالمناعة.',
                'Vaccinations9' : 'ما هي فوائد اللقاح؟',
                'Vaccinations10' : '1.	يحمي من الإصابة بالأمراض الخطيرة.',
                'Vaccinations11' : '2.	يمنع انتشار الأوبئة في المجتمعات.',
                'Vaccinations12' : '3.	يقلل من حدة الإصابة بالمرض ومضاعفاته إن لم يمنع حدوثه أساساً.',
                'Vaccinations13' : '4.	توفير الأعباء المادّيّة لعلاج الإصابات بالأمراض.',
                'Vaccinations14' : 'يجدر الإشارة إلى أنه في بعض برامج التطعيم، يتمّ إعطاء جرعة داعمة (معزّزة) من هذا المطعوم بعمر 12 عاماً.',
                'Vaccinations15' : 'هل اللقاحات آمنة؟',
                'Vaccinations16' : 'نعم هي آمنة، حيث أنّ جميع التطعيمات تخضع لاختبارات وتقييم مكثّف للسلامة قبل الموافقة عليها لإعطائها للبشر.',
                'Vaccinations17' : 'ما هو جدول التطعيم؟',
                'Vaccinations18' : 'لقدحرصت مؤسسات الصحة العالمية على وضع جداول عالميّة للتلقيح، وتشمل الفئات العمرية التي يجب أن تحصل على التطعيمات، بالإضافة إلى عدد الجرعات التّي يحتاجون إليها ومتى يجب أن يحصلوا عليها. ونؤكد هنا على أنه من الضروري لكلّ من الأطفال والبالغين الحصول على تطعيماتهم وفقاً للجدول الزّمنيّ المحدد، حيث أن اتّباع الجدول الزّمنيّ يساهم بالحصول على الحماية من الأمراض كما يجب.',
                'Vaccinations19' : 'ما هي الآثار الجانبيّة للقاحات؟',
                'Vaccinations20' : 'معظم التطعيمات آمنة ولا تسبّب آثارا جانبيّة الخطيرة على المريض، إلا أنه وفي بعض الحالات، قد يعاني بعض المرضى من الحمّى والطّفح الجلديّ والإسهال، وهي حالات يمكن علاجها بسهولة وذلك بعد مراجعة الطبيب المختص.',
                'Vaccinations21' : 'هل تعطى اللقاحات للحامل؟',
                'Vaccinations22' : 'يوجد بعض أنواع اللقاح التي يجب إعطاؤها للحامل مثل الدفتيريا والكزاز والسّعال الدّيكي، وبعضها الآخر ممنوع إعطاؤها أثناء الحمل، مثل الحصبة والحصبة الألمانيّة والنّكاف. كما يعدّ لقاح الإنفلونزا آمناً خلال الحمل، ويؤمّن حماية للأمّ وطفلها، لذا يجب دائماً استشارة الطّبيب من أجل حصول الحامل على أنواع اللقاح الآمنة لها وتجنّب الخطيرة عليها وعلى جنينها.',
                'Vaccinations23' : 'ما هو الأسبوع العالمي للتحصينات؟',
                'Vaccinations24' : 'بالرغم من تمكّن عمليات التحصين بواسطة مختلف أنواع اللقاح من إنقاذ ملايين البشر حول العالم، إلا أنه وبحسب وزارة الصحة السعودية ما يزال هنالك أكثر من 20 مليون طفل حول العالم لا يستطيعون أخذ اللقاحات التي يحتاجونها، هذا الأمر الذي دفع بالمنظمات الصحية العالمية إلى تخصيص الأسبوع الأخير (24-30) من شهر أبريل من كل عام، للتوعية حول التحصينات وأهميتها في منع الإصابة الإصابة بالأمراض الخطيرة مثل الحصبة وشلل الأطفال. في هذا السياق تساهم وزارة الصحة السعودية متمثلة بكل مرافقها الصحية، برفع الوعي الصحي حول هذا الموضوع.',
               

            







          // Add other Arabic translations here
        },
      },
    },
    lng: 'ar', // default language
    fallbackLng: 'ar', // fallback language
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
  });

export default i18n;
