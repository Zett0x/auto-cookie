let buyIntervalId;
let goldenFinderIntervalId;
const clickerCookie=(clickers)=>{ //EL TIEMPO EN MILISEGUNDOS
    console.log('=== Clicker function ===');
    console.warn('Si te pasas con el numero de clickers el navegador crasheará!');
    const cookieDiv=document.getElementById('bigCookie');
    for(let i=0;i<clickers;i++){
         setTimeout(() => {
            setInterval(() => {
                
                cookieDiv.click();
                               
            },5000);
         },350);
          
        
    }
    /*
    clickersActive+=clicks;
    console.log(`Tienes ${clickersActive} clickers activos.`);*/
}
const checkGoldenCookie=()=>{
    const list= document.getElementsByClassName("shimmer");
    if(!list.length) console.log('lista vacia');
    else{
        for (var i = 0; i < list.length; i++) {
            list[i].click();
            console.log(`Golden cookie encontrada!`);
        }

    }
    
}

const getMoney=()=>{
    const divCookies=document.getElementById('cookies').firstChild.textContent;

    if(divCookies.includes("billion"))
    {   
        return (+divCookies.replace('billion',''))*1000000000;

        
    }
    if(divCookies.includes("trillion"))
    {
        return (+divCookies.replace('trillion',''))*1000000000000;
    }
    if(divCookies.includes("million"))
    {
        return (+divCookies.replace('million',''))*1000000
    }


}

const getProductPrice=(numProduct)=>{
    
    const divPrice=document.getElementById(`productPrice${numProduct}`)?.firstChild.textContent;
  
    if(divPrice.includes("billion"))
    {
        return(+divPrice.replace("billion",''))*1000000000;
    }
    if(divPrice.includes("million"))
    {
        return(+divPrice.replace("million",''))*1000000;
    }
    if(divPrice.includes("trillion"))
    {
        return(+divPrice.replace("trillion",''))*1000000000000;
    }

    
}
const getProductName=(numProduct)=>{
    const divName=document.getElementById(`productName${numProduct}`);
    return divName.textContent;
}

const buyProduct=(numProduct,prioridad)=>{
    
    try {
        const money=getMoney();
        const precio=getProductPrice(numProduct);
        if(money>precio) 
        {   const priority=(Math.trunc(money/precio))/prioridad;
            const producto=document.getElementById(`productPrice${numProduct}`);
            
                for (let i = 0; i < priority; i++) {
                    producto.click();
                }
                

            
            
            console.log(`Producto: ${getProductName(numProduct)} comprado, cantidad: ${Math.trunc(money/precio)} !`);

        }
        else{
            console.log(`No tienes suficiente dinero para comprar Producto ${getProductName(numProduct)}: ${precio} `);
        }  
    } catch (error) {
        //console.log(error)
    }
    
     

}
//Prioridad de izquierda a derecha

const buyProducts=(...productos)=>{
    
    for (let i = 0; i<productos[0].length;i++) {
       setTimeout(() => {
        buyProduct(productos[0][i],i+1);
       }, 1000);
        
    }
    
}

const init =(minutos,...productos)=>{
    const timeInMilSecs=minutos*60*1000;
    clickerCookie(15000);
    console.log(`=====Compra Automatica Iniciada====`);
    console.log(`Para finalizar la compra automatica pulsa F5`);
    if(buyIntervalId)
    clearInterval(buyIntervalId);

    buyIntervalId= setInterval(() => {
        setTimeout(() => {
            buyProducts(productos);
        }, 1000);
        
    }, timeInMilSecs);
    console.log('===Golden Cookie finder Iniciado===');
    if(goldenFinderIntervalId)
    clearInterval(goldenFinderIntervalId);

    goldenFinderIntervalId= setInterval(() => {
        checkGoldenCookie();
    }, 6000);
    
    
}