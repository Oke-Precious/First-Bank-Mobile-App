const landing =()=>{
    
    loader.innerHTML=""
}
const alr = () =>{
    window.location.href = "firstsignIn.html"
}
const reg = () =>{
    window.location.href = "firstSignUp.html"
}
const not = () =>{
    warningPage.style.transition="4s";
        warningPage.overflowY="hidden";
        warningPage.innerHTML=`
        <div class="warningPage text-light">
          <div class="text-center w-50">
            <h2>Notice!</h2>
            <p>Thanks for Using PreciousBank</p>
            <p>Dear Customer go to our bank to register with your full details</p>
            <button onclick="cancelWarning()" class="mt-5 btn btn-warning rounded rounded-5 w-100">OK</button>
          </div>
        </div>
        `
}
const signUpPage=()=>{
    loader.innerHTML=""
}
const signInPage=()=>{
    loader.innerHTML=""
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
            warningPage.style.transition="4s";
        warningPage.overflowY="hidden";
        warningPage.innerHTML=`
        <div class="warningPage text-light">
          <div class="text-center w-50">
            <h2>Warning</h2>
            <p> error! Please Kindly Input The require field to continue your  Registration</p>
            <button onclick="cancelWarning()" class="mt-5 btn btn-warning rounded rounded-5 w-100">OK</button>
          </div>
        </div>
        `

    }
    else if(password.value != cPassword.value){
        warningPage.style.transition="4s";
        warningPage.overflowY="hidden";
        warningPage.innerHTML=`
        <div class="warningPage text-light">
          <div class="text-center w-50">
            <h2>Warning</h2>
            <p> error! Your password does not correspond</p>
            <button onclick="cancelWarning()" class="mt-5 btn btn-warning rounded rounded-5 w-100">OK</button>
          </div>
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
            history : [],
            amount : [],
            realHist:[],
            localHistory : [],
            immediateTime : [],
            pin:[],
            confirmPassword: cPassword.value,
            balance: 10000,
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
        warningPage.style.transition="4s";
        warningPage.overflowY="hidden";
        warningPage.innerHTML=`
        <div class="warningPage text-light">
          <div class="text-center w-50">
            <h2>Warning</h2>
            <p>No User with that Details</p>
            <button onclick="cancelWarning()" class="mt-5 btn btn-warning rounded rounded-5 w-100">OK</button>
          </div>
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
                    `;
                    loader.innerHTML="";
}


const myAcc= ()=>{
    window.location.href="dashboard.html"
}

const freqTrans=()=>{
    
    bodyDisp.innerHTML =`


    <nav class="transNav text-light">
    <div></div>
        <p>Transaction</p>
        <div></div>
    </nav>

    <section class="freqImages">
            <p style="height: 20px;"></p>
            <div class="freqImg1">
                <img src="./asset/11.png" alt="" class="w-100">
            </div>

            <div class="freqImg2">
                <img src="./asset/26200.jpg" alt="" class="w-100">
            </div>

            <div class="freqImg3">
                <img src="./asset/1.png" alt="" class="w-100">
            </div>

            <div class="freqImg4">
                <img src="./asset/5d9917c65741b (1).png" alt="" class="w-100">
            </div>
            </section>   
        `;
        // loader.innerHTML===""
        
}

const deposit=()=>{
    if(depositAmount.value==""){
        warningPage.style.transition="4s";
        warningPage.overflowY="hidden";
        warningPage.innerHTML=`
        <div class="warningPage text-light">
          <div class="text-center w-50">
            <h2>Warning</h2>
            <p>Enter Amount to Deposit</p>
            <button onclick="cancelWarning()" class="mt-5 btn btn-warning rounded rounded-5 w-100">OK</button>
          </div>
        </div>
        `
    }
    else{
        
        allCustomer[currentUserIndex].balance = Number(allCustomer[currentUserIndex].balance) + Number(depositAmount.value)
        localStorage.setItem("customerPersonalDetails", JSON.stringify(allCustomer));
        warningPage.style.transition="4s";
        warningPage.overflowY="hidden";
        warningPage.innerHTML=`
        <div class="warningPage text-light">
          <div class="text-center w-50">
            <h2>Deposit Successful</h2>
            <div class="btn btn-warning text-light rounded rounded-circle fs-1">
                <i class="fa fa-check"></i>
            </div>
            <button onclick="myAcc()" class="mt-5 btn btn-warning rounded rounded-5 w-100">OK</button>
          </div>
        </div>
        `
        let allDepositHistory = {
            SourceAccount: allCustomer[currentUserIndex].accNo,
            amountDeposit:  `₦${depositAmount.value}`,
            depositTime:`${new Date().toLocaleTimeString()}`,
            depositDay: new Date().toLocaleDateString(),
            totalAmount: ` ${allCustomer[currentUserIndex].balance}.00`,
            depositID: `DP${Math.floor(Math.random()*1000)}NIP${Math.floor(Math.random()*10000)}`
        }
        allCustomer[currentUserIndex].realHist.push(allDepositHistory);
        localStorage.setItem("customerPersonalDetails", JSON.stringify(allCustomer))
    }
}
const signOut=()=>{
    warningPage.style.transition="4s";
    warningPage.style.height="100vh";
        warningPage.style.overflowY="hidden";
        warningPage.innerHTML=`
        <div class="warningPage text-light">
          <div class="text-center w-50">
            <h2>Warning</h2>
            <p>Are you sure you want to sign out</p>
            <button onclick="myAcc()" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions"
            aria-controls="offcanvasWithBothOptions" class="mt-5 btn btn-warning rounded rounded-5 w-100">No</button>
            <button class="mt-5 btn btn-warning rounded rounded-5 w-100" onclick="logContinue()">Continue</button>
          </div>
        </div>
        `
    
}
const logContinue=()=>{
    window.location.href="firstsignIn.html";
};

// const logCancel=()=>{
//     dispBlur.innerHTML = "";
// }

const backFav = ()=>{
    buyAirtime()
}

// ===================AIRTIME PAGE ================================

const buyAirtime = ()=>{
    bodyDisp.innerHTML=`
    <nav class="navbar position-fixed top-0 w-100" style="z-index:1; background-color: rgb(46, 62, 97); color:white;">
        <div></div>
        <p>Buy Airtime</p>
        <div></div>
    </nav>

    <section class="p-3 airtimeSec">
        <div class="" style="height: 50px;"></div>
        <header><b>MY FAVORITES</b></header>

        <div onclick="addBene()" class="shadow bg-light mt-3 mb-5 d-block justify-content-center text-center p-3 w-50 rounded rounded-3">
            <button class="border-0 bg-warning rounded rounded-circle text-light fs-1 px-3 py-2"><i class="fa fa-plus"></i></button>
            <p>Add</p>
        </div>

        <div class="w-100 navbar rounded rounded-4 my-2 bg-light p-3">
            <div class="d-flex gap-3 align-items-center">
                <button class="border-0 bg-warning rounded rounded-circle text-light fs-5 px-3 py-2"><i class="fa fa-mobile-android"></i></button>
                <p class="my-2">MY CONTACT LIST</p>
            </div>
            <div>
                <i class="fa fa-arrow-right fs-3"></i>
            </div>
        </div>

        <div class="w-100 navbar rounded rounded-4 my-2 bg-light mb-5 p-3">
            <div class="d-flex gap-3 align-items-center">
                <button class="border-0 bg-warning rounded rounded-circle text-light fs-5 px-3 py-2"><i class="fa fa-bank"></i></button>
                <p class="my-2">SELECT FROM BENEFICIARY</p>
            </div>
            <div>
                <i class="fa fa-arrow-right fs-3"></i>
            </div>
        </div>

        <div class="w-100 airtimeInfo navbar rounded rounded-4 my-2 bg-light p-3">
            <header class="mb-5">BUY AIRTIME</header>
            <div class="selectBene navbar position-relative w-100">
                <div class="w-100 p-0" id="selectBiller" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom"
                aria-controls="offcanvasBottom">Select Biller</div>
                <i class="fa position-absolute angleDbtn fa-angle-down"></i>
            </div>
        <div class="offcanvas offcanvas-bottom" style="height: 100vh;" tabindex="-1" id="offcanvasBottom"
            aria-labelledby="offcanvasBottomLabel">
            <div class="offcanvas-header">
        
            </div>
            <div class="offcanvas-body small">
                <header class="fs-3 text-center mb-5">Select Provider</header>
        
                <div class="networkBTN">
                    <button onclick="displayNet('MTN')" data-bs-dismiss="offcanvas">MTN</button>
                    <button onclick="displayNet('GLO')" data-bs-dismiss="offcanvas">Glomobile</button>
                    <button onclick="displayNet('9mobile')" data-bs-dismiss="offcanvas">9Mobile</button>
                    <button onclick="displayNet('Airtel')" data-bs-dismiss="offcanvas">Airtel</button>
                </div>
                <div class="d-flex justify-content-center">
                    <button type="button" class=" btn" style="position: fixed; bottom: 2%; margin: auto;"
                        data-bs-dismiss="offcanvas" aria-label="Close">Cancel</button>
                </div>
            </div>
        </div>
            
            <input type="tel" onkeydown="phoneNumberkey()" id="enterPhone" class="w-100 " placeholder="Enter Phone Number">
            <label for="enterPhone"  id="phoneLabel" class="phoneLabel text-danger"></label>
            <button class="btn btn-warning rounded rounded-5 w-100" onclick="contPayment()">Continue</button>

        </div>
    </section>
                    `;
}

const phoneNumberkey=()=>{
    if(enterPhone.value.length < 10){
        enterPhone.style.color="red";
        phoneLabel.innerHTML = "Enter a valid Phone Number"
    }
    // else if(destinationAccount.value.length < 10){
    //     destinationAccount.style.color="red";
    //     destinationLabel.innerHTML = "Enter a valid Phone Number"
    // }
    else{
        enterPhone.style.color="black";
        destinationAccount.style.color="black";
        destinationLabel.innerHTML = "";
        phoneLabel.innerHTML="";
    }
 

}


const addBene = ()=>{
    bodyDisp.innerHTML =    `
    <nav class="navbar p-2 position-fixed w-100" style="z-index:7; background-color: rgb(46, 62, 97); color:white;">
    <div onclick="buyAirtime()"><i class="fa text-light fa-arrow-left"></i></div>
    <p>Add Favorites</p>
    <div></div>
    </nav>
    <section class="p-2">
    <div class="" style="height: 70px;"></div>
    <header class="mb-5"><b>BENEFICIARIES</b></header>
    <div>
        <p>No Beneficiaries Yet</p>
    </div>
    </section>

    `
}

const displayNet=(param)=>{
    selectBiller.innerHTML=param;
}

const cancelWarning=()=>{
    warningPage.innerHTML="";
    // dispBlur.innerHTML=""
    warningPage.style.transition=="4s";
    
}

const contPayment=()=>{
    if(selectBiller.innerHTML =="Select Biller"){
        warningPage.style.transition="4s";
        warningPage.overflowY="hidden";
        warningPage.innerHTML=`
        <div class="warningPage text-light">
          <div class="text-center w-50">
            <h2>Warning</h2>
            <p>Select Biller</p>
            <button onclick="cancelWarning()" class="mt-5 btn btn-warning rounded rounded-5 w-100">OK</button>
          </div>
        </div>
        `
    }
    else if(enterPhone.value=="" || enterPhone.value.length < 10){
        enterPhone.style.borderBottomColor = "red";
        phoneLabel.innerHTML = "Enter a valid Phone Number"
    }
    else{
    let airtimeHistory = {
        airtimeNumber : enterPhone.value,
        airtimeNetwork : selectBiller.innerHTML
    };
    allCustomer[currentUserIndex].history.splice(0,1, airtimeHistory);
    localStorage.setItem("customerPersonalDetails", JSON.stringify(allCustomer))
    bodyDisp.innerHTML =    `
    <nav class="navbar p-2 position-fixed w-100" style="z-index:7; background-color: rgb(46, 62, 97); color:white;">
    <div onclick="buyAirtime()"><i class="fa text-light fa-arrow-left"></i></div>
    <p>Buy Airtime</p>
    <div></div>
    </nav>
    
    <section class="p-4">
            <p style="height:30px"></p>
            <div class="container shadow p-3 rounded ">
                <div class="" style="height: 70px;"></div>
            <header class="m-5 text-center"><b>Enter Details</b></header>
            <div>


            

                
                <div class="selectBene navbar position-relative w-100">
                    <div class="w-100 p-0 ownerAccD" id="selectBiller" onclick="billAccount()" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom"
                        aria-controls="offcanvasBottom">
                        <p id="acctd">Select account to debit</p>
                    </div>
                    <i class="fa position-absolute angleDbtn fa-angle-down"></i>
                </div>
                <div class="offcanvas offcanvas-bottom" style="height: 100vh;" tabindex="-1" id="offcanvasBottom"
                    aria-labelledby="offcanvasBottomLabel">
                    <div class="offcanvas-header">
                
                    </div>
                    <div class="offcanvas-body small">
                        <header class="fs-3 text-center mb-5">Select account to debit</header>
                
                        <div class="networkBTN" data-bs-dismiss="offcanvas">
                            <div onclick="accountDet()" style="background-color: rgb(141, 135, 135);" class="rounded rounded-4 py-2 px-3 text-light">
                                <div class="navbar">
                                    <p>SAVINGS ACCOUNT</p>
                                    <div class="d-flex gap-2">
                                    <p>#</p>
                                    <p id="accNumDispp"></p>
                                    </div>
                                </div>
                                <div class="d-flex">
                                    <h2>&#8358</h2>
                                    <h2 id="accBalDispp"></h2>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-center">
                            <button type="button" class=" btn" style="position: fixed; bottom: 2%; margin: auto;"
                                data-bs-dismiss="offcanvas" aria-label="Close">Cancel</button>
                        </div>
                    </div>
                </div>
                
                <input type="number" id="enterAmount" class="w-100 ownerAcc" placeholder="Enter Amount">
                <label for="enterPhone" id="amountLabel" class="phoneLabel text-danger"></label>
                <button class="btn btn-warning rounded rounded-5 w-100" onclick="contAirtime()">Continue</button>
            
            </div>
            </div>
        </section>
    `
}
}


const billAccount=()=>{
    accBalDispp.innerHTML="";
    accNumDispp.innerHTML="";

    accNumDispp.innerHTML +=`
                    ${allCustomer[currentUserIndex].accNo}
                `;
    accBalDispp.innerHTML +=`
                    ${allCustomer[currentUserIndex].balance}
                `; 
}

const accountDet=()=>{
   
    for (let index = 0; index < allCustomer.length; index++) {
        acctd.innerHTML =   `
        <div class="navbar">
        <p>SAVINGS ACCOUNT ${allCustomer[currentUserIndex].accNo} </p>
        <p>&#8358 ${allCustomer[currentUserIndex].balance}</p>
        </div>
        `
    }
}

const contAirtime=()=>{
    if(acctd.innerHTML=="Select account to debit"){
        warningPage.style.transition="4s";
        warningPage.overflowY="hidden";
        warningPage.innerHTML=`
        <div class="warningPage text-light">
          <div class="text-center w-50">
            <h2>Warning</h2>
            <p>Select account to debit</p>
            <button onclick="cancelWarning()" class="mt-5 btn btn-warning rounded rounded-5 w-100">OK</button>
          </div>
        </div>
        `
    }
    else if(enterAmount.value==""){
        enterAmount.style.borderBottomColor = "red";
        amountLabel.innerHTML = "Enter amount"
    }
    else if(enterAmount.value < 50){
        enterAmount.style.borderBottomColor = "red";
        amountLabel.innerHTML = "You can't enter less than ₦50"
    }
    
    else{
    
    let amountHistory = {
        amountPaid: enterAmount.value,
        airtimeDay: `${new Date().toDateString()}`,
    }
    allCustomer[currentUserIndex].amount.splice(0,1, amountHistory);
    localStorage.setItem("customerPersonalDetails", JSON.stringify(allCustomer))
    

    bodyDisp.innerHTML = `
            <nav class="navbar p-2 position-fixed w-100" style="z-index:7; background-color: rgb(46, 62, 97); color:white;">
                <div onclick="buyAirtime()"><i class="fa text-light fa-arrow-left"></i></div>
                <p>Buy Airtime</p>
                <div></div>
            </nav>
            <p style="height: 50px;"></p>
            <section class="p-3">
                <div class="confirmBuy">
                    <p>From:</p>
                    <p id="dispMyAcc"></p>
                </div>

                <div class="confirmBuy">
                    <p>To:</p>
                    <p id="toNum"></p>
                </div>

                <div class="confirmBuy">
                    <p>Date:</p>
                    <p id="dispT"></p>
                </div>

                <div class="confirmBuy">
                    <p>Amount:</p>
                    <p id="dispAm">0.00</p>
                </div>

                <div class="pinContainer">
                    <p>Enter Transaction PIN</p>
                    <input type="password" id="confirmPin">
                </div>
                
                <div class="butn w-100 gap-3 p-2 mt-5 row">
                    <button class="btn col-9 btn-warning rounded rounded-5" onclick="confirmedPayment()">CONFIRM</button>
                    <button class="btn col-2 btn-warning rounded rounded-circle fs-3"><i class="fa fa-fingerprint"></i></button>
                </div>
            </section>
    `;
    allPhoneNo = allCustomer[currentUserIndex].history;
    allAmount = allCustomer[currentUserIndex].amount;
    dispMyAcc.innerHTML=`<p>ACCOUNT ${allCustomer[currentUserIndex].accNo} </p>`;
    toNum.innerHTML = allPhoneNo[currentUserIndex].airtimeNumber;
    dispAm.innerHTML = `&#8358 ${allAmount[currentUserIndex].amountPaid}.00`;
    dispT.innerHTML = `${allAmount[currentUserIndex].airtimeDay}`;
   
}
}
allPhoneNo = allCustomer[currentUserIndex].history;

