import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import web3 from '../web3'
import TransactionwithEmail from '../TransactionwithEmail';
const HomePage = () => {
    const [Eamil, setEmail] = useState(null);
    const [publicaddress, setpublicaddress] = useState(null);
    const [ipaddress, setipaddress] = useState(null);
    const [Emailpassed, setEmailpassed] = useState(false);
    const [buttondisabled, setbuttondisabled] = useState(true);
    const checkEmail = () => {
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var check = validRegex.test(String(Eamil).toLowerCase());
        if (check === true) {
            setEmailpassed(true);
            setbuttondisabled(false);
        }
    }

    const attachEmail = async (e) => {

        e.preventDefault();
        const res = await axios.get('https://geolocation-db.com/json/');
        console.log(res.data);
        setipaddress(String(res.data.IPv4));


        let fetchresult = await TransactionwithEmail.methods.getAttachedAccount(Eamil).call();
        let string1 = String(fetchresult);
        let deadaccount = String("0x0000000000000000000000000000000000000000");
        if (string1 === deadaccount) {
            const accountList = await web3.eth.getAccounts();
            console.log(accountList);
            try {
                await TransactionwithEmail.methods.RegisterEmail("metamask", ipaddress, publicaddress, Eamil).send(
                    {
                        from: accountList[0],
                    }
                );
                window.alert("success Email got attached");
                window.location.reload();

            } catch (error) {
                window.alert(error.message);
            }
        }
        else {
            setEmailpassed(false);
            alert("email already register");
        }
    }
    return (
        <>
            {/* component */}
            <div className="container bg-black">
                <div className="p-20 h-screen w-screen flex flex-col-reverse md:flex-row items-center justify-center bg-black">
                    <div className="content text-3xl text-center md:text-left">
                        <h1 className="text-5xl text-blue-400 font-bold">ECrpal</h1>
                        <p className='font-bold text-2xl text-white'>Connect your Email-id with Metamask wallet.</p>
                    </div>
                    <div className="">
                        {/* <div className={success === true ? "container mx-auto flex flex-col items-center" : "hidden"}>
                            <div className="shadow-lg w-80 p-4 flex flex-col bg-green-400 rounded-lg h-[30vh] mb-8 md:ml-8 lg:ml-12">
                                <h1 className='text-center justify-center align-middle my-auto text-5xl font-bold text-white'>Success</h1>
                            </div>
                        </div> */}
                        <div className="container mx-auto flex flex-col items-center">
                            <form className="shadow-lg w-80 p-4 flex flex-col bg-white rounded-lg">
                                <input
                                    type="text"
                                    placeholder="Email Id"
                                    required
                                    className="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500"
                                    onChange={(e) => {
                                        setEmail((e.target.value).toLowerCase());
                                        checkEmail();
                                    }}
                                />
                                <p className={Emailpassed === true ? "hidden" : "mb-4 text-red-500"}>Wrong Email</p>
                                <input
                                    type="text"
                                    placeholder="Wallet public address"
                                    required
                                    className="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500"
                                    onChange={(e) => {
                                        setpublicaddress(e.target.value);
                                    }}
                                />
                                <button className={buttondisabled === true ? "w-full bg-orange-300 text-white p-3 rounded-lg font-semibold text-lg" : "w-full bg-orange-500 text-white p-3 rounded-lg font-semibold text-lg"}
                                    onClick={attachEmail}
                                    disabled={buttondisabled}>
                                    Connect to Wallet
                                </button>
                                <hr />
                                <Link to="/transaction"><button className="w-full bg-purple-600 mt-8 mb-4 text-white p-3 rounded-lg font-semibold text-lg">
                                    Transaction
                                </button>
                                </Link>
                            </form>
                            <p className="text-center text-sm my-4 text-white">
                                <span className="font-semibold text-center w-full">Create a Transaction</span>{" "}
                                Easily through the Email-Id
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default HomePage;