/**
 * Flatten JavaScript objects into a single-depth Object
 * Complete method flattenObject
 * @param {object} obj
 * @return {object}
 */

 const flattenObject = obj  => {

    //write you code
  
  }
  
  
  
  
  //testCase 1
  const inputObj = {
    user: {
      name: "Vaibhav",
      adrress: {
        state: "Delhi",
        zone: "South West"
      },
    }
   };
  console.log("\n ---testcase1---\n")
  console.log(flattenObject(inputObj)) ;
  
  /*Output
  {
     "user.name" :"Vaibhav",
     "user.adrress.state" :"Delhi",
     "user.adrress.zone" :"South West"
   }
  
  */
  // test case 2
  const inputObj_1 = {
    employee : {
        name  : {
            fname : "amit",
            lname : "raj"
        },
        email : "amit@mail.com",
        dept : {
            pod : {
                engg : "FrontEnd"
            }
        }
    },
    user : {
        name : "ram"
    }
  };
  console.log("\n ---testcase2---\n")
  console.log(flattenObject(inputObj_1))
  
  /* Output 
  {
      "employee.name.fname" : "amit",
      "employee.name.lname" : "raj",
      "employee.email" : "amit@mail.com",
      "employee.dept.pod.engg" : "FrontEnd",
      "user.name" : "ram"
  }
  */