const confirmedPayment = () =>{
    if(confirmPin.value=="" ){
        warningPage.style.transition="4s";
            warningPage.overflowY="hidden";
            warningPage.innerHTML=`
            <div class="warningPage text-light">
              <div class="text-center w-50">
                <h2>Warning</h2>
                <p>Please, kindly enter your pin</p>
                <button onclick="cancelWarning()" class="mt-5 btn btn-warning rounded rounded-5 w-100">OK</button>
              </div>
            </div>
            `
    }
    
    


    else if(allCustomer[currentUserIndex].balance < allAmount[currentUserIndex].amountPaid){
        warningPage.style.transition="4s";
        warningPage.overflowY="hidden";
        warningPage.innerHTML=`
        <div class="warningPage text-light">
          <div class="text-center w-50">
            <h2>Warning</h2>
            <p>Insufficient fund</p>
            <button onclick="cancelWarning()" class="mt-5 btn btn-warning rounded rounded-5 w-100">OK</button>
          </div>
        </div>
        `
    }

    else if(confirmPin.value !== myPin[currentUserIndex].newPin){
        warningPage.style.transition="4s";
        warningPage.overflowY="hidden";
        warningPage.innerHTML=`
        <div class="warningPage text-light">
          <div class="text-center w-50">
            <h2>Warning</h2>
            <p>Incorrect Pin</p>
            <button onclick="cancelWarning()" class="mt-5 btn btn-warning rounded rounded-5 w-100">OK</button>
          </div>
        </div>
        `
    }

    else if(confirmPin.value == myPin[currentUserIndex].newPin){
    let allTransactionHistory = {
        fromAccount: allCustomer[currentUserIndex].accNo,
        toAccount: allPhoneNo[currentUserIndex].airtimeNumber,
        TransactionTime:`${new Date().toLocaleTimeString()}`,
        TransactionDay: allAmount[currentUserIndex].airtimeDay,
        TransactionAmount: ` ${allAmount[currentUserIndex].amountPaid}.00`,
        TransactionID: `AT${Math.floor(Math.random()*1000)}/${allCustomer[currentUserIndex].history[currentUserIndex].airtimeNetwork}`
    }
    allCustomer[currentUserIndex].realHist.push(allTransactionHistory);
    localStorage.setItem("customerPersonalDetails", JSON.stringify(allCustomer))


    allAmount = allCustomer[currentUserIndex].amount;
    // alert("worki oo")
    
    
        allCustomer[currentUserIndex].balance = Number(allCustomer[currentUserIndex].balance) - Number(allAmount[currentUserIndex].amountPaid)
        localStorage.setItem("customerPersonalDetails", JSON.stringify(allCustomer));
       
        warningPage.style.transition="4s";
        warningPage.overflowY="hidden";
        warningPage.innerHTML=`
        <div class="warningPage text-light">
          <div class="text-center w-50">
            <h2>Successful</h2>
            <div class="btn btn-warning text-light rounded rounded-circle fs-1">
                <i class="fa fa-check"></i>
            </div>
            <button onclick="myAcc()" class="mt-5 btn btn-warning rounded rounded-5 w-100">OK</button>
          </div>
        </div>
        `
    }
}

