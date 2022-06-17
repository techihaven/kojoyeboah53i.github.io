       // alert("jvas")
       let cell = document.querySelector('.user-data');
       const PageVisit = async (cell) => {
         console.log("making fetch request to server")

         try {
           
       
       const visitors =  await fetch('api/visitors', {
           method: 'GET',
                 headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json'
                 },
              })

         const visitor = visitors.json();
         console.log({visitor})
         // cell.innerHTML = visitor[0];
         // cell.innerHTML = visitor.country;
       } catch (error) {
           console.log(error);
         }

       }