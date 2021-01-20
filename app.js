  //difference betwen nodelist and array is their properties . document.queryselector returns a nodelist not an array. Console log both of them to find their difference.
  const inputs = document.querySelectorAll(".controls input")


  function handleUpdate(){
      // console.log(this.value)
       //take note of the suffix ,so as to trigger the change: that is why data-set attribute is set in the class. data-sizing = "px"
        // data attribute is an object that returns all the values of data-"".
      
       const suffix = this.dataset.sizing || ""; // the or nothing , is put for the image , as it does not have any data attribute, yet. To avoid getting undefined we put the or logic.
     // console.log(suffix)

      //to update the change on the viewscreen
      console.log(this.name)
     //  document.documentElement.style.setProperty(`--${this.name}` , this.value)  //this triggers the change on the developer panel, but does not trigger the change on the view. That is why we creatd a suffix variable to specify the change.

     document.documentElement.style.setProperty(`--${this.name}` , this.value + suffix)
 
 
  }


  inputs.forEach(input => input.addEventListener("change" , handleUpdate))  // shows the change only after the slider is manipulated.
  inputs.forEach(input => input.addEventListener("mousemove" , handleUpdate)) //shows the change on mouse hover too
     