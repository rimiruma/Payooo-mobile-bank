// console.log('script content');
// login button functionality
document.getElementById("loginButton").addEventListener("click", function (e){
    e.preventDefault();
    // console.log('login button clicked');

    const mobileNumber = 12345678910
    const pinNumber = 1234
    const mobileNumberValue = document.getElementById('mobil-number').value
    const mobileNumberValueConverted = parseInt(mobileNumber)

    const pinNumberValue = document.getElementById('pin-number').value
    const pinNumberValueConverted = parseInt(pinNumberValue)

    // console.log(mobileNumberValueConverted, pinNumberValueConverted);

    if(mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber){
        // console.log('all vai login to my user');
        window.location.href="./home.html"
    }

    else{
        alert('invild credenttais');
        
    }
    
    
})
