import { Overview } from '@/components/overview'

export default function Dashboard() {
  return (
    <div className="min-h-full container bg-background md:px-12 pt-12 pb-8">
      <div>
        <h2 className="text-3xl font-normal">Olá, Roberto Marinho!</h2>
        <Overview />
      </div>
    </div>
  )
}