// ==========================AIRTIME PAGE END======================



            // ===============Transfer Page==================

const transfer =()=>{
    bodyDisp.innerHTML=`
    <nav class="navbar position-fixed top-0 w-100" style="z-index:1; background-color: rgb(46, 62, 97); color:white;">
        <div></div>
        <p>Buy Airtime</p>
        <div></div>
    </nav>

    <section class="p-3 airtimeSec">
        <div class="" style="height: 50px;"></div>
        <header><b>MY FAVORITES</b></header>

        <div onclick="addTransBene()" class="shadow bg-light mt-3 mb-5 d-block justify-content-center text-center p-3 w-50 rounded rounded-3">
            <button class="border-0 bg-warning rounded rounded-circle text-light fs-1 px-3 py-2"><i class="fa fa-plus"></i></button>
            <p>Add</p>
        </div>

        <header><b>CHOOSE TRANSFER TYPE</b></header>

        <div class="w-100 navbar rounded rounded-4 my-2 bg-light p-3" onclick="toMyBank()">
            <div class="d-flex gap-3 align-items-center">
                <button class="border-0 bg-warning rounded rounded-circle text-light fs-5 px-3 py-2">FB</button>
                <p class="my-2">To PreciousBank Account</p>
            </div>
            <div>
                <i class="fa fa-arrow-right fs-3"></i>
            </div>
        </div>

        <div class="w-100 navbar rounded rounded-4 my-2 bg-light p-3">
            <div class="d-flex gap-3 align-items-center">
                <button class="border-0 bg-warning rounded rounded-circle text-light fs-5 px-3 py-2"><i class="fa fa-bank"></i></button>
                <p class="my-2">To Other Bank Account</p>
            </div>
            <div>
                <i class="fa fa-arrow-right fs-3"></i>
            </div>
        </div>

        <div class="w-100 navbar rounded rounded-4 my-2 bg-light p-3">
            <div class="d-flex gap-3 align-items-center">
                <button class="border-0 bg-warning rounded rounded-circle text-light fs-5 px-3 py-2"><i class="fa fa-bank"></i></button>
                <p class="my-2">Send To Saved Beneficiary</p>
            </div>
            <div>
                <i class="fa fa-arrow-right fs-3"></i>
            </div>
        </div>

        <div class="w-100 navbar rounded rounded-4 my-2 bg-light mb-5 p-3">
            <div class="d-flex gap-3 align-items-center">
                <button class="border-0 bg-warning rounded rounded-circle text-light fs-5 px-3 py-2"><i class="fa fa-bank"></i></button>
                <p class="my-2">eNaira</p>
            </div>
            <div>
                <i class="fa fa-arrow-right fs-3"></i>
            </div>
        </div>

          
        
    </section>
                    `;
}






