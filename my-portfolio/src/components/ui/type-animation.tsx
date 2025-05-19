'use client'

import { useEffect, useState } from 'react'

interface TypeAnimationProps {
  sequence: string[]
  wrapper?: string
  speed?: number
  repeat?: number
  className?: string
}

export function TypeAnimation({
  sequence,
  wrapper = 'span',
  speed = 50,
  repeat = Infinity,
  className = ''
}: TypeAnimationProps) {
  const [text, setText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [repeatCount, setRepeatCount] = useState(0)

  useEffect(() => {
    const currentSequence = sequence[currentIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentSequence.length) {
          setCurrentText(currentSequence.slice(0, currentText.length + 1))
        } else {
          setTimeout(() => {
            setIsDeleting(true)
          }, 1000)
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentSequence.slice(0, currentText.length - 1))
        } else {
          setIsDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % sequence.length)
          if (currentIndex === sequence.length - 1) {
            setRepeatCount((prev) => prev + 1)
          }
        }
      }
    }, isDeleting ? speed / 2 : speed)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentIndex, sequence, speed])

  useEffect(() => {
    if (repeat !== Infinity && repeatCount >= repeat) {
      setCurrentText(sequence[0])
    }
  }, [repeatCount, repeat, sequence])

  const Wrapper = wrapper as keyof JSX.IntrinsicElements

  return <Wrapper className={className}>{currentText}</Wrapper>
} 