import { useEffect, useState } from "react"
import { mockManga } from "../mock/manga/mockData"
import { shuffleCandidates } from "../lib/utils"

export const Candidates = () => {
    const [candidate, setCandidate] = useState(mockManga)
    // const [pick, setPick] = useState([])
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [round, setRound] = useState(1)

    useEffect(() => {
        setCandidate(shuffleCandidates(mockManga))
    }, [])

    return (
        <div className="game-container center flex-between flex-col gap-4">
                <h1>Round { round }</h1>
                <div className="sm:flex-col sm:justify-center sm:items-center md:flex-between md:flex-row">
                    {
                        // window.matchMedia()
                        candidate.map((c, i) => {
                            if(i > 1) return
                            return (
                                <div className="image-container center">
                                    <img src={c.imgSrc} alt={c.name} width={200} height={200} />
                                    <span>{ c.name }</span>
                                </div>
                            )
                        }) 
                    }
                </div>
        </div>
    )
}