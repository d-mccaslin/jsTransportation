
// function stressTest(stress, health, manage) {
//   let result;
//   let numStress = 0;
//   let numHealth = 0;
//   let numManage = 0;
//   stress.forEach(function(num) {
//     numstress += num;
//   })

//   health.forEach(function(num) {
//     numhealth += num;
//   })

//   manage.forEach(function(num) {
//     numManage += num;
//   })

//   if (numStress > 3 && numHealth > 3) {
//     if (numManage > 2) {
//       result = "You are doing a good job at managing your stress level."
//     } else if (numManage > 1) {
//       result = "Here are some additional resources to help you manage."
//     } else { 
//       result = "you should look into some options to reduce your stress."
//     }
//   } else if (numStress > 1 && numHealth > 1) {
//     if (numManage > 2) {
//       result = "You are doing a good job at managing your stress level."
//     } else {
//       result = "You should should be fine."
//     } 
//   } else {
//     result = "Sounds like you're pretty well adjusted."
//   }
//   return result;
// }



function stressTest(stress, health, manage) {
  let result;
  if (stress.length > 3 && health.length > 3) {
    if (manage.length > 2) {
      result = "You are doing a good job at managing your stress level.";
    } else if (manage.length > 1) {
      result = "Here are some additional resources to help you manage.";
    } else { 
      result = "you should look into some options to reduce your stress.";
    }
  } else if (stress.length > 1 && health.length > 1) {
    if (manage.length > 2) {
      result = "You are doing a good job at managing your stress level.";
    } else {
      result = "You should should be fine.";
    } 
  } else {
    result = "Sounds like you're pretty well adjusted.";
  }
  return result;
}

$(document).ready(function(){
  $("form#stress-test").submit(function(event){
    event.preventDefault();
    let negStresser = [];
    let negHealth = [];
    let manage = [];

    $("input:checkbox[name=stress-signs]:checked").each(function(){
      negStresser.push($(this).val());
    });
    $("input:checkbox[name=stress-symptoms]:checked").each(function(){
      negHealth.push($(this).val());
    });
    $("input:checkbox[name=stress-methods]:checked").each(function(){
      manage.push($(this).val());
    });

    const testResult = stressTest(negStresser, negHealth, manage);

    $("#result").text(testResult);
    
    $('#stress-test').hide();

    $("#results").show();
  });
});