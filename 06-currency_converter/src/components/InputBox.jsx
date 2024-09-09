import React,{useId} from 'react'

function InputBox({
  label,
  onamountChange,
  oncurrencyChange,
  currencyoptions = [],
  amount,
  selectcurrency = "usd",
}) {
 const amountId = useId();

return (
      <div className={`bg-white p-3 rounded-lg text-sm flex`}>
          <div className="w-1/2">
              <label  htmlFor={amountId} className=" text-black/40 mb-2 inline-block" >
                  {label}
              </label>
              <input
                  id={amountId}
                  className="outline-none w-full bg-transparent py-1.5"
                  type="number"
                  placeholder="Amount"
                  value={amount}
                //   disabled={amountdisable}
                  onChange={(e) => onamountChange && onamountChange(Number(e.target.value))}
              />
          </div>
          <div className = "w-1/2 flex flex-wrap justify-end text-right">
              <p className = "text-black/40 mb-2 w-full">Currency Type</p>
              <select
                  className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none text-black"
                  value={selectcurrency}
                //   disabled={currencydisable}
                  onChange={(e) => oncurrencyChange && oncurrencyChange(e.target.value)}>
              
              {currencyoptions.length > 0 ? (
              currencyoptions.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))
            ) : (
              <option value="">No options available</option>
            )}
              </select>
          </div>
      </div>
  );
}

export default InputBox;
