import React from 'react'
import Section from '../organisms/Section'
import Book from '../atoms/Book'
import TransAnalysisCard from '../atoms/TransAnalysisCard'
import { TransAnalysisBook, TransAnalysisInfo, TransAnalysisTitle } from '../../utilities/siteInfo'

const TransAnalysis = () => {

  return (
    <Section id="analisitransazionale">
      <div className="w-full flex flex-row flex-wrap items-center justify-center gap-24">
        {TransAnalysisInfo.map((card, idx) => (
          <TransAnalysisCard key={idx} title={card.title} content={card.content} />
        ))}
        <TransAnalysisCard
          title="Contatta lo studio"
          // noShadow
          content={
            <div className="flex flex-col items-center">
              <span className="text-black text-base mb-10">
                {TransAnalysisBook}
              </span>

              <Book />
            </div>
          }
        />
      </div>
    </Section>
  )
}

export default TransAnalysis