var M = module.exports = {}
var n = 123456;
var rvn = new Array(10);

M.rv = function (number_reverse){
	var rvn = number_reverse;
	var result = rvn[rvn.length-1];
	
	for(var i=1, r=rvn.length-2; i<rvn.length; i++,r--){
		result = result + rvn[r];  
	}
	//console.log("n=%s",result)
	return result;
}
