const name=(name)=>{
    return{
        type:"NAME",
        payload:name
    };
};
const email=(email)=>{
    return{
        type:"EMAIL",
        payload:email
    };
};

export{name,email};