// import { useState ,useEffect} from 'react'
// import {InputBox} from './components/inputfile';
// import useCurrency from './hooks/useCurrency'

// function App() {

//   const [amount,setAmount] = useState(0);
//   const [convertedAmount,setconvertedAmount] = useState(0);
//   const [from,setFrom] = useState("usd");
//   const [to,setTo] = useState("inr");

//   const currencyData = useCurrency(from);

//   const options = Object.keys(currencyData);

//   const swap = () => {
//     setFrom(to);
//     setTo(from);
//     setAmount(convertedAmount);
//     setconvertedAmount(amount);
//   }

//   const convert = () => {
//     setconvertedAmount(amount * currencyData[to])
//   }

//   return (
//       <div
//           className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
//           style={{
//               backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
//           }}
//       >
//           <div className="w-full">
//               <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
//                   <form
//                       onSubmit={(e) => {
//                           e.preventDefault();
//                           convert();
//                       }}
//                   >
//                       <div className="w-full mb-1">
//                           <InputBox
//                               label="From"
//                               amount={amount}
//                               selectcurrency={from}
//                               onamountChange={(amount) => setAmount(amount)}
//                               oncurrencyChange={(currency) => setAmount(currency)}
//                               currencyoptions={options}
                              
//                           />
//                       </div>
//                       <div className="relative w-full h-0.5">
//                           <button
//                               type="button"
//                               className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
//                               onClick={swap}
//                           >
//                               swap
//                           </button>
//                       </div>
//                       <div className="w-full mt-1 mb-4">
//                           <InputBox
//                               label="To"
//                               amount={convertedAmount}
//                               onamountChange={(convertedAmount) => setconvertedAmount(convertedAmount)}
//                               currencyoptions={options}
//                               oncurrencyChange={(currency) => setTo(currency)}
//                               selectcurrency={from}
//                               amountdisable
                              
//                           />
//                       </div>
//                       <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
//                           Convert {from.toUpperCase()} to {to.toUpperCase()}
//                       </button>
//                   </form>
//               </div>
//           </div>
//       </div>
//   );
// }

// export default App;

import { useState } from 'react'
import {InputBox} from './components/inputfile';
import useCurrency from './hooks/useCurrency'


function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrency(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label='From'
                            onamountChange={(amount) => setAmount(amount)}
                            oncurrencyChange={(currency) => setFrom(currency)}
                            currencyoptions={options}
                            amount={amount}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyoptions={options}
                            oncurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={from}
                            onamountChange={(amount) => setConvertedAmount(amount)}
                            
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