const toMyBank=()=>{



    bodyDisp.innerHTML =    `
    <nav class="navbar p-2 position-fixed w-100" style="z-index:7;top:0; background-color: rgb(46, 62, 97); color:white;">
    <div onclick="transfer()"><i class="fa text-light fa-arrow-left"></i></div>
    <p>To Precious Bank</p>
    <div></div>
    </nav>
    
    <section class="p-4 mt-5">
            <p class="text-center">Available Daily Transaction Limit <br>&#8358 1,000 000.00</p>
            <div class="container shadow  rounded ">
                <div class="" "></div>
            <header class="m-4 text-center">Enter Transaction Details</header>
            <div>


            <section>
            <!-- Button trigger modal -->
            <div class="w-100 ownerAcc" id="acctd" onclick="billAccount2()" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Select account to debit   
              </div>
              
              <!-- Modal -->
              <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="staticBackdropLabel">Select Account to debit</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <div onclick="accountDet()" data-bs-dismiss="modal" style="background-color: rgb(141, 135, 135);" class="rounded rounded-4 py-2 px-3 text-light">
                    <div class="navbar">
                        <p>SAVINGS ACCOUNT</p>
                        <div class="d-flex gap-2">
                        <p>#</p>
                        <p id="accNumDispp2"></p>
                        </div>
                    </div>
                    <div class="d-flex">
                        <h2>&#8358</h2>
                        <h2 id="accBalDispp2"></h2>
                    </div>
                </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn " data-bs-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>
            </section>


                
                <div class="selectBene navbar position-relative w-100">
                    <div class="w-100 p-0 ownerAccD" id="selectBiller" onclick="" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom"
                        aria-controls="offcanvasBottom">
                        Select Beneficiary Bank
                    </div>
                    <i class="fa position-absolute angleDbtn fa-angle-down"></i>
                </div>
                <div class="offcanvas offcanvas-bottom" style="height: 100vh;" tabindex="-1" id="offcanvasBottom"
                    aria-labelledby="offcanvasBottomLabel">
                    <div class="offcanvas-header">
                
                    </div>
                    <div class="offcanvas-body small">
                        <header class="fs-3 text-center mb-5">Select account to debit</header>
                
                        <div class="networkBTN" data-bs-dismiss="offcanvas">
                        
                        <button onclick="displayNet('Precious Bank')" data-bs-dismiss="offcanvas">Precious Bank</button>
                        <button onclick="displayNet('Special Bank')" data-bs-dismiss="offcanvas">Special Bank</button>
                        <button onclick="displayNet('SQI Bank')" data-bs-dismiss="offcanvas">SQI Bank</button>
                        <button onclick="displayNet('Kuda Bank')" data-bs-dismiss="offcanvas">Kuda Bank</button></button>
                    
                        </div>
                        <div class="d-flex justify-content-center">
                            <button type="button" class=" btn" style="position: fixed; bottom: 2%; margin: auto;"
                                data-bs-dismiss="offcanvas" aria-label="Close">Cancel</button>
                        </div>
                    </div>
                </div>
                
                <input type="number" maxlength="10" onkeydown="" id="destinationAccount" class="w-100 ownerAcc" placeholder="Enter Destination Account">
                <label for="" id="destinationLabel"></label>
                <input type="number" id="sendAmount" class="w-100 ownerAcc" placeholder="Enter Amount">
                <input type="text" id="senderNarration" class="w-100 ownerAcc" placeholder="Enter Narration">
                <button class="btn btn-warning rounded rounded-5 w-100 my-3" onclick="confirmTransfer()">Continue</button>
            
            </div>
            </div>
        </section>
    `

}



const billAccount2=()=>{
    accNumDispp2.innerHTML="";
    accBalDispp2.innerHTML="";
    
    for (let index = 0; index < allCustomer.length; index++) {
    accNumDispp2.innerHTML +=`
    ${allCustomer[currentUserIndex].accNo}
`;
accBalDispp2.innerHTML +=`
    ${allCustomer[currentUserIndex].balance}
`;
    }
}

