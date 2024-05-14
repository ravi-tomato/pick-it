import { Candidate } from "../types/candidate";

export const shuffleCandidates = (candidates: Candidate[]) => {
    return candidates
            .map((candidate) => {
                return { key: candidate.key, name: candidate.name, imgSrc: candidate.imgSrc, order: Math.random() };
            })
            .sort((l, r) => {
                return l.order - r.order
            }) 
}