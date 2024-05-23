document.addEventListener("DOMContentLoaded", function() {
    // Mengambil nilai berlian dari localStorage
    var selectedDiamonds = localStorage.getItem("selectedDiamonds");
    if (selectedDiamonds) {
      // Mengisi input dengan class text-wrapper-2 dengan nilai yang diambil
      document.querySelector(".text-wrapper-30").value = selectedDiamonds;
    }
  });




  document.addEventListener("DOMContentLoaded", function() {
    // Mengambil nilai dari localStorage
    var selectedValue = localStorage.getItem("selectedValue");
    if (selectedValue) {
      // Mengisi input yang sesuai dengan nilai yang diambil
      if (["DANA", "OVO", "ShopeePay", "QRIS", "GoPay"].includes(selectedValue)) 
        document.querySelector(".text-wrapper-31").value = selectedValue;
    }
  });


  