let transferConfirm= allCustomer[currentUserIndex].localHistory
const confirmTransfer=()=>{
    // if(destinationAccount.value.length < 10){
    //     destinationAccount.style.color="red";
    //     destinationLabel.innerHTML = "Enter a valid Phone Number"
    // }
    // else if(destinationAccount.value.length > 10){
    //     destinationAccount.style.color="black";
    //     destinationLabel.innerHTML = ""
    // }
    // else{
    let transferHistory = {
        debitAccount : `${allCustomer[currentUserIndex].accNo}`,
        debitBalance: `₦${allCustomer[currentUserIndex].balance}`,
        beneficiaryBank : selectBiller.innerHTML,
        destinationAcc : destinationAccount.value,
        amountSend : sendAmount.value,
        transferDate:   new Date().toLocaleDateString(),
        narration : senderNarration.value,
    }
    allCustomer[currentUserIndex].localHistory.splice(0,1, transferHistory);
    localStorage.setItem("customerPersonalDetails", JSON.stringify(allCustomer))

    bodyDisp.innerHTML=`
                        <nav class="navbar p-2 position-fixed w-100" style="z-index:7; background-color: rgb(46, 62, 97); color:white;">
                <div onclick="toMyBank()"><i class="fa text-light fa-arrow-left"></i></div>
                <p>Buy Airtime</p>
                <div></div>
            </nav>
            <p style="height: 50px;"></p>
            <section class="p-3">
                <div class="confirmBuy">
                    <p>From:</p>
                    <p id="fromAccNo">${transferConfirm[currentUserIndex].debitAccount}</p>
                </div>

                <div class="confirmBuy">
                    <p>Beneficiary Bank:</p>
                    <p id="beneBank">${transferConfirm[currentUserIndex].beneficiaryBank}</p>
                </div>

                <div class="confirmBuy">
                    <p>To:</p>
                    <p id="toAccNo">${transferConfirm[currentUserIndex].destinationAcc}</p>
                </div>

                <div class="confirmBuy">
                    <p>Amount:</p>
                    <p id="amountPaid">₦${transferConfirm[currentUserIndex].amountSend}.00</p>
                </div>

                <div class="confirmBuy">
                    <p>Date:</p>
                    <p id="tDate">${transferConfirm[currentUserIndex].transferDate}</p>
                </div>

                <div class="confirmBuy">
                    <p>Narration:</p>
                    <p id="narr">${transferConfirm[currentUserIndex].narration}</p>
                </div>

                <div class="pinContainer">
                    <p>Enter Transaction PIN</p>
                    <input id="transferPagePin" type="password">
                </div>
                
                <div class="butn w-100 gap-3 p-2 mt-5 row">
                    <button class="btn col-9 btn-warning rounded rounded-5" onclick="confirmedTransferPayment()">CONFIRM</button>
                    <button class="btn col-2 btn-warning rounded rounded-circle fs-3"><i class="fa fa-fingerprint"></i></button>
                </div>
            </section>
    `
// }
}

const confirmedTransferPayment = () =>{
    if(transferPagePin.value=="" ){
        warningPage.style.transition="4s";
            warningPage.overflowY="hidden";
            warningPage.innerHTML=`
            <div class="warningPage text-light">
              <div class="text-center w-50">
                <h2>Warning</h2>
                <p>Please, kindly enter your pin</p>
                <button onclick="cancelWarning()" class="mt-5 btn btn-warning rounded rounded-5 w-100">OK</button>
              </div>
            </div>
            `
    }
    
    


    else if(allCustomer[currentUserIndex].balance < transferConfirm[currentUserIndex].amountSend){
        warningPage.style.transition="4s";
        warningPage.overflowY="hidden";
        warningPage.innerHTML=`
        <div class="warningPage text-light">
          <div class="text-center w-50">
            <h2>Warning</h2>
            <p>Insufficient fund</p>
            <button onclick="cancelWarning()" class="mt-5 btn btn-warning rounded rounded-5 w-100">OK</button>
          </div>
        </div>
        `
    }

    else if(transferPagePin.value !== myPin[currentUserIndex].newPin){
        warningPage.style.transition="4s";
        warningPage.overflowY="hidden";
        warningPage.innerHTML=`
        <div class="warningPage text-light">
          <div class="text-center w-50">
            <h2>Warning</h2>
            <p>Incorrect Pin</p>
            
          </div>
        </div>
        `
    }
    

    else if(transferPagePin.value == myPin[currentUserIndex].newPin){
    let allTransferHistory = {
        fromAccountNumber: fromAccNo.innerHTML,
        fromAccountName: `${allCustomer[currentUserIndex].middleName} ${allCustomer[currentUserIndex].firstName}  `,
        toAccountNumber: toAccNo.innerHTML,
        transferTime:`${new Date().toLocaleTimeString()}`,
        transactionDay: tDate.innerHTML,
        narration: narr.innerHTML,
        transferAmount: amountPaid.innerHTML,
        beneficiaryBank: beneBank.innerHTML,
        transferID: `TR${Math.floor(Math.random()*1000)}/SPE`
    }
    allCustomer[currentUserIndex].realHist.push(allTransferHistory);
    localStorage.setItem("customerPersonalDetails", JSON.stringify(allCustomer))


    allAmount = allCustomer[currentUserIndex].amount;
    // alert("worki oo")
    
    
        allCustomer[currentUserIndex].balance = Number(allCustomer[currentUserIndex].balance) - Number(transferConfirm[currentUserIndex].amountSend)
        localStorage.setItem("customerPersonalDetails", JSON.stringify(allCustomer));
       
        warningPage.style.transition="4s";
        warningPage.overflowY="hidden";
        warningPage.innerHTML=`
        <div class="warningPage text-light">
          <div class="text-center w-50">
            <h2>Successful</h2>
            <div class="btn btn-warning text-light rounded rounded-circle fs-1">
                <i class="fa fa-check"></i>
            </div>
            <button onclick="goReceipt()" class="mt-5 btn btn-warning rounded rounded-5 w-100">Generate Receipt</button>
          </div>
        </div>
        `
    }
}

// ===========HISTORY==================
const goReceipt=()=>{
    window.location.href="receipt.html";
}

