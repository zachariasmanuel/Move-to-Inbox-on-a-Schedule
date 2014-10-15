function moveToInbox() {
    
  var threadArray = GmailApp.getUserLabelByName(".For processing").getThreads();
 //   GmailApp.markThreadRead(threadArray);
  GmailApp.moveThreadsToInbox(threadArray);
    
  var label = GmailApp.getUserLabelByName(".For processing");
  for (var i=0; i< threadArray.length; i++) {
    
    threadArray[i].markUnread();
    threadArray[i].removeLabel(label);
   
  }
}