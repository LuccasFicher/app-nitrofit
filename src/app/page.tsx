'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Trophy, Dumbbell, Utensils, BarChart3 } from 'lucide-react'

export default function Dashboard() {
  const [profile, setProfile] = useState<any>(null)
  const [points, setPoints] = useState(0)
  const [streak, setStreak] = useState(0)

  useEffect(() => {
    const savedProfile = localStorage.getItem('userProfile')
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile))
    } else {
      // Se não tem perfil, redirecionar para onboarding
      window.location.href = '/onboarding'
    }
    // Simular dados
    setPoints(150)
    setStreak(5)
  }, [])

  if (!profile) return <div>Carregando...</div>

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-primary mb-8">Olá! Seu plano personalizado</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-primary/10 p-4 rounded-lg">
          <Trophy className="w-8 h-8 text-primary mb-2" />
          <h3 className="font-semibold">Pontos</h3>
          <p className="text-2xl">{points}</p>
        </div>
        <div className="bg-primary/10 p-4 rounded-lg">
          <Dumbbell className="w-8 h-8 text-primary mb-2" />
          <h3 className="font-semibold">Streak</h3>
          <p className="text-2xl">{streak} dias</p>
        </div>
        <div className="bg-primary/10 p-4 rounded-lg">
          <Utensils className="w-8 h-8 text-primary mb-2" />
          <h3 className="font-semibold">Objetivo</h3>
          <p>{profile.objective}</p>
        </div>
        <div className="bg-primary/10 p-4 rounded-lg">
          <BarChart3 className="w-8 h-8 text-primary mb-2" />
          <h3 className="font-semibold">Nível</h3>
          <p>{profile.level}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/training" className="bg-primary/10 p-6 rounded-lg hover:bg-primary/20 transition-colors">
          <Dumbbell className="w-12 h-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Treino de Hoje</h3>
          <p>Veja seu treino personalizado</p>
        </Link>
        <Link href="/nutrition" className="bg-primary/10 p-6 rounded-lg hover:bg-primary/20 transition-colors">
          <Utensils className="w-12 h-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Plano Nutricional</h3>
          <p>Receitas e sugestões</p>
        </Link>
        <Link href="/reports" className="bg-primary/10 p-6 rounded-lg hover:bg-primary/20 transition-colors">
          <BarChart3 className="w-12 h-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Relatórios</h3>
          <p>Acompanhe seu progresso</p>
        </Link>
      </div>
    </div>
  )
}