const hist=()=>{
//     loader.innerHTML=`
//     <section class="loadingDiv">
//     <div class="loadCircle">
//       <div class="loadCircle2">
//         <p>Getting data...</p>
//       </div>
//       <div class="loadCircle2-anim"></div>
//     </div>
//   </section>
//                     `
    allHistory.reverse();
    for (let index = 0; index < allHistory.length; index++) {
        if(allHistory[index].beneficiaryBank ==undefined  && allHistory[index].fromAccountName ==undefined && allHistory[index].fromAccountNumber==undefined && allHistory[index].narration==undefined && allHistory[index].toAccountNumber==undefined && allHistory[index].transactionDay==undefined && allHistory[index].transferAmount==undefined && allHistory[index].transferID==undefined && allHistory[index].transferTime==undefined){
        
            trtHistDisp.innerHTML +=`
            <div class="transC">    
            
            <button class="bg-light withdepo text-success">
            <i class="fa fa-arrow-up"></i>
            </button>
            <div>
           <div class="navbar gap-5 w-100 align-items-center">
           <div class="d-block">
                <p style="margin: 0;" id="">From: ${allHistory[index].SourceAccount}</p>
                <p style="margin: 0;" id="">to: ${allHistory[index].SourceAccount}</p>
                <p style="margin: 0;" id="">ID: ${allHistory[index].depositID}</p>
                <p style="margin: 0;" id="">Total: ${allHistory[index].totalAmount}</p>
            </div>
       <div class="text-success">
           <p id="hAmount"> ${allHistory[index].amountDeposit}</p>
       </div>
           </div>
           <p style="margin: 0; color: gray;" id="day">${allHistory[index].depositDay} | ${allHistory[index].depositTime}</p>
        </div>    
        </div>
        `
            
            }
        
        else if (allHistory[index].toAccount== undefined && allHistory[index].TransactionID== undefined && allHistory[index].TransactionAmount == undefined && allHistory[index].TransactionDay == undefined && allHistory[index].TransactionTime == undefined) {
                trtHistDisp.innerHTML +=`
                <section class="transC w-100" onclick="getReceipt(${index})" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">


                <button class="bg-light withdepo text-danger">
            
                  <i class="fa fa-arrow-down"></i>
                </button>
                <div>
                  <div class="navbar align-items-center">
                    <div class="d-block">
                      <p style="margin: 0;" id="">From: ${allHistory[index].fromAccountNumber}</p>
                      <p style="margin: 0;" id="">to: ${allHistory[index].toAccountNumber}</p>
                      <p style="margin: 0;" id="">ID: ${allHistory[index].transferID}</p>
                      <p style="margin: 0;" id="">B. Bank: ${allHistory[index].beneficiaryBank}</p>
                    </div>
                    <div class="text-danger">
                      <p id="hAmount">- ${allHistory[index].transferAmount}</p>
                    </div>
                  </div>
                  <p style="margin: 0; color: gray;" id="day">${allHistory[index].transactionDay} |
                    ${allHistory[index].transferTime}
                  </p>
                </div>
              </section>
                
            `
            // getReceipt(index)
        }
         

        else{
        
        trtHistDisp.innerHTML +=`
        <div class="transC">
        <button class="text-danger withdepo">
            <i class="fa fa-arrow-down"></i>
        </button>
        <div>
       <div class="navbar align-items-center">
       <div class="d-block">
       <p style="margin: 0;" id="">From: ${allCustomer[currentUserIndex].accNo}</p>
       <p style="margin: 0;" id="">to: ${allHistory[index].toAccount}</p>
       <p style="margin: 0;" id="">${allHistory[index].TransactionID}</p>
   </div>
   <div class="text-danger">
       <p id="hAmount">- &#8358${allHistory[index].TransactionAmount}</p>
   </div>
       </div>
       <p style="margin: 0; color: gray;" id="day">${allHistory[index].TransactionDay} | ${allHistory[index].TransactionTime}</p>
    </div>    
    </div>
    `
}
}
    

    
    allHistory = allCustomer[currentUserIndex].realHist;

    
    
    accNumDisp3.innerHTML +=`
                        ${allCustomer[currentUserIndex].accNo}
                    `
//    accNumDisp4.innerHTML +=`
//                     ${allCustomer[currentUserIndex].accNo}
//                 `;
    accBalDisp3.innerHTML +=`
                        ${allCustomer[currentUserIndex].balance}
                    `
                    loader.innerHTML="";
    }
    allPhoneNo = allCustomer[currentUserIndex].history;
    allAmount = allCustomer[currentUserIndex].amount;
    allHistory = allCustomer[currentUserIndex].realHist;


const goHistory=()=>{
    window.location.href="history.html"
}

const pada=()=>{
    window.history.back()
}
// let dt = dt.innerHTML
const getReceipt=(userIndex)=>{
    
    // dt.innerHTML=`sdsdsd${allHistory[index].transactionDay} | ${allHistory[userIndex].transferTime}`;
    showReceipt2.innerHTML=""
for (let index = 0; index < allHistory.length; index++) {
    showReceipt2.innerHTML = `
    <div class="receiptContent" style="height: 100vh; width: 100%;">
            
    <div class="d-flex align-items-center gap-2">
      <p class="receiptTitle">Transaction Date:</p>
      <p id="dt" class="recieptItem"></p>
    </div>

    <div class="d-flex align-items-center gap-2">
      <p class="receiptTitle">Transaction Type:</p>
      <p class="recieptItem">NIP Transfer</p>
    </div>

    <div class="d-flex align-items-center gap-2">
      <p class="receiptTitle">Amount:</p>
      <p class="recieptItem" id="am"></p>
    </div>

    <div class="d-flex align-items-center gap-2">
      <p class="receiptTitle">Source Account:</p>
      <p class="recieptItem" id="fan"></p>
    </div>

    <div class="d-flex align-items-center gap-2">
      <p class="receiptTitle">Source Account Name:</p>
      <p class="recieptItem" id="san"></p>
    </div>

    <div class="d-flex align-items-center gap-2">
      <p class="receiptTitle">Beneficiary Account Number:</p>
      <p class="recieptItem" id="banum"></p>
    </div>

    <div class="d-flex align-items-center gap-2">
      <p class="receiptTitle">Beneficiary Account Name:</p>
      <p class="recieptItem" id="banam">Balablu Bulaba</p>
    </div>

    <div class="d-flex align-items-center gap-2">
      <p class="receiptTitle">Bank:</p>
      <p class="recieptItem" id="bank"></p>
    </div>

    <div class="d-flex align-items-center gap-2">
      <p class="receiptTitle">Narration:</p>
      <p class="recieptItem" id="nat"></p>
    </div>
  </div>
  
    `
    
    dt.innerHTML=`${allHistory[userIndex].transactionDay} | ${allHistory[userIndex].transferTime}`;
    am.innerHTML= `${allHistory[userIndex].transferAmount}`
    fan.innerHTML= `${allHistory[userIndex].fromAccountNumber}`
    san.innerHTML= `${allHistory[userIndex].fromAccountName}`
    banum.innerHTML= `${allHistory[userIndex].toAccountNumber}`
    // banam.innerHTML= `${allHistory[userIndex].fromAccountNumber}`
    bank.innerHTML= `${allHistory[userIndex].beneficiaryBank}`
    nat.innerHTML= `${allHistory[userIndex].narration}`
        
}
}
// =====RECEIPT======================
const receipt=()=>{
    // alert("9834498")

    for (let index = 0; index < allHistory.length; index++) {
        receiptDate.innerHTML = `${allHistory[index].transactionDay} | ${allHistory[index].transferTime}` ;
        recieptAmount.innerHTML = allHistory[index].transferAmount;
        receiptSourceAccNumber.innerHTML = allHistory[index].fromAccountNumber;
        receiptSourceAccName.innerHTML =allHistory[index].fromAccountName;
        receiptBeneAccNumber.innerHTML =  allHistory[index].toAccountNumber;
        receiptBank.innerHTML = allHistory[index].beneficiaryBank;
        receiptnarration.innerHTML = allHistory[index].narration;
    }
    loader.innerHTML=""

}
const downloadReceipt=()=>{
    window.print()
    // alert("sdnsm")
}

// ==================HISTORY END
const addTransBene = ()=>{
    bodyDisp.innerHTML =    `
    <nav class="navbar p-2 position-fixed w-100" style="z-index:7; background-color: rgb(46, 62, 97); color:white;">
    <div onclick="transfer()"><i class="fa text-light fa-arrow-left"></i></div>
    <p>Add Favorites</p>
    <div></div>
    </nav>
    <section class="p-2">
    <div class="" style="height: 70px;"></div>
    <header class="mb-5"><b>BENEFICIARIES</b></header>
    <div>
        <p>No Beneficiaries Yet</p>
    </div>
    </section>

    `
}


// ====================TRANSFER PAGE END================================

