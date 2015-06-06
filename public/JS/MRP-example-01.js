var MRP = function() {}

MRP.setObject = function() {
  eval("MRP.instance = document."+MRP.objectId+";");
  if(MRP.instance == null)
    MRP.instance = document.getElementByID(MRP.objectId);
}

MRP.setElementID =  function(id) {
  MRP.elementId = id;
}

MRP.setObjectId=function(id) {
  MRP.objectId = id;
  MRP.setObject();
}


