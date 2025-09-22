function hasTwoCubeSums(n) {
	var good = 0;
    for (=2; i*i*i<n;i++){
        for(z=1;z*z*z<=(n-i*i*i);z++){
            if ((n-i*i*i)-z*z*z == 0){
                console.log('хорошо');
                good++;
            }
        }
    }
    if (good>2) return true
    else return false
	
