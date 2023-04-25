const test = function dichotomie(tab, target){
    let deb = 0;
    let fin = tab.length -1;

    while (deb <= fin){
        milieu = Math.floor((deb + fin)/2);
        if(target == tab[milieu]){
            return milieu;
        }
        if(target > tab[milieu]){
            deb = milieu +1;
        }else{
            fin = milieu -1;
        }
    }

    return 'None';
}

console.log(test([5,7,12,14,23,27,35,40,41,42], 35))