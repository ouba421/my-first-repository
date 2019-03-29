(function(scoped,na){
	Function.prototype.method=function(name,fn){
		this.prototype[name]=fn;
		return this
	}
	function Fa(name){
		this.name=name;
	};
	Fa.method('getName',function(){
		return this.name
	}).method('setName',function(){
		return this.name+'ceshi'
	})
	scoped.na=new Fa('小刚');	
}(window,$))

console.log($.getName())
