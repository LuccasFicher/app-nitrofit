'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Questionnaire() {
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({
    objective: '',
    level: '',
    equipment: ''
  })

  const questions = [
    {
      key: 'objective',
      question: 'Qual seu objetivo?',
      options: ['Perder peso', 'Ganhar massa', 'Manter forma']
    },
    {
      key: 'level',
      question: 'Qual seu nível de experiência?',
      options: ['Iniciante', 'Intermediário', 'Avançado']
    },
    {
      key: 'equipment',
      question: 'Quais equipamentos você tem?',
      options: ['Nenhum', 'Halters', 'Academia completa']
    }
  ]

  const handleAnswer = (answer: string) => {
    setAnswers(prev => ({ ...prev, [questions[step].key]: answer }))
    if (step < questions.length - 1) {
      setStep(step + 1)
    } else {
      // Salvar no localStorage e ir para dashboard
      localStorage.setItem('userProfile', JSON.stringify(answers))
      router.push('/')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-2xl font-bold text-primary mb-8">Personalize seu Plano</h1>
      <div className="bg-primary/10 p-6 rounded-lg max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4">{questions[step].question}</h2>
        <div className="space-y-2">
          {questions[step].options.map(option => (
            <button
              key={option}
              onClick={() => handleAnswer(option)}
              className="w-full p-3 bg-primary text-secondary rounded hover:bg-primary/80 transition-colors"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}