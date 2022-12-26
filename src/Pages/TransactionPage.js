import React, { useState } from 'react'
import TransactionwithEmail from '../TransactionwithEmail';
import web3 from '../web3';
const TransactionPage = () => {
    const [money, setmoney] = useState('ether');
    const [value, setvalue] = useState(0);
    const [Receiver, setReceiver] = useState(null);
    const [Sender, setSender] = useState(null);
    const [Email, setEmail] = useState(null);

    const sendMoney = async () => {

        const accountlist = await web3.eth.getAccounts();
        await TransactionwithEmail.methods.Transaction(Email).send({
            from: accountlist[0],
            value: web3.utils.toWei(value, money)
        });

    }

    return (
        <>
            <div className="font-manrope flex h-screen w-full items-center justify-center bg-black" >
                <div className="mx-auto box-border w-[365px] border bg-white p-4">
                    <div className="flex items-center justify-between">
                        <span className="text-[#414244] text-2xl">ECrpal Sending Money</span>
                    </div>
                    <div className="mt-6">
                        <div className="font-semibold">How much would you like to send?</div>
                        <div>
                            <input
                                className="mt-1 w-full rounded-[4px] border border-[#A0ABBB] p-2"
                                defaultValue={0.0}
                                type="text"
                                placeholder={100.0}
                                onChange={(e) => {
                                    setvalue(e.target.value);
                                }}
                            />
                        </div>
                        <div className="flex justify-between text-sm text-bold text-blue-400">
                            Amount in ETH (By default).
                        </div>
                        <div className="flex justify-between">
                            <div className="mt-[14px] cursor-pointer truncate rounded-[4px] border border-green-700 p-3 text-[#191D23]">
                                Ether
                            </div>
                            <div className="mt-[14px] cursor-pointer truncate rounded-[4px] border border-[#E7EAEE] p-3 text-[#191D23]">
                                Wei
                            </div>
                            <div className="mt-[14px] cursor-pointer truncate rounded-[4px] border border-[#E7EAEE] p-3 text-[#191D23]">
                                Gwei
                            </div>
                            <div className="mt-[14px] cursor-pointer truncate rounded-[4px] border border-[#E7EAEE] p-3 text-[#191D23]">
                                Finney
                            </div>
                        </div>
                    </div>
                    <div className="mt-6">
                        <div className="font-semibold">Sending To <span className='text-xs'>provide Email id</span></div>
                        <div>
                            <input
                                className="mt-1 w-full rounded-[4px] border border-[#A0ABBB] p-2"
                                // defaultValue={100.0}
                                type="text"
                                placeholder="Email id"
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                            />
                        </div>
                        <div className="mt-2">
                            <div className="flex w-full items-center justify-between bg-neutral-100 p-3 rounded-[4px]">
                                <div className="flex items-center gap-x-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-8 w-8 text-[#299D37]"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <span className="font-semibold">Checking</span>
                                </div>
                                <div className="flex items-center gap-x-2">
                                    <div className="text-[#64748B]">Verified</div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 cursor-pointer"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6">
                        <div className="flex items-center gap-x-[10px] bg-neutral-100 p-3 mt-2 rounded-[4px]">
                            <img
                                className="h-10 w-10 rounded-full"
                                src="https://images.unsplash.com/photo-1507019403270-cca502add9f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                alt=""
                            />
                            <div>
                                <div className="font-semibold">MetaMask <span className='text-green-400 text-xs'>(Account Selected)</span></div>
                                <div className="text-[#f8485d] text-xs">Transaction Can not be Revert once Confirmed</div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6">
                        <div className="w-full cursor-pointer rounded-[4px] bg-green-500 px-3 py-[6px] text-center font-semibold text-white"
                          onClick={sendMoney}>
                            Send {`${value} ${money}`}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TransactionPage;