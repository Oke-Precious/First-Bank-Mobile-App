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
            <div> error! Your password does not correspond</div>
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
            history : [],
            amount : [],
            realHist:[],
            localHistory : [],
            immediateTime : [],
            pin:[],
            confirmPassword: cPassword.value,
            balance: 1000,
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
                    `;
               
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
            
            <input type="text" id="enterPhone" class="w-100 " placeholder="Enter Phone Number">
            <label for="enterPhone" id="phoneLabel" class="text-danger"></label>
            <button class="btn btn-warning rounded rounded-5 w-100" onclick="contPayment()">Continue</button>

        </div>
    </section>
                    `;
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
    warningPage.style.transition="4s";
    
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
    else if(enterPhone.value==""){
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
                
                <input type="text" id="enterAmount" class="w-100 ownerAcc" placeholder="Enter Amount">
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
    
    let amountHistory = {
        amountPaid: enterAmount.value,
        airtimeTime:`${new Date().toLocaleTimeString()}`,
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
                    <input type="password">
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
    dispT.innerHTML = `${allAmount[currentUserIndex].airtimeTime}`;
   
}
allPhoneNo = allCustomer[currentUserIndex].history;

const confirmedPayment = () =>{

    let allTransactionHistory = {
        fromAccount: allCustomer[currentUserIndex].accNo,
        toAccount: allPhoneNo[currentUserIndex].airtimeNumber,
        TransactionDay: allAmount[currentUserIndex].airtimeDay,
        TransactionAmount: ` ${allAmount[currentUserIndex].amountPaid}.00`,
        TransactionID: `AT${Math.floor(Math.random()*1000)}/${allCustomer[currentUserIndex].history[currentUserIndex].airtimeNetwork}`
    }
    allCustomer[currentUserIndex].realHist.push(allTransactionHistory);
    localStorage.setItem("customerPersonalDetails", JSON.stringify(allCustomer))


    allAmount = allCustomer[currentUserIndex].amount;
    // alert("worki oo")
    if(allCustomer[currentUserIndex].balance < allAmount[currentUserIndex].amountPaid){
        alert("insufficient Fund")
    }
    else{
        allCustomer[currentUserIndex].balance = Number(allCustomer[currentUserIndex].balance) - Number(allAmount[currentUserIndex].amountPaid)
        localStorage.setItem("customerPersonalDetails", JSON.stringify(allCustomer));
        // accNumDisp3.innerHTML= allCustomer[currentUserIndex].balance;
    }
    
}

// ==========================AIRTIME PAGE END======================

const hist=()=>{
    allHistory.reverse();
    for (let index = 0; index < allHistory.length; index++) {
        trtHistDisp.innerHTML +=`
        <div class="transC">
        <button class="text-danger">
            <i class="fa fa-arrow-down"></i>
        </button>
        <div class="d-block">
            <p style="margin: 0;" id="">From: ${allCustomer[currentUserIndex].accNo}</p>
            <p style="margin: 0;" id="toUser">to: ${allHistory[index].toAccount}</p>
            <p style="margin: 0;">${allHistory[index].TransactionID}</p>
            <p style="margin: 0; color: gray;" id="day">${allHistory[index].TransactionDay}</p>
        </div>
        <div class="text-danger">
            <p id="hAmount">- &#8358${allHistory[index].TransactionAmount}</p>
        </div>
    </div>
            
                    `
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
                    `;
   
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
                <p class="my-2">To FirstBank Account</p>
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
    alert("izz working")

    let airtimeHistory = {
        airtimeNumber : enterPhone.value
    };
    allCustomer[currentUserIndex].history.splice(0,1, airtimeHistory);
    localStorage.setItem("customerPersonalDetails", JSON.stringify(allCustomer))

 

    bodyDisp.innerHTML =    `
    <nav class="navbar p-2 position-fixed w-100" style="z-index:7;top:0; background-color: rgb(46, 62, 97); color:white;">
    <div onclick="transfer()"><i class="fa text-light fa-arrow-left"></i></div>
    <p>To First Bank</p>
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
                      <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
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
                        
                        <button onclick="displayNet('First Bank')" data-bs-dismiss="offcanvas">First Bank</button>
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
                
                <input type="text" id="enterAmount" class="w-100 ownerAcc" placeholder="Enter Destination Account">
                <input type="text" id="enterAmount" class="w-100 ownerAcc" placeholder="Enter Amount">
                <input type="text" id="enterAmount" class="w-100 ownerAcc" placeholder="Enter Narration">
                <button class="btn btn-warning rounded rounded-5 w-100" onclick="goTransferPin()">Continue</button>
            
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

const goTransferPin=()=>{
    alert("iss working")
}


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
