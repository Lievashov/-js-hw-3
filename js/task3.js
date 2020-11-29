const findBestEmployee = function (employees) {
    'use strict';
    // Write code under this line
    let name = "";
    const valuesEmployees = Object.values(employees);
    const keys = Object.keys(employees);
    let bestEmployeeValue = Math.max(...valuesEmployees);
      for (const key of keys) {
        if (employees[key] === bestEmployeeValue) {
            name = key;
           }
    }
    return name;
  };
  
  // Объекты и ожидаемый результат
  const developers = {
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }; 
  console.log(findBestEmployee(developers)); 
  // 'lorence'
  
  const supports = {
    poly: 12,
    mango: 17,
    ajax: 4,
  }; 
  console.log(findBestEmployee(supports)); 
  // 'mango'
  
  const sellers = {
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }
  console.log(findBestEmployee(sellers)); 
  // 'lux'  