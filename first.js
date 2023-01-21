const alr = () =>{
    window.location.href = "firstsignIn.html"
}
const reg = () =>{
    window.location.href = "firstSignUp.html"
}
const not = () =>{
    alert("Working on it")
}
let allCustomer = [];
if(localStorage.customerPersonalDetails){
    allCustomer = JSON.parse(localStorage.getItem("customerPersonalDetails"))
}
const toOpenAcc2=()=>{
    if(eAddress.value=="" ||
         bvn.value=="" ||
         fName.value=="" ||
         lName.value=="" ||
         mName.value=="" ||
         bvnPhoneNo.value=="" ||
         dob.value==""  ||
         gender.value=="" ||
         mStatus.value=="" ||
         pTitle.value=="" ||
         occupation.value=="" ||
         stateOrigin.value=="" ||
         stateResidence=="" ||
         city.value=="" ||
         rAddress.value=="" ||
         password.value=="" ||
         cPassword.value=="" 
         )
         {
        empty.innerHTML=`
        <div class="border-danger bg-light justify-content-between d-flex align-items-center px-2 bg-gray border-start border-2">
            <div> error! Please Kindly Input The require field to continue your  Registration</div>
            <button class="btn fs-4 text-danger" onclick="cancelEmpty()"><i class="fa fa-times-circle"></i></button>
        </div>            `
    }
    else if(password.value != cPassword.value){
        // alert("ssjj")
        empty.innerHTML=`
        <div class="border-danger bg-light justify-content-between d-flex align-items-center px-2 bg-gray border-start border-2">
            <div> error! Your password did not correspond</div>
            <button class="btn fs-4 text-danger" onclick="cancelEmpty()"><i class="fa fa-times-circle"></i></button>
        </div>
                        `
    }
    else{
        let customerDetails = {
            firstName: fName.value,
            middleName: mName.value,
            lastName: lName.value,
            mobileNumber: mNumber.value,
            email: eAddress.value,
            bvn: bvn.value,
            bvnPhoneNumber:bvnPhoneNo.value,
            dateOfBirth: dob.value,
            gender:gender.value,
            maritalStatus: mStatus.value,
            positionTitle: pTitle.value,
            occupation: occupation.value,
            stateOfOrigin: stateOrigin.value,
            stateOfResidence: stateResidence.value,
            city: city.value,
            address: rAddress.value,
            password: password.value,
            confirmPassword: cPassword.value,
            balance: 0,
            cvv:Math.floor(Math.random()*1000),
            accNo: `319${Math.floor(Math.random()*10000000)}`,
            atmCardNumber: `5399 ${Math.floor(Math.random()*10000)} ${Math.floor(Math.random()*10000)} ${Math.floor(Math.random()*10000)}` 
        };
        allCustomer.push(customerDetails);
        localStorage.setItem("customerPersonalDetails", JSON.stringify(allCustomer));
        bdisp.innerHTML = `
        <div class="congratCon d-flex w-100 justify-content-center align-items-center">
        <div class="upFixed"><nav class="d-flex justify-content-center suNav"><img src="./First-bank logo.png" alt="" class="logo"></nav></div>
        <div class="text-center">
            <h1>Congratulations</h1>
            <img src="congrat.png" alt="" class="congrat">
            <h2>Registration Successful</h2>
            <button class="border-0 congratBut" onclick="signInbut()">SignIn Now</button>
        </div>
    </div>
                        `
    }
}

const cancelEmpty=()=>{
    empty.innerHTML ="";
    noUser.innerHTML = "";
}
const signInbut=()=>{
    window.location.href = "firstsignIn.html";
}