const payBill=()=>{
    bodyDisp.innerHTML=bodyDisp.innerHTML=`
    <nav class="navbar position-fixed top-0 w-100" style="z-index:1; background-color: rgb(46, 62, 97); color:white;">
        <div></div>
        <p>Pay Bills</p>
        <div></div>
    </nav>

    <section class="p-3 airtimeSec">
        <div class="" style="height: 50px;"></div>

        
        <header class="navbar"><p>BILLER CATEGORIES</p> <i class="fa fa-search"></i></header>

        <div class="w-100 navbar rounded rounded-4 my-2 bg-light p-3" >
            <div class="d-flex gap-3 align-items-center">
                <button class="border-0 bg-warning rounded rounded-circle text-light fs-5 px-3 py-2">A</button>
                <p class="my-2">Airlines and Hotels Payment</p>
            </div>
            <div>
                <i class="fa fa-arrow-right fs-3"></i>
            </div>
        </div>

        <div class="w-100 navbar rounded rounded-4 my-2 bg-light p-3">
            <div class="d-flex gap-3 align-items-center">
                <button class="border-0 bg-warning rounded rounded-circle text-light fs-5 px-3 py-2">A</button>
                <p class="my-2">Airtime</p>
            </div>
            <div>
                <i class="fa fa-arrow-right fs-3"></i>
            </div>
        </div>

        <div class="w-100 navbar rounded rounded-4 my-2 bg-light p-3">
            <div class="d-flex gap-3 align-items-center">
                <button class="border-0 bg-warning rounded rounded-circle text-light fs-5 px-3 py-2">A</button>
                <p class="my-2">APM Terminals</p>
            </div>
            <div>
                <i class="fa fa-arrow-right fs-3"></i>
            </div>
        </div>

        <div class="w-100 navbar rounded rounded-4 my-2 bg-light  p-3">
            <div class="d-flex gap-3 align-items-center">
                <button class="border-0 bg-warning rounded rounded-circle text-light fs-5 px-3 py-2">B</button>
                <p class="my-2">Betting, Lottery and Gaming</p>
            </div>
            <div>
                <i class="fa fa-arrow-right fs-3"></i>
            </div>
        </div>

        <div class="w-100 navbar rounded rounded-4 my-2 bg-light  p-3">
            <div class="d-flex gap-3 align-items-center">
                <button class="border-0 bg-warning rounded rounded-circle text-light fs-5 px-3 py-2">C</button>
                <p class="my-2">Cable TV</p>
            </div>
            <div>
                <i class="fa fa-arrow-right fs-3"></i>
            </div>
        </div>

        <div class="w-100 navbar rounded rounded-4 my-2 bg-light  p-3">
            <div class="d-flex gap-3 align-items-center">
                <button class="border-0 bg-warning rounded rounded-circle text-light fs-5 px-3 py-2">D</button>
                <p class="my-2">Data</p>
            </div>
            <div>
                <i class="fa fa-arrow-right fs-3"></i>
            </div>
        </div>

        <div class="w-100 navbar rounded rounded-4 my-2 bg-light  p-3">
            <div class="d-flex gap-3 align-items-center">
                <button class="border-0 bg-warning rounded rounded-circle text-light fs-5 px-3 py-2">D</button>
                <p class="my-2">Donations</p>
            </div>
            <div>
                <i class="fa fa-arrow-right fs-3"></i>
            </div>
        </div>

        <div class="w-100 navbar rounded rounded-4 my-2 bg-light  p-3">
            <div class="d-flex gap-3 align-items-center">
                <button class="border-0 bg-warning rounded rounded-circle text-light fs-5 px-3 py-2">E</button>
                <p class="my-2">Electricity</p>
            </div>
            <div>
                <i class="fa fa-arrow-right fs-3"></i>
            </div>
        </div>
        
        <div class="w-100 navbar rounded rounded-4 my-2 bg-light  p-3">
        <div class="d-flex gap-3 align-items-center">
            <button class="border-0 bg-warning rounded rounded-circle text-light fs-5 px-3 py-2">G</button>
            <p class="my-2">Gift and Reward</p>
        </div>
        <div>
            <i class="fa fa-arrow-right fs-3"></i>
        </div>
    </div>

    <div class="w-100 navbar rounded rounded-4 my-2 bg-light  p-3">
    <div class="d-flex gap-3 align-items-center">
        <button class="border-0 bg-warning rounded rounded-circle text-light fs-5 px-3 py-2">E</button>
        <p class="my-2">Electricity</p>
    </div>
    <div>
        <i class="fa fa-arrow-right fs-3"></i>
    </div>
</div>
        <div class="w-100 navbar rounded rounded-4 my-2 bg-light  p-3">
            <div class="d-flex gap-3 align-items-center">
                <button class="border-0 bg-warning rounded rounded-circle text-light fs-5 px-3 py-2">I</button>
                <p class="my-2">Internet Services</p>
            </div>
            <div>
                <i class="fa fa-arrow-right fs-3"></i>
            </div>
        </div>
        <div class="w-100 navbar rounded rounded-4 my-2 bg-light  p-3">
            <div class="d-flex gap-3 align-items-center">
                <button class="border-0 bg-warning rounded rounded-circle text-light fs-5 px-3 py-2">L</button>
                <p class="my-2">Loan Repayment</p>
            </div>
            <div>
                <i class="fa fa-arrow-right fs-3"></i>
            </div>
        </div>
    </section>`
}

const qrPayment=()=>{
    bodyDisp.innerHTML=`
    <nav class="navbar position-fixed top-0 w-100" style="z-index:1; background-color: rgb(46, 62, 97); color:white;">
        <div></div>
        <p>Digital Payment</p>
        <div></div>
    </nav>

    <section class="p-3 airtimeSec "  style="height:100vh">
        <div class="" style="height: 50px;"></div>
       

        <div class="w-100 navbar rounded rounded-4 my-2 bg-light p-3" >
            <div class="d-flex gap-3 align-items-center">
                <button class="border-0 bg-warning rounded rounded-circle text-light fs-5 px-3 py-2"><i class="fa fa-qrcode"></i></button>
                <p class="my-2">QR Payment</p>
            </div>
            <div>
                <i class="fa fa-arrow-right fs-3"></i>
            </div>
        </div>

        
    </section>`
}

