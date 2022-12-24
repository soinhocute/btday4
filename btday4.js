
var number = prompt("1 số trong khoangr4-20")
function findEven() {
    for (let i = 4; i < number; i++) {
        if (i % 2 == 0) {
            console.log(i)
        }
        else {
            console.log(" .")
        }
        i++;
    }
    
var N = prompt('Nhap gia tri N')
N = parseInt(N)
function  numberOneTriangle() {
    for(i=0;i<N;i++) {
		for(j=0;j<=i;j++) {
			document.writeln(" * ")
		}
		document.writeln("<br/>")
	}
}