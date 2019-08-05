/*
 * @name Getting Started with Google Ads Scripts
 * @author Peter Stavropoulos
 * Copyright 2019, Peter Stavropoulos. All Rights Reserved.
 * @version 2.0 
 */

/*
 *
 */


function main() {
  
  //Step 1: Add Email
	var recipient = "peterstavrop@gmail.com";
  
  //Step 2: Change Subject Line
	var subject = "Add Subject Line Here";
  
  var body = AdWordsApp.currentAccount().getName() + " Paid Search Email \n";
  
  //Step 3: Add Text to Email Body
  body = body + "Add Text Here";


	MailApp.sendEmail(recipient, subject, body);
	

}