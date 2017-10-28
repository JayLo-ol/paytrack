var expect = require('chai').expect;
var M = require('./paytrack.js')
describe('paytrack',function(){
	
	describe("convert_number",function(){
		it("數字的倒數位置",function(){
			expect(M.rv('123456')).to.equal('654321')
			
		})
		
	})
	
	
})