const loans=()=>{
    bodyDisp.innerHTML=`
    <nav class="navbar position-fixed top-0 w-100" style="z-index:1; background-color: rgb(46, 62, 97); color:white;">
        <div></div>
        <p>Loans</p>
        <div></div>
    </nav>

    <section class="p-3 airtimeSec "  style="height:100vh">
        <div class="" style="height: 50px;"></div>
       

        <div class="w-100 navbar rounded rounded-4 my-2 bg-light p-3" onclick="nano()">
            <div class="d-flex gap-3 align-items-center">
                <button class="border-0 bg-warning rounded rounded-circle text-light fs-5 px-3 py-2">N</i></button>
                <p class="my-2">Nano Loan</p>
            </div>
            <div>
                <i class="fa fa-arrow-right fs-3"></i>
            </div>
        </div>

        <div class="w-100 navbar rounded rounded-4 my-2 bg-light p-3" >
            <div class="d-flex gap-3 align-items-center">
                <button class="border-0 bg-warning rounded rounded-circle text-light fs-5 px-3 py-2">F</i></button>
                <p class="my-2">First Advance</p>
            </div>
            <div>
                <i class="fa fa-arrow-right fs-3"></i>
            </div>
        </div>

        
    </section>`
}
const nano=()=>{
    bodyDisp.innerHTML=`
    <nav class="navbar position-fixed top-0 w-100 px-3" style="z-index:5; background-color: rgb(46, 62, 97); color:white;">
    <div onclick="loans()"><i class="fa text-light fa-arrow-left"></i></div>
        <p>Nano Loan</p>
        <div></div>
    </nav>

    <section class="p-3 airtimeSec "  style="height:100vh">
        <div class="" style="height: 50px;"></div>
       

        <div class="w-100 navbar rounded rounded-4 my-2 bg-light p-3" >
            <div class="d-flex gap-3 align-items-center">
                <button class="border-0 bg-warning rounded rounded-circle text-light fs-5 px-3 py-2"><i class="fa fa-mobile"></i></button>
                <p class="my-2">Get a loan</p>
            </div>
            <div>
                <i class="fa fa-arrow-right fs-3"></i>
            </div>
        </div>

        <div class="w-100 navbar rounded rounded-4 my-2 bg-light p-3" >
            <div class="d-flex gap-3 align-items-center">
                <button class="border-0 bg-warning rounded rounded-circle text-light fs-5 px-3 py-2"><i class="fa fa-mobile"></i></button>
                <p class="my-2">See current loan</p>
            </div>
            <div>
                <i class="fa fa-arrow-right fs-3"></i>
            </div>
        </div>

        <div class="w-100 navbar rounded rounded-4 my-2 bg-light p-3" >
            <div class="d-flex gap-3 align-items-center">
                <button class="border-0 bg-warning rounded rounded-circle text-light fs-5 px-3 py-2"><i class="fa fa-mobile"></i></button>
                <p class="my-2">Review Previous Loans</p>
            </div>
            <div>
                <i class="fa fa-arrow-right fs-3"></i>
            </div>
        </div>

        
    </section>`
}

const virtualCard=()=>{
    bodyDisp.innerHTML=`
 
    <nav class="navbar position-fixed top-0 w-100 px-3" style="z-index:5; background-color: rgb(46, 62, 97); color:white;">
    <div onclick="myAcc()"><i class="fa text-light fa-arrow-left"></i></div>
        <p>Virtual Cards</p>
        <div></div>
    </nav>

    <section class="p-3 airtimeSec "  style="height:100vh; z-index:10;">
        <div class="" style="height: 50px;"></div>
       

        <div class="w-100 navbar rounded rounded-4 my-2 bg-light p-3" >
            <div class="d-flex gap-3 align-items-center">
                <button class="border-0 bg-warning rounded rounded-circle text-light fs-5 px-3 py-2"><i class="fa fa-credit-card"></i></button>
                <p class="my-2">Create Virtual Cards</p>
            </div>
            <div>
                <i class="fa fa-arrow-right fs-3"></i>
            </div>
        </div>

        
    </section>`
}

const settings=()=>{
    bodyDisp.innerHTML=bodyDisp.innerHTML=`
    <nav class="navbar position-fixed top-0 w-100" style="z-index:1; background-color: rgb(46, 62, 97); color:white;">
        <div></div>
        <p class="my-2">Account Settings</p>
        <div></div>
    </nav>

    <section class="p-3 airtimeSec">
        <div class="" style="height: 50px;"></div>

        <div class="w-100 navbar rounded rounded-4 my-3 bg-light p-3" onclick="setTransferPin()">
            <div class="d-flex gap-3 align-items-center">
                <button class="border-0 bg-warning rounded rounded-circle text-light fs-5 px-3 py-2"><i class="fa fa-edit"></i></button>
                <p class="my-2">Set Transfer Pin</p>
            </div>
            <div>
                <i class="fa fa-arrow-right fs-3"></i>
            </div>
        </div>

        <div class="w-100 navbar rounded rounded-4 my-3 bg-light p-3">
            <div class="d-flex gap-3 align-items-center">
                <button class="border-0 bg-warning rounded rounded-circle text-light fs-5 px-3 py-2"><i class="fa fa-share"></i></button>
                <p class="my-2">Share This App</p>
            </div>
            <div>
                <i class="fa fa-arrow-right fs-3"></i>
            </div>
        </div>

        <div class="w-100 navbar rounded rounded-4 my-3 bg-light p-3">
            <div class="d-flex gap-3 align-items-center">
                <button class="border-0 bg-warning rounded rounded-circle text-light fs-5 px-3 py-2">A</button>
                <p class="my-2">Account On & Off Switch</p>
            </div>
            <div>
                <i class="fa fa-arrow-right fs-3"></i>
            </div>
        </div>

        <div class="w-100 navbar rounded rounded-4 my-3 bg-light p-3"
            <p>Show Password</p>
            <input type="checkbox"  class="form-check-input">
        </div>

        
    </section>`
}
const setTransferPin=()=>{
    bodyDisp.innerHTML=`
    <nav class="navbar position-fixed top-0 w-100 px-3" style="z-index:5; background-color: rgb(46, 62, 97); color:white;">
    <div onclick="settings()"><i class="fa text-light fa-arrow-left"></i></div>
        <p>Transfer Pin</p>
        <div></div>
    </nav>

    <div class="" style="height: 100px;"></div>
    <section class="p-3">
        <header ><p class="text-center fs-3 fw-bold">BILLER CATEGORIES</p></header>
        <input type="password" id="nPin" class="w-100 my-3 py-2 ownerAcc" placeholder="New Pin">
        <input type="password" id="cnPin" class="w-100 py-2 ownerAcc" placeholder="Confirm New Pin">
        <button class="btn w-100 my-5 btn-warning rounded rounded-5" onclick="setpin()">CONFIRM</button>
    </section>
    `
}
let myPin = allCustomer[currentUserIndex].pin;
const setpin=()=>{
    
    if(nPin.value=="" || cnPin.value=="" || nPin.value=="" && cnPin.value==""){
            
    warningPage.style.transition="4s";
    warningPage.overflowY="hidden";
    warningPage.innerHTML=`
    <div class="warningPage text-light">
      <div class="text-center w-50">
        <h2>Warning</h2>
        <div>
            Kindly Input Pin
        </div>
        <button onclick="cancelWarning()" class="mt-5 btn btn-warning rounded rounded-5 w-100">OK</button>
      </div>
    </div>
    `
    }
    else if(nPin.value==cnPin.value){
        let transferPin = {
            newPin : cnPin.value,
        }
        allCustomer[currentUserIndex].pin.splice(0,1, transferPin);
        localStorage.setItem("customerPersonalDetails", JSON.stringify(allCustomer));
         
        warningPage.style.transition="4s";
        warningPage.overflowY="hidden";
        warningPage.innerHTML=`
        <div class="warningPage text-light">
          <div class="text-center w-50">
            <h2>Pin Set Successful</h2>
            <div class="btn btn-warning text-light rounded rounded-circle fs-1">
                <i class="fa fa-check"></i>
            </div>
            <button onclick="myAcc()" class="mt-5 btn btn-warning rounded rounded-5 w-100">OK</button>
          </div>
        </div>
        `
        }
    else{
        warningPage.style.transition="4s";
        warningPage.overflowY="hidden";
        warningPage.innerHTML=`
        <div class="warningPage text-light">
          <div class="text-center w-50">
            <h2>Warning</h2>
            <div>
                Incorrect Pin
            </div>
            <button onclick="cancelWarning()" class="mt-5 btn btn-warning rounded rounded-5 w-100">OK</button>
          </div>
        </div>
        `
    }
    
}
