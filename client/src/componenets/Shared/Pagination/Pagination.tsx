import React, { useState } from 'react'

type MODE = 'block' | 'number' | 'sLetter' | 'bLetter' | 'roman'

interface PaginationProps {
  mode?: MODE | undefined
}

const Pagination: React.FC<PaginationProps> = ({ mode }) => {
  const letter = Array.from('abcdefghijklmnopqrstuvwxyz')
  const toRoman = (num: number): string => {
    const romanMap = [
      { value: 1000, symbol: 'M' },
      { value: 900, symbol: 'CM' },
      { value: 500, symbol: 'D' },
      { value: 400, symbol: 'CD' },
      { value: 100, symbol: 'C' },
      { value: 90, symbol: 'XC' },
      { value: 50, symbol: 'L' },
      { value: 40, symbol: 'XL' },
      { value: 10, symbol: 'X' },
      { value: 9, symbol: 'IX' },
      { value: 5, symbol: 'V' },
      { value: 4, symbol: 'IV' },
      { value: 1, symbol: 'I' },
    ]

    let result = ''
    for (const { value, symbol } of romanMap) {
      while (num >= value) {
        result += symbol
        num -= value
      }
    }
    return result
  }

  const [current, setCurrent] = useState(0)

  switch (mode) {
    case 'block':
      return (
        <div className="flex items-center justify-center gap-1.5 mt-9">
          {[...Array(10).keys()].map((i) => (
            <div
              key={i}
              onClick={() => setCurrent(i)}
              className={` p-1 bg-primary rounded transition-all duration-200 cursor-pointer ${
                current == i ? 'w-3 h-4.5 -translate-y-2.5' : 'w-7 h-3.5'
              }`}
            />
          ))}
        </div>
      )
    case 'number':
      return (
        <div className="mt-9 flex justify-center items-center">
          {[...Array(10).keys()].map((_, i, arr) => (
            <div
              key={i}
              onClick={() => setCurrent(i)}
              className={`btn btn-sm transition-all duration-150 ${
                0 === i
                  ? 'rounded-l-xl'
                  : i === arr.length - 1
                  ? 'rounded-r-xl'
                  : ''
              } ${
                current === i
                  ? '!rounded-full btn-primary mx-1.5 -translate-y-2.5'
                  : 'rounded-none btn-soft btn-primary'
              }`}
            >
              {i}
            </div>
          ))}
        </div>
      )
    case 'sLetter':
      return (
        <div className="mt-9 flex justify-center items-center">
          {[...Array(10).keys()].map((_, i, arr) => (
            <div
              key={i}
              onClick={() => setCurrent(i)}
              className={`btn btn-sm transition-all duration-150 ${
                0 === i
                  ? 'rounded-l-xl'
                  : i === arr.length - 1
                  ? 'rounded-r-xl'
                  : ''
              } ${
                current === i
                  ? '!rounded-full btn-primary mx-1.5 -translate-y-2.5'
                  : 'rounded-none btn-soft btn-primary'
              }`}
            >
              {letter[i]}
            </div>
          ))}
        </div>
      )
    case 'bLetter':
      return (
        <div className="mt-9 flex justify-center items-center">
          {[...Array(10).keys()].map((_, i, arr) => (
            <div
              key={i}
              onClick={() => setCurrent(i)}
              className={`btn btn-sm transition-all duration-150 ${
                0 === i
                  ? 'rounded-l-xl'
                  : i === arr.length - 1
                  ? 'rounded-r-xl'
                  : ''
              } ${
                current === i
                  ? '!rounded-full btn-primary mx-1.5 -translate-y-2.5'
                  : 'rounded-none btn-soft btn-primary'
              }`}
            >
              {letter[i].toLocaleUpperCase()}
            </div>
          ))}
        </div>
      )
    case 'roman':
      return (
        <div className="mt-9 flex justify-center items-center">
          {[...Array(10).keys()].map((_, i, arr) => (
            <div
              key={i}
              onClick={() => setCurrent(i)}
              className={`btn btn-sm transition-all duration-150 ${
                0 === i
                  ? 'rounded-l-xl'
                  : i === arr.length - 1
                  ? 'rounded-r-xl'
                  : ''
              } ${
                current === i
                  ? '!rounded-full btn-primary mx-1.5 -translate-y-2.5'
                  : 'rounded-none btn-soft btn-primary'
              }`}
            >
              {toRoman(i + 1)}
            </div>
          ))}
        </div>
      )
    default:
      return null
  }
}

export default Pagination
