function VaataArvuteid() {

    const margid = JSON.parse(localStorage.getItem("margid") || []);
    const mudelid = JSON.parse(localStorage.getItem("mudelid") || []);
    const maksumused = JSON.parse(localStorage.getItem("maksumused") || []);


}
    return (
        <div>
            {margid.map(element =>
        <div key={element}>
         <div>{element}</div>
         </div>)}

         {mudelid.map(element =>
        <div key={element}>
         <div>{element}</div>
         </div>)}

         {maksumused.map(element =>
        <div key={element}>
         <div>{element}</div>
         </div>)}

       

        </div>  );
}

export default VaataArvuteid;