const signIn = () => {
    let found =false;
    allCustomer = JSON.parse(localStorage.getItem("customerPersonalDetails"))

    for (let index = 0; index < allCustomer.length; index++) {
        if(allCustomer[index].email == em.value && allCustomer[index].password == ps.value){
            localStorage.setItem("currentUserIndex", index)
            found = true;
            break;
        }
    }
    if(found==true){
        window.location.href = "dashboard.html";
    }
    else{
        empty.innerHTML = `
        <div class="border-danger bg-light justify-content-between d-flex align-items-center px-2 bg-gray border-start border-2">
        <div> No User with that Details </div>
        <button class="btn fs-4 text-danger" onclick="cancelEmpty()"><i class="fa fa-times-circle"></i></button>
        </div>
        `
    }
}
let currentUserIndex = localStorage.getItem("currentUserIndex");
const displayDash=()=>{
    dispDash.innerHTML += `
                        ${allCustomer[currentUserIndex].middleName} ${allCustomer[currentUserIndex].firstName}`
    accNumDisp.innerHTML +=`
                        ${allCustomer[currentUserIndex].accNo}
                    `
    accBalDisp.innerHTML +=`
                        ${allCustomer[currentUserIndex].balance}
                    `        
}


const myAcc=()=>{
    bodyDisp.innerHTML=`
    <section class="sec1 p-2">
    <nav class="text-light navbar align-items-center">
    <div></div>

    <p class="text-light">Dashboard</p>

    <button class="border-0 bg-transparent fs-5 text-light">
        <i class="far fa-bell"></i>
    </button>
    </nav>
        <div class="d-flex align-items-center navbar p-2 text-light">
            <div>
                <button class="cameraBut"><i class="fas fa-camera"></i></button>
            </div>

            <div>
                <p id="dispDash">Good Day,</p>
                <p class="wlc">Welcome to your dashboard</p>
            </div>

            <div>
                <button class="border-0 bg-transparent">HISTORY <i class="far fa-calendar"></i></button>
            </div>
        </div>
        
    <div class="balanceContainer text-light">
        <p id="accNumDisp">ACCOUNT #</p>
        <h1 id="accBalDisp">&#8358 </h1>
    </div>    
</section>

<section class="sec2 d-flex align-items-center justify-content-center">
    <div class="row w-100 justify-content-center taskCont">
        <div class="col-4 my-3">
            <button class="iconTaskBut">
                <div class="iconTask"><i class="fa fa-exchange"></i></div>
                Transfer
            </button>
        </div>

        <div class="col-4 my-3">
            <button class="iconTaskBut">
                <div class="iconTask"><i class="fa fa-money-bill-alt"></i></div>
                PayBills
            </button>
        </div>

        <div class="col-4 my-3">
            <button class="iconTaskBut">
                <div class="iconTask"><i class="fa fa-mobile-android"></i></div>
                Buy Airtime
            </button>
        </div>

        <div class="col-4 my-3">
            <button class="iconTaskBut">
                <div class="iconTask"><i class="fa fa-qrcode"></i></div>
                QR Payment
            </button>
        </div>

        <div class="col-4 my-3">
            <button class="iconTaskBut">
                <div class="iconTask">&#8358</div>
                Loan
            </button>
        </div>

        <div class="col-4 my-3">
            <button class="iconTaskBut">
                <div class="iconTask"><i class="fa fa-credit-card"></i></div>
                Virtual Cards 
            </button>
        </div>
    </div>
</section>

<section class="sec3">
    <div class="p-3">
        <header>MY ADS</header>

        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="./ads/ads1 (1).jpeg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="./ads/ads1 (1).jpg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="./ads/ads1 (2).jpeg" class="d-block w-100" alt="...">
              </div>
            </div>
        </div>

    </div>
</section>
    `
}


let freqTrans=()=>{
    bodyDisp.innerHTML =`
    <nav class="transNav text-light">
    <div></div>
        <p>Transaction</p>
        <div></div>
    </nav>

    <section class="freqImages">
        <div class="freqImg1"></div>
        <div class="freqImg2"></div>
        <div class="freqImg3"></div>
        <div class="freqImg4"></div>`;
        
}

const signOut=()=>{
    dispBlur.innerHTML =`
    <div class="blurBg">
    <div class="Lognotice shadow shadow-lg bg-light">
        <header><b>Hey user!</b></header>
        <p>Are you sure you want to Sign out</p>
        <div>
            <button class="btn btn-danger" onclick="logCancel()">Cancel</button>
            <button class="btn btn-primary" onclick="logContinue()">Continue</button>
        </div>
    </div>
</div>
                        `

}
const logContinue=()=>{
    window.location.href="firstsignIn.html";
};

const logCancel=()=>{
    dispBlur.innerHTML = "";
}