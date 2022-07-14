sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("project1.controller.View1", {
            onInit: function () {
                //alert("This is init function in controller");
                //var omodel=new sap.ui.model.json.JSONModel();
                //var oModel1 = AnubhavJS.createMyModel("model/mockdata/mydata.json");
                //sap.ui.getCore().setModel(oModel1);
                //omodel.loadData("mydata.json");
                //sap.ui.getCore().setModel(omodel);
            },
            onAfterRendering:function(){
                alert("now my view is on screen");
                $("#container-project1---View1--_IDGenTitle1").css("text-align","center");
                $("#container-project1---View1--_IDGenTitle1").css("color","red");
                //$("#application-project1-display-component---View1--_IDGenPage1-cont").css("background-image",url("pic.png"));
                //$("#application-project1-display-component---View1--_IDGenPage1-cont").css("background-color","powderblue");
                //$("#__container1--RFLayout").css("background-color","lightblue");
                $("#container-project1---View1--Myform2--Layout").fadeOut(0);
                $("#container-project1---View1--Myform3--Layout").fadeOut(0);
                $("#container-project1---View1--Myform4--Layout").fadeOut(0);
                $("#container-project1---View1--Myform--Layout").fadeOut(0);
                $("#container-project1---View1--_IDGenSimpleForm1--Layout").fadeOut(0);
                $("#container-project1---View1--_IDGenSimpleForm3--Layout").fadeOut(0);
            },
            newlogic6:function(){
                var a1=this.getView().byId("_IDGenInput1").getValue();
                if(a1==7217||a1==1234){
                    alert("This account has pin and already exist");
                }
                else{
                    $("#container-project1---View1--_IDGenSimpleForm3--Layout").fadeIn(0);
                }
            },
            newlogic9:function(){
                var q1=this.getView().byId("_IDGenInput2").getValue();
                var q2=this.getView().byId("_IDGenInput3").getValue();
                if(q1==q2){
                alert("Your pin has been generated\nThankyou");
                }
                else{
                    alert("Please give both the details same");
                }
            },
            newlogic7:function(){
                $("#container-project1---View1--Myform--Layout").fadeIn(0);
            },
            newlogic8:function(){
                $("#container-project1---View1--_IDGenSimpleForm1--Layout").fadeIn(0);
            },
            newlogic:function(){
               var a=this.getView().byId("name").getValue();
               var b=this.getView().byId("number").getValue();
                var c=0;
                var d;
                if(a=="saketh" && b==7217){
                    $("#container-project1---View1--Myform2--Layout").fadeIn(c);
                }
                else if(a=="sai" && b==1234){
                    $("#container-project1---View1--Myform2--Layout").fadeIn(0);
                }
                else{
                   alert("Name or cardnumber is invalid");
                }
            },
            newlogic4:function(){
                var e=this.getView().byId("money1").getValue();
                var f=this.getView().byId("pin1").getValue();
                if(e<=15000 && f==7217){
                    $("#container-project1---View1--Myform3--Layout").fadeIn(0); 
                }
                else{
                    alert("Enter appropriate values");
                }
            },
            newlogic1:function(){
                alert("Opening in google maps🗺");
            },
            newlogic2:function(){
                alert("Help");
            },
            newlogic3:function(){
                alert("Please provide rating");
                $("#container-project1---View1--Myform4--Layout").fadeIn(0);
            },
            newlogic5:function(){
                alert("Thankyou");
            }
        });
    });
