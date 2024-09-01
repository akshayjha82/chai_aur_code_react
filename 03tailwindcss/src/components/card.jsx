import React from 'react'

function Card(props) {  // destructuring the props we can also just pass a single variable and use dot notaion for using its values
  return (
    <div class="relative h-[400px] w-[300px] rounded-md mb-5">
      <img
        src="https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="AirMax Pro"
        class="z-0 h-full w-full rounded-md object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div class="absolute bottom-4 left-4 text-left">
        <h1 class="text-lg font-semibold text-white">{props.username}</h1>
        <p class="mt-2 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          debitis?
        </p>
        <button class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black">
          {props.btn_text}
        </button>
      </div>
    </div>
  )
}

export default Card