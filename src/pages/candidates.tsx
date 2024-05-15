import { useEffect, useState } from "react"
import { mockManga } from "../mock/manga/mockData"
import { shuffleCandidates } from "../lib/utils"
import { Candidate } from "../types/candidate"

export const Candidates = () => {
    const [candidate, setCandidate] = useState(mockManga)
    const [pick, setPick] = useState<Candidate[]>([])
    const [round, setRound] = useState(1)
    const [game, setGame] = useState(candidate?.length)

    useEffect(() => {
        setCandidate(shuffleCandidates(mockManga))
    }, [])

    const handleClick = (c: Candidate): void => {
        // e.preventDefault()
        setCandidate((prev) => {
            const temp = prev.splice(0, 2).map((t) => t.key)
            console.log("temp", temp)
            return prev.filter((c, i) => c.key !== temp[i])
        })
        setRound((prev) => {
            console.log(prev)
            return prev + 1
        })
        setPick((prev) => {
            console.log(prev)
            return [...prev, c]
        })
        console.log("candidate", candidate)
        console.log("pick", pick)
    }

    useEffect(() => {
        if(game === 1) {
            return;
        }

        if(candidate.length === 0) {
            setRound(1);
            setPick([])
            setCandidate(pick)
            setGame((prev) => prev / 2)
        }
    }, [round])

    return (
        <div className="game-container center flex-between flex-col gap-4">
                {
                    game === 1 ? <h1>Win!</h1> :
                        game === 2 ? <h1>決勝</h1> :
                        <h1>{game}강</h1> 
                }
                {
                    game > 2 && (
                        <h2>Round {round}</h2>
                    )
                }
                <div className="sm:flex-col sm:justify-center sm:items-center md:flex-between md:flex-row">
                    {
                        candidate.map((c, i) => {
                            if(i > 1) return
                            return (
                                <div className="image-container center" key={i}>
                                    <img src={c.imgSrc} alt={c.name} width={200} height={200} onClick={() => handleClick(c)} />
                                    <span>{ c.name }</span>
                                </div>
                            )
                        }) 
                    }
                </div>
        </div>
    )
}