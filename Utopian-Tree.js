function utopianTree(n) {
    // Write your code here
    let tree = 1;
    for(let i = 0; i <n; i++){
        if(i % 2 != 0){
            tree = tree + 1;
        }else{
            tree = tree * 2;
        }
    }
    return tree;
}
