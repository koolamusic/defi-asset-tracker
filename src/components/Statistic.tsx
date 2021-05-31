import { StatGroup, Stat, StatLabel, StatNumber, StatHelpText, StatArrow } from "@chakra-ui/react"
import React from "react"



export const MultiStat: React.FC = () => {
    return (
        <StatGroup>
            <Stat>
                <StatLabel>Current Balance</StatLabel>
                <StatNumber>$ 35,670</StatNumber>
                <StatHelpText>
                    <StatArrow type="increase" />
            $ 2302
            </StatHelpText>
            </Stat>

            <Stat>
                <StatLabel>Number of Assets</StatLabel>
                <StatNumber>45</StatNumber>
            </Stat>
        </StatGroup>
    )
}



export const SingleStat: React.FC = () => {
    return (
        <StatGroup>
            <Stat>
                <StatLabel>Current Balance</StatLabel>
                <StatNumber>$ 35,670</StatNumber>
                <StatHelpText>
                    <StatArrow type="increase" />
            $ 2302
            </StatHelpText>
            </Stat>
        </StatGroup>
    )
}