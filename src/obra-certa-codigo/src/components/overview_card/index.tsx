import { TrendingDown, TrendingUp } from 'lucide-react'

import { Badge } from '../ui/badge'
import { Card } from '../ui/card'

export interface OverviewCardData {
  id: string
  title: string
  value: string
  percentage: number
  type: 'trending-up' | 'trending-down'
}

interface Props {
  data: OverviewCardData
}

export const OverviewCard = ({ data }: Props) => {
  const subtitle =
    data.type === 'trending-up'
      ? `Aumento de ${data.percentage}% nesse período`
      : `Queda de ${data.percentage}% nesse período`

  const trendingIcon =
    data.type === 'trending-up' ? (
      <TrendingUp className="text-neutral-500" size={14} />
    ) : (
      <TrendingDown className="text-neutral-500" size={14} />
    )

  return (
    <Card className="bg-white rounded-xl w-full min-w-0 flex-1 p-6 gap-12 hover:shadow-2xl transition-all duration-300 ease-in-out">
      <div className="">
        <div className="flex items-center justify-between">
          <p className="text-neutral-500">{data.title}</p>

          <Badge
            className={`bg-white shadow-md min-w-[84px] items-center justify-center gap-2 transition-all ${
              data.type === 'trending-up'
                ? 'hover:bg-emerald-500/80'
                : 'hover:bg-red-500/80'
            }`}
          >
            {trendingIcon}
            <p className="text-xs text-neutral-800">
              {data.percentage > 0 ? '+' : ''}
              {data.percentage}%
            </p>
          </Badge>
        </div>

        <h3 className="text-3xl text-neutral-800 font-normal mt-2">134</h3>
      </div>

      <div className="flex mt-12">
        <p className="text-sm text-neutral-800 flex items-center gap-2">
          {subtitle}
          {trendingIcon}
        </p>
      </div>
    </Card>
  )
}
