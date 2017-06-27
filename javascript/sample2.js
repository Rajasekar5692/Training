function guy(fname,lname,age){
this.fname=fname;
this.lname=lname;
this.age=age;

this.walk=function(){
	console.log("hgfdxz");
}
this.sleep=function(){
	console.log("jhgfdsa");
}
}
/*guy.prototype.walk=function()
{
	console.log("walking");
}
guy.prototype.sleep=function()
{
	console.log("sleeping");
}*/
var p=new guy("raj","raj","45");
console.log (p);
p.walk();
p.sleep();

function empl(fname,lname,age,empid,salary){
	
	guy.call(this,fname,lname,age);
	this.empid=empid;
	this.salary=salary;
}
//empl.prototype=guy.prototype;
var emp = new empl("matt","peter","26","23","1234");
console.log(emp);	
emp.sleep();

