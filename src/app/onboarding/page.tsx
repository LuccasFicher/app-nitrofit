import Link from 'next/link'

export default function Onboarding() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-3xl font-bold text-primary mb-8">Bem-vindo ao NitroFit</h1>
      <p className="text-center mb-8 max-w-md">
        Seu coach de treino inteligente. Vamos começar com algumas perguntas para personalizar seu plano.
      </p>
      <div className="space-y-4">
        <div className="bg-primary/10 p-4 rounded-lg">
          <h2 className="font-semibold">O que é o NitroFit?</h2>
          <p>Treinos personalizados, planos de nutrição e acompanhamento do seu progresso.</p>
        </div>
        <div className="bg-primary/10 p-4 rounded-lg">
          <h2 className="font-semibold">Como funciona?</h2>
          <p>Responda perguntas, receba treinos e receitas, dê feedback para ajustes.</p>
        </div>
      </div>
      <Link href="/questionnaire" className="mt-8 px-6 py-3 bg-primary text-secondary rounded-lg hover:bg-primary/80 transition-colors">
        Começar
      </Link>
    </div>
  )
}