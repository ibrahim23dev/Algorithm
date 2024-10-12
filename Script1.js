function ArrayReplace(inputarray,elementToReplace,substructionElement){
    inputarray.forEach((element,index)=>{
        if(element===elementToReplace){
            inputarray[index]=substructionElement;
        }
    })
    console.log(inputarray)
}

ArrayReplace([1,2,1],1,4)